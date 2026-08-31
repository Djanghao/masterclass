# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242493/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/4242493/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func buildArray(_ target: [Int], _ n: Int) -> [String] {
        var result = [String]()
        var prev = 0
        for num in target {
            let diff = num - prev
            if diff > 1 {
                for _ in 1 ..< diff {
                    result.append("Push")
                    result.append("Pop")
                }
            }
            result.append("Push")
            prev = num
        }
        return result
    }
}
```