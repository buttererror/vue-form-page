const axios = require('axios');

export const getPreparations = ({state}) => {
   axios({
      method: "get",
      url: "https://roles.viewclass.com/api/preparing.list",
      params: {
         subject_id: 1
      }
   }).then((response) => {
      for(let prop in response.data[1]) {
         state.preparations.push({id: prop, item: response.data[1][prop]});
      }
   })
};

export const getSpecialLibraries = ({state}) => {
   axios({
      methos: "get",
      url: "https://roles.viewclass.com/api/custom-libraries.list"
   }).then((response) => {
      for(let prop in response.data[1]) {
         state.specialLibraries.push({id: prop, item: response.data[1][prop]});
      }
   })
};

export const getStudents = ({state}) => {
   axios({
      method: "get",
      url: "https://roles.viewclass.com/api/class.students.list",
      params: {
         class_id: 1
      }
   }).then((response) => {
      for(let prop in response.data[1]) {
         state.students.push({id: prop, name: response.data[1][prop]});
      }
   })
};

export const createVideo = ({state}) => {
   return new Promise((resolve, reject) => {
      axios({
         methos: "post",
         url: "https://roles.viewclass.com/api/library.video.create",
         params: {...state.video}
      }).then((response) => {
         if(response.data[0]) {
            resolve(response);
         }

      }).catch((err) => {
         reject();
         console.log(err)
      })
   })
};