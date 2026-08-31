# Recursion O(n)/O(1)

**Author:** vmlnt
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205315/](https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205315/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Recursion
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$, N - rows amount
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$ N - rows amount
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun kthGrammar(n: Int, k: Int): Int {
        return getPrevRowValue(n, k - 1)
    }

    fun getPrevRowValue(prevRow: Int, k: Int): Int {
        if (prevRow <= 1) return 0

        val prevValue = getPrevRowValue(prevRow - 1, k / 2)
        val productedValue = if (prevValue == 0) 1 else 10
        
        if (k % 2 == 0) {
            return (productedValue / 10)
        } else {
            return productedValue % 10
        }
    }
}

```