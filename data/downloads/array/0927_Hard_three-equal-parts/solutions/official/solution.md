# Official Solution

**Link:** [https://leetcode.com/problems/three-equal-parts/solution/](https://leetcode.com/problems/three-equal-parts/solution/)

---

[TOC]

## Solution
---
### Approach 1: Equal Ones

**Intuition**

Each part has to have the same number of ones in their representation.  The algorithm given below is the natural continuation of this idea.

**Algorithm**

Say `totalOnes` is the number of ones in `arr`.  Since every part has the same number of ones, they all should have `targetOnes = totalOnes / 3` ones.

If `totalOnes` isn't divisible by 3, the task is impossible.

Let T stand for `targetOnes`. We can find the position of the $$1^{st}$$, $$T^{th}$$, $$(T+1)^{th}$$, $$2T^{th}$$, $$(2T+1)^{th}$$, and $$3T^{th}$$ one.  The positions of these ones form 3 intervals: `[i1, j1]`, `[i2, j2]`, and `[i3, j3]`.  If there are only 3 ones, then the intervals are each length 1.

Between them, there may be some number of zeros.  The zeros after `j3` must be included in each part: say there are `trailingZeros` of them `(trailingZeros = arr.length - j3)`.

So the first part, `[i1, j1]`, is now `[i1, j1+trailingZeros]`.  Similarly, the second part, `[i2, j2]`, is now `[i2, j2+trailingZeros]`.

If all this is actually possible, then the final answer is `[j1+trailingZeros, j2+trailingZeros+1]`.

<iframe src="https://leetcode.com/playground/7HZa9N4j/shared" frameBorder="0" width="100%" height="500" name="7HZa9N4j"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `arr`.

* Space Complexity:  $$O(N)$$ because $$O(N)$$ space is used when checking if the three intervals of ones are the same.
<br />
<br />