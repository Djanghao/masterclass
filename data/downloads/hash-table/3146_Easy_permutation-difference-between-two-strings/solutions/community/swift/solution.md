# Swift solution

**Author:** azm819
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5211551/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5211551/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findPermutationDifference(_ s: String, _ t: String) -> Int {
        var indices = [Character: Int]()
        for (ind, ch) in s.enumerated() {
            indices[ch] = ind
        }
        
        var result = 0
        for (ind, ch) in t.enumerated() {
            result += abs(indices[ch]! - ind)
        }

        return result
    }
}
```