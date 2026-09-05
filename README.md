# 🚀 ResumeAI — Intelligent Resume Analysis & ATS Scoring Platform

<p align="center">
  <b>A full-stack resume analysis platform designed to help job seekers evaluate, improve, and optimize their resumes for ATS-based recruitment.</b>
</p>

<p align="center">
  <a href="https://ai-resume-analyzer-1-jw3c.onrender.com">
    <img src="https://img.shields.io/badge/🌐%20Live%20Website-AI%20Resume%20Analyzer-success?style=for-the-badge" alt="Live Website">
  </a>
  <a href="https://github.com/Nandhinikrishnan119/AI-resume-analyzer">
    <img src="https://img.shields.io/badge/💻%20GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
</p>

---

# 🌐 Live Deployment

### 🚀 Live Website

**https://ai-resume-analyzer-1-jw3c.onrender.com**

### ⚙️ Backend Service

**https://ai-resume-analyzer-vkzo.onrender.com**

### 💻 GitHub Repository

**https://github.com/Nandhinikrishnan119/AI-resume-analyzer**

---

# 📌 Project Overview

**AI Resume Analyzer** is a full-stack web application designed to help job seekers analyze and improve their resumes before applying for jobs.

The platform provides an ATS-style resume evaluation system that analyzes resume content and generates a score along with strengths, weaknesses, and improvement suggestions.

Users can securely create an account, upload their resumes, analyze their content, review the results through a dashboard, and access their previous resume analyses.

The application follows a **client-server architecture**, where the React frontend communicates with a Java Spring Boot backend through REST APIs.

---

# 🎯 Objectives

The primary objectives of AI Resume Analyzer are:

- 📄 Analyze resumes automatically
- 📊 Provide an ATS-style resume score
- 🔍 Identify resume strengths
- ⚠️ Detect potential weaknesses
- 💡 Provide actionable improvement suggestions
- 💼 Improve resume relevance for job applications
- 🎯 Support job-description based analysis
- 👤 Provide secure user accounts
- 📚 Maintain resume analysis history
- ⚡ Simplify the resume evaluation process
- 🚀 Help candidates improve their job-readiness

---

# ✨ Key Features

## 👤 User Authentication

The application provides secure user authentication and account management.

### Features

- 🔐 User registration
- 🔑 Secure login
- 🛡️ JWT-based authentication
- 🔒 Password encryption
- 👤 User-specific data
- 🚪 Protected application resources

---

# 📄 Resume Analysis

The core feature of the platform is automated resume analysis.

Users can upload their resume and receive an ATS-style evaluation.

### Features

- 📤 Resume upload
- 📑 Resume content processing
- 📊 ATS-style scoring
- 🔍 Resume content evaluation
- 💪 Strength detection
- ⚠️ Weakness detection
- 💡 Improvement recommendations
- 📈 Resume analysis results

---

# 💼 Job Description Analysis

Users can provide a job description along with their resume to make the analysis more relevant to a specific job opportunity.

The system can evaluate resume content against important requirements and keywords from the provided job description.

### Features

- 📋 Job description input
- 🔍 Keyword evaluation
- 🎯 Resume relevance analysis
- 💼 Job-specific recommendations

---

# 📊 Resume Dashboard

The dashboard provides users with a centralized view of their resume analysis.

### Dashboard Includes

- 📊 ATS score
- 💪 Resume strengths
- ⚠️ Resume weaknesses
- 💡 Improvement suggestions
- 📄 Resume analysis details
- 📚 Previous analyses

---

# 📚 Resume Analysis History

Users can access their previous resume analysis results.

### Features

- 📋 Analysis history
- 📅 Previous resume records
- 📊 Previous scores
- 🔍 Review past analysis results
- 👤 User-specific analysis data

---

# 🧠 ATS Scoring System

The current application uses a **rule-based resume analysis engine** to generate an ATS-style score.

The system evaluates important resume signals such as:

- 💼 Professional experience
- 🛠️ Skills
- 🎓 Education
- ✍️ Action verbs
- 📄 Resume content length
- 🔑 Relevant keywords and sections

The analysis produces a score along with strengths, weaknesses, and recommendations.

> **Note:** The current implementation uses a rule-based analysis engine. AI/LLM-powered analysis can be integrated as a future enhancement.

---

# 🔐 Authentication & Authorization

AI Resume Analyzer uses **JWT-based authentication** with Spring Security.

### Authentication

- JWT-based authentication
- Secure login
- Password encryption
- Protected API endpoints
- Token-based authorization

### Authentication Flow

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Register / Login│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  Spring Security│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   JWT Token     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Protected APIs  │
                    └─────────────────┘
```

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────────┐
                         │          USER            │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     React Frontend       │
                         │                          │
                         │ React + Vite             │
                         │ Tailwind CSS              │
                         │ React Router              │
                         │ Axios                     │
                         └────────────┬─────────────┘
                                      │
                              REST API / HTTPS
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │    Spring Boot Backend   │
                         │                          │
                         │ REST Controllers          │
                         │ Business Services        │
                         │ Spring Security           │
                         │ JWT Authentication        │
                         │ JPA Repositories         │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │        Database          │
                         │                          │
                         │ H2 / MySQL               │
                         └──────────────────────────┘
```

---

# 🔄 Application Workflow

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Register / Login│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ JWT Auth Token  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Upload Resume   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Resume Processing│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Resume Analysis │
                    └────────┬────────┘
                             │
                ┌────────────┼────────────┐
                ▼            ▼            ▼
           ATS Score     Strengths    Weaknesses
                │            │            │
                └────────────┼────────────┘
                             ▼
                    ┌─────────────────┐
                    │ Recommendations │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    Dashboard    │
                    └─────────────────┘
```

---

# 🛠️ Technology Stack

## 🎨 Frontend

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🎨 Tailwind CSS
- 🧭 React Router
- 🔗 Axios
- 🎬 Framer Motion
- 🔹 React Icons

---

## ⚙️ Backend

- ☕ Java
- 🌱 Spring Boot
- 🌐 Spring Web
- 🔐 Spring Security
- 🎟️ JWT
- 🗃️ Spring Data JPA
- 📦 Maven

---

## 🗄️ Database & Processing

- H2 Database
- MySQL
- Apache PDFBox
- Apache POI

---

## ☁️ Deployment & Version Control

- 🐙 GitHub
- 🐳 Docker
- ☁️ Render

---

# 📂 Project Structure

```text
AI-resume-analyzer/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/resumeai/
│   │       │       ├── config/
│   │       │       ├── controller/
│   │       │       ├── dto/
│   │       │       ├── entity/
│   │       │       ├── repository/
│   │       │       └── service/
│   │       │
│   │       └── resources/
│   │
│   ├── Dockerfile
│   └── pom.xml
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── home/
│   │   └── layout/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧩 Core Modules

## 🔐 Authentication Module

Handles:

- User registration
- User login
- JWT generation
- Authentication validation
- Password security

---

## 📄 Resume Management Module

Handles:

- Resume uploads
- Resume processing
- Resume analysis
- Analysis storage
- Analysis retrieval

---

## 🧠 Resume Analysis Module

Handles:

- Resume content evaluation
- ATS-style scoring
- Strength detection
- Weakness detection
- Improvement recommendations

---

## 💼 Job Matching Module

Handles:

- Job description input
- Resume-job relevance
- Keyword evaluation
- Job-specific recommendations

---

## 📊 Dashboard Module

Provides:

- Resume score
- Analysis results
- Strengths
- Weaknesses
- Recommendations
- Analysis history

---

# 🔌 REST API

The frontend communicates with the backend through REST APIs.

### Authentication APIs

```text
POST  /api/auth/signup
POST  /api/auth/login
GET   /api/auth/me
```

### Resume APIs

```text
POST  /api/resume/upload
GET   /api/resume/history
GET   /api/resume/{id}
```

---

# 🎨 User Interface

The application provides a modern and responsive interface with dedicated pages for:

- 🏠 Home
- 🔐 Login
- 📝 Registration
- 📤 Resume Upload
- 📊 Dashboard
- 📚 Resume History
- ℹ️ About

The interface is designed to provide a simple workflow from resume upload to analysis results.

---

# 🎯 Project Goals

AI Resume Analyzer aims to:

- Make resume analysis accessible to students and job seekers
- Help candidates identify resume weaknesses
- Improve ATS readiness
- Provide meaningful resume feedback
- Reduce the uncertainty involved in resume preparation
- Demonstrate a real-world full-stack application

---

# 🚀 Future Enhancements

- 🤖 LLM-powered resume analysis
- 🧠 Advanced semantic job matching
- 🔍 Intelligent skill-gap analysis
- 📊 Advanced resume analytics
- 📄 Resume template generation
- 🎯 Job-role-specific recommendations
- 🔐 Google OAuth authentication
- 📧 Email verification
- 🔑 Password reset
- 📈 Resume version comparison
- 💾 Persistent production database
- 🧪 Automated testing
- ⚙️ Advanced admin dashboard

---

# 📈 Project Highlights

- ✅ Full-stack web application
- ✅ React-based frontend
- ✅ Java Spring Boot backend
- ✅ REST API architecture
- ✅ JWT authentication
- ✅ Spring Security
- ✅ Resume upload and processing
- ✅ ATS-style scoring
- ✅ Job description analysis
- ✅ Resume analysis history
- ✅ Responsive dashboard
- ✅ Dockerized backend
- ✅ Cloud deployment

---

# 👩‍💻 Author

## Nandhini K

**Computer Science Engineering Student**

### GitHub

**https://github.com/Nandhinikrishnan119**

---

<p align="center">
  ⭐ If you find this project useful, consider giving it a star!
</p>
