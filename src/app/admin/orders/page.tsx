import DashboardAsideLeft from "@/app/components/admin/dashboard/AdminAsideLeft";
import OrderReports from "@/app/components/admin/orders/OrdersReport";

const AdminDashboardPage = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-pink-600 min-h-screen">
        <DashboardAsideLeft />
      </div>

      <div className="col-span-5 p-10">
        <OrderReports />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
