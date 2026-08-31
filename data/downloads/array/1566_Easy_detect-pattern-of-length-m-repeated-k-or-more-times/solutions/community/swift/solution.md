# Swift | Linear time

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/5404386/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/5404386/)

---

I originally wrote this ```O(n^2)``` solution, good enough given the constraints:

```
class Solution {
    func containsPattern(_ arr: [Int], _ m: Int, _ k: Int) -> Bool {
        let n = arr.count

        iLoop: for i in 0..<n {
            if i + m * k > n { break }
            let pattern = arr[i..<i + m]
            for j in 1..<k {
                let pattern2 = arr[i + m * j..<i + m * (j + 1)]
                if pattern != pattern2 {
                    continue iLoop
                }
            }
            return true
        }

        return false
    }
}
```

but there is this clever ```O(n)``` solution:

```
class Solution {
    func containsPattern(_ arr: [Int], _ m: Int, _ k: Int) -> Bool {
        let n = arr.count
        var count = 0

        for i in stride(from: 0, to: n - m, by: 1) {
            count = arr[i] == arr[i + m] ? count + 1 : 0
            if count == m * (k - 1) { return true }
        }

        return false
    }
}
```