# Swift Heap from swift-collections

**Author:** DevilDimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5188990/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5188990/)

---

# Complexity
- Time complexity:
$$O(n*logn)$$

- Space complexity:
$$O(n)$$

# Code
```
import Collections

class Solution {
    func halveArray(_ nums: [Int]) -> Int {
        var heap = Heap<Double>(nums.map { Double($0) })
        var sum = nums.reduce(0.0, { $0 + Double($1) })
        let target = sum / 2

        var result = 0
        while sum > target {
            let elem = heap.removeMax()
            sum -= elem / 2
            heap.insert(elem / 2)
            result += 1
        }

        return result
    }
}
```