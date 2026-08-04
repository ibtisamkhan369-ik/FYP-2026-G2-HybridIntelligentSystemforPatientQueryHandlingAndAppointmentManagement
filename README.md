# Hybrid Intelligent System for Patient Query Handling and Appointment Management

A web-based healthcare application developed as a **Bachelor of Science in Computer Science (BSCS) Final Year Project**. The system enables patients to register, securely log in, submit medical queries, receive department recommendations using a rule-based recommendation engine, and book appointments through a user-friendly web interface.

---

# Project Information

**Project Title:**  
Hybrid Intelligent System for Patient Query Handling and Appointment Management

**Academic Program:**  
Bachelor of Science in Computer Science (BSCS)

**Academic Year:**  
2026

**Supervisor:**  
Dr. Mujeeb

**Co-Supervisor:**  
Syeda Madiha Zaidi

---

# Team Members

| Name | Registration Number |
|------|----------------------|
| Ibtisam Saleem | BSCS01001 |
| Faryal Israr | BSCS01002 |

---

# Project Overview

The Hybrid Intelligent System for Patient Query Handling and Appointment Management is designed to improve hospital services by providing patients with an online platform to manage healthcare services efficiently.

The system allows patients to register, log in securely, submit health-related queries, receive department recommendations through a rule-based recommendation engine, and book appointments with the recommended department.

The current implementation represents the Minimum Viable Product (MVP) developed for **Checkpoint-2**. Future versions of the system will integrate Artificial Intelligence (AI), Natural Language Processing (NLP), Speech-to-Text, and Text-to-Speech technologies to further enhance patient interaction.

---

# Project Objectives

- Develop a secure web-based healthcare management system.
- Enable patients to register and authenticate securely.
- Allow patients to submit medical queries online.
- Recommend the appropriate hospital department based on patient symptoms.
- Enable online appointment booking.
- Improve hospital appointment management.
- Provide a responsive and user-friendly interface.
- Build a scalable architecture for future AI/NLP integration.

---

# Project Milestones

## Checkpoint-1

The following deliverables were completed during Checkpoint-1:

- Software Requirements Specification (SRS)
- Literature Review
- Existing Solutions Analysis
- High-Level Architecture
- Risk Analysis
- Initial Project Plan
- GitHub Repository Setup

---

## Checkpoint-2

The following deliverables were completed during Checkpoint-2:

- Backend Development
- Frontend Development
- MySQL Database Design
- JWT Authentication
- Role-Based Authorization
- Patient Dashboard
- Patient Query Module
- Rule-Based Department Recommendation
- Appointment Booking Module
- My Appointments Module
- UML Diagrams
- Updated System Architecture
- Functional MVP Demonstration

---

# Implemented Features

- Patient Registration
- Patient Login
- Secure Password Hashing using bcrypt
- JWT Authentication
- Role-Based Authorization
- Protected Routes
- Patient Dashboard
- Patient Query Submission
- Rule-Based Department Recommendation
- Appointment Booking
- My Appointments
- Responsive User Interface

---

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- JSON Web Token (JWT)

## Development Tools

- Visual Studio Code
- MySQL Workbench
- Postman
- GitHub

---

# System Workflow

```text
Patient Registration
        ↓
Patient Login
        ↓
Patient Dashboard
        ↓
Submit Patient Query
        ↓
Rule-Based Department Recommendation
        ↓
Book Appointment
        ↓
My Appointments
```

---

# Project Structure

```text
Hybrid Intelligent System for Patient Query Handling and Appointment Management

│
├── Backend
├── Frontend
├── Database
├── Documentation
├── UML_Diagrams
├── Screenshots
├── README.md
```

---

# UML Diagrams

The project documentation contains the following UML and design diagrams:

- Entity Relationship Diagram (ERD)
- System Context Diagram
- Use Case Diagram
- Class Diagram
- Sequence Diagram – Patient Query Handling
- Sequence Diagram – Appointment Scheduling
- Activity Diagram
- Component Diagram
- Deployment Diagram
- User Interface Wireframes
- Updated System Architecture Diagram

---

# Database

The project uses **MySQL** as the database management system.

The database stores:

- User Information
- Patient Queries
- Department Recommendations
- Appointment Details

The SQL database script is available in the **Database** folder.

---

# Security Features

- Password Hashing using bcrypt
- JSON Web Token (JWT) Authentication
- Protected API Routes
- Role-Based Access Control
- Secure Login Sessions

---

# Repository Contents

This repository includes:

- Backend Source Code
- Frontend Source Code
- Database Script
- Documentation
- UML Diagrams
- Application Screenshots

---

# Future Enhancements

The following features are planned for future versions of the project:

- Artificial Intelligence (AI) Integration
- Natural Language Processing (NLP)
- Speech-to-Text
- Text-to-Speech
- WhatsApp Integration
- Email Notifications
- SMS Notifications
- Doctor Availability Management
- Online Consultation
- Online Payment Integration
- Medical History Management

---

# Project Status

**Current Status:** Checkpoint-2 (Minimum Viable Product)

The current implementation successfully demonstrates the complete patient workflow, including registration, authentication, patient query submission, department recommendation, appointment booking, and appointment management.

---

# Installation Guide

1. Clone the repository.

```bash
git clone https://github.com/ibtisamkhan369-ik/FYP-2026-G2-HybridIntelligentSystemforPatientQueryHandlingAndAppointmentManagement.git
```

2. Navigate to the Backend folder.

```bash
cd Backend
```

3. Install dependencies.

```bash
npm install
```

4. Configure the `.env` file with your MySQL database credentials and JWT secret.

5. Start the backend server.

```bash
npm start
```

6. Open the Frontend folder and launch `index.html` in your browser.

---

# License

This project was developed for academic purposes as part of the **Bachelor of Science in Computer Science (BSCS) Final Year Project (2026)**.

© 2026 Hybrid Intelligent System for Patient Query Handling and Appointment Management

All Rights Reserved.
