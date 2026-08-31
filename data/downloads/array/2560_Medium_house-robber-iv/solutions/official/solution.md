# Official Solution

**Link:** [https://leetcode.com/problems/house-robber-iv/solution/](https://leetcode.com/problems/house-robber-iv/solution/)

---

[TOC]

## Solution

---

### Overview

This is yet another problem based on the **House Robber** series! This article will assume some prior knowledge of the [original version](https://leetcode.com/problems/house-robber/), so you may want to solve that before this one. So before diving in, let's quickly recall the core idea behind the original problem.

In the classic House Robber problem, the goal is to maximize the total amount stolen from a row of houses while following one key restriction: the robber cannot rob two consecutive houses. This forces the robber into a branched decision making process that at each house, they must choose whether to rob it or skip it. If they robs it, they must add its value to the best amount stolen from two houses before. If they skips it, they simply takes the best amount stolen from the previous house. This naturally leads to a recursive relationship:

`maxAmount(houseNumber) = max(maxAmount(houseNumber - 1), maxAmount(houseNumber - 2) + amount(houseNumber))`

Using dynamic programming, we can store these values and efficiently compute the maximum amount the robber can steal.  

In this current problem, the robber still has to follow the restraint that they cannot steal from two consecutive houses. However, this time, instead of maximizing the total reward, they want to **minimize the maximum amount stolen from any single house** while ensuring that at least `k` houses are robbed.  

Similar to the original problem, we can think of a recursive relation to solve this. Again, we have two choices:  
1. Rob the current house (but then we must skip the next house).  
2. Skip the current house and move forward.  

However, unlike the original problem, we need an additional condition—ensuring that we rob at least `k` houses. The dynamic programming solution involves a state `dp[houseIndex][numberOfHousesRobbed]`. Since we iterate over `n` houses and track up to `k` robbed houses, the problem becomes more complex, and solving it with dynamic programming takes $O(n \cdot k)$ time.

Problems that require **minimizing the maximum** or **maximizing the minimum** often suggest a binary search approach. Instead of searching through indices or subsets directly, we can binary search on the **capability** (i.e., something like the maximum amount stolen from any single house). By determining whether a given capability is achievable, we can efficiently narrow down the possible solutions. If you're unfamiliar with this technique, you can refer to [this guide](https://leetcode.com/explore/learn/card/binary-search/) to learn more about binary search.  

---

### Approach: Binary Search

#### Intuition
  
Instead of focusing on maximizing a total sum, we need to guarantee that the **maximum amount stolen from any robbed house** is as **small** as possible while still robbing at least `k` houses. A brute force approach would involve checking every possible way to rob `k` houses while obeying the adjacency constraint, but this would be too slow for large inputs.  

A more efficient way to approach this problem is to recognize that we are trying to minimize the maximum stolen amount while ensuring that at least `k` houses are robbed. This naturally leads to using binary search on the maximum reward that the robber can steal from any single house.  

We define the search space based on the possible values for this **maximum** reward. The smallest possible value for this maximum reward is `min(nums)` (the lowest value in the house list), and the largest possible value is `max(nums)` (the highest value in the house list). This gives us a range of `[minReward, maxReward]`, where `minReward = min(nums)` or more specifically `1` and `maxReward = max(nums)`.  

We use binary search to determine the **minimum possible capability** that still allows robbing at least `k` houses. At each step, we take the middle value in our range (`midReward = (minReward + maxReward) / 2`) and check whether it's possible to rob at least `k` houses while ensuring that no single robbed house has a value greater than `midReward`.

To determine whether a particular `midReward` is feasible, we use a greedy approach. We iterate through the list of house values and greedily select houses that have at most `midReward`. Since we cannot rob consecutive houses, we skip the next house each time we choose one. We keep a count of how many houses have been robbed, and if we reach at least `k` houses, it means the current `midReward` is achievable.

- If it is **possible** to rob at least `k` houses while keeping the "maximum stolen amount ≤ midReward", then we try lowering it by moving the binary search range to the left (`maxReward = midReward`).  
- If it is **not possible**, it means `midReward` is too low, so we increase it by moving the search range to the right (`minReward = midReward + 1`).

By continuously adjusting our search range, we eventually find the **smallest possible maximum stolen amount** that still allows robbing at least `k` houses.

#### Algorithm

1. Initialize Search Bounds: 
   - Set `left = 1` (minimum possible reward).  
   - Set `right = maximum value in nums`.  
   - Determine the total number of houses, `numHouses = houseRewards.size()`.  

2. Perform Binary Search on Maximum Allowed Reward:
   - While `left < right`:  
     - Compute `mid = (left + right) / 2`, representing the maximum reward a robber can take from a house.  
     - Initialize `housesRobbed = 0` to count how many houses can be robbed under this constraint.  

3. Simulate Robbery Under the Current Constraint (`mid`):
   - Iterate through the `houseRewards` array:  
     - If `houseRewards[i] <= mid`:  
       - Rob the house and increment `housesRobbed`.  
       - Skip the next house (`i++`) since consecutive houses cannot be robbed.  

4. Adjust Search Range:
   - If `housesRobbed >= housesToRob`, reduce the reward constraint (`right = mid`).  
   - Otherwise, increase it (`left = mid + 1`).  

5. Return the Minimum Maximum Reward:
   - Once `left == right`, return `left`, which represents the smallest possible maximum reward that still allows robbing at least `housesToRob` houses.  

#### Implementation

<iframe src="https://leetcode.com/playground/37TMAAMU/shared" frameBorder="0" width="100%" height="500" name="37TMAAMU"></iframe>

#### Complexity Analysis

Let $n$ be the size of `nums` array and $m$ denote the size of range of elements in `nums`.

- Time Complexity: $O(n \log m)$

    The algorithm uses a binary search approach to determine the minimum reward required to rob at least `k` houses while following the given constraints. The search space for the reward lies between $1$ and $m$, and the binary search reduces this range logarithmically in $O(\log m)$ iterations.  

    Within each iteration, a greedy approach is applied to traverse the array and count the number of houses that can be robbed without selecting adjacent ones. This traversal takes $O(n)$ time. Since binary search runs for $O(\log m)$ iterations, the overall time complexity is $O(n \log m)$.

- Space Complexity: $O(1)$

    The algorithm uses only a few integer variables (`left`, `right`, `mid`, `take`, `n`) to perform binary search and track the number of houses robbed. Since no additional data structures proportional to the input size are used, the space complexity is $O(1)$.

---