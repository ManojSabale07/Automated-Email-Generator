# Automated-Email-Generator
Mini Project
automated-email-generator/
│── app/                   # Main application package
│   ├── __init__.py        # Initializes Flask app & database
│   ├── models.py          # Defines database models (tables)
│   ├── routes.py          # Contains all Flask routes
│   ├── email_utils.py     # Helper functions for sending emails
│   ├── templates/         # HTML templates (Jinja2)
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── log.html
│   ├── static/            # Static files (CSS, JS, images)
│   │   ├── styles.css
│   │   ├── scripts.js
│
├── app.py                 # Entry point for the Flask application
├── config.py              # App configuration (DB, secret keys)
├── database.db            # SQLite database file (ignored in production)
├── run.py                 # Runs the Flask application
├── requirements.txt       # Required Python packages
├── .env                   # Stores secret keys & database URL
├── migrations/            # Database migration files (if using Flask-Migrate)
├── README.md              # Project documentation
│
└── venv/                  # Virtual environment (if using)
