# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solution/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solution/)

---

[TOC]

## Solution

### Overview

Though marked as "Easy", this problem is a little tricky and requires some observations and insights. It's recommended to try a few examples to find out some regular patterns. 

Below, we will discuss a simple approach to solve this problem.

---

### Approach 1: Moving Chips Cleverly

**Intuition**

Notice that we have two types of costs:

1. Costs `0` when moving to `position[i] + 2` or `position[i] - 2`.
2. Costs `1` when moving to `position[i] + 1` or `position[i] - 1`.

Since move to `position[i] + 2` or `position[i] - 2` is free, it is natural to think that firstly moving chips as close as possible, with 0 cost.

**In fact, we can move all chips at even positions to position `0`, and move all chips at the odd positions to position `1`.**

Then, we only have many chips at position `0` and other chips at position `1`. Next, we only need to move those two piles together.

Given two piles of chips located at `0` and `1` respectively, intuitively it would be less effort-taking (i.e. less cost) to move the smaller pile to the larger one, which makes the total cost to:

$$
Cost = min(even\_cnt, odd\_cnt)
$$

where $$even\_cnt$$ represents the number of chips at the even positions, and $$odd\_cnt$$ represents the number of chips at the odd positions.

Good, now we have a not bad cost. Can we do better?

Well, now we will prove that this cost is the smallest possible one.

> As for the final position of those chips pile, there are only two possibilities:
> 1. The final position is at the even position, or
> 2. The final position is at the odd position.
> 
> In the first case, we at least need to cost `odd_cnt` to move all the chips at the odd positions to the even positions. 
> Similarly, in the second case, we at least need to cost `even_cnt`.
> 
> Therefore, `min(even_cnt, odd_cnt)` is the smallest possible cost.

In conclusion, the policy we gave above will achieve the smallest possible cost. What we need to return is just `min(even_cnt, odd_cnt)`.

**Algorithm**

We just need to count the number of chips at the even positions and the number of chips at the odd positions and return the smaller one.

<iframe src="https://leetcode.com/playground/4Vxz2Arq/shared" frameBorder="0" width="100%" height="293" name="4Vxz2Arq"></iframe>

You can also count either the odd or the even numbers, and then deduct that number from the length to obtain the other one.

**Complexity Analysis**

Let $$N$$ be the length of `position`.

- Time Complexity : $$\mathcal{O}(N)$$ since we need to iterate `position` once.

- Space Complexity : $$\mathcal{O}(1)$$ since we only use two ints: `even_cnt` and `odd_cnt`.