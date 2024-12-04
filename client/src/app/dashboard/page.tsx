"use client";

import CardPopularProducts from "@/app/dashboard/CardPopularProducts";
import CardPurchaseSummary from "@/app/dashboard/CardPurchaseSummary";
import CardSalesSummary from "@/app/dashboard/CardSalesSummary";
import CardExpenseSummary from "@/app/dashboard/CardExpenseSummary";

const Dashboard = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows`}>
            <CardPopularProducts />
            <CardSalesSummary />
            <CardPurchaseSummary />
            <CardExpenseSummary />
        </div>
    )
}
export default Dashboard
