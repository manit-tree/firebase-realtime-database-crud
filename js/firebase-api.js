(function(){
  firebase.initializeApp(app.firebaseConfig);

  function fnCreate(path, body, callBack) {
    if (!path || !body) return;
    firebase.database().ref(path).set(body, callBack);
  }

  function fnRead(path, successCallback, errorCallBack) {
    if (!path || !successCallback || !errorCallBack) return;
    firebase.database().ref(path).once('value').then(successCallback, errorCallBack);
  }

  function fnUpdate(path, body, callBack) {
    if (!path || !body) return;
    firebase.database().ref(path).update(body, callBack);
  }

  function fnDelete(path, callBack) {
    if (!path) return;
    firebase.database().ref(path).remove(callBack);
  }

  app.firebase_api = {
    create: fnCreate,
    read: fnRead,
    update: fnUpdate,
    delete: fnDelete
  }
})();