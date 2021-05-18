function hello(){
    return "hello test";
}

function sort(tosort){
    if(typeof(tosort) == typeof('')){
        letters  = tosort.split('');
        if(letters.length == 1) return letters;
        else if(letters.length == 0) return 'empty array';
        else{
        let sorted_letters = sortingNumbers(letters);
        sorted_letters = sorted_letters.join('');
        return sorted_letters;
    }
    }
    else {
        numbers = tosort;
        if(numbers.length == 1) return numbers;
        else if(numbers.length == 0) return 'empty array';
        else{
        let sorted_numbers = sortingNumbers(numbers);
        return sorted_numbers;
    }
    }
}

function sortingNumbers(numbers){
    const size = numbers.length;
    for(let i=0; i<size; i++)
    {
        for(let j=i+1; j<size; j++)
        {
            if(numbers[i] > numbers[j])
            {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

module.exports = {
    hello,
    sort
};