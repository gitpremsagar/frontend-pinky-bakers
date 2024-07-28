"use client";
import React, { useEffect, useState } from "react";

const OrderReports = () => {
  type Order = {
    id: number;
    customerName: string;
    orderDate: string;
    orderTotal: number;
  };
  const dummyOrders: Order[] = [
    {
      id: 1,
      customerName: "John Doe",
      orderDate: "2021-08-12",
      orderTotal: 100,
    },
    {
      id: 2,
      customerName: "Jane Doe",
      orderDate: "2021-08-13",
      orderTotal: 200,
    },
  ];
  const [orders, setOrders] = useState<Order[]>(dummyOrders);
  const [loading, setLoading] = useState<boolean>(false);

  //   useEffect(() => {
  //     const fetchOrders = async () => {
  //       const response = await fetch("/api/orders");
  //       const data = await response.json();
  //       setOrders(data);
  //       setLoading(false);
  //     };

  //     fetchOrders();
  //   }, []);

  return (
    <div>
      <h1>Orders Report</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Order Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.orderTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderReports;
