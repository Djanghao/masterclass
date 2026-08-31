# Official Solution

**Link:** [https://leetcode.com/problems/distribute-candies-among-children-iii/solution/](https://leetcode.com/problems/distribute-candies-among-children-iii/solution/)

---

[TOC]

## Solution

--- 

### Approach: Inclusion-Exclusion Principle

#### Intuition

We can use the idea of conventional counting by subtracting invalid cases from all possible cases. Using the principle of inclusion-exclusion in combinatorial mathematics, we start by counting all possible combinations, then subtract the number of cases where at least one child receives more than $\textit{limit}$ candies. However, this subtraction causes overcounting for cases where at least two children receive more than $\textit{limit}$ candies, so we add those cases back. Similarly, when adding those cases back, the cases where all three children receive more than $\textit{limit}$ candies are overcounted again, so we subtract those once more.

Since children are allowed to receive zero candies, we can transform the problem into inserting two dividers into $n+3$ candies to distribute them among three children. There are $n+2$ gaps between candies where the dividers can be placed, so the total number of cases is $C_{n+2}^2$, where $C$ represents the number of combinations.

To count cases where at least one child receives more than $\textit{limit}$ candies, we first give $\textit{limit} + 1$ candies to any one child. Then we distribute the remaining $n - (\textit{limit} + 1)$ candies among the three children. The number of such cases is $C_3^1 \times C_{n-(\textit{limit}+1)+2}^2$.

For cases where at least two children receive more than $\textit{limit}$ candies, we first give $\textit{limit} + 1$ candies to any two children, then distribute the remaining $n - 2 \times (\textit{limit} + 1)$ candies among the three children. The number of such cases is $C_3^2 \times C_{n - 2(\textit{limit} + 1) + 2}^2$.

For cases where all three children receive more than $\textit{limit}$ candies, we first give $\textit{limit} + 1$ candies to each child, then distribute the remaining $n - 3 \times (\textit{limit} + 1)$ candies among the three children. The number of such cases is $C_{n - 3(\textit{limit} + 1) + 2}^2$.

Thus, the final number of valid cases is:

$$
C_{n+2}^2 - C_3^1 \times C_{n-(\textit{limit}+1)+2}^2 + C_3^2 \times C_{n - 2(\textit{limit}+1) + 2}^2 - C_{n - 3(\textit{limit}+1) + 2}^2
$$

#### Implementation

<iframe src="https://leetcode.com/playground/i7tjnUwQ/shared" frameBorder="0" width="100%" height="361" name="i7tjnUwQ"></iframe>

#### Complexity Analysis

- Time complexity: $O(1)$.

  The result can be calculated directly.

- Space complexity: $O(1)$.

  Only a few additional variables are needed.