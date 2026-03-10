# CSE Department Website

A modern, responsive website for the Computer Science & Engineering Department, inspired by the IIT Hyderabad AI page.

## Features

- **Modern UI Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Faculty, news, events, and courses loaded from database
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Backend API**: RESTful API with Node.js, Express, and MongoDB
- **Sample Data**: Pre-populated with realistic department information

## Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations and transitions
- **JavaScript**: Interactive features and dynamic content loading
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger

## Project Structure

```
FSD_pro1/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Node.js dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── index.html        # Main HTML file
│   ├── styles.css        # CSS styling
│   └── script.js         # JavaScript functionality
├── database/             # Database configuration
└── README.md            # Project documentation
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm (Node Package Manager)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following content:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/cse-department
```

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

### Frontend Setup

The frontend files are already created and will be served by the backend server. Simply open your browser and navigate to:
```
http://localhost:5000
```

## API Endpoints

### Faculty
- `GET /api/faculty` - Get all faculty members

### News
- `GET /api/news` - Get all news articles

### Events
- `GET /api/events` - Get all upcoming events

### Courses
- `GET /api/courses` - Get all courses

## Website Sections

### 1. Hero Section
- Eye-catching gradient background
- Animated floating cards
- Call-to-action buttons
- Smooth scroll indicator

### 2. About Section
- Department overview
- Statistics with animated counters
- Mission and vision

### 3. Academic Programs
- B.Tech CSE
- M.Tech CSE
- Ph.D. Program
- Each program features highlights and curriculum focus

### 4. Faculty Section
- Faculty profiles with specializations
- Contact information
- Professional backgrounds

### 5. Research Areas
- Artificial Intelligence
- Cybersecurity
- Cloud Computing
- Big Data Analytics
- IoT & Embedded Systems
- Virtual Reality

### 6. Events & News
- Latest department news
- Upcoming events calendar
- Workshops and seminars

### 7. Contact Section
- Department contact information
- Interactive contact form
- Location details

### 8. Footer
- Quick navigation links
- Social media links
- Contact information

## Design Features

### Visual Elements
- **Color Scheme**: Professional blue and purple gradients
- **Typography**: Clean Inter font family
- **Icons**: Font Awesome icons throughout
- **Animations**: Smooth transitions and micro-interactions

### Interactive Features
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive card animations
- **Parallax Scrolling**: Hero section depth effect
- **Loading Animations**: Content reveal on scroll

### Performance Optimizations
- **Lazy Loading**: Images and content loaded as needed
- **Optimized Animations**: CSS transforms for smooth performance
- **Responsive Images**: Properly sized for different devices
- **Minified Code**: Clean, efficient code structure

## Database Schema

### Faculty Collection
```javascript
{
  name: String,
  designation: String,
  email: String,
  specialization: [String],
  image: String,
  bio: String
}
```

### News Collection
```javascript
{
  title: String,
  content: String,
  date: Date,
  author: String,
  category: String
}
```

### Events Collection
```javascript
{
  title: String,
  description: String,
  date: Date,
  venue: String,
  speaker: String,
  type: String
}
```

### Courses Collection
```javascript
{
  name: String,
  code: String,
  credits: Number,
  semester: String,
  description: String,
  faculty: String
}
```

## Customization

### Adding Your College Information
1. Update the college name and details in `index.html`
2. Modify the contact information in the footer section
3. Update the MongoDB connection string in `.env`
4. Customize the color scheme in `styles.css`

### Adding New Content
1. Add new items to the MongoDB collections
2. The frontend will automatically display the new data
3. Modify the API endpoints if needed

## Browser Support

- Chrome (v60+)
- Firefox (v55+)
- Safari (v12+)
- Edge (v79+)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For any questions or issues, please contact:
- Email: hod.cse@college.edu
- Phone: +91 12345 67890

---

**Note**: Make sure MongoDB is running on your system before starting the backend server. The application will automatically populate the database with sample data on first run.
