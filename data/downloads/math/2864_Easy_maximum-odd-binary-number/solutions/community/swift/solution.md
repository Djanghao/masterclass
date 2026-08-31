# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4803871/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4803871/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumOddBinaryNumber(_ s: String) -> String {
        var ones = 0
        var zeros = 0
        for ch in s {
            if ch == "1" {
                ones += 1
            } else {
                zeros += 1
            }
        }

        var result = ""
        if ones > 1 {
            for _ in 1 ..< ones {
                result.append("1")
            }
        }
        if zeros > 0 {
            for _ in 1 ... zeros {
                result.append("0")
            }
        }
        if ones > 0 {
            result.append("1")
        }
        return result
    }
}

```