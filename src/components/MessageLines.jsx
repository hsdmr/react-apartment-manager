import { MarkAsRead } from "../services/endpoints"
import { Script } from "./Script"

export default function MessagesLines(props) {

  const { toastr } = Script('/plugins/toastr/toastr.min.js', 'toastr')
  const handleMessage = (id, name) => {
    props.setId(id)
    props.setName(name)
    props.setShow(true)

    const fetchMark = async () => {
      let response = await MarkAsRead(id)
      if (response.data.statusCode !== 200) {
        toastr.error(response.data.message)
      }
    }

    fetchMark()
  }

  const lines = props.data.map((item) =>
    <a key={item.id} href="#" onClick={() => { handleMessage(item.id, item.name) }}>
      <div className="position-relative border-bottom p-1">
        <h5>{item.name}</h5>
        <span className="badge badge-info navbar-badge">{item.unRead}</span>
      </div>
    </a>
  )

  return (

    <div className="p-3">
      {lines}
    </div>
  );
}