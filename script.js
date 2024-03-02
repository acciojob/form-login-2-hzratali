//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var formData = new FormData(this);
        var formValues = {};
        
        formData.forEach(function(value, key){
            formValues[key] = value;
        });
        
        var alertText = '';
        for (var key in formValues) {
            alertText += key + ': ' + formValues[key] + ' ';
        }
        
        alert(alertText.trim());
    });