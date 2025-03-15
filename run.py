from app import create_app, db

# Create the Flask application
app = create_app()

# Create database tables
with app.app_context():
    db.create_all()  # This will create the tables defined in your models

if __name__ == '__main__':
    # Run the application with host binding
    app.run(host='0.0.0.0', port=5000, debug=True)