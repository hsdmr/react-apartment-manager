import { Link } from "react-router-dom"

function Table(props) {

  const titles = props.titles
  const keys = props.keys
  const data = props.data
  const url = props.url

  let renderedKeys = keys.map((key) =>
    <th key={titles[key]}>{titles[key]}</th>
  )
  renderedKeys.push(<th key="Actions">Actions</th>)

  const renderRow = (item) => {
    let row = keys.map((key) =>
      <td key={key}>{item[key]}</td>
    )
    row.push(<td key="id"><Link to={"/" + url + "/" + item['id']}><i className="fas fa-pencil-alt"></i></Link><a className="text-danger ml-3" href="#" onClick={() => { props.handleDelete(item['id']) }}><i className="fas fa-times"></i></a></td>)
    return row
  }

  const renderedRows = data.map((item) =>
    <tr key={item['id']}>
      {renderRow(item)}
    </tr>
  )

  return (
    <table id="table" className="table table-bordered table-striped">
      <thead>
        <tr>{renderedKeys}</tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
      <tfoot>
        <tr>{renderedKeys}</tr>
      </tfoot>
    </table>);
}

export default Table;