# Official Solution

**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solution/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solution/)

---

### Approach: Dynamic Programming

#### Intuition

To avoid duplication or omission, we can count the number of smooth descending periods ending on each day in the array $\textit{prices}$, and the sum of these numbers is the total number of smooth descending periods in the array.

We can use dynamic programming to calculate the number of smooth descending periods ending on each day. Specifically, we can use a $\textit{dp}$ array to store these numbers, where $\textit{dp}[i]$ represents the number of periods ending on day $i$. When $i = 0$, obviously $\textit{dp}[0] = 1$, which means the period consisting of only that day. For $i > 0$, considering that a smooth descending period with length greater than 1 requires that the price of each day is exactly 1 less than the previous day, we can consider the relationship between the price on day $i - 1$, $\textit{prices}[i-1]$, and the price on day $i$, $\textit{prices}[i]$. Specifically:

- If $\textit{prices}[i] \not = \textit{prices}[i-1] - 1$, then day $i$ cannot form a smooth descending period with day $i - 1$, so the smooth descending periods ending at $i$ only include $i$ itself, thus $\textit{dp}[i] = 1$.

- If $\textit{prices}[i] = \textit{prices}[i-1] - 1$, then not only can day $i$ itself form a smooth descending period, but any smooth descending period ending on day $i-1$ can be extended by day $i$ to form a new smooth descending period ending on day $i$. According to the definition of the $\textit{dp}$ array, there are $\textit{dp}[i-1]$ such periods, so at this time $\textit{dp}[i] = \textit{dp}[i-1] + 1$.

In summary:

$$
\textit{dp}[i] = \left{
\begin{aligned}
1\qquad &i = 0 \
1\qquad &i > 0,\ \textit{prices}[i] \not = \textit{prices}[i-1] - 1 \
\textit{dp}[i-1] + 1\qquad & i > 0,\ \textit{prices}[i] = \textit{prices}[i-1] - 1
\end{aligned}
\right.
$$

We just need to traverse $\textit{prices}$ using the above recurrence relation and maintain the corresponding $\textit{dp}$ array, while using $\textit{res}$ to maintain the sum of the elements in the $\textit{dp}$ array, which represents the total number of smooth descending periods.

Since $\textit{dp}[i]$ depends only on $\textit{dp}[i-1]$, we do not need to explicitly maintain the $\textit{dp}$ array. Instead, we can use an integer $\textit{prev}$ to keep track of $\textit{dp}[i-1]$ during the recursion. We start traversing the array indices from $i = 1$, at which point the initial value of $\textit{prev}$ is $\textit{dp}[0] = 1$, and the initial value of $\textit{res}$ is also $1$. When traversing to index $i$, we first update $\textit{prev}$ to $\textit{dp}[i]$ according to the recurrence relation mentioned above, then add the current value of $\textit{prev}$ to $\textit{res}$. After the traversal is complete, $\textit{res}$ will be the total number of smooth descending periods, and we return this value as the answer.

Considering the data range, the value of $\textit{res}$ may exceed the upper bound of a 32-bit signed integer, so we need to use a 64-bit integer to maintain it.

#### Implementation

<iframe src="https://leetcode.com/playground/4xFFo2VR/shared" frameBorder="0" width="100%" height="412" name="4xFFo2VR"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{prices}$.

- Time complexity: $O(n)$.
  
  The time complexity of calculating the number of smooth descending periods ending at each element and summing them up.

- Space complexity: $O(1)$.

---