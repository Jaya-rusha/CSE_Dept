const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample data (without MongoDB for now)
const facultyData = [
    {
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        email: "rajesh.kumar@csecollege.edu",
        specialization: ["Artificial Intelligence", "Machine Learning", "Data Science"],
        image: "/images/faculty1.jpg",
        bio: "Dr. Rajesh Kumar has over 20 years of experience in AI and ML research."
    },
    {
        name: "Dr. Priya Sharma",
        designation: "Associate Professor",
        email: "priya.sharma@csecollege.edu",
        specialization: ["Cybersecurity", "Network Security", "Cryptography"],
        image: "/images/faculty2.jpg",
        bio: "Dr. Priya Sharma specializes in cybersecurity and has published 50+ research papers."
    },
    {
        name: "Dr. Amit Patel",
        designation: "Assistant Professor",
        email: "amit.patel@csecollege.edu",
        specialization: ["Cloud Computing", "Distributed Systems", "IoT"],
        image: "/images/faculty3.jpg",
        bio: "Dr. Amit Patel works on cloud computing and distributed systems research."
    }
];

const newsData = [
    {
        title: "CSE Department Wins National Tech Innovation Award",
        content: "Our department has been recognized for outstanding contributions to technology innovation and research excellence.",
        date: new Date('2024-03-01'),
        author: "Department Admin",
        category: "Achievements"
    },
    {
        title: "New AI Lab Inaugurated",
        content: "State-of-the-art AI laboratory with advanced computing resources inaugurated by the college principal.",
        date: new Date('2024-02-28'),
        author: "Department Admin",
        category: "Infrastructure"
    },
    {
        title: "Faculty Recruitment Open",
        content: "Applications invited for Assistant Professor positions in Computer Science and Engineering.",
        date: new Date('2024-02-25'),
        author: "HR Department",
        category: "Recruitment"
    }
];

const eventsData = [
    {
        title: "AI Workshop: Deep Learning Fundamentals",
        description: "Hands-on workshop covering the fundamentals of deep learning and neural networks.",
        date: new Date('2024-03-15'),
        venue: "Computer Lab 301",
        speaker: "Dr. Rajesh Kumar",
        type: "Workshop"
    },
    {
        title: "Tech Talk: Future of Quantum Computing",
        description: "Expert talk on the emerging field of quantum computing and its applications.",
        date: new Date('2024-03-20'),
        venue: "Auditorium",
        speaker: "Industry Expert",
        type: "Seminar"
    },
    {
        title: "Hackathon 2024",
        description: "24-hour coding competition to solve real-world problems.",
        date: new Date('2024-04-01'),
        venue: "Innovation Center",
        speaker: "Multiple",
        type: "Competition"
    }
];

const coursesData = [
    {
        name: "Data Structures and Algorithms",
        code: "CS201",
        credits: 4,
        semester: "Fall",
        description: "Fundamental concepts of data structures and algorithm design.",
        faculty: "Dr. Rajesh Kumar"
    },
    {
        name: "Artificial Intelligence",
        code: "CS301",
        credits: 3,
        semester: "Spring",
        description: "Introduction to AI concepts, machine learning, and neural networks.",
        faculty: "Dr. Rajesh Kumar"
    },
    {
        name: "Cybersecurity",
        code: "CS302",
        credits: 3,
        semester: "Spring",
        description: "Fundamentals of cybersecurity, network security, and ethical hacking.",
        faculty: "Dr. Priya Sharma"
    },
    {
        name: "Cloud Computing",
        code: "CS303",
        credits: 3,
        semester: "Fall",
        description: "Cloud architecture, services, and deployment models.",
        faculty: "Dr. Amit Patel"
    }
];

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../frontend') });
});

// API Routes
app.get('/api/faculty', (req, res) => {
    res.json(facultyData);
});

app.get('/api/news', (req, res) => {
    res.json(newsData);
});

app.get('/api/events', (req, res) => {
    res.json(eventsData);
});

app.get('/api/courses', (req, res) => {
    res.json(coursesData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} to view the website`);
});
