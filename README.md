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


Automated Email Generator (AI + Gmail API)

An automated email generation and sending system built using Python, Generative AI, and the Gmail API.
The tool converts user prompts into well-structured emails, sends them automatically through the Gmail API, and logs every email in a local database.

🧩 Project Overview

This project automates the full workflow of email creation and delivery.
Instead of manually drafting and sending emails, the system:

Accepts a prompt or event trigger

Generates a polished, professional email using an AI model

Sends the email via Gmail API

Logs the details (recipient, timestamp, subject, content) into SQLite

Runs automatically via scheduled scripts

This is designed as a smart productivity tool for repetitive communication tasks.

⚙️ Features

AI-Generated Emails
Converts simple instructions into structured, formal emails using a generative AI model.

Gmail API Integration
Sends emails programmatically using secure Gmail OAuth credentials.

Event-Triggered Sending
Automatically sends emails based on user-defined triggers or scheduled intervals.

Email Logging with SQLite
Stores email metadata and message logs for transparency and auditability.

Minimal Frontend (Optional)
A simple HTML/CSS interface for entering prompts and triggering email generation.

Fully Automated Pipeline
From prompt → generation → sending → logging — no manual intervention required.

🛠️ Tech Stack

Languages: Python
APIs: Gmail API
Database: SQLite
Frontend (Optional): HTML, CSS
AI: Generative AI Model (Gemini API)
Tools: OAuth2.0, Scheduler/Cron/Task Scheduler
