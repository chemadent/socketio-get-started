var loop = setInterval(function() {
        var ranNum = Math.floor(Math.random()*5);
        if(ranNum == 4){
            clearInterval(loop);
            console.log('ranNum = 4\nclearInterval!');
        }
        else console.log('ranNum=',ranNum);
}, 2000);