import React, { useState, useEffect } from 'react';

function Plan() {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [majorData, setMajorData] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleMajorChange = (event) => {
    setSelectedMajor(event.target.value);
  };

  const handleCheckboxChange = (semesterIndex, courseIndex) => {
    const newSelectedCourses = [...selectedCourses];
    newSelectedCourses[semesterIndex][courseIndex] = !newSelectedCourses[semesterIndex][courseIndex];
    setSelectedCourses(newSelectedCourses);
  };

  useEffect(() => {
    if (selectedMajor) {
      fetch(`/api/majors/${selectedMajor}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched data:', data); // Log the fetched data
  
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
        <h1 className="mt-5">Generate your four-year plan.</h1>

        <label>Select your major: </label>
        <select value={selectedMajor} onChange={handleMajorChange}>
          <option value="">Select a Major</option>
          <option value="applied physics">Applied Physics</option>
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
