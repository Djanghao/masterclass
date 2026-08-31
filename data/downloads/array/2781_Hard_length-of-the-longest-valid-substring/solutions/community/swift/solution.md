# Swift Solution

**Author:** ShawnBaek
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5403907/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5403907/)

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
    //https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3771266/simple-solutions-with-c-java-python
    func longestValidSubstring(_ word: String, _ forbidden: [String]) -> Int {
        let forbiddenSet = Set(forbidden)
        var res = 0
        var right = word.count - 1
        let characters = Array(word)

        for left in stride(from: word.count - 1, through: 0, by: -1) {
            for k in left..<min(left + 10, right + 1) {
                let substring = String(characters[left...k])
                if forbiddenSet.contains(substring) {
                    right = k - 1
                    break
                }
            }
            res = max(res, right - left + 1)
        }

        return res
    }
}
```