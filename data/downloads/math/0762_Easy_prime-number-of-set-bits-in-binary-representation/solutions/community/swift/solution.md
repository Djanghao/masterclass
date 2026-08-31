# ✅ [Swift] Easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/2866532/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/2866532/)

---

```
class Solution {
    func countPrimeSetBits(_ left: Int, _ right: Int) -> Int {
	    var left = left
	    var result = 0
	    while left <= right {
		    result += isPrime(left.nonzeroBitCount) ? 1 : 0
		    left += 1
	    }
	    return result
    }

    func isPrime(_ number: Int) -> Bool {
	    return number > 1 && !(2..<number).contains { number % $0 == 0 }
    }
}
```