# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 21
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125179/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125179/)

---

# Intuition
If there is greatest common substring, then str1 + str2 should be equal to str2 + str1. Check for this first.
Then, just return substring with length of greatest_common_divisor(str1.length, str2.length).

# Complexity
- Time complexity: O(n + m)

- Space complexity: O(n + m)

# Code
```
class Solution {
    func gcdOfStrings(_ str1: String, _ str2: String) -> String {
        guard (str1 + str2) == (str2 + str1) else { return "" }
        
        let gcd = gcd(str1.count, str2.count)
        return String(str1.prefix(gcd))
    }

    func gcd(_ x: Int, _ y: Int) -> Int {
        if y == 0 {
            return x;
        } else {
            return gcd(y, x % y);
        }
    }
}
```
---

If my LeetCode solution was helpful, kindly upvote it to support my contributions and aid others in their coding journey! \uD83D\uDE0A\uD83D\uDC4D