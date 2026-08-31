# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5136473/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5136473/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumHappinessSum(_ happiness: [Int], _ k: Int) -> Int {
        let hapiness = happiness.sorted(by: >)
        var result = 0
        for i in 0 ..< min(hapiness.count, k) {
            let subRes = hapiness[i] - i
            if subRes <= .zero {
                break
            }
            result += subRes
        }
        return result
    }
}
```