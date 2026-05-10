import { Layout } from "@/components/Layout";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import {
  Outlet,
  createLazyFileRoute,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const LandingPage = lazy(() =>
  import("@/pages/Landing").then((m) => ({ default: m.LandingPage })),
);
const CoursesPage = lazy(() =>
  import("@/pages/Courses").then((m) => ({ default: m.CoursesPage })),
);
const CourseDetailPage = lazy(() =>
  import("@/pages/CourseDetail").then((m) => ({ default: m.CourseDetailPage })),
);
const LessonViewerPage = lazy(() =>
  import("@/pages/LessonViewer").then((m) => ({ default: m.LessonViewerPage })),
);
const QuizPage = lazy(() =>
  import("@/pages/Quiz").then((m) => ({ default: m.QuizPage })),
);
const DashboardPage = lazy(() =>
  import("@/pages/Dashboard").then((m) => ({ default: m.DashboardPage })),
);
const AdminPage = lazy(() =>
  import("@/pages/Admin").then((m) => ({ default: m.AdminPage })),
);

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <LoadingSpinner size="lg" label="Loading page..." />
    </div>
  );
}

function RootLayout() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <LandingPage />,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: () => <CoursesPage />,
});

const courseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/$courseId",
  component: () => <CourseDetailPage />,
});

const lessonViewerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/$courseId/lessons/$lessonId",
  component: () => <LessonViewerPage />,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses/$courseId/lessons/$lessonId/quiz",
  component: () => <QuizPage />,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => <DashboardPage />,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => <AdminPage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  courseDetailRoute,
  lessonViewerRoute,
  quizRoute,
  dashboardRoute,
  adminRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
