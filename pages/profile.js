import {useEffect, useContext} from 'react';
import {FaUser} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import {useQuery} from 'react-query';
import axios from 'axios';

function Profile () {


  const user = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/users/me')
      return res

    } catch(err) {console.log(err.response)}

  
  }


  const {data, isLoading, status, isError} = useQuery('user', user)

  console.log(status)
  console.log(isLoading)
  console.log(data)

  if (data) {

    return (
    <div className="profile__page">

      <div className="profile__container">

        <div className="profile__top">
          <div className="profile__image">

            <FaUser size={'15rem'} fill={'grey'}></FaUser>
          </div>

          <div className="profile__title">
            <h1>{data.name}</h1>
          </div>
        </div>

        <div className="profile__bottom">
          <div className="personal__info">
            <div className="personal__info-box">
              <div className="title">
                <h3>Name</h3>
              </div>
              <div className="value">
                {data.name}
              </div>
            </div>
            <div className="personal__info-box">
              <div className="title">
                <h3>E-mail</h3>
              </div>
              <div className="value">
                {data.email}
              </div>
            </div>
            <div className="personal__info-box">
              <div className="title">
                <h3>Gender</h3>
              </div>
              <div className="value">
                {data.gender}
              </div>
            </div>
            <div className="personal__info-box">
              <div className="title">
                <h3>Date of Birth</h3>
              </div>
              <div className="value">
                {data.dateOfBirth}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )} else return null
}

export default Profile;