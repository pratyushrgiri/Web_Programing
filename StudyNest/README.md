# StudyNest

StudyNest is split into:

- `frontend/` → static HTML/CSS/JS UI with role-based dashboards
- `backend/` → Express + Mongoose starter template

## Frontend

Open `/home/runner/work/Web_Programing/Web_Programing/StudyNest/frontend/index.html` in a browser.

## Backend

```bash
cd /home/runner/work/Web_Programing/Web_Programing/StudyNest/backend
cp .env.example .env
npm install
npm run start
```

### Starter API map

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/dashboard`
- `GET /api/assignments`
- `POST /api/assignments` (teacher/admin)
- `PATCH /api/assignments/:assignmentId/evaluate` (teacher/admin)
- `GET /api/reports`
- `POST /api/reports`
- `GET /api/admin/overview` (admin)
- `PATCH /api/admin/students/:studentId/semester` (admin)

Use headers for template role simulation:

- `x-user-id`
- `x-user-role` (`student`, `teacher`, `admin`)
