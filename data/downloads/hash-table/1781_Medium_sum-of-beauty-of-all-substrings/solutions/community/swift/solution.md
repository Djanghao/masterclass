# 246 ms solution with TC O(n^2) and SC O(1)

**Author:** sashkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/3924663/](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/solutions/3924663/)

---


# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution {
    func beautySum(_ s: String) -> Int {
        if s.count < 3 { return 0 }
        var result = 0
        var idx = s.startIndex
        while idx != s.endIndex {
            var jdx = idx
            var dict: [Character: Int] = [:]
            while jdx != s.endIndex {
                let char = s[jdx]
                dict[char, default: 0] += 1
                let beauty = dict.values.max()! - dict.values.min()!
                result += beauty
                s.formIndex(after: &jdx)
            }
            s.formIndex(after: &idx)
        } 

        return result
    }
}
```