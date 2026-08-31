# Official Solution

**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/664082379" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

We need to find out the maximum difference (which will be the maximum profit) between two numbers in the given array. Also, the second number (selling price) must be larger than the first one (buying price).

In formal terms, we need to find $\max(\text{prices[j]} - \text{prices[i]})$, for every $i$ and $j$ such that $j > i$.

---

### Approach 1: Brute Force (Time Limit Exceeded)

<iframe src="https://leetcode.com/playground/fAea9r5L/shared" frameBorder="0" width="100%" height="293" name="fAea9r5L"></iframe>

#### Complexity Analysis

* Time complexity: $O(n^2)$. Loop runs $\dfrac{n (n-1)}{2}$ times.

* Space complexity: $O(1)$. Only two variables - $\text{maxprofit}$ and $\text{profit}$ are used.

---

### Approach 2: One Pass

#### Algorithm

Say the given array is:

```
[7, 1, 5, 3, 6, 4]
```

If we plot the numbers of the given array on a graph, we get:

![Profit Graph](./images/0.png)

The points of interest are the peaks and valleys in the given graph. We need to find the largest price following each valley, which difference could be the max profit.
We can maintain two variables - minprice and maxprofit corresponding to the smallest valley and maximum profit (maximum difference between selling price and minprice) obtained so far respectively.

<iframe src="https://leetcode.com/playground/5eRD9gFi/shared" frameBorder="0" width="100%" height="293" name="5eRD9gFi"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$. Only a single pass is needed.

* Space complexity: $O(1)$. Only two variables are used.