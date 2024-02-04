import json

majors = {'applied physics': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403 or BIOL 2001', 'ENGL 1010', 'ENGI 1006'], 
    ['MATH 1102', 'PHYS 1402', 'ENGI 1102', 'ECON 1105', 'Tech Elective'],
    ['APMA 2000', 'PHYS 1403', 'HUMA 1001, COCI 1101, or Global Core', 'HUMA 1121 or 1123', 'Tech Elective'], 
    ['MATH 2030', 'PHYS 1494', 'HUMA 1002, COCI 1102, or Global Core', 'Tech Elective', 'Nontech Elective'], 
    ['APPH 3200', 'MSAE 3111', 'APMA 3101', 'APPH 4901', 'Tech Elective'], 
    ['APPH 3100,' 'APPH 3300', 'APMA 3102', 'Tech Elective', 'Nontech Elective'], 
    ['APPH 4300', 'APPH 4100', 'Course in first AP area', 'APPH 4903', 'Tech Elective', 'PHED 1001'], 
    ['Course in second AP area', 'APPH 4018', 'Tech Elective', 'Nontech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'applied mathematics': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403 or BIOL 2001', 'ENGL 1010', 'ENGI 1006'], 
    ['MATH 1102', 'PHYS 1402', 'ENGI 1102', 'ECON 1105', 'Tech Elective'], 
    ['APMA 2000', 'PHYS 1403', 'HUMA 1001, COCI 1101, or Global Core', 'HUMA 1121 or 1123', 'Tech Elective'], 
    ['MATH 2030', 'PHYS 1494', 'HUMA 1002, COCI 1102, or Global Core', 'Tech Elective', 'Nontech Elective'], 
    ['APMA 3101', 'APMA 4204', 'APMA 4300', 'APMA 4901', 'Nontech Elective'], 
    ['APMA 3102', 'APMA 4101', 'Course from Group A', 'Tech Elective', 'Nontech Elective'], 
    ['MATH 4061', 'APMA 4903', 'Course from Group B', 'Tech Elective', 'Tech Elective', 'PHED 1001'],
    ['APMA 3900', 'Course designated MATH, APMA, or STAT', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'biomedical engineering': [
    
    ['MATH 1102', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['APMA 2000', 'PHYS 1402', 'CHEM 1404', 'CHEM 1500', 'ENGI 1102'], 
    ['PHYS 1403', 'HUMA 1002, COCI 1102, or Global Core', 'ELEN 1201', 'BIOL 2005', 'HUMA 1121 or 1123'],
    ['APMA 2101', 'BIOL 2006','HUMA 1002, COCI 1102, or Global Core', 'ECON 1105', 'Tech Elective'], 
    ['BMEN 3010', 'BMEN 3810', 'BMEN 4001', 'BMEN 4110', 'Nontech Elective'], 
    ['BMEN 3020', 'BMEN 3820', 'BMEN 4002', 'Tech Elective', 'Nontech Elective'], 
    ['BMEN 3910', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1001'],
    ['BMEN 3920', 'Tech Elective', 'Tech Elective', 'Tech Elective', 'PHED 1002'],
    
    ],
        'chemical engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'CHEN 1000'],
    ['MATH 1102', 'PHYS 1402', 'CHEM 1404', 'ENGI 1102', 'ENGI 1006'], 
    ['APMA 2000', 'PHYS 1494', 'CHEM 2443', 'CHEN 2100', 'HUMA 1002, COCI 1102, or Global Core'],
    ['MATH 2030 or APMA 2101', 'HUMA 1002, COCI 1102, or Global Core', 'CHEN 3020', 'Nontech Elective', 'Nontech Elective'], 
    ['CHEN 3110', 'CHEE 3010', 'Adv. Natural Science Lab', 'Nontech Elective', 'Tech Elective'], 
    ['MATH Elective', 'CHEN 3230', 'Nontech Elective', 'Tech Elective', 'Tech Elective'], 
    ['CHEN 4500', 'CHEE 4140', 'CHEN 4300', 'Nontech Elective', 'Tech Elective','PHED 1001'],
    ['CHEN 3810', 'Tech Elective' 'Tech Elective', 'Tech Elective', 'PHED 1002'],
    
    ]
,
        'civil engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'EESC 1011'],
    ['MATH 1102', 'PHYS 1402', 'CIEN 3000', 'ENGI 1102', 'ENGI 1006'],
    ['APMA 2000', 'PHYS 1494', 'HUMA 1002, COCI 1102, or Global Core', 'HUMA 1121 or 1123', 'ENME 3105'],
    ['APMA 2101', 'CIEE 3260', 'HUMA 1002, COCI 1102, or Global Core', 'ECON 1105', 'Nontech Elective'], 
    ['ENME 3113', 'ENME 3161', 'Tech Elective', 'Tech Elective', 'Nontech Elective'], 
    ['CIEN 3125', 'CIEN 3126', 'CIEN 3141', 'ENME 3114', 'CIEN 3121', 'EACE 3250'], 
    ['CIEE 3111', 'CIEN 3129', 'CIEN 4133', 'CIEN 3127 or CIEN 4241', 'Tech Elective', 'PHED 1001'],
    ['CIEN 3128', 'CIEN 4131', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ]
,
        'computer science': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'ENGI 1102', 'ECON 1105', 'COMS 1004'], 
    ['APMA 2000', 'PHYS 1494', 'HUMA 1002, COCI 1102, or Global Core', 'COMS 3134', 'COMS 3203'],
    ['HUMA 1002, COCI 1102, or Global Core', 'HUMA 1121 or 1123', 'COMS 3157', 'MATH 2015'], 
    ['CSEE 3827', 'COMS 3261', 'Tech Elective', 'Tech Elective'], 
    ['Nontech Elective', 'Tech Elective', 'Tech Elective', 'Tech Elective', 'Tech Elective'], 
    ['Nontech Elective', 'Nontech Elective', 'Tech Elective', 'Tech Elective', 'Tech Elective', 'PHED 1001'],
    ['Tech Elective', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'earth and environmental engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'CHEM 1404', 'CHEM 1500', 'ENGI 1102', 'HUMA 1002, COCI 1102, or Global Core'], 
    ['APMA 2000', 'PHYS 1403', 'HUMA 1002, COCI 1102, or Global Core', 'EESC 4001', 'EEAE 2100'],
    ['APMA 2101', 'MATH 2030', 'CIEE 4252', 'ECON 1105', 'HUMA 1121 or 1123', 'STAT 4001'], 
    ['EAEE 3103', 'EAEE 3200', 'CHEE 3010', 'Tech Elective', 'Nontech Elective'], 
    ['EAEE 4003', 'EACE 3250', 'EAEE 3800', 'EAEE 3901', 'Tech Elective'], 
    ['EAEE 3998', 'EAEE 4160', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'Nontech Elective', 'PHED 1001'],
    ['EACE 3255', 'EAEE 3999', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'electrical engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'ELEN 1201', 'ENGI 1102', 'ECON 1105'],
    ['APMA 2000', 'ELEN 3201', 'ELEN 3801', 'ELEN 3081', 'ELEN 3084'],
    ['APMA 2101', 'ELEN 3331', 'CSEE 3827', 'ELEN 3083', 'ELEN 3082', 'Nontech Elective'], 
    ['PHYS 1403', 'ELEN 3106', 'IEOR 3658', 'HUMA 1002, COCI 1102, or Global Core', 'HUMA 1121 or 1123', 'Tech Elective'], 
    ['PHYS 1494', 'ELEN 3401', 'ELEN 3701', 'COMS 3136', 'HUMA 1002, COCI 1102, or Global Core', 'Tech Elective'], 
    ['ELEN 3043', 'ELEN 3399', 'PHED 1001', 'Tech Elective', 'Tech Elective', 'PHED 1001'],
    ['ELEN 3390', 'PHED 1002', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'industrial engineering and operations research': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ECON 1105'],
    ['MATH 1102', 'PHYS 1402', 'ENGI 1102', 'ECON 1105', 'Nontech Elective'],
    ['APMA 2000', 'PHYS 1494', 'HUMA 1002, COCI 1102, or Global Core', 'HUMA 1121 or 1123', 'COMS 1004'],
    ['MATH 2010', 'IEOR 3658', 'HUMA 1002, COCI 1102, or Global Core', 'COMS 3134', 'Nontech Elective'], 
    ['IEOR 3106', 'IEOR 3608', 'IEOR 4307', 'COMS 4113', 'Nontech Elective', 'Nontech Elective'], 
    ['IEOR 3402', 'IEOR 3404', 'IEOR 3609', 'IEOR 4412', 'Nontech Elective', 'Nontech Elective'], 
    ['IEOR 4003', 'IEOR 4207', 'IEOR 4650', 'Tech Elective', 'Tech Elective', 'Nontech Elective'],
    ['IEOR 4405', 'IEOR 4510', 'Tech Elective', 'Nontech Elective', 'Nontech Elective'],
    
    ],
        'mechanical engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'CHEM 1500', 'ECON 1105', 'ENGI 1102'], 
    ['PHYS 1403', 'APMA 2000', 'ORCA 2500', 'HUMA 1002, COCI 1102, or Global Core', 'HUMA 1121 or 1123'],
    ['APMA 2101', 'HUMA 1002, COCI 1102, or Global Core', 'MATH 2030', 'ENME 3105'], 
    ['MECE 3018', 'MECE 3100', 'MECE 3301', 'MECE 3408', 'MECE 3414', 'MECE 1008'], 
    ['MECE 3028', 'ENME 3106', 'MECE 3311', 'MECE 3610', 'ELEN 1201', 'Tech Elective'], 
    ['MECE 3409', 'MECE 3420', 'Tech Elective', 'Nontech Elective', 'Nontech Elective', 'PHED 1001'],
    ['MECE 3430', 'EEME 3601', 'Tech Elective', 'Nontech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'computer engineering': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'ELEN 1201', 'ENGI 1102', 'COMS 1004', 'HUMA 1121 or 1123'], 
    ['PHYS 1494', 'APMA 2000', 'ELEN 3801', 'ELEN 3084', 'HUMA 1002, COCI 1102, or Global Core', 'ECON 1105'],
    ['APMA 2101', 'COMS 3134', 'CSEE 3827', 'ELEN 3082', 'COMS 3203', 'HUMA 1002, COCI 1102, or Global Core'], 
    ['IEOR 3658', 'COMS 3157', 'ELEN 3201', 'ELEN 3081', 'Tech Elective'], 
    ['ELEN 3331', 'COMS 3261', 'CSEE 4119', 'ELEN 3083', 'Nontech Elective'], 
    ['EECS 4321', 'COMS 4118', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'PHED 1001'],
    ['CSEE 4823', 'Tech Elective', 'Tech Elective', 'Nontech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        'materials science': [
    
    ['MATH 1101', 'PHYS 1401', 'CHEM 1403', 'ENGL 1010', 'ENGI 1006'],
    ['MATH 1102', 'PHYS 1402', 'PHYS 1493', 'ENGI 1102', 'HUMA 1002, COCI 1102, or Global Core', 'Nontech Elective'], 
    ['APMA 2000', 'PHYS 1403', 'HUMA 1121 or 1123', 'ECON 1105', 'MSAE 3010', 'Nontech Elective'],
    ['APMA 2101', 'HUMA 1002, COCI 1102, or Global Core', 'Tech Elective', 'Nontech Elective'], 
    ['MSAE 3012', 'MSAE 3100', 'MSAE 4102', 'Tech Elective', 'Tech Elective'], 
    ['MSAE 3013', 'MSAE 3201', 'MSAE 4250', 'Tech Elective', 'Tech Elective'], 
    ['MSAE 3156', 'MSAE 4200', 'MSAE 4206', 'Tech Elective', 'Nontech Elective', 'PHED 1001'],
    ['MSAE 3157', 'MSAE 4202', 'MSAE 4215', 'Tech Elective', 'Nontech Elective', 'PHED 1002'],
    
    ],
        }