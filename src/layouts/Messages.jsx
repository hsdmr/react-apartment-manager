import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import MessagesLines from "../components/MessageLines";
import { GetAllUsersMessages } from "../services/endpoints";
import { getStorgeItem } from "../services/storage";

function Header() {
  const auth = getStorgeItem('auth');
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getFetch() {
      let response
      if (auth.dtoLoginUser.rolId === 1) {
        response = await GetAllUsersMessages()
        setData(response.data.data)
      } else {
        setShow(true)
      }
    }
    getFetch()
  }, [show, id, name])

  if (auth.dtoLoginUser.rolId === 1) {
    return (
      <>
        <aside className="control-sidebar control-sidebar-dark">
          <MessagesLines data={data} setId={setId} setName={setName} setShow={setShow} />
        </aside>
        <Chat id={id} name={name} show={show} setShow={setShow} />
      </>
    );
  } else {
    return (
      <Chat id={id} name={name} show={show} setShow={setShow} />
    );
  }
}

export default Header;