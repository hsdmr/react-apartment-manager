import { useEffect, useState } from "react"
import { Script } from "../../components/Script"
import { useParams } from "react-router-dom";
import { addUser, findUser, updateUser } from "../../services/endpoints";


function SingleUser() {
  let params = useParams();

  const { toastr } = Script('/plugins/toastr/toastr.min.js', 'toastr')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [tc, setTc] = useState('')
  const [number, setNumber] = useState('')
  const [plate, setPlate] = useState('')
  const [role, setRole] = useState(0)

  const handleSubmit = async () => {
    if (password !== rpassword) {
      toastr.error('Passwords do not match!')
      return
    }
    if (email === '') {
      toastr.error('Email must be fill')
      return
    }
    if (name === '') {
      toastr.error('First name must be fill')
      return
    }
    let response
    if (params.id !== 'new') {
      response = await updateUser(params.id)
    } else {
      response = await addUser()
    }
    if (response.data.statusCode === 200) {
      toastr.success(response.data.message)
    } else {
      toastr.error(response.data.message)
    }
  };

  useEffect(() => {
    if (params.id !== 'new') {
      async function fetchData() {
        let response = await findUser(params.id)
        setEmail(response.data.data.email)
        setName(response.data.data.name)
        setSurname(response.data.data.surname)
        setTc(response.data.data.tcnumber)
        setNumber(response.data.data.phoneNumber)
        setPlate(response.data.data.plate)
        setRole(response.data.data.rolId)
      }

      fetchData()
    }
  }, [params])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >First Name</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setName(e.target.value) }} value={name} />
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Last Name</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="surname" onChange={(e) => { setSurname(e.target.value) }} value={surname} />
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Email</p>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Password</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Password Repeat</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="rpassword" onChange={(e) => { setRpassword(e.target.value) }} value={rpassword} />
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Tc No</p>
                      <div className="col-sm-10">
                        <input type="number" className="form-control" id="tc" onChange={(e) => { setTc(e.target.value) }} value={tc} />
                      </div>
                    </label>
                  </div >
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Plate</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="plate" onChange={(e) => { setPlate(e.target.value) }} value={plate} />
                      </div>
                    </label>
                  </div >
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label" >Phone Number</p>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="number" onChange={(e) => { setNumber(e.target.value) }} value={number} />
                      </div>
                    </label>
                  </div >
                  <div className="form-group">
                    <label className="row">
                      <p className="col-sm-2 col-form-label">Role</p>
                      <div className="col-sm-10">
                        <select className="form-control" id="role" onChange={(e) => { setRole(e.target.value) }} value={role}>
                          <option value={1}>Admin</option>
                          <option value={2}>User</option>
                        </select>
                      </div>
                    </label>
                  </div>
                </form >
              </div >
            </div >
          </div >
        </div >
        <div className="card" id="save-card">
          <div className="card-body">
            <button className="btn btn-success btn-sm float-right" onClick={handleSubmit}>Kaydet</button>
          </div>
        </div>
      </div >
    </>
  );
}

export default SingleUser;