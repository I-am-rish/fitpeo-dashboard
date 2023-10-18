import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCurrencyDollar, BsCartCheckFill } from "react-icons/bs";
import { FcSalesPerformance } from "react-icons/fc";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import BarChart from "../components/BarChart";
import CircleChart from "../components/CirlcleChart";
import ProductSell from "../components/ProductSell";

const Dashboard = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setHamburgerMenu(true);
  };

  console.log(window.innerWidth);

  const monthlyData = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [10, 15, 7, 12, 8, 20, 9, 22, 6, 14, 10, 18],
  };

  return (
    <Container>
      {window.innerWidth > 412 || hamburgerMenu  && <Sidebar />}
      <div className="dashboard-container flex">
        <header className="flex a-center">
          <div className="flex a-center">
            {window.innerWidth <= 412 && 
              <GiHamburgerMenu
                style={{ fontSize: "2rem", cursor: "pointer" }}
                onClick={handleHamburgerMenu}
              />
            }

            <h2>Hello Amrish</h2>
          </div>
          <div className="searchbar flex a-center">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" />
          </div>
        </header>
        <div className="summary flex">
          <div className="earning flex j-center a-center">
            <BsCurrencyDollar style={{ fontSize: "6rem", color: "green" }} />
            <div className="earning-details flex fd-column">
              <span>Earning</span>
              <span>$198k</span>
              <span style={{ color: "green" }}>
                <AiOutlineArrowUp />
                37.8%
                <span style={{ color: "#000" }}>this month</span>
              </span>
            </div>
          </div>
          <div className="earning flex j-center a-center">
            <BsCartCheckFill style={{ fontSize: "6rem", color: "#9503f7" }} />
            <div className="earning-details flex fd-column">
              <span>Orders</span>
              <span>$2.4k</span>
              <span style={{ color: "red" }}>
                <AiOutlineArrowDown />
                2%
                <span style={{ color: "#000" }}>this month</span>
              </span>
            </div>
          </div>
          <div className="earning flex j-center a-center">
            <FaScaleUnbalancedFlip
              style={{ fontSize: "6rem", color: "#012ef7" }}
            />
            <div className="earning-details flex fd-column">
              <span>Balance</span>
              <span>$2.4k</span>
              <span style={{ color: "red" }}>
                <AiOutlineArrowDown />
                2%
                <span style={{ color: "#000" }}>this month</span>
              </span>
            </div>
          </div>
          <div className="earning flex j-center a-center">
            <FcSalesPerformance style={{ fontSize: "6rem", color: "green" }} />
            <div className="earning-details flex fd-column">
              <span style={{}}>Total Sales</span>
              <span>$89k</span>
              <span style={{ color: "green" }}>
                <AiOutlineArrowUp />
                11%
                <span style={{ color: "#000" }}>this month</span>
              </span>
            </div>
          </div>
        </div>
        <div className="container flex">
          <div className="overview flex fd-column">
            <div className="flex">
              <div className="flex fd-column">
                <span>Overview</span>
                <span>Monthly Earning</span>
              </div>
              <select name="" id="">
                <option value="">Quarterly</option>
              </select>
            </div>
            <BarChart data={monthlyData} />
          </div>
          <div className="customers flex fd-column">
            <div className="flex fd-column">
              <span>Customers</span>
              <span style={{ opacity: ".5" }}>Customers that buy products</span>
            </div>
            <div className="circle-chart">
              <CircleChart />
            </div>
          </div>
        </div>
        <ProductSell />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: #dededf;

  .dashboard-container {
    width: 90vw;
    flex-direction: column;
    margin: 20px 40px 0px 40px;

    header {
      width: 100%;
      height: 50px;
      justify-content: space-between;

      .searchbar {
        background-color: #fff;
        font-size: 1.7rem;
        padding: 2px 5px;
        border-radius: 5px;

        input[type="text"] {
          width: calc(100% - 3em);
          padding: 0.5em;
          border: none;
          outline: none;
          opacity: 0.6;
        }
      }
    }

    .summary {
      width: 100%;
      height: 15rem;
      justify-content: space-between;

      .earning {
        width: 22rem;
        height: 14rem;
        background-color: #fff;
        border-radius: 10px;
        gap: 1rem;

        .earning-details {
          span {
            font-size: 1.3rem;
            font-weight: 600;
          }

          :nth-of-type(1) {
            color: #b5b5b8;
          }
          :nth-of-type(2) {
            font-size: 2rem;
            font-weight: 700;
          }
        }
      }
    }

    .container {
      height: 50%;
      justify-content: space-between;
      margin-top: 2rem;

      .overview {
        width: 60%;
        height: 80%;
        background-color: #fff;
        padding: 20px 20px 25px 20px;
        border-radius: 10px;

        div {
          width: 100%;
          div {
            :first-child {
              font-size: 1.6rem;
              font-weight: 700;
            }

            :last-child {
              opacity: 0.5;
              font-weight: 600;
            }
          }

          select {
            border: none;
            outline: none;
            opacity: 0.5;
            font-weight: 600;
          }
        }
      }

      .customers {
        width: 30%;
        height: 80%;
        padding: 20px 20px 25px 20px;
        border-radius: 10px;
        background-color: #fff;

        div {
          :first-child {
            font-size: 1.6rem;
            font-weight: 700;
          }

          :last-child {
            font-size: 1.2rem;
            font-weight: 600;
          }
        }

        .circle-chart {
          width: 90%;
          margin: 20px auto;
        }
      }
    }
  }

  @media screen and (width <= 768px) {
    .dashboard-container {
      width: 98vw;
      margin: 10px;

      .summary {
        .earning {
          width: 18rem;
        }
      }

      .container {
        margin-top: 2rem;

        .overview {
          width: 58%;
        }
      }
    }
  }

  @media screen and (width <= 412px) {
    width: 108vw;
    justify-content: center;
    .dashboard-container {
      width: 90vw;
      margin: 10px;
      header {
        div {
          gap: 2rem;
          :first-child {
          }
        }
        .searchbar {
          input[type="text"] {
            width: 11rem;
            padding: 0.5em;
            border: none;
            outline: none;
            opacity: 0.6;
          }
        }
      }

      .summary {
        width: 100;
        height: 31rem;
        flex-wrap: wrap;
        gap: 1rem;

        .earning {
          width: 15.5rem;
          height: 14rem;
        }
      }

      .container {
        flex-direction: column;

        .overview {
          width: 90%;
          margin-top: 0rem;
        }

        .customers {
          width: 90%;
          margin-top: 2rem;

          div {
            align-items: center;
          }

          .circle-chart {
            width: 76%;
          }
        }
      }
    }
  }
`;

export default Dashboard;
