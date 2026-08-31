# Simple JavaScript Solution

**Author:** crazyspyder2020
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1242082/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1242082/)

---

```
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let obj = {
        'a' : '0',
        "b" : '1',
        "c" : '2',
        "d" : '3',
        "e" : '4',
        'f' : '5',
        'g' : '6',
        'h' : '7',
        'i' : '8', 
        "j" : '9'
    }
    let first = "", second = "", target = ""
    for(let char of firstWord){
        first += obj[char]
    }
    for(let char of secondWord){
        second += obj[char]
    }
    for(let char of targetWord){
        target += obj[char]
    }
    return parseInt(first) + parseInt(second) === parseInt(target)
};
```