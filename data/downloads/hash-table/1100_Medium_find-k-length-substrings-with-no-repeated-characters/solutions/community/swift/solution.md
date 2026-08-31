# [Swift] Sliding window | easy solution

**Author:** muzle
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/5148298/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/5148298/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m) - where m is 26 characters
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func numKLenSubstrNoRepeats(_ s: String, _ k: Int) -> Int {
        guard s.count >= k else { return 0 }
        var visited = Set<Character>()
        let s = Array(s)
        var result = 0
        var left = 0

        for right in s.indices {
            while visited.contains(s[right]) {
                visited.remove(s[left])
                left += 1
            }
            visited.insert(s[right])
            if visited.count == k {
                visited.remove(s[left])
                result += 1
                left += 1
            }
        }

        return result
    }
}
```