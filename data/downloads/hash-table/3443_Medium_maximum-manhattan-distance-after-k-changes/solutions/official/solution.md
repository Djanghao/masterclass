# Official Solution

**Link:** [https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/solution/](https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/solution/)

---

### Approach 1: Step-by-step Solution

#### Intuition

For any given string, we can calculate the Manhattan distance using the formula:

$$
|\textit{sum}_N - \textit{sum}_S| + |\textit{sum}_E - \textit{sum}_W|
$$

Here, $\textit{sum}_N$, $\textit{sum}_S$, $\textit{sum}_E$, and $\textit{sum}_W$ respectively represent the number of occurrences of $\text{'N'}$, $\text{'S'}$, $\text{'E'}$, $\text{'W'}$ in the string.

When we try to modify the letters in the string, there are three possible cases:

1. Modifying the letters that appear less frequently (but are not zero) in either the horizontal or vertical direction increases the Manhattan distance by 2.
2. Modifying the letters that appear more frequently in either direction decreases the Manhattan distance by 2.
3. If no modifications are made, the Manhattan distance remains unchanged.

It's easy to see that only the first case causes an increase in the Manhattan distance. Therefore, we divide the modification process into two steps:

- Step 1: Modify the letters with fewer occurrences in the vertical direction. If the number of such letters exceeds $k$, then modify only $k$ of them, and set the remaining modification count to $t = 0$. If the number of such letters is less than or equal to $k$, then modify all of them and set the remaining modification count to $t$.

- Step 2: Modify the letters with fewer occurrences in the horizontal direction. If the number of such letters exceeds $t$, then modify only $t$ of them; otherwise, modify all of them.

Since the question asks for the maximum Manhattan distance from the origin at any moment during the execution of all movement operations in order, these steps must be carried out during a traversal of the string, and we must track and return the maximum value encountered.

#### Implementation

<iframe src="https://leetcode.com/playground/WeLKBMGN/shared" frameBorder="0" width="100%" height="500" name="WeLKBMGN"></iframe>

#### Complexity analysis

Let $n$ be the length of the string.

- Time complexity: $O(n)$.
  
  We need to traverse the string only once.

- Space complexity: $O(1)$.
  
  We need only a few additional variables.

### Approach 2: Overall Solution

#### Intuition

From the analysis in Approach 1, we can observe that the optimal strategy is to modify the less frequent letters in both directions whenever possible.

Therefore, if we treat the less frequent letters in both the vertical and horizontal directions as a single group, we can reason as follows:
- If the total number of such letters is greater than $k$, then modifying any $k$ of them increases the Manhattan distance by $2 \times k$.
- If the total number is less than or equal to $k$, then all the less frequent letters in both directions will be modified, and no further modifications are necessary. In this case, the Manhattan distance becomes equal to the length of the string.

#### Implementation

<iframe src="https://leetcode.com/playground/K74A22c8/shared" frameBorder="0" width="100%" height="500" name="K74A22c8"></iframe>

#### Complexity analysis

Let $n$ be the length of the string.

- Time complexity: $O(n)$.
  
  We only need to traverse the string once.

- Space complexity: $O(1)$.
  
  We only need a few additional variables.