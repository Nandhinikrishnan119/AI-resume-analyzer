# 🎯 ResumeAI Backend - Quick Reference Card

## 🚀 Start Backend (Copy & Paste)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**Wait for**: `Started ResumeAiApplication...`  
**Then visit**: `http://localhost:8080`

---

## 📍 Key URLs

| URL | Purpose | Access |
|-----|---------|--------|
| http://localhost:8080/api | Backend API | Public |
| http://localhost:8080/h2-console | Database view | Public (dev only) |
| http://localhost:5173 | React Frontend | Local only |

---

## 🔌 Core API Routes

```
Authentication:
  POST   /api/auth/signup              (no auth)
  POST   /api/auth/login               (no auth)
  GET    /api/auth/me                  (JWT required)

Resume:
  POST   /api/resume/upload            (JWT required)
  GET    /api/resume/history           (JWT required)
  GET    /api/resume/{id}              (JWT required)
```

---

## 🧪 Quick Test (cURL)

```bash
# 1. Signup
curl -X POST http://localhost:8080/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"pass123"}'

# Copy the token from response

# 2. Test protected endpoint
curl -X GET http://localhost:8080/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# 3. Upload resume
curl -X POST http://localhost:8080/api/resume/upload \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/resume.pdf"
```

---

## 🗄️ Database Access

**URL**: `http://localhost:8080/h2-console`  
**JDBC URL**: `jdbc:h2:mem:resumeai`  
**User**: `sa`  
**Password**: *(empty)*

---

## 🔧 Configuration Files

**Application Settings**  
`backend/src/main/resources/application.properties`

**Key Settings**:
```properties
server.port=8080
jwt.secret.key=change_me_to_32_chars_for_production
jwt.expiration.ms=86400000  # 24 hours
spring.servlet.multipart.max-file-size=5MB
```

---

## 🧠 Scoring Breakdown

| Category | Points | Example |
|----------|--------|---------|
| Key Sections (5) | 30 | Skills, Experience, Education, etc. |
| Word Count (200-1500) | 15 | Optimal length check |
| Contact (Email + Phone) | 20 | 10 each if found |
| Action Verbs | 20 | "Developed", "Implemented", etc. |
| Bullet Points | 15 | Proper formatting |

**Total**: 100 points possible

---

## 🔐 Authentication Flow

```
1. User enters credentials
2. Backend validates & hashes password
3. Server generates JWT token (24hr expiration)
4. Client stores token in localStorage
5. Client includes token in Authorization header for future requests
6. Backend validates token on each request
7. If valid → Allow access | If expired → Reject (login again)
```

---

## 📁 Important Files

| File | Change When | Impact |
|------|-------------|--------|
| `application.properties` | Need different port or JWT key | Server behavior |
| `ResumeAnalyzerService.java` | Want to customize scoring | Analysis results |
| `CorsConfig.java` | Adding new frontend domain | Allow cross-origin |
| `SecurityConfig.java` | Changing auth rules | Who can access what |

---

## ⚠️ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| `Port 8080 in use` | `server.port=8081` in application.properties |
| `Maven not found` | Install Maven or use `./mvnw` |
| `CORS error` | Add frontend URL to `CorsConfig.java` |
| `JWT invalid` | Check `jwt.secret.key` is same as during token generation |
| `No database tables` | Wait for Spring to initialize, refresh H2 console |

---

## 📦 Tech Stack Cheat Sheet

```
Java 17 → Language
Spring Boot 3.2 → Framework
Spring Security → Authentication
JWT (jjwt) → Tokens
Spring Data JPA → Database ORM
H2 → Dev Database
MySQL → Production Database
BCrypt → Password Hashing
PDFBox → PDF Text Extraction
POI → DOCX Text Extraction
Maven → Build Tool
Lombok → Reduce Boilerplate
```

---

## 🔄 Development Workflow

```
1. Make code changes
2. Stop running server (Ctrl+C)
3. Run: mvn clean install
4. Run: mvn spring-boot:run
5. Test with React frontend or cURL
6. Repeat
```

---

## 📊 Resume Analysis Response Example

```json
{
  "id": 1,
  "fileName": "resume.pdf",
  "score": 78,
  "strengths": [
    "All key sections present",
    "Strong use of action verbs (15 found)"
  ],
  "weaknesses": [
    "Resume could be more concise"
  ],
  "suggestions": [
    "Keep resume between 200-1500 words",
    "Add more specific achievements"
  ],
  "analyzedAt": "2024-01-15T10:30:00",
  "extractedTextPreview": "John Doe\n123-456-7890\njohn@..."
}
```

---

## 🚀 Deployment Checklist

- [ ] Change `jwt.secret.key` to 32+ random chars
- [ ] Update `CorsConfig` with production domain
- [ ] Switch to MySQL database
- [ ] Disable H2 console (`spring.h2.console.enabled=false`)
- [ ] Set `ddl-auto=validate` (not `update`)
- [ ] Enable HTTPS
- [ ] Set up environment variables for secrets
- [ ] Configure max file upload size appropriately
- [ ] Test all API endpoints
- [ ] Set up database backups
- [ ] Configure logging & monitoring

---

## 📞 Help Resources

| Need | Location |
|------|----------|
| Quick setup | `BACKEND_QUICKSTART.md` |
| Full API docs | `backend/README.md` |
| System design | `BACKEND_ARCHITECTURE.md` |
| Full summary | `BACKEND_COMPLETE.md` |
| This card | `BACKEND_REFERENCE.md` |

---

## 💡 Pro Tips

1. **Local Development**: Use H2 database (no setup needed)
2. **Testing**: Use Postman collection from README
3. **Frontend Testing**: React already configured for this backend
4. **Debugging**: Enable debug logging in `application.properties`
5. **Production**: Use MySQL + proper secret key management

---

## 🎯 Key Ports

- **Backend**: 8080
- **Frontend**: 5173
- **Database**: Embedded (H2) or 3306 (MySQL)
- **No conflicts?**: You're good! ✅

---

## ✅ Verification Checklist

- [ ] Backend running on port 8080
- [ ] Can access H2 console
- [ ] Can signup/login with cURL
- [ ] Frontend still works on 5173
- [ ] Can upload & analyze resume
- [ ] No CORS errors in browser console
- [ ] JWT tokens being generated correctly
- [ ] Database tables created automatically

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅

*Keep this card handy for quick reference!*
