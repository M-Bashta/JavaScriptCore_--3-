function show(data){
    console.log(data);
}

var value = 0;

if (value>0){
    show('The number is greater than 0');
}

else if(value<0){
    show('The number is less than 0')
}

else{
    ('The number is 0')
}


var login = 'Admin'
var password = 'TheMaster'

if(login == 'Admin'){
    if(password == 'TheMaster'){
        show('Welcom');
    }
    
    else if(password == 'Other'){
        show('Wrong password')
    }
    
    else{
        show('Canceled');
    }
}

else if(login == 'Other'){
    show('I dont know you')
}

else{
    show('Canceled')
}
