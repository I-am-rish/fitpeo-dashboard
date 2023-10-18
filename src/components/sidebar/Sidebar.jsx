import React from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
// import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Sidebar = () => {

  const handleCloseButton = () => {
  }

  return (
    <Container>
      <div className="sidebar-container flex a-center">
        {window.innerWidth < 412 && (
          <span className="close-button"
          onClick={handleCloseButton}
          >
            <AiOutlineClose />
          </span>
        )}
        <div className="logo flex a-center">
          <RxDashboard />
          <p>Dashboard</p>
        </div>
        <div className="sidebar-list flex a-center">
          <div className="sidebar flex a-center">
            <RxDashboard />
            <p>Dashboard</p>
          </div>
          <div className="product flex a-center">
            <div className="flex a-center">
              <RxDashboard />
              <p>Product</p>
            </div>
            <HiChevronRight />
          </div>
          <div className="customers flex a-center">
            <div className="flex a-center">
              <RxDashboard />
              <p>Customers</p>
            </div>
            <HiChevronRight />
          </div>
          <div className="income flex a-center">
            <div className="flex a-center">
              <RxDashboard />
              <p>Income</p>
            </div>
            <HiChevronRight />
          </div>
          <div className="promote flex a-center">
            <div className="flex a-center">
              <RxDashboard />
              <p>Promote</p>
            </div>
            <HiChevronRight />
          </div>
          <div className="help flex a-center">
            <div className="flex a-center">
              <RxDashboard />
              <p>Help</p>
            </div>
            <HiChevronRight />
          </div>
        </div>
        <div className="project-manager flex a-center">
          <div className=" flex a-center">
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt="img"
            />
            <div>
              <span>Evano</span>
              <span>Project Manager</span>
            </div>
          </div>
          <HiChevronDown />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .sidebar-container {
    background-color: rgb(17, 17, 71);
    width: 25rem;
    height: 150vh;
    flex-direction: column;
    position: relative;

    //close button
    .close-button{
      position: absolute;
      font-size: 2rem;
      color: #fff;
      top: 2%;
      right: 3%;
    }

    .logo {
      width: 85%;
      gap: 1rem;
      font-size: 2.2rem;
      color: white;
      cursor: pointer;

      .logo p {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    .sidebar-list {
      width: 100%;
      flex-direction: column;
      color: #aaa8a8;

      .sidebar {
        width: 80%;
        height: 35px;
        gap: 1rem;
        justify-content: start;
        padding: 0 10px;
        font-size: 2rem;
        border-radius: 6px;
        margin-top: 1rem;
        cursor: pointer;
        background-color: rgb(57, 57, 128);

        .sidebar p {
          font-size: 1.6rem;
          font-weight: 600;
        }
      }

      .product,
      .customers,
      .income,
      .promote,
      .help {
        width: 80%;
        justify-content: space-between;
        font-size: 1.6rem;
        cursor: pointer;

        div {
          gap: 1rem;

          p {
            font-size: 1.5rem;
          }
        }
      }
    }

    .project-manager {
      width: 22rem;
      position: absolute;
      bottom: 10rem;
      background-color: #302669;
      font-size: 2.5rem;
      color: #aaa8a8;
      border-radius: 5px;
      padding: 0 5px;

      div {
        width: 90%;
        height: 4rem;
        justify-content: center;
        padding: 5px 10px;

        div {
          font-size: 1.3rem;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          font-weight: 600;

          :first-child {
            color: #fff;
          }
        }

        img {
          width: 40px;
          height: auto;
          border-radius: 50%;
        }
      }
    }
  }

  @media screen and (width <= 412px) {
    .sidebar-container {
      width: 20rem;
      margin-left: 12rem;
      /* z-index: 2; */

      .close-button{

      }

      .project-manager {
        width: 16rem;
      }
    }
  }
`;

export default Sidebar;
