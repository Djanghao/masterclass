# swift easy solution, 100% beats

**Author:** Zhanadilll
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4437272/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4437272/)

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
    func sumOfNumberAndReverse(_ num: Int) -> Bool {
        if num == 0 { return true }
        for i in 0..<num {
            var reversedStr = String(i).reversed()
            if i + Int(String(reversedStr))! == num {
                return true
            }
        }

        return false
    }
}
```