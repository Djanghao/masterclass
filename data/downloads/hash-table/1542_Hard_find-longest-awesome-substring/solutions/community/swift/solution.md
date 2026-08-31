# Swift, bit mask and dictionary

**Author:** ebyccc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-awesome-substring/solutions/3375935/](https://leetcode.com/problems/find-longest-awesome-substring/solutions/3375935/)

---

# Intuition
we use a mask to track the number of each digit we have seen. For example, if we have seen an even number of digit 7, we would set 0 in the 7th bit position in the mask, otherwise we set it to 1.
We also use a dictionary to track the first position we have seen this mask.
Then we use bit manipulation to test if there exist a subarray that has only one single digit, or no single digit.

# Code
```
class Solution {
    func longestAwesome(_ s: String) -> Int {
        let s = Array(s)
        var visited = [Int: Int]()
        visited[0] = -1
        var mask = 0
        var res = 0
        for i in 0..<s.count {
            let c = s[i]
            let bit = c.asciiValue! - Character("0").asciiValue!
            mask ^= 1 << bit
            for (old_mask, index) in visited {
                var diff = mask ^ old_mask
                if diff == 0 || ((diff & (diff - 1)) == 0) {
                    res = max(i - index, res)
                }
            }
            if visited[mask] == nil {
                visited[mask] = i
            }
        }
        return res
    }
}
```