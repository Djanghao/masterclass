# Clean & Simple JavaScript Solution

**Author:** Hurmit
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2981809/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/2981809/)

---

# Code
```
var closestPrimes = function(left, right) {
    let primeArr = [];
    let res = [-1, -1];
    let minDiff = Infinity;

    for(let i=left; i<=right; i++){
        if(isPrime(i)) primeArr.push(i)
    }

    for(let i=1; i<primeArr.length; i++){
        let diff = primeArr[i]-primeArr[i-1];
        if(diff<minDiff){
            res = [primeArr[i-1], primeArr[i]]
            minDiff = diff;
        }
    }
    return res

};

function isPrime(n) {
    if (n === 1) return false;
    if (n % 2 === 0) return n === 2;
    let max = Math.floor(Math.sqrt(n)) ;
    for(let i = 3; i <= max; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}
```
## Please upvote.