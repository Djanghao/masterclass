# Official Solution

**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solution/](https://leetcode.com/problems/minimum-health-to-beat-game/solution/)

---

[TOC]

## Solution

---

### Overview

The problem presents a game with levels `0` to `n-1`. We need to visit every level, and visiting each level causes some damage. For a level `i`, the damage caused is `damage[i]`. We are also given an armor that can be used at most once during the game at any level. It will shield us from at most `armor` damage.

Our task is to find the minimum health to start the game in order to beat the game with health greater than `0` all the time.

---

### Approach: Greedy

#### Intuition

We can see that the total damage that can be caused in the game is the sum of all the elements of the `damage` array. Intuitively, we can also realize that among all the damages caused at every level, the armor should be used to block the largest damage, let's say this largest damage is `d`. The armor could either completely block the damage if `armor >= d` or partially block it if `armor < d`. This means we can block `min(armor, d)` damage with the armor. We get the net damage suffered in the game by subtracting the amount of damage blocked by the armor from the total damage.

Following this discussion, we iterate over all the elements of the `damage` array and compute the sum of its elements, let's call it `totalDamage`. While iterating over the elements, we also find the largest element of the `damage` array, let's call it `maxDamage`. The amount of damage blocked after using the armor (at the level with damage equal to `maxDamage`) would be `min(armor, maxDamage)`. As a result, the total damage dealt throughout the game is `totalDamage - min(armor, MaxDamage)`.

In the end, we return `totalDamage - min(armor, maxDamage) + 1` as the answer. The `+ 1 `is required to keep our health from dropping to zero. Here are two visual examples:

![img](../Figures/2214/2214-1.png)

#### Algorithm

1. Initialize an integer variable, `maxDamage = 0` to store the largest element of the `damage` array.
2. Initialize another variable, `totalDamage = 0` to store the sum of all the elements of the `damage` array. This will be a `long` type variable because the sum of all the elements of `damage` can exceed the `integer` limit. It could go up to $10^5 \cdot 10^5 = 10^{10}$ because, as stated in the problem constraints, the length of `damage` array and value of damage at each level can be $10^5$.
    - To compute `totalDamage` and `maxDamage`, perform `totalDamage = totalDamage + d` and `maxDamage = max(maxDamage, d)` for each element `d` in the `damage` array.
3. Return `totalDamage - min(armor, maxDamage) + 1` as the answer. The `+ 1` is needed so that health does not become zero. 

#### Implementation

<iframe src="https://leetcode.com/playground/mmQvZ8Bj/shared" frameBorder="0" width="100%" height="293" name="mmQvZ8Bj"></iframe>

#### Complexity Analysis

Here, $n$ is the number of levels in the game.

* Time complexity: $O(n)$

    - We iterate once through the complete array `damage` to compute the `totalDamage` and `maxDamage`.

* Space complexity: $O(1)$

    - We only used two variables: `maxDamage` and `totalDamage`.