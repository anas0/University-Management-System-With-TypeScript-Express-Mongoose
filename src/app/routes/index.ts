import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';

const router = Router();

// router.use('/students', StudentRoute);
// router.use('/users', UserRoute);

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
