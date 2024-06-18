import React from 'react';
import styled from 'styled-components';

const InvoiceSlip = ({ formData, cartItems }) => {
  return (
    <InvoiceWrapper>
      <div className="invoice-header">
        <h2>Invoice</h2>
        <p>Thank you for your order!</p>
      </div>
      <div className="invoice-details">
        <h3>Order Details</h3>
        <div className="customer-info">
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zip}, {formData.country}</p>
        </div>
        <div className="order-summary">
          <h4>Order Summary</h4>
          <ul>
          {cartItems.map((item, index) => (
              <li key={item.courseID}>
                <span><b>{index + 1}.</b> {item.course_name}</span>
                <span>${item.discounted_price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <strong>Total:</strong> ${cartItems.reduce((acc, item) => acc + item.discounted_price, 0).toFixed(2)}
          </div>
        </div>
      </div>
    </InvoiceWrapper>
  );
};

const InvoiceWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .invoice-header {
    text-align: center;
    margin-bottom: 20px;
    h2 {
      font-size: 28px;
      margin-bottom: 10px;
      font-weight: bold;
      color: var(--clr-orange);
    }
    p {
      font-size: 18px;
      color: #555;
      font-weight: bold;
    }
  }

  .invoice-details {
    h3 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
      font-weight: bolder;
    }
    .customer-info {
      margin-bottom: 30px;
      p {
        font-size: 18px;
        margin-bottom: 10px;
        color: #555;
      }
    }
    .order-summary {
      h4 {
        font-size: 20px;
        margin-bottom: 15px;
        color: #333;
        font-weight: bolder;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          display: flex;
          flex-direction:column;
          justify-content: space-between;
          margin-bottom: 10px;
          span:first-child {
            flex: 1;
            font-size: 18px;
            color: #333;
          }
          span:last-child {
            font-size: 18px;
            font-weight: 700;
            color: #4caf50;
          }
        }
      }
      .total-amount {
        border-top: 2px solid black;
        margin-top: 20px;
        font-size: 24px;
        font-weight: 700;
        text-align: right;
        color: #333;
      }
    }
  }
`;

export default InvoiceSlip;
