# Distinct Prime Factor

**Author:** suryanshushukla2001
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3024614/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3024614/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- TC is O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- Space complexity is O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun distinctPrimeFactors(nums: IntArray): Int {
    var hashSet = HashSet<Int>()
    for (s in nums){
        var n= s
        var i = 2
        while (n >1){
            if (n%i==0){
                hashSet.add(i)
                n/=i
            }else{
                i++
            }
        }
    }
    return hashSet.size
    }
}
```