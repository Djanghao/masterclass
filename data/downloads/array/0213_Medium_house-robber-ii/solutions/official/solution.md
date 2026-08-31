# Official Solution

**Link:** [https://leetcode.com/problems/house-robber-ii/solution/](https://leetcode.com/problems/house-robber-ii/solution/)

---

[TOC]

## Solution

This problem is a minor extension to the original [House Robber Problem](https://leetcode.com/problems/house-robber/). The only difference is that the first and the last houses are adjacent to each other and therefore, if the thief has robbed the first house, they cannot steal the last house and vice versa. As Hint 1 in the question suggests, "the problem becomes to rob either `House[1]-House[n-1]` or `House[2]-House[n]`, depending on which choice offers more money. Now the problem has degenerated to the House Robber".

---

### Approach 1: Dynamic Programming

**Intuition**

Assume we have `nums` of `[7,4,1,9,3,8,6,5]` as shown in the figure.
Since the start house and last house are adjacent to each other, if the thief decides to rob the start house `7`, they cannot rob the last house `5`. Similarly, if they select last house `5`, they have to start from a house with value `4`. Therefore, the final solution that we are looking for is to take the maximum value the thief can rob between houses of list `[7,4,1,9,3,8,6]` and `[4,1,9,3,8,6,5]`. For each of the lists, all we need to do is to figure the maximum value the thief can get using the approach in the original [House Robber Problem](https://leetcode.com/problems/house-robber/).

![alt text](../Figures/213/213_house_robberII_approach1_slide01.png "Figure")

**Solving Original House Robber Problem with Dynamic Programming**

Trivial cases:

- If there is one house, the answer is the value of that house.
- If there are two houses, the answer is `max(house1, house2)`.
- If there are three houses, you can either pick the middle house or the sum of the first and the last house. Therefore, it boils down to `max(house3 + house1, house2)`.

To make the example more illustrative, imagine two thieves (`t1` and `t2`) coordinating a grand robbery. They are equipped with walkie-talkies to communicate the values of houses to each other.

- Before entering any of the houses, both `t1` and `t2` have values of zero.

- `t1`, enters the first house and record the value of the house. If that is the only house to rob, they can rob this house and be done with it.
- If there is more than one house, `t1` will leave a note of maximum value reaped until this point (which is just the value of the first house) and move to the next house while `t2` moves into the house `t1` was in. Now, `t1` and `t2` are going to communicate over the walkie-talkie to ask who has the most value. At this point, `t2` will read the note left by `t1` when the values are compared. If they have only two houses to rob, they would rob the house with the most value and be done with it.
- If there are three houses, `t1` will leave a note of the maximum value reaped until this point and move to the next house. Then `t1` will compare the value of the sum of the current house and the house which `t2` is in with the value of the house `t1` was in. The maximum value between those two will be chosen and `t2` will move into the house next to it.
- If there are four houses, `t1` will leave a note of the maximum value reaped until this point and move to the next house. Then `t1` will compare the value of the sum of the current house and the house which `t2` is in with the value of the house `t1` was in. The maximum value between those two will be chosen and `t2` will move into the house next to it.
- This procedure is done over and over again as long as there are houses in `nums`. If `t1` has reached to the end of `nums`, `t1` should have reaped the maximum amount obtainable from houses in `nums`.


!?!../Documents/213_house_robber_ii.json:1200,600!?!

**Implementation**

<iframe src="https://leetcode.com/playground/XWnrKRny/shared" frameBorder="0" width="100%" height="497" name="XWnrKRny"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N)$$ where $$N$$ is the size of `nums`. We are accumulating results as we are scanning `nums`.

* Space complexity : $$O(1)$$ since we are not consuming additional space other than variables for two previous results and a temporary variable to hold one of the previous results.