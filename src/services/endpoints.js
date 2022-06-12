import axios from "axios";
import { getStorgeItem } from "./storage";

const APP_URL = 'localhost:3000'

export const postLogin = async (email, password) => {
  return {
    "data": {
      "data": {
        "dtoLoginUser": {
          "id": 3,
          "name": "Mehmet",
          "surname": "Tunay",
          "email": "malitunay1@gmail.com",
          "userName": "malitunay",
          "rolId": 1,
          "roleName": "Admin"
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYWxpdHVuYXkxQGdtYWlsLmNvbSIsImp0aSI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsIm5iZiI6MTY1NTA1MDczNSwiZXhwIjoxNjU1MTM3MTM1LCJpc3MiOiJodHRwczovL2FwaS50dW5heXlhemlsaW0uY29tIiwiYXVkIjoiaHR0cHM6Ly9hcGkudHVuYXl5YXppbGltLmNvbSJ9.5eju5wm6Cof7SrhfH_-XMtC0ottmJmhU01qobOFnH9o"
      }
    }
  }
  return axios.post(APP_URL + "/api/Account/Login", {
    email: email,
    password: password
  });
}

export const changePassword = async (email, oldPassword, newPassword) => {
  return {
    "data":
    {
      "message": "Parolanız başarılı bir şekilde güncellendi.",
      "statusCode": 200,
      "data": {
        "id": 3,
        "email": "malitunay4@gmail.com",
        "oldPassword": "/E9ggGiBcT8=",
        "newPassword": "1123"

      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/User/ChangePassword", {
    email: email,
    oldPassword: oldPassword,
    newPassword: newPassword
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getAllActiveUsersList = async () => {

  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 3,
          "userName": "malitunay",
          "name": "Mehmet",
          "surname": "Tunay",
          "userTypeId": 3,
          "password": "/E9ggGiBcT8=",
          "tcnumber": "12345678788",
          "email": "malitunay1@gmail.com",
          "phoneNumber": "1234567889",
          "plate": "34AA12   ",
          "rolId": 1,
          "isActive": true
        },
        {
          "id": 4,
          "userName": "hasanyildiz",
          "name": "Ali",
          "surname": "Yıldız",
          "userTypeId": 3,
          "password": "/E9ggGiBcT8=",
          "tcnumber": "12312312312",
          "email": "malitunay6@gmail.com",
          "phoneNumber": "5554443322",
          "plate": "         ",
          "rolId": 2,
          "isActive": true
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + '/api/User/GetAllActiveUsers', {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  });
}


export const addUser = async (userName, name, surname, userTypeId, password, tcnumber, email, phoneNumber, plate, rolId) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 26,
        "userName": "hasanyildiz",
        "name": "Ali",
        "surname": "Yıldız",
        "userTypeId": 3,
        "password": "RlcudnLaFd4=",
        "tcnumber": "12312312312",
        "email": "malitunay4@gmail.com",
        "phoneNumber": "5554443322",
        "plate": "34AA12",
        "rolId": 2,
        "isActive": true
      }
    }
  };

  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/User/AddUser", {
    userName: userName,
    name: name,
    surname: surname,
    userTypeId: userTypeId,
    password: password,
    tcnumber: tcnumber,
    email: email,
    phoneNumber: phoneNumber,
    plate: plate,
    rolId: rolId,
    isActive: true
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const updateUser = async (userName, name, surname, userTypeId, password, tcnumber, email, phoneNumber, plate, rolId) => {
  return {
    "data": {
      "id": 1,
      "userName": "Admin",
      "name": "Mehmet Ali",
      "surname": "Tunay",
      "userTypeId": 1,
      "tcnumber": "50812333221",
      "email": "malitunay11@gmail.com",
      "phoneNumber": "5554433211",
      "plate": "34AAA11",
      "rolId": 1,
      "isActive": true
    }
  }

  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/User/UpdateUser", {
    userName: userName,
    name: name,
    surname: surname,
    userTypeId: userTypeId,
    tcnumber: tcnumber,
    password: password,
    email: email,
    phoneNumber: phoneNumber,
    plate: plate,
    rolId: rolId,
    isActive: true
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const deleteUser = async (userId) => {
  return {
    "data": {
      "message": "Kullanıcı silme işlemi başarılı",
      "statusCode": 200,
      "data": {
        "id": 6,
        "userName": "hasanyildiz",
        "name": "Hasan",
        "surname": "Yıldız",
        "userTypeId": 3,
        "password": "IS4Z63vOkH8=",
        "tcnumber": "12312312312",
        "email": "malitunay5@gmail.com",
        "phoneNumber": "5554443322",
        "plate": "         ",
        "rolId": 2,
        "isActive": false
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.put(APP_URL + "/api/User/DeleteUser?userId=" + userId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const findUser = async (userId) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 7,
        "userName": "hasanyildiz",
        "name": "Ali",
        "surname": "Yıldız",
        "userTypeId": 3,
        "password": "/E9ggGiBcT8=",
        "tcnumber": "12312312312",
        "email": "malitunay9@gmail.com",
        "phoneNumber": "5554443322",
        "plate": "         ",
        "rolId": 2,
        "isActive": true
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + "/api/User/Find?id=" + userId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const addApartment = async (apartmentBlockNo, apartmentType, apartmentFloor, apartmentNo) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 13,
        "apartmentBlockNo": "A2",
        "apartmentStatusId": 1,
        "apartmentType": "2+1",
        "apartmentFloor": 1,
        "apartmentNo": 5,
        "userId": 4,
        "isActive": true
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Apartment/AddApartment", {
    apartmentBlockNo: apartmentBlockNo,
    apartmentType: apartmentType,
    apartmentFloor: apartmentFloor,
    apartmentNo: apartmentNo
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const updateApartment = async (apartmentBlockNo, apartmentType, apartmentFloor, apartmentNo) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 1,
        "apartmentBlockNo": "A2",
        "apartmentStatusId": 3,
        "apartmentType": "3+1",
        "apartmentFloor": 2,
        "apartmentNo": 2,
        "userId": 5,
        "isActive": false
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Apartment/UpdateApartment", {
    apartmentBlockNo: apartmentBlockNo,
    apartmentType: apartmentType,
    apartmentFloor: apartmentFloor,
    apartmentNo: apartmentNo
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const deleteApartment = async (id) => {
  return {
    "data": {
      "message": "Daire silme işlemi başarılı",
      "statusCode": 200,
      "data": {
        "id": 14,
        "apartmentBlockNo": "A2",
        "apartmentStatusId": 1,
        "apartmentType": "2+1",
        "apartmentFloor": 1,
        "apartmentNo": 5,
        "userId": 4,
        "isActive": false
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.delete(APP_URL + '/api/Apartment/DeleteApartment?id=' + id, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getAllApartments = async () => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 5,
          "apartmentBlockNo": "A2",
          "apartmentStatusId": 1,
          "apartmentType": "2+1",
          "apartmentFloor": 1,
          "apartmentNo": 1,
          "userId": 5,
          "isActive": false
        },
        {
          "id": 6,
          "apartmentBlockNo": "A2",
          "apartmentStatusId": 1,
          "apartmentType": "2+1",
          "apartmentFloor": 1,
          "apartmentNo": 1,
          "userId": 6,
          "isActive": false
        }
      ]
    }
  }

  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + "/api/Apartment/GetAll", {}, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const findApartment = async (id) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 7,
        "apartmentBlockNo": "A2",
        "apartmentStatusId": 1,
        "apartmentType": "2+1",
        "apartmentFloor": 1,
        "apartmentNo": 2,
        "userId": 7,
        "isActive": true
      }
    }
  }

  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + "/api/Apartment/Find?id=" + id, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const assignApartmentToUser = async (Id, UserId) => {
  return {
    "data": {
      "message": "A2 bloktaki 3 nolu daire Ali Yıldız kullanıcısına tahsis edilmiştir.",
      "statusCode": 200,
      "data": {
        "id": 8,
        "apartmentBlockNo": "A2",
        "apartmentStatusId": 1,
        "apartmentType": "2+1",
        "apartmentFloor": 1,
        "apartmentNo": 3,
        "userId": 8,
        "isActive": true
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Apartment/AssignApartmentToUser", {
    Id,
    UserId
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const addInvoiceToApartment = async (invoicePeriod, invoiceTypeId, invoiceAmount, apartmentId, paymentDateTime) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 21,
        "invoicePeriod": 102022,
        "invoiceTypeId": 1,
        "invoiceStatusId": 1,
        "invoiceAmount": 100,
        "apartmentId": 5,
        "paymentDateTime": "2022-06-04T22:08:11.176Z"
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Invoice/AddInvoiceToApartment", {
    invoicePeriod: invoicePeriod,
    invoiceTypeId: invoiceTypeId,
    invoiceAmount: invoiceAmount,
    apartmentId: apartmentId,
    paymentDateTime: paymentDateTime
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};



export const addInvoiceToAllApartments = async (invoicePeriod, invoiceTypeId, invoiceAmount, paymentDateTime) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": true
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Invoice/AddInvoiceToAllApartments", {
    invoicePeriod: invoicePeriod,
    invoiceTypeId: invoiceTypeId,
    invoiceAmount: invoiceAmount,
    paymentDateTime: paymentDateTime
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};



export const getInvoicesByStatusId = async (invoiceStatusId) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 4,
          "invoicePeriod": 102022,
          "invoiceTypeId": 1,
          "invoiceStatusId": 2,
          "invoiceAmount": 100.00,
          "apartmentId": 5,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        },
        {
          "id": 9,
          "invoicePeriod": 102022,
          "invoiceTypeId": 1,
          "invoiceStatusId": 2,
          "invoiceAmount": 100.00,
          "apartmentId": 7,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + '/api/Invoice/GetInvoicesByStatusId?invoiceStatusId=' + invoiceStatusId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getAllInvoices = async () => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 4,
          "invoicePeriod": 102022,
          "invoiceTypeId": 1,
          "invoiceStatusId": 2,
          "invoiceAmount": 100.00,
          "apartmentId": 5,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        },
        {
          "id": 9,
          "invoicePeriod": 102022,
          "invoiceTypeId": 1,
          "invoiceStatusId": 2,
          "invoiceAmount": 100.00,
          "apartmentId": 7,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + '/api/Invoice/GetAll', {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getInvoice = async (id) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 8,
        "invoicePeriod": 102022,
        "invoiceTypeId": 1,
        "invoiceStatusId": 1,
        "invoiceAmount": 10000.00,
        "apartmentId": 6,
        "paymentDateTime": "2022-06-04T22:08:11.177"
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + '/api/Invoice/Find?id=' + id, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const getInvoicesBySignedUserIdAndInvoiceStatusId = async (invoiceStatusId) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 19,
          "invoicePeriod": 102022,
          "invoiceTypeId": 3,
          "invoiceStatusId": 1,
          "invoiceAmount": 500.00,
          "apartmentId": 12,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        },
        {
          "id": 20,
          "invoicePeriod": 102022,
          "invoiceTypeId": 3,
          "invoiceStatusId": 1,
          "invoiceAmount": 600.00,
          "apartmentId": 12,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        },
        {
          "id": 26,
          "invoicePeriod": 102022,
          "invoiceTypeId": 3,
          "invoiceStatusId": 1,
          "invoiceAmount": 500.00,
          "apartmentId": 12,
          "paymentDateTime": "2022-06-04T22:08:11.177"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');
  return axios.get(APP_URL + '/api/Invoice/GetInvoicesBySignedUserIdAndInvoiceStatusId?invoiceStatusId=' + invoiceStatusId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const sendMessageToAdmin = async (messageText) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 0,
        "relatedUserId": 12,
        "senderId": 12,
        "receiverId": 1,
        "messageStatusId": 1,
        "time": "2022-06-11T04:10:08.2133996+03:00",
        "messageText": "admine selam"
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Message/SendMessageToAdmin", {
    messageText: messageText
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};
export const GetAllUsersMessages = async (messageText) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 1,
          "name": "Mruat",
          "unRead": 5
        },
        {
          "id": 3,
          "name": "hasde",
          "unRead": 2
        },
        {
          "id": 7,
          "name": "Tunay",
          "unRead": 3
        },
        {
          "id": 4,
          "name": "Selim",
          "unRead": 2
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');

  return axios.get(APP_URL + "/api/Message/GetAllUsersMessages", {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const sendMessageToUser = async (receiverId, messageText) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 1,
          "relatedUserId": 7,
          "senderId": 7,
          "receiverId": 1,
          "messageStatusId": 1,
          "time": "2022-06-05T13:53:59.477",
          "messageText": "admine selam"
        },
        {
          "id": 3,
          "relatedUserId": 7,
          "senderId": 3,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-05T13:57:03.857",
          "messageText": "as. usera da selam"
        },
        {
          "id": 3,
          "relatedUserId": 7,
          "senderId": 3,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-05T13:57:03.857",
          "messageText": "as. usera da selam"
        },
        {
          "id": 4,
          "relatedUserId": 7,
          "senderId": 4,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-11T04:03:19.197",
          "messageText": "as. usera da selam"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Message/SendMessageToUser", {
    receiverId: receiverId,
    messageText: messageText
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getMessagesByUserId = async (userId) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 1,
          "relatedUserId": 7,
          "senderId": 7,
          "receiverId": 1,
          "messageStatusId": 1,
          "time": "2022-06-05T13:53:59.477",
          "messageText": "admine selam"
        },
        {
          "id": 3,
          "relatedUserId": 7,
          "senderId": 3,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-05T13:57:03.857",
          "messageText": "as. usera da selam"
        },
        {
          "id": 4,
          "relatedUserId": 7,
          "senderId": 3,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-11T04:03:19.197",
          "messageText": "as. usera da selam"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');
  return axios.get(APP_URL + '/api/Message/GetMessagesByUserId?userId=' + userId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};


export const GetMessagesBySigninUserId = async () => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 5,
          "relatedUserId": 12,
          "senderId": 12,
          "receiverId": 1,
          "messageStatusId": 1,
          "time": "2022-06-11T04:10:08.213",
          "messageText": "admine selam"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');
  return axios.get(APP_URL + '/api/Message/GetMessagesBySigninUserId', {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const GetAllMessages = async () => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": [
        {
          "id": 5,
          "relatedUserId": 12,
          "senderId": 12,
          "receiverId": 1,
          "messageStatusId": 1,
          "time": "2022-06-11T04:10:08.213",
          "messageText": "admine selam"
        },
        {
          "id": 1,
          "relatedUserId": 7,
          "senderId": 7,
          "receiverId": 1,
          "messageStatusId": 1,
          "time": "2022-06-05T13:53:59.477",
          "messageText": "admine selam"
        },
        {
          "id": 3,
          "relatedUserId": 7,
          "senderId": 1,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-05T13:57:03.857",
          "messageText": "as. usera da selam"
        },
        {
          "id": 4,
          "relatedUserId": 7,
          "senderId": 1,
          "receiverId": 7,
          "messageStatusId": 1,
          "time": "2022-06-11T04:03:19.197",
          "messageText": "as. usera da selam"
        }
      ]
    }
  }
  const auth = getStorgeItem('auth');
  return axios.get(APP_URL + '/api/Message/GetAll', {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const payInvoice = async (id, creditCardNo, creditCardExpireMonth, creditCardExpireYear, creditCardCCV) => {
  return {
    "data": {
      "message": "Success",
      "statusCode": 200,
      "data": {
        "id": 12,
        "invoicePeriod": 102022,
        "invoiceTypeId": 2,
        "invoiceStatusId": 2,
        "invoiceAmount": 1000.00,
        "apartmentId": 7,
        "paymentDateTime": "2022-06-04T22:08:11.177"
      }
    }
  }
  const auth = getStorgeItem('auth');

  return axios.post(APP_URL + "/api/Invoice/PayInvoice?invoiceId=" + id, {
    creditCardNo: creditCardNo,
    creditCardExpireMonth: creditCardExpireMonth,
    creditCardExpireYear: creditCardExpireYear,
    creditCardCCV: creditCardCCV
  }, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
};

export const getCreditCardInfo = async (userId) => {
  return {
    data: {
      "id": {
        "timestamp": 1654804943,
        "machine": 6962609,
        "pid": -19292,
        "increment": 2987377,
        "creationTime": "2022-06-09T20:02:23Z"
      },
      "userId": 12,
      "creditCardNo": "996403968",
      "creditCardExpireMonth": "10",
      "creditCardExpireYear": "25",
      "creditCardCCV": "802",
      "creditCardBudget": "8290,00"
    }
  }

  const auth = getStorgeItem('auth');
  return axios.get(APP_URL + '/api/Payment/GetByUserId?userId=' + userId, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}

export const MarkAsRead = (relatedUserId) => {
  return {
    data: {
      "message": "Success",
      "statusCode": 200,
      "data": true
    }
  }
  const auth = getStorgeItem('auth');
  return axios.post(APP_URL + '/api/MarkRead?relatedUserId=' + relatedUserId, {}, {
    headers: {
      'Authorization': `Bearer ${auth.accessToken}`
    }
  })
}