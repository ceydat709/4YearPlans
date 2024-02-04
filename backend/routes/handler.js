const express = require('express');
const router = express.Router();
const path = require('path');
const majorsData = require('./majors.json');

// Endpoint to get the list of majors
router.get('/api/majors', (req, res) => {
  const majors = Object.keys(majorsData);
  res.json(majors);
});

// Endpoint to get data for a specific major
router.get('/api/majors/:major', (req, res) => {
  const { major } = req.params;
  const lowerCaseMajor = major.toLowerCase();

  if (majorsData[lowerCaseMajor]) {
    const majorData = majorsData[lowerCaseMajor].map((semesterCourses, index) => ({
      semester: index + 1,
      courses: semesterCourses,
    }));

    res.json(majorData);
  } else {
    res.status(404).json({ error: 'Major not found' });
  }
});

module.exports = router;
