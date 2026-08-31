# Kotlin with comments

**Author:** amaryana
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1771364/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1771364/)

---

```
class Solution {
    fun minimumSum( num: Int): Int {
    //create the array of integers, we know from the task the size
	 var digits = IntArray(4)  
	 
      var n = num // num is val so we can reassign it to mak a var
        var i = 0 // a loop to get digits
        while (n > 0) {
            digits[i] = n % 10
            i++
            n /= 10  
        }
    digits.sort() 
	// we know that after the sorting the first two digits are going to be the smallest so we just pair them with third and forth digits
    return digits[0]*10 + digits[2] + digits[1]*10 + digits[3] 
 }
}
```