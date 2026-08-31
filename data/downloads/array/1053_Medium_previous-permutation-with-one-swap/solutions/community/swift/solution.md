# 100% Beats

**Author:** harryzhang1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5298894/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5298894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Just like find the next permutation LC 31.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func prevPermOpt1(_ arr: [Int]) -> [Int] {
        var A = arr
        let n = A.count
        if n <= 1 { return arr }

        var idx = -1
        for i in (1..<n).reversed() {
            if A[i-1] > A[i] {
                idx = i - 1
                break
            }
        }
        if idx == -1 { return arr }

        for j in ((idx+1)..<n).reversed() {
            if A[j] < A[idx], A[j - 1] != A[j] {
                swap(&A, j, idx)
                break
            }
        }

        return A
    }

    func swap(_ A: inout [Int], _ i: Int, _ j: Int) {
        let temp = A[i]
        A[i] = A[j]
        A[j] = temp
    }
}
```