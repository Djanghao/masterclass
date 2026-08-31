# Swift solution

**Author:** azm819
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5435220/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5435220/)

---

# Complexity
- Time complexity: $$O(2 ^ n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2 ^ n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func generateStrings(_ n: Int, _ current: inout String, _ result: inout [String]) {
        guard current.count < n else {
            result.append(current)
            return
        }

        if current.last == "0" {
            current.append("1")
            generateStrings(n, &current, &result)
            current.removeLast()
        } else {
            current.append("0")
            generateStrings(n, &current, &result)
            current.removeLast()
            current.append("1")
            generateStrings(n, &current, &result)
            current.removeLast()
        }
    }

    func validStrings(_ n: Int) -> [String] {
        var current = String()
        var result = [String]()
        generateStrings(n, &current, &result)
        return result
    }
}

```