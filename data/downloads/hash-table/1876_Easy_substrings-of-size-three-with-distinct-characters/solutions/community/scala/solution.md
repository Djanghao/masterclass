# Sliding Window Approach

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5221036/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/5221036/)

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
object Solution {
    def countGoodSubstrings(s: String): Int = {
        var len = 0
        var i = 0
        var ans = 0
        var mp = scala.collection.mutable.Map[Char, Int]().withDefaultValue(0)

        for(j <- s) {
            mp(j) += 1
            len += 1

            while(mp(j) > 1 && i<=j) {
                mp(s(i)) -= 1
                len -= 1
                i += 1
            }

            if(len == 3) {
                ans += 1
                mp(s(i)) -= 1
                i += 1
                len -= 1
            }
        }

        ans
    }
}
```