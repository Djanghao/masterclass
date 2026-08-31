# Based on Lee Approach

**Author:** treat
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/4228425/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/4228425/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun distinctSubseqII(s: String): Int {
        val arr = LongArray(26){0L}
        var sum = 0L
        for(e in s){
            var temp = arr[e - 'a']
            arr[e - 'a'] = (sum + 1L) % 1000000007L
            sum = (sum + arr[e-'a'] - temp)% 1000000007L
            if(sum < 0L){sum += 1000000007L}
        }
        return (sum).toInt()
    }
}
```