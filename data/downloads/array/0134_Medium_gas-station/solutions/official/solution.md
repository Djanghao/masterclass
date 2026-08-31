# Official Solution

**Link:** [https://leetcode.com/problems/gas-station/solution/](https://leetcode.com/problems/gas-station/solution/)

---

[TOC]

## Solution

--- 

### Overview

The gas stations in the problem are characterized by two attributes, namely, `gas[i]` and `cost[i]`, each corresponding to the amount of gas gained and consumed, respectively, when reaching the next station `i + 1`. This means that the net change in the amount of gas in our tank when moving from station `i` to `i + 1` is given by `gas[i]` - `cost[i]`.

The illustration below depicts an example scenario where we move from station 0 to station 1, our tank gains 1 (unit of) gas and consumes 3 gas, resulting in a net loss of 2 gas.

![img](../Figures/134/1.png)

Similarly, when moving from station 3 to station 4, our tank gains 4 gas and consumes 1 gas, which leads to a net gain of 3 gas.

![img](../Figures/134/2.png)

To represent the gas gain and consumption at each station using a single array, we can define `gain[i] = gas[i] - cost[i]`. The value of `gain[i]` represents the **net change** in the amount of gas in our tank when moving from station `i` to `i + 1`. At each station `i`, the amount of gas in the tank is changed by `gain[i]`. If, at any point, the gas in our tank drops below zero, we cannot reach the next station nor finish the circular route.

![img](../Figures/134/3.png)

 

---

### Approach: One Pass

#### Intuition   

Upon adopting the given idea, we start our journey from `i = 0` and verify if station 0 is a valid starting station by accumulating gas `gain[i]` at each station along the way. 

We begin with station `0` and gain 1 gas upon reaching station `1`, a promising start.

![img](../Figures/134/n1.png)

However, we need to address a question. Even though it requires 0 net gas to reach station `2` from station `1`, which implies that one can reach station `2` with 0 initial gas, should we consider station `1` as a valid starting station? The answer is no.

![img](../Figures/134/n2.png)

The problem's hint states that there can be **at most one valid station**. We can refer to the following figure. If we complete a circular route starting from station 1, we can also start from station 0 to finish the journey because the car, starting from station 1, will have no less gas at every other station than the car that started from station 0.

Having two valid starting stations contradicts the statement given in the problem. Therefore, we only need to consider if station 0 is valid because station 1 is guaranteed not to be valid.

![img](../Figures/134/n3.png)

We continue the journey until encountering a station that reduces our gas below 0. As shown in the picture below, we only have 3 gas and cannot cross this gap that costs 4 gas. It seems like our trip ends here.

![img](../Figures/134/n4.png)

An intuitive idea is to skip this "valley" and try completing the circular route starting from the next gas station with a non-negative net gain of gas.

![img](../Figures/134/n5.png)

Consequently, we treat the previous part as a single segment, which we failed to pass through with 0 initial gas. Let's temporarily leave it behind and start over from the next station with 0 initial gas. 

![img](../Figures/134/n6.png)

During the following journey, we keep track of the current accumulated gas at each station. If we have a negative gas value after passing gas station `i`, we treat the stations that have been passed as a separate segment and start over from the next station `i + 1`. This means that we will test if station `i + 1` is a valid starting station `answer`.

By visualizing this process, we can see that it involves dividing our journey into segments, each of which ends in a "valley" station where the accumulated gas becomes negative. These segments cannot be crossed with 0 initial gas, and any station within them is not a valid starting station.
> To pass these segments, we must hold enough extra gas before entering them.

![img](../Figures/134/n7.png)

When we complete the entire trip, there may still be some gas stations that do not belong to any segment. Since we visit the gas stations in a circular manner, these ending stations are actually the starting part of the first segment (segment 1, as shown below).

We have verified that none of the segments is crossable. However, with the addition of these stations by the end of the journey, the situation with segment 1 may change, and we have to try again.

![img](../Figures/134/n8.png)

Fortunately, we do not need another iteration to calculate the gas gained in segment 1. We can simply calculate `total_gain`, which is the sum of `gain`. Note that `total_gain` also represents the sum of gained gas from each segment:

$$\text{total\_gain} = \text{gain}_1 + \text{gain}_2 + \text{gain}_3 + ...$$

If $\text{total\_gain} \ge 0$ holds, there is: 

$$\text{gain}_1 + \text{gain}_2 + \text{gain}_3 + ... \ge 0 \\$$

$$\text{gain}_1 \ge -(\text{gain}_2 + \text{gain}_3 + ... )$$

This implies that the gas gained in the segment 1 is enough to support us passing through each remaining segment and return to the starting point of segment 1.

![img](../Figures/134/n9.png)

Otherwise, $\text{total\_gain} \lt 0$ indicates that the gas gained after traversing segment 1 isn't enough to support us passing through the remaining segments, and there is no valid station.

> Note: We don't need to create a separate `gain` array; instead, we can calculate the gas gained for each station as we iterate through them. This way, we avoid the need for additional space of size $O(n)$.


<br>

#### Algorithm

1) Initialize `curr_gain`, `total_gain` and `answer` to 0.

2) Traverse through `gas` and `cost`. For each index `i`, increment `total_gain` and `curr_gain` by  `gas[i] - cost[i]`.

3) If `curr_gain` is smaller than 0, we will test if station `i + 1` is a valid starting station by setting `answer` as `i + 1`, resetting `curr_gain` to 0, and repeating step 2.

4) When the iteration is complete, if `total_gain` is smaller than 0, return `-1`. Otherwise, return `answer`.

#### Implementation

<iframe src="https://leetcode.com/playground/QVD5XPPc/shared" frameBorder="0" width="100%" height="412" name="QVD5XPPc"></iframe>


#### Complexity Analysis

Let $n$ be the length of the input array `gas`.

* Time complexity: $O(n)$

    - The algorithm traverses through `gas` and `cost` once. Updating `total_gain`, `curr_gain` and `answer` takes $O(1)$ time at each step.
    

* Space complexity: $O(1)$

    - We only need to keep track of some parameters `total_gain`, `curr_gain`, and `answer`, which take $O(1)$ space.

<br/>