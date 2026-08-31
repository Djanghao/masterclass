# The fastest two pointer solution in Swift

**Author:** artnikitin
**Votes:** 1
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3275830/](https://leetcode.com/problems/one-edit-distance/solutions/3275830/)

---

# Intuition
We use two pointers i and j - one for each string, and a counter to count differences in both strings. On each step of the loop we compare each character of s and t. If they are equal, we increment the pointers and go on. If not, we increment the counter, and then we decide which pointer to increment. If s is longer than t, we increment i, and go on in s. If t is longer than s, we increment j, and go on in t, while s stays the same. If s and t have equal lengths, we increment both pointers. 

# Complexity
- Time complexity:
O(n) in worst case

- Space complexity:
O(n), because in Swift we have to convert strings to arrays of characters. 

# Code
```
class Solution {
    func isOneEditDistance(_ s: String, _ t: String) -> Bool {
        guard (!s.isEmpty || !t.isEmpty), s != t else { return false }

        let s = Array(s)
        let t = Array(t)

        guard abs(s.count - t.count) < 2 else { return false }

        var count = 0 

        var i = 0 
        var j = 0

        while i < s.count, j < t.count {
            if s[i] != t[j] {
                count += 1
                if s.count > t.count {
                    i += 1
                } else if t.count > s.count  {
                    j += 1
                } else {
                    i += 1
                    j += 1
                }
            } else {
                i += 1
                j += 1
            }
        }

        return count < 2
    }
}
```

Please upvote!