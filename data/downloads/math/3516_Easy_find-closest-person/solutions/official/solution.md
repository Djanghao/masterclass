# Official Solution

**Link:** [https://leetcode.com/problems/find-closest-person/solution/](https://leetcode.com/problems/find-closest-person/solution/)

---

### Approach: Mathematics

#### Intuition

We are asked to determine which of the first two people reaches the third person first, given that they all move at the same speed. Since speed is identical, the deciding factor is distance: the person closer to the third person will arrive sooner.

Let the distance between the first and third person be

$$
d_{xz} = |x - z|
$$

and the distance between the second and third person be

$$
d_{yz} = |y - z|
$$

Now we simply compare these distances:

- If $d_{xz} < d_{yz}$, then the first person is closer, so we return `1`.
- If $d_{xz} > d_{yz}$, then the second person is closer, so we return `2`.
- Otherwise, both are equally close, so we return `0`.

This reduces the problem to a straightforward comparison of absolute differences.

#### Implementation

<iframe src="https://leetcode.com/playground/CL62w2QN/shared" frameBorder="0" width="100%" height="293" name="CL62w2QN"></iframe>

#### Complexity Analysis

- Time complexity: $O(1)$.

- Space complexity: $O(1)$.

---