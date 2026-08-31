# Java DP

**Author:** mlogn
**Votes:** 4
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/742164/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/742164/)

---

**DP with 2 sum**
```java
class Solution {
    /*
    * dp[i][j] is the max length of fibbonacci series whose last two elements
    * are A[i] & A[j]
    * for any integer A[k] we need to find two number A[i] & A[j] such that
    * i < j < k and A[i] + A[j] == A[k], we can find such pairs in O(n) time
    * complexity.
    * if there exist i,j,k such that i < j < k and A[i] + A[j] == A[k] then
    * dp[k][j] = dp[i][j] + 1 (A[k], A[j] are last two elements of fibbonacc series)
    */
    public int lenLongestFibSubseq(int[] A) {
        int n = A.length;
        int[][] dp = new int[n][n];
        int result = 0;
        for (int k = 2; k < n; k++) {
            int i = 0, j = k-1;
            while(i < j) {
                int sum = A[i] + A[j] - A[k];
                if (sum < 0) {
                    i++;
                } else if (sum > 0) {
                    j--;
                } else {
                    // ith, jth kth element are fibbonaci sequence
                    dp[j][k] = dp[i][j] + 1; // since numbers are unique
                    result = Math.max(result, dp[j][k]);
                    i++;
                    j--;
                }
            }
        }
        return result + 2 >= 3? result + 2: 0;
    }
}
```

**Another DP solution (Time limit exceeded)**
```java
class Solution {
    public int lenLongestFibSubseq(int[] A) {
        for (int i = 0; i < A.length; i++) {
            fb[i] = new HashMap<>();
            for (int j = i-1; j >= 0; j--) {
                int lastval = A[i] - A[j];
                if (lastval <= 0) {
                    break;
                }
                fb[i].put(A[j], fb[j].getOrDefault(lastval, 1) + 1);
                result = Math.max(fb[i].get(A[j]), result);
            }
        }
        return result >= 3? result: 0;
    }
}
```