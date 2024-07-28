import DashboardAsideLeft from "@/app/components/admin/dashboard/AdminAsideLeft";
import ProductsManager from "@/app/components/admin/products/ProductsManager";

const AdminDashboardPage = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 bg-pink-600 min-h-screen">
        <DashboardAsideLeft />
      </div>

      <div className="col-span-5 p-10">
        <ProductsManager />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
