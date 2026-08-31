# Official Solution

**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solution/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solution/)

---

[TOC]

## Solution

---

### Approach 1: Greedy.

**Intuition**

Let's pick up an arbitrary `i`th domino element in the configuration. The element has two sides, `A[i]` is an upper side, and `B[i]` is a lower side.

![bla](../Figures/1007/config.png)    

There could be three possible situations here

1. One could make all elements of `A` row or `B` row to be the same and equal to `A[i]` value. For example, if one picks up the `0`th element, it's possible to make all elements of `A` row to be equal to `2`.

![bla](../Figures/1007/s1.png) 

2. One could make all elements of `A` row or `B` row to be the same and equal to `B[i]` value. For example, if one picks up the `1`th element, it's possible to make all elements of `B` row to be equal to `2`.

![bla](../Figures/1007/s2.png)

3. It's impossible to make all elements of `A` row or `B` row to have the same `A[i]` or `B[i]` value. 

![bla](../Figures/1007/s3.png) 

> The third situation means that it's impossible to make all elements in `A` row or `B` row to be equal. 

Yes, only one domino element was checked here, and still it's enough because the rotation is the only allowed operation here.

**Algorithm**

- Pick up the first element. It has two sides: `A[0]` and `B[0]`.

- Check if one could make all elements in `A` row or `B` row to be equal to `A[0]`. If yes, return the minimum number of rotations needed.

- Check if one could make all elements in `A` row or `B` row to be equal to `B[0]`. If yes, return the minimum number of rotations needed.

- Otherwise return `-1`.


**Implementation**

<iframe src="https://leetcode.com/playground/UXApoAzo/shared" frameBorder="0" width="100%" height="500" name="UXApoAzo"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ since here one iterates over the
arrays not more than two times.
 
* Space complexity: $$\mathcal{O}(1)$$ since it's a constant 
space solution.