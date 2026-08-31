# Simple KOTLIN and JAVA solution

**Author:** anlk
**Votes:** 4
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6056353/](https://leetcode.com/problems/defuse-the-bomb/solutions/6056353/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
The problem revolves around circular arrays, requiring careful management of indices. 

The use of modular arithmetic ensures that the indices wrap correctly when summing elements. The behavior changes based on whether k is positive, negative, or zero:

- Positive k: Sum of the next k numbers.
- Negative k: Sum of the previous |k| numbers.
- Zero k: Replace all elements with zero.


# Code
```Kotlin []
class Solution {
    fun decrypt(code: IntArray, k: Int): IntArray {
        val n = code.size
        val result = IntArray(n)
        if (k == 0) return IntArray(n)

        val extendedCode = code + code
        var start = if (k > 0) 1 else n + k
        var end = if (k > 0) k else n - 1

        var sum = (start..end).sumOf { extendedCode[it] }
        for (i in 0 until n) {
            result[i] = sum
            sum -= extendedCode[start]
            start++
            end++
            sum += extendedCode[end]
        }
        return result
    }
}
```

```Java []
class Solution {
    public int[] decrypt(int[] code, int k) {
        int n = code.length;
        int[] result = new int[n];
        if (k == 0) {
            Arrays.fill(result, 0);
            return result;
        }
        
        int[] extendedCode = new int[n * 2];
        System.arraycopy(code, 0, extendedCode, 0, n);
        System.arraycopy(code, 0, extendedCode, n, n);
        
        int start = k > 0 ? 1 : n + k;
        int end = k > 0 ? k : n - 1;

        int sum = 0;
        for (int i = start; i <= end; i++) {
            sum += extendedCode[i];
        }
        
        for (int i = 0; i < n; i++) {
            result[i] = sum;
            sum -= extendedCode[start++];
            sum += extendedCode[++end];
        }
        return result;
    }
}
```