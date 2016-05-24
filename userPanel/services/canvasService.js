userApp.factory('canvasService', function ($http,$resource,$location) {
  return {

    saveCanvas: function(canvasData){     
      var data = {
        user_id: 1,
        data: canvasData
      }
      
      localStorage.setItem("ucID", '');
      localStorage.setItem("ca_title", canvasData.ca_title);
      localStorage.setItem("ca_desc", canvasData.ca_desc);

      var response = $http.post(baseURL+'/brasstacksapi/index.php/Api/canvas',data);
      response.success(function(data){
        localStorage.setItem("qu_mcID", data.caID);
        window.location = baseURL+'/responcePanel/#/';
        // $location.path('/responce');
      }).error(function(err){
        toastr.warning(err);
      });
    },

    getModelList: function(){
      var data = {
        params: {user_id: 1}
      }

      return $http.get(baseURL+'/brasstacksapi/index.php/Api/model',data);

    },

    getResponces: function(){
      var data = {
        params: {user_id: 1}
      }
      return $http.get(baseURL+'/brasstacksapi/index.php/Api/userresponse',data);
    },

    editResponce: function(ucID){
      localStorage.setItem("ucID", ucID);
      localStorage.setItem("ca_title", '');
      localStorage.setItem("ca_desc", '');
      console.log(localStorage.getItem('ucID'));
      window.location = baseURL+'/responcePanel/#/';
      // $location.path('/responce');
    }

  }
});