# Official Solution

**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/671344950" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

---

## Summary

We have to determine the maximum profit that can be obtained by making the transactions (no limit on the number of transactions done). For this we need to find out those sets of buying and selling prices which together lead to the maximization of profit.

## Solution Article
---

### Approach 1: Brute Force

In this case, we simply calculate the profit corresponding to all the possible sets of transactions and find out the maximum profit out of them.

<iframe src="https://leetcode.com/playground/8F6psjM8/shared" frameBorder="0" width="100%" height="500" name="8F6psjM8"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n^n)$$. Recursive function is called $$n^n$$ times.

* Space complexity : $$O(n)$$. Depth of recursion is $$n$$.

---

### Approach 2: Peak Valley Approach

**Algorithm**

Say the given array is:

$$
\begin{bmatrix}
7, & 1, & 5, & 3, & 6, & 4
\end{bmatrix}
$$

If we plot the numbers of the given array on a graph, we get:

![Profit Graph](./images/0.PNG){:width="539px"}



If we analyze the graph, we notice that the points of interest are the consecutive valleys and peaks.

Mathematically speaking:
$$
\text{Total Profit} = \sum_{i} \left( \text{height}(\text{peak}_i) - \text{height}(\text{valley}_i) \right)
$$

The key point is we need to consider every peak immediately following a valley to maximize the profit. In case we skip one of the peaks (trying to obtain more profit), we will end up losing the profit over one of the transactions leading to an overall lesser profit.

For example, in the above case, if we skip $$\text{peak}_i$$ and $$\text{valley}_j$$ trying to obtain more profit by considering points with more difference in heights, the net profit obtained will always be lesser than the one obtained by including them, since $$C$$ will always be lesser than $$A+B$$.


<iframe src="https://leetcode.com/playground/ZEqJDrsq/shared" frameBorder="0" width="100%" height="361" name="ZEqJDrsq"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. Single pass.

* Space complexity : $$O(1)$$. Constant space required.

---

### Approach 3: Simple One Pass

**Algorithm**

This solution follows the logic used in [Approach 2](#approach-2-peak-valley-approach) itself, but with only a slight variation. In this case, instead of looking for every peak following a valley, we can simply go on crawling over the slope and keep on adding the profit obtained from every consecutive transaction. In the end,we will be using the peaks and valleys effectively, but we need not track the costs corresponding to the peaks and valleys along with the maximum profit, but we can directly keep on adding the difference between the consecutive numbers of the array if the second number is larger than the first one, and at the total sum we obtain will be the maximum profit. This approach will simplify the solution.
This can be made clearer by taking this example:

$$
\begin{bmatrix}
1, & 7, & 2, & 3, & 6, & 7, & 6, & 7
\end{bmatrix}
$$

The graph corresponding to this array is:

![Profit Graph](./images/1.PNG){:width="539px"}



From the above graph, we can observe that the sum $$A+B+C$$ is equal to the difference $$D$$ corresponding to the difference between the heights of the consecutive peak and valley.

<iframe src="https://leetcode.com/playground/KFbK7cub/shared" frameBorder="0" width="100%" height="242" name="KFbK7cub"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. Single pass.

* Space complexity: $$O(1)$$. Constant space needed.