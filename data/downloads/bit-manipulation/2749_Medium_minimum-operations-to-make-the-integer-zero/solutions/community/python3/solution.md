# Linear Search On Answer (ft. Bit Count)

**Author:** jeffreyhu8
**Votes:** 95
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679094/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679094/)

---

# Intuition
After a bit of playing around, it seems hard to find an explicit formula for the answer. As with many computer science problems, we can instead try to search over the answer space, trading runtime for ease of implementation.

# Approach
We can test whether or not $$k$$ operations is sufficient for some given $$k$$.
1. If $$k$$ operations are used, then $$\\mathrm{num1} = (\\mathrm{num2} + 2^{i_1}) + (\\mathrm{num2} + 2^{i_2}) + \\dots + (\\mathrm{num2} + 2^{i_k}) = k\\cdot\\mathrm{num2} + (2^{i_1}+2^{i_2}+\\dots+2^{i_k})$$ for some $$i_1,i_2,\\dots,i_k\\in [0, 60]$$.
2. Rearranging, this gives $$\\mathrm{target}:=\\mathrm{num1}-k\\cdot\\mathrm{num2}=2^{i_1}+2^{i_2}+\\dots+2^{i_k}$$.
3. Observe that we can construct any positive integer $$x$$ with at least $$x\\mathrm{.bit\\_count}()$$ powers of two and at most $$x$$ powers of two. This is because we can start with the powers of two that make up the bits of $$x$$, then continue to split apart larger powers of two into smaller powers of two until we are left with just 1's. For instance, $$5=4+1=(2+2)+1=2+(1+1)+1=(1+1)+1+1+1$$. Thus, we must have `target.bit_count() <= k <= target`.

Using the above algorithm to determine whether a certain number of operations is valid, we can do a linear search through all possible number of operations in $$[0, 60]$$ and take the minimum valid answer.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```python
class Solution:
    def makeTheIntegerZero(self, num1: int, num2: int) -> int:
        for k in range(61):
            target = num1 - k * num2
            if target >= 0 and target.bit_count() <= k <= target:
                return k
        return -1
```

#### Edit: Why the answer is bounded from above by 60
For those who are asking, here's an explanation of why the answer is bounded from above by 60. It can be seen intuitively but may require a bit of casework to prove rigorously.

Assume there is no valid answer for `k <= 60`. Then, at least one of the following hold for `k = 60`:
1. `target < 0`,
2. `target.bit_count() > k`, or
3. `k > target`.

(2) is impossible since `target := num1 - k * num2` is bounded from above by the input constraints.

If (1) is true, then `num1 - k * num2 < 0` implies `num2 > 0`, meaning `target` is strictly decreasing while `k` is strictly increasing. If we have not found a solution by this point, this implies there is no solution past 60.

If (3) is true, `k > num1 - k * num2` implies `k * (num2 + 1) > num1`, meaning either `num2 = 0`, in which case `k = num1.bit_count()` will have previously been a valid answer, or `num2 > 0`. Again, `target` is strictly decreasing while `k` is strictly increasing; there is no solution.

In all cases, there is either a contradiction or no solution; `k` is bounded from above. As a matter of fact, I believe there can be a tighter bound on `k` as long as the argument for (2) holds.