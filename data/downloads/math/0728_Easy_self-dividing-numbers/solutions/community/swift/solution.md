# Self Dividing Numbers Swift

**Author:** rab52green
**Votes:** 2
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/3472047/](https://leetcode.com/problems/self-dividing-numbers/solutions/3472047/)

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
    func selfDividingNumbers(_ left: Int, _ right: Int) -> [Int] {
        var result = [Int]()
        for i in left...right {
            var num = i
            while num != 0 {
                let rem = num % 10
                if rem == 0 || i % rem != 0 { break }
                num = num / 10
            }
            
            if num == 0 {
                result.append(i)
            }
        }

        return result
        // Array(left...right).compactMap { n in String(n).map { guard let digit = Int(String($0)), digit != 0 else { return false } return n % digit == 0 ? true : false }.contains(false) ? nil : n
    }
}

```