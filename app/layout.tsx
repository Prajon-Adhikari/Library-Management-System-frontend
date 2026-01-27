import "./globals.css";
import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#faf6f2]">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col bg-[#faf6f2]">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
