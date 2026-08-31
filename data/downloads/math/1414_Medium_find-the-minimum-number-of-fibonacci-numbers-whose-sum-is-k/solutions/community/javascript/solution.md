# Javascript caching Fibonacci series then Greedy approach

**Author:** Seriously_Ridhi
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/585918/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/585918/)

---

Follow comments for explaination : 
```
var calcFib = function(fib, k) {
    var i = 3, nextTerm = 0;
    fib.push(0); 
	fib.push(1); 
	fib.push(1); 
    while(true) 
	{ 
        nextTerm = fib[i - 1] + fib[i - 2]; 
        if(nextTerm>k){
			return; 
		}
        fib.push(nextTerm); 
        i++; 
	} 
};
var findMinFibonacciNumbers = function(k) {
    var fib = [];
	//constructing Fibonacci table
    calcFib(fib,k);
    var count = 0, j = fib.length - 1;
    while(k > 0) 
    { 
        // divide k by j'th Fibonacci term to find number of terms it contributes in sum. 
        count += Math.floor(k / fib[j]); 
        k %= fib[j]; 
        j--; 
    } 
    return count; 
};
```