# Solution Consecutive Numbers Sum

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/4794873/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/4794873/)

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
    function consecutiveNumbersSum($N) {
        $sum = 0;
        $ans = 0;
        
        for ($i = 1; $sum < $N; $i++) {
            $sum += $i;
            if (($N - $sum) % $i == 0) {
                $ans++;
            }
        }
        
        return $ans;
    }
}

```