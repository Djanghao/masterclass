# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/4579838/](https://leetcode.com/problems/combination-sum-iii/solutions/4579838/)

---

# Code
```
class Solution {
    func combinationSum3(_ k: Int, _ n: Int, _ minVal: Int = 1) -> [[Int]] {
        guard n > .zero else {
            return []
        }
        guard k > 1 else {
            return n >= minVal && n <= 9 ? [[n]] : []
        }
        let maxVal = min(9 - k + 1, n)
        guard maxVal >= minVal else {
            return []
        }
        var result = [[Int]]()
        for addendum in minVal ... maxVal {
            for subRes in combinationSum3(k - 1, n - addendum, addendum + 1) {
                result.append([addendum] + subRes)
            }
        }
        return result
    }
}
```