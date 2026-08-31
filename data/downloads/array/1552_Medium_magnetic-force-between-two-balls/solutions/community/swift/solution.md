# ✅ [Solution][Swift] Binary Search, Greedy

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341928/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5341928/)

---

**TC:** $$O(n * log(d)))$$, where $$d$$ is a max possible distance between baskets
**SC:** $$O(n)$$
```
class Solution {
    func maxDistance(_ position: [Int], _ m: Int) -> Int {
        let n = position.count
        guard n >= m else { return 0 }
        let position = position.sorted()

        func isPossible(_ d: Int) -> Bool {
            var prev = position[0], left = m - 1
            for i in 1..<n {
                guard left > 0 else { return true }
                if position[i] - prev >= d {
                    left -= 1
                    prev = position[i]
                }
            }
            return left == 0
        }

        var l = 1, r = position[n - 1] - position[0]
        while l <= r {
            let m = (l + r) / 2
            if isPossible(m) {
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return l - 1
    }
}
```