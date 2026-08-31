# Basic Swift Solution

**Author:** manvendu587
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5820108/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5820108/)

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
```swift []
class Solution {
    func generateKey(_ num1: Int, _ num2: Int, _ num3: Int) -> Int {
        var result = "" 
        var num1 = num1
        var num2 = num2
        var num3 = num3
        while(num1 > 0 || num2 > 0 || num3  > 0){
           let i = num1 % 10 == 0 ? 0 : num1 % 10
            let j = num2 % 10 == 0 ? 0 : num2 % 10
            let k = num3 % 10 == 0 ? 0 : num3 % 10

            var m = min(i,j,k)
            result.append("\\(m)")
            num1 = num1 / 10
            num2 = num2 / 10
            num3 = num3 / 10
        }
        let reversedResult = String(result.reversed())
        return Int(reversedResult) ?? 0
    }
}
```