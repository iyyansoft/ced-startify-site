// import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { Toaster } from "sonner";

// import Navbar from "@/components/navbar";

// export const Route = createRootRoute({
//   component: () => (
//     <main>
//       <Toaster
//         richColors
//         duration={1250}
//         toastOptions={{ className: "font-spaceGrotesk" }}
//       />
//       <Navbar />
//       <Outlet />
//     </main>
//   ),
// });


import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">

      <Toaster
        richColors
        duration={1250}
        toastOptions={{ className: "font-spaceGrotesk" }}
      />

      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ✅ Always at bottom */}
      <Footer />

    </div>
  ),
});
