# DP Code Explained in Detail | O (N) time | O (N) space

**Author:** aayush912
**Votes:** 225
**Link:** [https://leetcode.com/problems/rotate-function/solutions/1243652/](https://leetcode.com/problems/rotate-function/solutions/1243652/)

---

**EXPLANATION**

Let us do some pre-processing using basic Maths.

Let the array elements be: [*a b c d e*].

**Length of array *represented by N*** = 5  
**Sum of elements of array *represented by SUM*** = a + b + c + d + e

Now, as per the question :

F(0) = (0 * a) + (1 * b) + (2 * c) + (3 * d) + (4 * e) = 0 + b + 2c + 3d + 4e
F(1) = (1 * a) + (2 * b) + (3 * c) + (4 * d) + (0 * e) = a + 2b + 3c + 4d + 0
F(2) = (2 * a) + (3 * b) + (4 * c) + (0 * d) + (1 * e) = 2a + 3b + 4c + 0 + e

Now subtracting 2 equations, 

**F(1) - F(0)** = a + b + c + d - 4e = a + b + c + d + e - 5e
Therefore, **F(1)** = **F(0)** + a + b + c + d + e - 5e = **F(0) + SUM - N***e

**F(2) - F(1)** = a + b + c + e - 4d = a + b + c + d + e - 5d
Therefore, **F(2)** = **F(1)** + a + b + c + d + e - 5d = **F(1) + SUM - N***d

Generalizing it, we get the following relation:

**F(K) = F(K-1) + SUM - N * (( K-1)th element from end of array)**
i.e. **F(K) = F(K-1) + SUM - N * (array [N - 1 - (K-1)])** = **F(K-1) + SUM - N * (array [N - K])**

Now, I think it is pretty much clear that we can use a 1D DP array to solve this question as depicted in the code below.

*------Please upvote if you liked the solution.  Please put your thoughts/doubts/queries in the comment section below.  I will try my best to answer them.------*
```
class Solution {
    public int maxRotateFunction (int[] A) {
        if (A == null || A.length == 0)
            return 0;
        int sum = 0, F0 = 0, max = Integer.MIN_VALUE;
        for (int i = 0; i < A.length; i++) {
            sum += A [i];
            F0 += i * A [i];
        }
        int dp [] = new int [A.length];
        dp [0] = F0;
        max = dp [0];
        for (int i = 1; i < A.length; i++) {
            dp [i] = dp [i-1] + sum - A.length * A [A.length - i];
            max = Math.max (max, dp [i]);
        }
        return max;
    }
}
```

Please **upvote!** if you like the solution.