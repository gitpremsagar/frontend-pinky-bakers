import DashboardAsideLeft from "@/app/components/admin/dashboard/AdminAsideLeft";
import SalesReport from "@/app/components/admin/dashboard/SalesReport";

const AdminDashboardPage = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-pink-600 min-h-screen">
        <DashboardAsideLeft />
      </div>

      <div className="col-span-5">
        <SalesReport />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
