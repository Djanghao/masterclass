# Improving the runtime from O(n) to O(log n)

**Author:** lixx2100
**Votes:** 221
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/101633/](https://leetcode.com/problems/student-attendance-record-ii/solutions/101633/)

---

Let `f[i][j][k]` denote the # of valid sequences of length `i` where:
1) There can be at most `j` A's in the entire sequence.
2) There can be at most `k` **trailing** L's.

We give the recurrence in the following code, which should be self-explanatory, and the final answer is `f[n][1][2]`.
```Java
public int checkRecord(int n) {
    final int MOD = 1000000007;
    int[][][] f = new int[n + 1][2][3];

    f[0] = new int[][]{{1, 1, 1}, {1, 1, 1}};
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < 2; j++)
            for (int k = 0; k < 3; k++) {
                int val = f[i - 1][j][2]; // ...P
                if (j > 0) val = (val + f[i - 1][j - 1][2]) % MOD; // ...A
                if (k > 0) val = (val + f[i - 1][j][k - 1]) % MOD; // ...L
                f[i][j][k] = val;
            }
    return f[n][1][2];
}
```
The runtime of this solution is clearly O(n), using linear space (which can be easily optimized to O(1) though). Now, let's see how to further improve the runtime.

In fact, if we treat `f[i][][]` and `f[i-1][][]` as two vectors, we can represent the recurrence of `f[i][j][k]` as follows:
```
f[i][0][0]   | 0 0 1 0 0 0 |   f[i-1][0][0]
f[i][0][1]   | 1 0 1 0 0 0 |   f[i-1][0][1]
f[i][0][2] = | 0 1 1 0 0 0 | * f[i-1][0][2]
f[i][1][0]   | 0 0 1 0 0 1 |   f[i-1][1][0]
f[i][1][1]   | 0 0 1 1 0 1 |   f[i-1][1][1]
f[i][1][2]   | 0 0 1 0 1 1 |   f[i-1][1][2]
```
Let `A` be the matrix above, then `f[n][][] = A^n * f[0][][]`, where `f[0][][] = [1 1 1 1 1 1]`. The point of this approach is that we can compute `A^n` using [exponentiating by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring) (thanks to @StefanPochmann for the name correction), which will take O(6^3 * log n) = O(log n) time. Therefore, the runtime improves to O(log n), which suffices to handle the case for much larger `n`, say 10^18.
***Update:*** The final answer is `f[n][1][2]`, which involves multiplying the last row of `A^n` and the column vector `[1 1 1 1 1 1]`. Interestingly, it is also equal to `A^(n+1)[5][2]` as the third column of `A` is just that vector. Credit to @StefanPochmann.

Java Code:
```Java
final int MOD = 1000000007;
final int M = 6;

int[][] mul(int[][] A, int[][] B) {
    int[][] C = new int[M][M];
    for (int i = 0; i < M; i++)
        for (int j = 0; j < M; j++)
            for (int k = 0; k < M; k++)
                C[i][j] = (int) ((C[i][j] + (long) A[i][k] * B[k][j]) % MOD);
    return C;
}


int[][] pow(int[][] A, int n) {
    int[][] res = new int[M][M];
    for (int i = 0; i < M; i++)
        res[i][i] = 1;
    while (n > 0) {
        if (n % 2 == 1)
            res = mul(res, A);
        A = mul(A, A);
        n /= 2;
    }
    return res;
}

public int checkRecord(int n) {
    int[][] A = {
            {0, 0, 1, 0, 0, 0},
            {1, 0, 1, 0, 0, 0},
            {0, 1, 1, 0, 0, 0},
            {0, 0, 1, 0, 0, 1},
            {0, 0, 1, 1, 0, 1},
            {0, 0, 1, 0, 1, 1},
    };
    return pow(A, n + 1)[5][2];
}
```