function hello(){
    return "hello test";
}

function sort(numbers){
    if(numbers.length == 1) return numbers;
    else if(numbers.length == 0) return 'empty array';
    else{
        numbers.sort();
        return numbers;
    }
}

module.exports = {
    hello,
    sort
};