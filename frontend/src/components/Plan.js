import React, { useState, useEffect } from 'react';
import planner from '/Users/ceydatopcu/Desktop/4YearPlans/frontend/src/components/_dreamwitch666-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file
import './LoginSignup/LoginSignup.css';

function Plan() {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [majorData, setMajorData] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const handleCheckboxChange = (semesterIndex, courseIndex) => {
    const newSelectedCourses = [...selectedCourses];
    newSelectedCourses[semesterIndex][courseIndex] = !newSelectedCourses[semesterIndex][courseIndex];
    setSelectedCourses(newSelectedCourses);
  };

  const handleResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      const text = await response.text();
      console.warn('Non-JSON response:', JSON.stringify(text));
      return text; // or handle as needed
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        major: selectedMajor,
        courses: selectedCourses,
      };

      // Send form data and checkbox data to the backend API
      const [formDataResponse, checkboxDataResponse] = await Promise.all([
        fetch('/api/submitFormData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then(handleResponse),
        Promise.all(selectedCourses.map((semesterCourses, semesterIndex) =>
          Promise.all(semesterCourses.map((selected, courseIndex) => {
            const course = majorData[semesterIndex].courses[courseIndex];
            return fetch('/api/storeCheckboxData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                major: selectedMajor,
                semester: semesterIndex + 1,
                course,
                selected,
              }),
            }).then(handleResponse);
          }))
        )),
      ]);

      // Process responses
      console.log('Form data submitted successfully:', formDataResponse);

      const checkboxDataResults = await Promise.all(checkboxDataResponse);
      console.log('Checkbox data stored successfully:', checkboxDataResults);

      // Set formSubmitted to true after successful submissions
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    if (selectedMajor) {
      fetch(`/api/majors/${selectedMajor}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data:', data);

          // Initialize selected courses array
          const initialSelectedCourses = data.map(() => []);
          setSelectedCourses(initialSelectedCourses);

          setMajorData(data);

          // Log semesterCourses for each semester to the console
          data.forEach((semesterCourses, semesterIndex) => {
            console.log(`Semester ${semesterIndex + 1} courses:`, semesterCourses);
          });
        })
        .catch((error) => console.error('Error fetching major data:', error));
    }
  }, [selectedMajor]);

  return (
    <section>
      <div className="container-fluid">
      <hr></hr>
      <h2 id="generate">Generate your </h2>
      <h2 id="generate">four-year plan...</h2>
        <img src={planner} width="250px" height="250px"/>
        <label id = "selection">Select your major: </label>
        <select
          value={selectedMajor}
          onChange={handleMajorChange}
          disabled={formSubmitted}
        >
          <option value="" style={{ color: 'blue' }}>Select a Major</option>
          <option value="applied physics" >Applied Physics</option>
          <option value="applied mathematics">Applied Mathematics</option>
          <option value="biomedical engineering">Biomedical Engineering</option>
          <option value="chemical engineering">Chemical Engineering</option>
          <option value="civil engineering">Civil Engineering</option>
          <option value="computer science">Computer Science</option>
          <option value="earth and environmental engineering">Earth and Environmental Engineering</option>
          <option value="electrical engineering">Electrical Engineering</option>
          <option value="industrial engineering and operations research">Industrial Engineering and Operations Research</option>
          <option value="mechanical engineering">Mechanical Engineering</option>
          <option value="computer engineering">Computer Engineering</option>
          <option value="materials science">Materials Science</option>
        </select>

        <button
          
          type="submit"
          className="btn btn-success w-100 rounded-0"
          id = "gyal"
          onClick={handleSubmit}
          disabled={formSubmitted}
        >
          {formSubmitted ? 'Submitted' : 'Submit'}
        </button>

        {formSubmitted && (
          <div>
            <p>Form submitted successfully!</p>
            {/* Add any additional feedback or redirection logic here */}
          </div>
        )}

        {majorData && (
          <div>
            {majorData.map((semesterData) => (
              <div key={semesterData.semester}>
                <p>Semester {semesterData.semester}:</p>
                {semesterData.courses.map((course, courseIndex) => (
                  <div key={courseIndex}>
                    <input
                      type="checkbox"
                      id={`checkbox-${semesterData.semester}-${courseIndex}`}
                      checked={selectedCourses[semesterData.semester - 1][courseIndex] || false}
                      onChange={() => handleCheckboxChange(semesterData.semester - 1, courseIndex)}
                      disabled={formSubmitted}
                    />
                    <label htmlFor={`checkbox-${semesterData.semester}-${courseIndex}`}>{course}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Plan;