import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Script } from "../../components/Script";
import Table from "../../components/Table";
import { getAllInvoices } from "../../services/endpoints";
import { getStorgeItem } from "../../services/storage";

function Invoices() {
  const auth = getStorgeItem('auth');
  const { toastr } = Script('/plugins/toastr/toastr.min.js', 'toastr')
  const [data, setData] = useState([])
  const keys = [
    'invoicePeriod',
    'invoiceTypeId',
    'invoiceStatusId',
    'invoiceAmount',
    'apartmentId',
    'paymentDateTime'
  ];
  const titles = {
    invoicePeriod: 'Period',
    invoiceTypeId: 'Type',
    invoiceStatusId: 'Status',
    invoiceAmount: 'Amount',
    apartmentId: 'Apartment Id',
    paymentDateTime: 'Payment Date'
  };

  const handleDelete = async (id) => {
    toastr.error("Invoices can not deleted")
  }

  async function fetchData() {
    let response = await getAllInvoices()
    setData(response.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (auth.dtoLoginUser.rolId === 1) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <Link to={'/invoices/new'} className="btn btn-success btn-sm float-right"><i className="fas fa-plus"></i> Add Invoice</Link>
              </div>
              <div className="card-body">
                <Table keys={keys} data={data} titles={titles} url="payment" handleDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <Table keys={keys} data={data} titles={titles} url="payment" handleDelete={handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoices;