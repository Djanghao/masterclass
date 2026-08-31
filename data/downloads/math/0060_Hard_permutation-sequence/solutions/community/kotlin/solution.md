# Kotlin Solution

**Author:** ashutosh_kumar_kushwaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/5228458/](https://leetcode.com/problems/permutation-sequence/solutions/5228458/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun getPermutation(n: Int, k: Int): String {
        val numbers = mutableListOf<Int>()
        var fact = 1
	    var k = k-1
        for(i in 1 until n){
            numbers.add(i)
            fact *= i
        }
        numbers.add(n)
        var ans = ""
        while(true){
            ans += numbers[k / fact].toString()
            numbers.removeAt(k / fact)
            if(numbers.isEmpty()) break
            k %= fact
            fact /= numbers.size
        }
    
        return ans
    }
}
```