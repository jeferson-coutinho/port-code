// PortfolioPage.js
import React from "react";
import PortfolioList from "../../components/Portfolio";

function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/400x200",
      url: "",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://via.placeholder.com/400x200",
      url: "",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://via.placeholder.com/400x200",
      url: "",
    },
  ];

  return (
    <main>
      <h1>Portfólio</h1>
      <PortfolioList projects={portfolioItems} />
    </main>
  );
}

export default PortfolioPage;
