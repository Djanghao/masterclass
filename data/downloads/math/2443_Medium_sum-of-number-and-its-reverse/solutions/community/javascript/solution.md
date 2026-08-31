# Javascript Solution

**Author:** __Anshul__
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2880232/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2880232/)

---

**Consideration To Solve:**
	One part of the number must be greater than or equal half of the original Number.

```
var sumOfNumberAndReverse = function(num) {
    if(num == 0) {
        return true
    }
    let i = Math.floor(num/2)
    while(i<num) {
        if(i+reverseANumber(i) == num) {
            return true
        }
        i++
    }
    return false
};

var reverseANumber = function (x, base = 10) {
	let result = 0;

	while (x != 0) {
		lastDigit = x % base;
		result    = result * base + lastDigit;
		x         = Math.floor(x / base);
	}

	return result;
};
```