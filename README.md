# CSE Department Website

A comprehensive web application with Content Management System for Computer Science and Engineering departments.

## **Overview**

This project provides a complete department website with an admin dashboard for managing faculty profiles, news, events, courses, and contact messages. It features a dual database architecture that works seamlessly with both MongoDB and in-memory storage.

## **Features**

### **Public Website**
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Faculty Directory**: Searchable faculty profiles with research areas
- **News & Events**: Dynamic content management with categorization
- **Course Catalog**: Academic course information and scheduling
- **Contact Form**: Secure contact message submission
- **Interactive Elements**: Smooth animations and user-friendly interface

### **Admin Dashboard**
- **Content Management**: Full CRUD operations for all content types
- **User Authentication**: Secure session-based admin login
- **File Upload**: Faculty image management with validation
- **Message Management**: View and manage contact submissions
- **Statistics Dashboard**: Real-time content metrics
- **Responsive Admin UI**: Modern admin interface

## **Technology Stack**

### **Backend**
- **Node.js** 18.x - JavaScript runtime
- **Express.js** 5.x - Web application framework
- **MongoDB** 6.x - NoSQL database (with Mongoose ODM)
- **Express Session** - Session management
- **Multer** - File upload handling
- **Express Validator** - Input validation
- **Helmet.js** - Security middleware
- **Bcrypt.js** - Password hashing

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript ES6+** - Interactive functionality
- **Responsive Design** - Mobile-first approach
- **Progressive Enhancement** - Works without JavaScript

### **Development Tools**
- **Nodemon** - Auto-restart development server
- **HTTP Server** - Static file serving
- **Git** - Version control

## **Project Structure**

```
FSD_vscode/
{
  "backend/": {
    "config/": ["database.js"],
    "middleware/": ["adminAuth.js", "validation.js"],
    "models/": ["Faculty.js", "News.js", "Event.js", "Course.js", "ContactMessage.js", "Admin.js"],
    "public/": ["admin-dashboard.html", "admin-login.html", "admin-profile.html"],
    "routes/": ["admin.js"],
    "utils/": ["memoryStore.js", "seedData.js"],
    "uploads/": ["faculty/"],
    ".env": "Environment variables",
    "package.json": "Backend dependencies",
    "server.js": "Main server file"
  },
  "frontend/": {
    "css/": ["styles.css"],
    "js/": ["script.js"],
    "images/": [],
    "index.html": "Main website",
    "package.json": "Frontend dependencies"
  },
  ".gitignore": "Git ignore rules",
  "README.md": "This file",
  "project_report.tex": "LaTeX report",
  "project_report_restructured.tex": "Restructured report",
  "logo.png": "College logo"
}
```

## **Installation & Setup**

### **Prerequisites**
- Node.js 18.x or higher
- npm (comes with Node.js)
- MongoDB (optional - falls back to in-memory storage)

### **Backend Setup**

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```

### **Frontend Setup (Optional)**

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start frontend server (for development)**
   ```bash
   npm start
   ```

## **Configuration**

### **Environment Variables (.env)**

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3001

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/cse-department

# Security Configuration
SESSION_SECRET=your_random_secret_change_this_in_production
ADMIN_USER=admin
ADMIN_PASS=yourpassword
ADMIN_EMAIL=admin@cse.edu
ADMIN_FIRST_NAME=Admin
ADMIN_LAST_NAME=User
```

### **Default Credentials**

- **Username**: `admin`
- **Password**: `yourpassword` (change in production)

## **Database Architecture**

### **Dual Database System**

This project features an innovative dual database architecture:

1. **MongoDB (Production)**
   - Persistent data storage
   - Full Mongoose ODM support
   - Scalable for production use

2. **In-Memory Storage (Development)**
   - Zero setup required
   - Pre-populated with sample data
   - Perfect for development and demos

### **Automatic Switching**

The system automatically detects MongoDB availability:
- **MongoDB available** -> Uses persistent database
- **MongoDB unavailable** -> Falls back to in-memory storage

## **API Documentation**

### **Authentication Endpoints**
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/check-auth` - Check authentication status

### **Content Management Endpoints**
- `GET /api/faculty` - Get faculty list
- `POST /api/faculty` - Add faculty (auth required)
- `PUT /api/faculty/:id` - Update faculty (auth required)
- `DELETE /api/faculty/:id` - Delete faculty (auth required)

- `GET /api/news` - Get news articles
- `POST /api/news` - Add news (auth required)
- `PUT /api/news/:id` - Update news (auth required)
- `DELETE /api/news/:id` - Delete news (auth required)

- `GET /api/events` - Get events
- `POST /api/events` - Add event (auth required)
- `PUT /api/events/:id` - Update event (auth required)
- `DELETE /api/events/:id` - Delete event (auth required)

- `GET /api/courses` - Get courses
- `POST /api/courses` - Add course (auth required)
- `PUT /api/courses/:id` - Update course (auth required)
- `DELETE /api/courses/:id` - Delete course (auth required)

### **Contact Endpoints**
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Get contact messages (auth required)
- `DELETE /api/contact/:id` - Delete contact message (auth required)

## **Security Features**

### **Authentication & Authorization**
- Session-based authentication
- Secure password hashing with bcrypt
- Role-based access control
- Automatic session timeout

### **Input Validation**
- Server-side validation with Express Validator
- Client-side validation for better UX
- XSS protection with Helmet.js
- File upload security with Multer

### **Environment Security**
- Environment variable configuration
- Git ignore for sensitive files
- Production-ready security headers

## **Development**

### **Running in Development Mode**

1. **Backend only (recommended)**
   ```bash
   cd backend
   npm start
   ```
   Access at: `http://localhost:5000`

2. **Frontend + Backend**
   ```bash
   # Terminal 1
   cd backend
   npm start
   
   # Terminal 2
   cd frontend
   npm start
   ```
   Frontend: `http://localhost:3001`
   Backend: `http://localhost:5000`

### **Code Structure**

- **Modular Architecture**: Separated concerns with clear module boundaries
- **Middleware Pattern**: Reusable middleware for authentication and validation
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Comprehensive logging with Morgan

## **Deployment**

### **Production Setup**

1. **Environment Configuration**
   ```env
   NODE_ENV=production
   SESSION_SECRET=your_very_long_random_secret
   ADMIN_PASS=your_strong_production_password
   ```

2. **Database Setup**
   - Configure MongoDB connection string
   - Ensure MongoDB is accessible
   - Create database indexes for performance

3. **Server Deployment**
   - Install production dependencies
   - Set up reverse proxy (nginx/Apache)
   - Configure SSL certificates
   - Set up process manager (PM2)

### **Docker Deployment**

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ .
EXPOSE 5000
CMD ["npm", "start"]
```

## **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Coding Standards**

- Use ESLint for code formatting
- Follow JavaScript ES6+ standards
- Write meaningful commit messages
- Add comments for complex logic

## **Testing**

### **Manual Testing**

1. **Functionality Testing**
   - Test all CRUD operations
   - Verify authentication flow
   - Check file upload functionality
   - Test responsive design

2. **Security Testing**
   - Test authentication bypass attempts
   - Verify input validation
   - Check session management
   - Test file upload security

### **API Testing**

Use tools like Postman or curl to test API endpoints:

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test faculty endpoint
curl http://localhost:5000/api/faculty

# Test admin login
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"yourpassword"}'
```

## **Troubleshooting**

### **Common Issues**

1. **Port Conflicts**
   - Backend uses port 5000
   - Frontend uses port 3001
   - Change ports in .env if needed

2. **Database Connection**
   - Falls back to in-memory storage if MongoDB unavailable
   - Check MongoDB connection string in .env
   - Ensure MongoDB is running

3. **Authentication Issues**
   - Verify ADMIN_USER and ADMIN_PASS in .env
   - Check session configuration
   - Clear browser cookies if needed

4. **File Upload Issues**
   - Check uploads directory permissions
   - Verify file size limits (5MB default)
   - Ensure allowed file types (images only)

### **Debug Mode**

Enable debug logging:
```bash
DEBUG=* npm start
```

## **Performance Optimization**

### **Database Optimization**
- Use database indexes for frequently queried fields
- Implement pagination for large datasets
- Use lean queries for read operations

### **Frontend Optimization**
- Lazy loading for images
- Minimize HTTP requests
- Use CSS animations instead of JavaScript where possible
- Implement caching headers

### **Server Optimization**
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching strategies
- Monitor memory usage

## **License**

This project is licensed under the ISC License.

## **Authors**

- **Jayarusha K** (523CS0019) - Backend Development
- **Saira** (123CS0043) - Frontend Development

## **Acknowledgments**

- IIITDM Kurnool - Computer Science and Engineering Department
- Open source community for the amazing tools and libraries
- Contributors and testers who helped improve this project

## **Version History**

- **v1.0.0** - Initial release with full CMS functionality
- **v1.1.0** - Added dual database architecture
- **v1.2.0** - Enhanced security features
- **v1.3.0** - Improved responsive design

---

**For support and questions, please contact the development team or create an issue in the repository.**
