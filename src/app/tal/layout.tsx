import Sidebar from "./components/Sidebar";

export default function TALLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
