# Simple greedy solution $$O(n)$$ - TypeScript

**Author:** MuazAbdin
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/5688235/](https://leetcode.com/problems/frog-jump-ii/solutions/5688235/)

---

# Intuition
- The strategy of skipping stones and managing the sequence of jumps 
can effectively minimize the largest jump
1. Consecutive Steps in the Same Direction:
   Taking two consecutive steps in the same direction is not optimal. This is because the stones are positioned in strictly increasing order. When the frog makes consecutive jumps forward, the next backward jump has to cover a larger distance, which increases the maximum jump size. This increase in step size is contrary to the goal of minimizing the maximum jump difference.
2. Skipping Stones Efficiently:
   Taking two steps with more than one stone in between in the same direction increases the step size is spot on. This increase in the maximum jump size makes the path less efficient in terms of minimizing the largest jump.

- Balancing the Jumps: By avoiding consecutive jumps in the same direction
or overly large gaps between stones, the frog can better balance the jump 
sizes, leading to a smaller maximum jump size. This balance is key to minimizing the maximum cost.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```typescript []
function maxJump(stones: number[]): number {
  if (stones.length < 2) return 0;

  let maxJump = stones[1] - stones[0];
  for (let i = 2; i < stones.length; i++)
    maxJump = Math.max(maxJump, stones[i] - stones[i - 2]);

  return maxJump;
}
```