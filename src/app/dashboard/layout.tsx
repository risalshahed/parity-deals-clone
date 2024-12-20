import DashboardNavbar from "./_components/DashboardNavbar";

const DashboardLayout = ({ children } : {
  children: React.ReactNode
}) => {
  return (
    <div className='bg-accent/5 min-h-screen'>
      <DashboardNavbar />
      <div className='container py-6'>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;