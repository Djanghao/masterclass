# Swift Solution

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/3929832/](https://leetcode.com/problems/decode-xored-permutation/solutions/3929832/)

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
    func decode(_ encoded: [Int]) -> [Int] {
        var numberOfElements = encoded.count + 1
        var xorAll = 0

        for iterator in 1...numberOfElements {
            xorAll = (xorAll ^ iterator)
        }

        var prev = encoded[0]
        var sequence = encoded[0]
        for iterator in 1..<(numberOfElements - 1) {
            sequence = sequence ^ encoded[iterator]
            prev = prev ^ sequence
        }
        var ans = [Int]()
        let firstElement = xorAll ^ prev
        ans.append(firstElement)
        var element = firstElement
        for iterator in 0..<(numberOfElements - 1) {
            var value = encoded[iterator] ^ element
            ans.append(value)
            element = value
        }

        return ans
    }  
}
```