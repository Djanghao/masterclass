# Swift solution 1 while 1 for 1 if

**Author:** vert
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/6063659/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/6063659/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func digitSum(_ s: String, _ k: Int) -> String {
        var res = Array(s) 

        while res.count > k {
            var newStr = ""
            var currSum = 0

            for i in 0..<res.count {
                currSum += res[i].wholeNumberValue ?? 0

                if (i + 1) % k == 0 || i == res.count - 1 {
                    newStr.append("\\(currSum)")
                    currSum = 0
                }
            }
            res = Array(newStr)
        }
        return String(res)
    }
}
```