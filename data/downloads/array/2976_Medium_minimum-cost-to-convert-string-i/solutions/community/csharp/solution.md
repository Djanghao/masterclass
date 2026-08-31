# C# solution, Floyd–Warshall algorithm

**Author:** krit23dev
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5545441/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5545441/)

---

# Code
```
public class Solution {
    public long MinimumCost(string source, string target, char[] original, char[] changed, int[] cost) {
        const int charMax = 26;
        const long checker = 10000000;//10^7
        long[,] matrix = new long[charMax, charMax];
        for (int i = 0; i< charMax; i++) {
            for (int j = 0; j < charMax; j++) {
                matrix[i, j] = checker;
            }
            matrix[i, i] = 0;
        }
        for (int i = 0; i < original.Length; i++) {
            int from = original[i] - 'a';
            int to = changed[i] - 'a';
            if (cost[i] < matrix[from, to]) {
                matrix[from, to] = cost[i];
            }
        }

        long temp = 0;
        for (int k = 0; k < charMax; k++) {
            for (int i = 0; i < charMax; i++) {
                for (int j = 0; j < charMax; j++) {
                    temp = matrix[i, k] + matrix[k, j];
                    if (temp < matrix[i, j]) {
                        matrix[i, j] = temp;
                    }
                }
            }
        }

        long minimum = 0;
        for (int i = 0; i < target.Length; i++) {
            if (source[i] != target[i]) {
                temp = matrix[source[i] - 'a', target[i] - 'a'];
                if (temp == checker) {
                    return -1;
                }
                minimum += temp;
            }
        }
        return minimum;
    }
}
```