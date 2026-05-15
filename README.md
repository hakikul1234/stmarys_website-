# ST MARY'S SCHOOL - Official Website

A professional, responsive Flask-based website for ST MARY'S SCHOOL featuring admission forms, fee structure, and comprehensive school information.

## Features

✨ **Fully Responsive Design** - Mobile-first approach with beautiful layouts on all devices
📱 **Mobile Navigation** - Smooth hamburger menu for mobile devices
🎓 **Multiple Pages** - Home, About, Admission, Fee Structure, Contact
📝 **Admission Form** - Complete student and parent information collection with database storage
💾 **Database Integration** - SQLite with SQLAlchemy ORM for secure data storage
🎨 **Professional Styling** - School colors (Green, Yellow, Red, Blue) with modern CSS
⚡ **Interactive Features** - Form validation, smooth scrolling, fade-in animations
🔒 **Secure** - CSRF protection and form validation

## Project Structure

```
st-marys-school/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── .env                   # Environment configuration
├── school.db             # SQLite database (auto-created)
├── static/
│   ├── css/
│   │   └── style.css     # Main stylesheet with responsive design
│   ├── js/
│   │   └── script.js     # JavaScript for interactivity
│   └── images/           # Static images folder
└── templates/
    ├── base.html         # Base template with header and footer
    ├── index.html        # Home page
    ├── about.html        # About Us page
    ├── admission.html    # Admission form page
    ├── fee_structure.html # Fee structure page
    └── contact.html      # Contact page
```

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Step 1: Clone/Download the Project
```bash
cd st-marys-school
```

### Step 2: Create Virtual Environment (Optional but Recommended)
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Run the Application
```bash
python app.py
```

The application will start at `http://localhost:5000`

## Usage

### Pages Available
- **Home** (`/`) - Welcome page with school highlights and achievements
- **About Us** (`/about`) - School history, mission, vision, and facilities
- **Admission** (`/admission`) - Admission form for new students
- **Fee Structure** (`/fee-structure`) - Detailed fee information for all classes
- **Contact** (`/contact`) - Contact information and inquiry form

### Admission Form
The admission form collects:
- Student information (name, DOB, current class)
- Parent/Guardian details
- Contact information
- Additional message/questions

All submissions are stored in the SQLite database and can be accessed by school administrators.

## Features Explained

### Responsive Design
The website uses CSS media queries to provide optimal viewing experience on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### Color Scheme
- **Primary Green**: #1b5e20 (School brand color)
- **Primary Yellow**: #fbc02d (Accent color)
- **Primary Red**: #c62828 (Call-to-action)
- **Primary Blue**: #0d47a1 (Highlights)
- **White & Grays**: Neutral backgrounds

### JavaScript Functionality
- Mobile menu toggle with hamburger animation
- Form validation with real-time feedback
- Smooth scrolling for anchor links
- Fade-in animations on scroll
- Auto-dismissing alert messages
- Active navigation highlighting

### Database
- SQLite database for lightweight, file-based storage
- SQLAlchemy ORM for safe database operations
- Automatic table creation on first run
- All admission inquiries stored with timestamp

## Configuration

### Environment Variables
Edit `.env` file to customize:
```
FLASK_APP=app.py
FLASK_ENV=development
FLASK_DEBUG=1
```

### Database Location
The SQLite database (`school.db`) is created automatically in the project root directory.

## Customization

### School Information
Update school details in:
- `app.py` - Application configuration
- `templates/base.html` - Footer contact information
- `static/css/style.css` - Color variables (`:root` section)

### Adding Pages
1. Create new HTML template in `templates/` folder
2. Add route in `app.py`
3. Link from navigation in `base.html`

### Styling
All styles are in `static/css/style.css`. Key sections:
- Color variables at the top (`:root`)
- Typography styles
- Component styles (buttons, cards, forms)
- Responsive breakpoints at the bottom

## Troubleshooting

### Port Already in Use
If port 5000 is in use, modify in `app.py`:
```python
app.run(debug=True, port=5001)  # Use different port
```

### Database Issues
To reset the database:
```bash
# Stop the server
# Delete school.db file
# Restart the server (it will create a new database)
```

### Styling Not Loading
Clear browser cache:
- Chrome: Ctrl+Shift+Delete (Windows) / Cmd+Shift+Delete (Mac)
- Firefox: Ctrl+Shift+Delete (Windows) / Cmd+Shift+Delete (Mac)

## Security Considerations

- CSRF protection enabled for all forms
- Form validation on both client and server side
- Input sanitization through SQLAlchemy ORM
- No sensitive data stored in client-side cookies
- Environment variables for configuration

## Deployment

To deploy to production:

1. Set `FLASK_ENV=production` in `.env`
2. Set `FLASK_DEBUG=False`
3. Use a production WSGI server (Gunicorn, uWSGI)
4. Set up proper database backups
5. Configure domain and SSL certificates

Example with Gunicorn:
```bash
pip install gunicorn
gunicorn app:app
```

## Support & Maintenance

- Regular backups of `school.db`
- Monitor admission form submissions
- Update school information as needed
- Keep dependencies updated

## License

This website is developed for ST MARY'S SCHOOL and is proprietary.

## Contact

For inquiries or support regarding the website:
- Email: info@stmaryschool.edu
- Phone: +1 (234) 567-890

---

**Last Updated**: 2024
**Version**: 1.0
