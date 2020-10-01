(function(){
    var uid = '1238';

    function fnCreate() {
        var path = 'users/' + uid;

        var data = {
            name: "Gabriel",
            gender: "male",
            age: 16
        };

        app.firebase_api.create(path, data, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }

    function fnRead() {
        var path = 'users/' + uid;
        app.firebase_api.read(path, successCallback, errorCallback);
        
        function successCallback(snapshot){
            if (snapshot && snapshot.val()) {
                console.log(snapshot.val());
            } else {
                console.log('no data found!');
            }
        }

        function errorCallback(err) {
            console.log(err);
        }
    }

    function fnUpdate() {
        var path = 'users/' + uid;
        var data = {
            name: "Sampao",
            gender: "male",
            age: 23
        }

        app.firebase_api.update(path, data, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }

    function fnDelete() {
        var path = 'users/' + uid;
        app.firebase_api.delete(path, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }

    app.create = fnCreate;
    app.read = fnRead;
    app.update = fnUpdate;
    app.delete = fnDelete;
})()