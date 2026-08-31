# Python 3 || 2 lines,  calculus problem || T/S: 96% / 58%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920227/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920227/)

---

This is a multivariable calculus problem masquerading as a programming exercise.

First, it's clear the optimum stategy is to perform the increment steps first, then perform the duplicate steps.

Second, if we perform *x* increment steps and *y* duplicate steps, the total number of moves is expressed by the function *moves*(*x*, *y*) = *x* + *y* and the sum of the array is expressed by the function *sum*(*x*, *y*) = (*x* + 1) * (*y* + 1).

Third, we treat these two functions as continuous functions, and apply the principles of calculus to find the (*x*, *y*) for which the minimum value of *moves* occurs, subject to the constraint *sum*(*x*, *y*) = *k*. We find this value occurs at (*sqrt*(*k*) - 1, *sqrt*(*k*) - 1).

Fourth, we return one of the two closest integer solutions to this solution.

```python []
class Solution:
    def minOperations(self, k: int) -> int:

        sqt = isqrt(k)

        return sqt - 1 + (k - 1) // sqt
```

```C++ []
class Solution {
public:
    int minOperations(int k) {
        int sqt = static_cast<int>(sqrt(k));
        return sqt - 1 + (k - 1) / sqt;}
};
```
```java []
class Solution {
    public int minOperations(int k) {
        
        int sqt = (int) Math.sqrt(k); 
        return sqt - 1 + (k - 1) / sqt;}
}
```
[https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/submissions/1266943008/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/submissions/1266943008/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).
