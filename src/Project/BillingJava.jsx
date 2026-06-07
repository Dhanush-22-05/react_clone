import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "./BillingJava.css";

export default function BillingJava() {

    // Product State
    const [product, setproduct] = useState({
        ProductName: "",
        Price: "",
        Quantity: "",
        GST: "",
        Discount: "",
    });

    // Bill State
    const [bill, setBill] = useState(null);

    // All Bills
    const [allBills, setAllBills] = useState([]);

    // Handle Input
    const handlechange = (e) => {

        const { name, value } = e.target;

        setproduct({
            ...product,
            [name]: value,
        });
    };

    // Generate Bill
    const generateBill = () => {

        const subtotal =
            product.Price * product.Quantity;

        const gstAmount =
            subtotal * product.GST / 100;

        const amountAfterGST =
            subtotal + gstAmount;

        const discountAmount =
            amountAfterGST * product.Discount / 100;

        const totalAmount =
            amountAfterGST - discountAmount;

        setBill({
            subtotal,
            gstAmount,
            discountAmount,
            totalAmount
        });
    };

    // Save Data
    const handleSubmit = async () => {

        try {

            const response = await axios.post(
                "http://localhost:8082/billing/save",
                product
            );

            alert(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // Get All Bills
    const getBills = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8082/billing/all"
            );

            setAllBills(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // Print Bill
    const printBill = () => {

        window.print();
    };

    // Download PDF
    const downloadPDF = () => {

        const doc = new jsPDF();

        doc.text("Billing System", 20, 20);

        doc.text(
            `Product Name : ${product.ProductName}`,
            20,
            40
        );

        doc.text(
            `Total Amount : ${bill.totalAmount}`,
            20,
            60
        );

        doc.save("bill.pdf");
    };

    return (
        <div className="container">

            <h1>Billing System</h1>

            {/* Product Name */}
            <label>Product Name :</label>

            <input
                type="text"
                placeholder="Enter Product Name"
                name="ProductName"
                value={product.ProductName}
                onChange={handlechange}
            />

            {/* Price */}
            <label>Price :</label>

            <input
                type="number"
                placeholder="Enter Price"
                name="Price"
                value={product.Price}
                onChange={handlechange}
            />

            {/* Quantity */}
            <label>Quantity :</label>

            <input
                type="number"
                placeholder="Enter Quantity"
                name="Quantity"
                value={product.Quantity}
                onChange={handlechange}
            />

            {/* GST */}
            <label>GST % :</label>

            <input
                type="number"
                placeholder="Enter GST %"
                name="GST"
                value={product.GST}
                onChange={handlechange}
            />

            {/* Discount */}
            <label>Discount % :</label>

            <input
                type="number"
                placeholder="Enter Discount %"
                name="Discount"
                value={product.Discount}
                onChange={handlechange}
            />

            <br />

            {/* Buttons */}
            <button onClick={generateBill}>
                Generate Bill
            </button>

            <button onClick={handleSubmit}>
                Save Data
            </button>

            <button onClick={printBill}>
                Print Bill
            </button>

            <button onClick={downloadPDF}>
                Download PDF
            </button>

            <button onClick={getBills}>
                View All Bills
            </button>

            {/* Bill Details */}
            {
                bill && (

                    <div className="bill">

                        <h2>Bill Details</h2>

                        <table border="1" cellPadding="10">

                            <tbody>

                                <tr>
                                    <td>Subtotal</td>
                                    <td>{bill.subtotal}</td>
                                </tr>

                                <tr>
                                    <td>GST Amount</td>
                                    <td>{bill.gstAmount}</td>
                                </tr>

                                <tr>
                                    <td>Discount Amount</td>
                                    <td>{bill.discountAmount}</td>
                                </tr>

                                <tr>
                                    <td>Total Amount</td>
                                    <td>{bill.totalAmount}</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>
                )
            }

            {/* All Bills */}
            {
                allBills.length > 0 && (

                    <div>

                        <h2>Stored Bills</h2>

                        <table border="1" cellPadding="10">

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    allBills.map((item) => (

                                        <tr key={item.id}>

                                            <td>{item.id}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>

                    </div>
                )
            }

        </div>
    );
}