# O(n) Time, O(1) Space– Full Math Walkthrough"

**Author:** maria7sargsyan
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5711489/](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/solutions/5711489/)

---

# Intuition
To maximize the sum of absolute differences after reversing a subarray, we need to explore how different types of reversals affect the overall sum. The problem can be broken down into three main cases based on the type of subarray reversal:

1. Reversing a subarray from the very beginning  `[0,\uD835\uDC58]`
2. Reversing a subarray from the end `[k, n]`
3. Reversing an interior subarray `[i,j]` where `i!=0` and `j!=n`
By considering these cases, we can identify the optimal subarray reversal that maximizes the sum.
# Approach
<!-- Describe your approach to solving the problem. -->
## Boundary Reversals
For the two boundary cases:

1. **Reversing from the beginning $[0, k]$:**  
   The new sum would be:
   $$
   S - |a_{k+1} - a_k| + |a_0 - a_{k+1}|
   $$
   where $S = \\sum |a_i - a_{i+1}|$ is the initial sum of absolute differences between consecutive elements.

2. **Reversing from the end $[k, n]$:**  
   The new sum would be:
   $$
   S - |a_k - a_{k-1}| + |a_n - a_{k-1}|
   $$
These boundary-containing intervals can be computed in linear time.


## Interior Interval Reversals
For the interior interval $$(a_{k+1}, a_j)$$, the new sum after reversing would be:

$$
S + |a_{j+1} - a_{k+1}| + |a_j - a_k| - |a_{k+1} - a_k| - |a_{j+1} - a_j|
$$

To simplify, consider the expression:

$$
|a_{j+1} - a_{k+1}| + |a_j - a_k| 
$$

This can be rewritten as:

$$
|a_{j+1} - a_{k+1}| + |a_j - a_k| = \\max(a_{j+1} - a_j - (a_{k+1} + a_k), a_j - a_{j+1} - (a_{k+1} - a_k), -(a_{j+1} - a_j - (a_{k+1} + a_k)), -(a_j - a_{j+1} - (a_{k+1} - a_k)))
$$

Defining:

$$
s_j = a_j + a_{j+1}, \\quad d_j = a_j - a_{j+1}
$$

We can further simplify:

$$
|a_{j+1} - a_{k+1}| + |a_j - a_k|  = \\max(s_k - s_j, s_j - s_k, d_k - d_j, d_j - d_k)
$$

Now, the full expression becomes:

$$
S + \\max(s_k - s_j, s_j - s_k, d_k - d_j, d_j - d_k) - |d_k| - |d_j|
$$

## Maximizing the Difference

Notice:

$$
d_k - d_j - |d_k| - |d_j| = 2 \\min(0, d_k) - 2 \\max(0, d_j)
$$

Since this expression is always less than or equal to zero, we focus on the cases where:

$$
\\max(s_k - s_j, s_j - s_k) - |d_k| - |d_j|
$$

Consider the case:

$$
s_k - s_j - |d_k| - |d_j| = (a_{k+1} + a_k - |a_k - a_{k+1}|) - (a_{j+1} + a_j + |a_j - a_{j+1}|) = 2 \\min(a_k, a_{k+1}) - 2 \\max(a_j, a_{j+1})
$$

To achieve the maximum possible sum, we need to compute:

$$
max_{k, j}\\max(s_k - s_j, s_j - s_k) - |d_k| - |d_j| =  2 \\max(\\min(a_k, a_{k+1})) - 2 \\min(\\max(a_j, a_{j+1}))
$$


# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 

# Code
```python3 []
class Solution:
    def maxValueAfterReverse(self, nums: List[int]) -> int:
        
        maxMin = -inf
        minMin = inf
        S = 0
        boundary = -inf
        for a,b in zip(nums[:-1], nums[1:]):
            distance = abs(a-b)
            boundary = max(boundary, max(abs(nums[-1]-a),abs(nums[0]-b))-distance)
            S += distance
            # minimum local maximum
            minMin = min(max(a,b), minMin)
            # maximum local minimum
            maxMin = max(min(a,b), maxMin)
        return S + max(2*(maxMin-minMin),boundary)

```