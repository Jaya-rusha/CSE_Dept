// Maps JavaScript Functionality

// Map switching functionality
function showMap(mapId) {
    // Hide all map panels
    const panels = document.querySelectorAll('.map-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.map-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected map panel
    const selectedPanel = document.getElementById(mapId);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
    }
    
    // Add active class to clicked tab
    const clickedTab = event.target;
    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

// Floor switching functionality for CSE Block
function showFloor(floor) {
    const floorMap = document.getElementById('cse-floor-map');
    if (!floorMap) return;
    
    // Update map image based on floor
    const floorImages = {
        'ground': 'https://via.placeholder.com/800x600/f8fafc/1e293b?text=CSE+Block+Ground+Floor+Layout',
        'first': 'https://via.placeholder.com/800x600/f8fafc/1e293b?text=CSE+Block+First+Floor+Layout',
        'second': 'https://via.placeholder.com/800x600/f8fafc/1e293b?text=CSE+Block+Second+Floor+Layout'
    };
    
    floorMap.src = floorImages[floor] || floorImages['ground'];
    
    // Update room markers based on floor
    updateRoomMarkers(floor);
    
    // Remove active class from all floor buttons
    const floorBtns = document.querySelectorAll('.floor-btn');
    floorBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    const clickedBtn = event.target;
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
}

// Update room markers based on floor
function updateRoomMarkers(floor) {
    const roomData = {
        'ground': [
            { room: 'Computer Lab 1', x: 20, y: 25, label: 'Lab 1' },
            { room: 'Computer Lab 2', x: 40, y: 25, label: 'Lab 2' },
            { room: 'AI Lab', x: 60, y: 25, label: 'AI Lab' },
            { room: 'Classroom 101', x: 20, y: 60, label: 'CR-101' },
            { room: 'Classroom 102', x: 40, y: 60, label: 'CR-102' },
            { room: 'Seminar Hall', x: 60, y: 60, label: 'Seminar' },
            { room: 'Faculty Room', x: 80, y: 40, label: 'Faculty' }
        ],
        'first': [
            { room: 'Database Lab', x: 20, y: 25, label: 'DB Lab' },
            { room: 'Network Lab', x: 40, y: 25, label: 'Net Lab' },
            { room: 'IoT Lab', x: 60, y: 25, label: 'IoT Lab' },
            { room: 'Classroom 201', x: 20, y: 60, label: 'CR-201' },
            { room: 'Classroom 202', x: 40, y: 60, label: 'CR-202' },
            { room: 'Conference Room', x: 60, y: 60, label: 'Conf' },
            { room: 'Department Office', x: 80, y: 40, label: 'Office' }
        ],
        'second': [
            { room: 'Research Lab', x: 20, y: 25, label: 'Research' },
            { room: 'Project Lab', x: 40, y: 25, label: 'Project' },
            { room: 'Innovation Lab', x: 60, y: 25, label: 'Innovation' },
            { room: 'Classroom 301', x: 20, y: 60, label: 'CR-301' },
            { room: 'Classroom 302', x: 40, y: 60, label: 'CR-302' },
            { room: 'Auditorium', x: 60, y: 60, label: 'Auditorium' },
            { room: 'Faculty Lounge', x: 80, y: 40, label: 'Lounge' }
        ]
    };
    
    const cseBlockPanel = document.getElementById('cse-block');
    if (!cseBlockPanel) return;
    
    // Remove existing room markers
    const existingMarkers = cseBlockPanel.querySelectorAll('.room-marker');
    existingMarkers.forEach(marker => marker.remove());
    
    // Add new room markers for the selected floor
    const mapContainer = cseBlockPanel.querySelector('.map-image-container');
    if (!mapContainer) return;
    
    const rooms = roomData[floor] || roomData['ground'];
    rooms.forEach(room => {
        const marker = document.createElement('div');
        marker.className = 'room-marker';
        marker.style.left = room.x + '%';
        marker.style.top = room.y + '%';
        marker.setAttribute('data-room', room.room);
        marker.setAttribute('data-floor', floor);
        marker.onclick = () => showRoomInfo(room.room, floor);
        
        marker.innerHTML = `
            <div class="room-dot"></div>
            <div class="room-label">${room.label}</div>
        `;
        
        mapContainer.appendChild(marker);
    });
}

// Search functionality
function searchMap() {
    const searchInput = document.getElementById('mapSearch');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Search through all markers
    const markers = document.querySelectorAll('.map-marker, .room-marker');
    let found = false;
    
    markers.forEach(marker => {
        const roomName = marker.getAttribute('data-room');
        if (roomName && roomName.toLowerCase().includes(searchTerm)) {
            // Highlight the found marker
            marker.classList.add('highlight');
            marker.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Show room info
            const roomType = marker.getAttribute('data-floor') || marker.getAttribute('data-type');
            showRoomInfo(roomName, roomType);
            
            found = true;
            
            // Remove highlight after 3 seconds
            setTimeout(() => {
                marker.classList.remove('highlight');
            }, 3000);
        }
    });
    
    if (!found) {
        alert('No location found matching: ' + searchTerm);
    }
}

// Show room information
function showRoomInfo(roomName, roomType) {
    const mapInfo = document.getElementById('mapInfo');
    if (!mapInfo) return;
    
    const roomDetails = {
        'Computer Lab 1': {
            description: 'Main computer programming laboratory with 60 high-performance systems',
            features: ['60 Systems', 'High-Speed Internet', 'Development Tools', 'AC'],
            capacity: '60 students',
            floor: 'Ground Floor'
        },
        'AI Lab': {
            description: 'Artificial Intelligence laboratory with GPU systems and ML frameworks',
            features: ['GPU Systems', 'AI Frameworks', 'ML Tools', 'Research Equipment'],
            capacity: '30 students',
            floor: 'Ground Floor'
        },
        'Classroom 101': {
            description: 'Smart classroom with interactive whiteboard and audio-visual systems',
            features: ['Smart Board', 'Projector', 'Audio System', 'AC'],
            capacity: '60 students',
            floor: 'Ground Floor'
        },
        'Seminar Hall': {
            description: 'Large seminar hall for presentations and departmental events',
            features: ['Audio System', 'Video Conferencing', 'Presentation Tools', 'AC'],
            capacity: '150 students',
            floor: 'Ground Floor'
        },
        'CSE Block': {
            description: 'Main Computer Science and Engineering department building',
            features: ['3 Floors', '15 Labs', '25 Classrooms', 'Faculty Offices'],
            capacity: '500+ students',
            floor: 'Main Building'
        }
    };
    
    const details = roomDetails[roomName] || {
        description: `${roomName} - ${roomType} facility`,
        features: ['Modern Equipment', 'Well-equipped', 'AC', 'High-Speed Internet'],
        capacity: 'Varies',
        floor: roomType || 'Unknown'
    };
    
    mapInfo.innerHTML = `
        <div class="room-info-card">
            <h5>${roomName}</h5>
            <p><strong>Description:</strong> ${details.description}</p>
            <p><strong>Floor:</strong> ${details.floor}</p>
            <p><strong>Capacity:</strong> ${details.capacity}</p>
            <div class="room-features">
                <strong>Features:</strong>
                <ul>
                    ${details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="room-actions">
                <button onclick="getDirections('${roomName}')"><i class="fas fa-directions"></i> Get Directions</button>
                <button onclick="viewSchedule('${roomName}')"><i class="fas fa-calendar"></i> View Schedule</button>
            </div>
        </div>
    `;
}

// Map tools functionality
function zoomIn() {
    const activeMap = document.querySelector('.map-panel.active .map-image');
    if (activeMap) {
        const currentScale = activeMap.style.transform ? 
            parseFloat(activeMap.style.transform.replace('scale(', '').replace(')', '')) : 1;
        const newScale = Math.min(currentScale + 0.2, 3);
        activeMap.style.transform = `scale(${newScale})`;
        activeMap.style.transformOrigin = 'center center';
    }
}

function zoomOut() {
    const activeMap = document.querySelector('.map-panel.active .map-image');
    if (activeMap) {
        const currentScale = activeMap.style.transform ? 
            parseFloat(activeMap.style.transform.replace('scale(', '').replace(')', '')) : 1;
        const newScale = Math.max(currentScale - 0.2, 0.5);
        activeMap.style.transform = `scale(${newScale})`;
        activeMap.style.transformOrigin = 'center center';
    }
}

function resetMap() {
    const activeMap = document.querySelector('.map-panel.active .map-image');
    if (activeMap) {
        activeMap.style.transform = 'scale(1)';
        activeMap.style.transformOrigin = 'center center';
    }
    
    // Clear search
    const searchInput = document.getElementById('mapSearch');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Clear map info
    const mapInfo = document.getElementById('mapInfo');
    if (mapInfo) {
        mapInfo.innerHTML = '<p>Click on any marker to view detailed information about that location.</p>';
    }
}

function downloadMap() {
    const activeMap = document.querySelector('.map-panel.active .map-image');
    if (activeMap) {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = activeMap.src;
        link.download = 'iiitdm-kurnool-campus-map.png';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Additional utility functions
function getDirections(roomName) {
    alert(`Directions to ${roomName}:\n\n1. Enter through the main gate\n2. Proceed to the CSE Block\n3. ${roomName} is located on the appropriate floor\n\nFor detailed directions, please contact the department office.`);
}

function viewSchedule(roomName) {
    alert(`Schedule for ${roomName}:\n\nToday:\n- 9:00-10:30: Class in session\n- 11:00-12:30: Available\n- 2:00-3:30: Lab session\n- 4:00-5:30: Available\n\nFor complete schedule, check the academic calendar.`);
}

// Initialize map interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click events to all markers
    const markers = document.querySelectorAll('.map-marker, .room-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const roomName = this.getAttribute('data-room');
            const roomType = this.getAttribute('data-floor') || this.getAttribute('data-type');
            showRoomInfo(roomName, roomType);
        });
    });
    
    // Add search on Enter key
    const searchInput = document.getElementById('mapSearch');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchMap();
            }
        });
    }
    
    // Initialize with ground floor markers
    updateRoomMarkers('ground');
});

// Add CSS for highlight effect
const style = document.createElement('style');
style.textContent = `
    .room-marker.highlight .room-dot {
        background: #ef4444;
        animation: highlight-pulse 1s infinite;
    }
    
    @keyframes highlight-pulse {
        0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
        100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
    }
    
    .room-info-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
    }
    
    .room-info-card h5 {
        color: #2563eb;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .room-info-card p {
        margin-bottom: 0.8rem;
        color: #64748b;
    }
    
    .room-features ul {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
        color: #64748b;
    }
    
    .room-features li {
        margin-bottom: 0.3rem;
    }
    
    .room-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .room-actions button {
        padding: 0.5rem 1rem;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.85rem;
        transition: all 0.3s ease;
    }
    
    .room-actions button:hover {
        background: #1d4ed8;
    }
`;
document.head.appendChild(style);
