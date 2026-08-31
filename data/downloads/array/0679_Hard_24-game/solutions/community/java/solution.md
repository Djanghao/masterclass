# [Java] Clean backtracking code with explanation. Beats 100%

**Author:** shk10
**Votes:** 12
**Link:** [https://leetcode.com/problems/24-game/solutions/967479/](https://leetcode.com/problems/24-game/solutions/967479/)

---

**Apply backtracking:** Iterate over all ways of choosing 2 numbers and apply all operators on them in both orders (i.e. ```a operator b``` and ```b operator a```). Repeat the process recursively on remaining numbers and the result from computation of these 2 numbers. Base case for this recursion is when only one number remains because it represents the final result of the expression. Compare it with 24 and return ```true/false``` accordingly. Return ```true``` as soon as one of the branches returns ```true``` (finds a solution).

- Since we're iterating over all ways of choosing 2 numbers, we don't need to worry about parentheses because we're anyway going through all possible orders of evaluation.
- Since we're applying operators in both orders, we don't need to worry about calculating permutations of the input.
- This approach is good enough for this problem because input size is just 4 otherwise we'd probably need dynamic programming too.
-  ```a + b == b + a``` so we don't need 2 separate calls for them. Same applies to ```a * b```.
- Compare doubles using **epsilon** to avoid floating point precision errors like 3.999...999 == 4 returns ```false``` when it should return ```true```.
- We could create a new array for recursive calls and copy remaining numbers but we could also use the original array itself to make the code faster.

```
// 0 ms. 100%
class Solution {
    private static final double EPS = 1e-6;
    private boolean backtrack(double[] A, int n) {
        if(n == 1) return Math.abs(A[0] - 24) < EPS;
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                double a = A[i], b = A[j];
                A[j] = A[n-1];
                A[i] = a + b;
                if(backtrack(A, n - 1)) return true;
                A[i] = a - b;
                if(backtrack(A, n - 1)) return true;
                A[i] = b - a;
                if(backtrack(A, n - 1)) return true;
                A[i] = a * b;
                if(backtrack(A, n - 1)) return true;
                if(Math.abs(b) > EPS) {
                    A[i] = a / b;
                    if(backtrack(A, n - 1)) return true;
                }
                if(Math.abs(a) > EPS) {
                    A[i] = b / a;
                    if(backtrack(A, n - 1)) return true;
                }
                A[i] = a; A[j] = b;
            }
        }
        return false;
    }
    public boolean judgePoint24(int[] nums) {
        double[] A = new double[nums.length];
        for(int i = 0; i < nums.length; i++) A[i] = nums[i];
        return backtrack(A, A.length);
    }
}
```