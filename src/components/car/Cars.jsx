import React from 'react';

const Cars = () => {
    return (
        <div>
            <h1>Cars</h1>
            <span className="btn btn-primary">Create Car</span>
            <table className="table table-dark table-striped">

                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price</th>
                    <th scope="col">Color</th>
                    <th scope="col">Year</th>
                    <th scope="col">Register Number</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Toyota</td>
                    <td>Corolla</td>
                    <td>10000</td>
                    <td>Black</td>
                    <td>2010</td>
                    <td>AA-1234</td>
                    <td>John Doe</td>
                    <td><span className="btn btn-danger">Delete</span></td>
                </tr>
                </tbody>
                    
                    
            </table>

        </div>
    );
};

export default Cars;