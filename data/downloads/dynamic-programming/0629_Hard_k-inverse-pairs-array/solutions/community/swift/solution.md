# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/4634968/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/4634968/)

---

# Complexity
- Time complexity: $$O(n * k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func dp(
        _ i: Int,
        _ n: Int,
        _ k: Int,
        _ memo: inout [[Int?]]
    ) -> Int {
        guard i < n else {
            return k == .zero ? 1 : 0
        }
        if let mem = memo[i][k] {
            return mem
        }
        var result = 0
        for p in 0 ... min(i, k) {
            result += dp(i + 1, n, k - p, &memo)
            result %= 1_000_000_007
        }
        memo[i][k] = result
        return result
    }

    func kInversePairs(_ n: Int, _ k: Int) -> Int {
        var memo = Array(repeating: Array(repeating: Int?.none, count: k + 1), count: n)
        return dp(.zero, n, k, &memo)
    }
}

```