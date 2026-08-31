# Kotlin: simple iterative using Triple as a cache

**Author:** aaabramov
**Votes:** 6
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/3321382/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/3321382/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun tribonacci(n: Int): Int {
        if (n == 0){
            return 0
        }
        var cache = Triple(0, 1, 1)
        for (i in 3..n){
            cache = Triple(cache.second, cache.third, cache.first + cache.second + cache.third)
        }
        return cache.third
    }
}
```