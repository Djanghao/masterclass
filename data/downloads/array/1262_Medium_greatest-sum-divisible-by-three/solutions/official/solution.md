# Official Solution

**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solution/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solution/)

---

### Approach 1: Greedy + Forward Thinking

#### Intuition

We divide the numbers in the array into three groups $a$, $b$, and $c$, containing elements whose remainders modulo $3$ are $0$, $1$, and $2$, respectively. It is straightforward to take all numbers from group $a$, while the counts chosen from groups $b$ and $c$ depend on the situation.

Suppose we choose $\textit{cnt}_b$ elements from $b$ and $\textit{cnt}_c$ elements from $c$. The remainder of their combined sum modulo $3$ is

$$
(\textit{cnt}_b + 2 \times \textit{cnt}_c) \bmod 3 = (\textit{cnt}_b - \textit{cnt}_c) \bmod 3
$$

We want this value to be $0$, so $\textit{cnt}_b$ and $\textit{cnt}_c$ must be congruent modulo $3$. Observe that $\textit{cnt}_b$ must be at least $|b|-2$, where $|b|$ denotes the size of group $b$. If $\textit{cnt}_b \le |b|-3$, we could add three more elements from $b$ and preserve the modulo constraint. The same argument implies $\textit{cnt}_c \ge |c|-2$.

Therefore the possible values of $\textit{cnt}_b$ are $\{\,|b|-2,\;|b|-1,\;|b|\,\}$, and similarly for $\textit{cnt}_c$. We need only check at most $3\times 3=9$ combinations. When selecting elements from $b$ or $c$ we take the largest ones first, so $b$ and $c$ should be sorted in descending order.

#### Implementation

<iframe src="https://leetcode.com/playground/2ocRGbdq/shared" frameBorder="0" width="100%" height="500" name="2ocRGbdq"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  Sorting groups $b$ and $c$ requires $O(n\log n)$. The nine combinations form a constant factor and each case uses linear-time summation.

- Space complexity: $O(n)$.
  
  This is the space required for $a$, $b$, and $c$.

### Approach 2: Greedy + Backward Thinking

#### Intuition

In the first method we reason forward by deciding how many elements to select from $b$ and $c$. Here we instead think in reverse by deciding how many elements to discard from those groups.

Let $\textit{tot}$ be the sum of all elements in $nums$. There are three cases:

- If $\textit{tot}\bmod 3 = 0$, nothing needs to be removed.

- If $\textit{tot}\bmod 3 = 1$, we can either remove the smallest element in $b$ or the two smallest elements in $c$.

- If $\textit{tot}\bmod 3 = 2$, we can either remove the two smallest elements in $b$ or the smallest element in $c$.

We sort $b$ and $c$ and remove the required smallest elements depending on the value of $\textit{tot}$.


#### Implementation

<iframe src="https://leetcode.com/playground/4DdRXaWd/shared" frameBorder="0" width="100%" height="500" name="4DdRXaWd"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  Sorting $b$ and $c$ dominates the runtime. This can be improved to $O(n)$ by tracking the smallest required values without sorting.

- Space complexity: $O(n)$.
  
  This is the space required for $a,b,c$. If not sorted, you can avoid calculating $a,b,c$ by directly traversing the array $\textit{nums}$ once to find the two smallest numbers that give a remainder of 1 and 2 when divided by 3, thus optimizing the space complexity to $O(1)$.

### Approach 3: Dynamic Programming

#### Intuition

The previous methods rely on greedy selection or discarding. Here we apply dynamic programming to avoid sorting or greedy rules.

Let $f(i, j)$ be the maximum sum achievable using the first $i$ elements such that the sum modulo $3$ equals $j$. For the current number $nums[i]$, if we pick it we transition from $f(i-1, (j-nums[i])\bmod 3)$, and if we skip it we transition from $f(i-1, j)$. The relation is

$$
f(i, j) = \max\big\{ f(i-1, j), f(i-1, (j-\textit{nums}[i]) \bmod 3) + \textit{nums}[i] \big\}
$$

The initial state is $f(0, 0)=0$ and $f(0, 1)=f(0, 2)=-\infty$. This reflects that selecting nothing yields a sum of zero with remainder zero, while the other two remainders are invalid.

Since some languages may produce negative values in $(j-nums[i])\bmod 3$, it is convenient to write the transitions as

$$
\begin{cases}
f(i-1, j) \to f(i, j) \\
f(i-1, j) + \textit{nums}[i] \to f(i, (j + \textit{nums}[i]) \bmod 3)
\end{cases}
$$

Each row depends only on the previous row, so we store only two rows and reduce space usage.

#### Implementation

<iframe src="https://leetcode.com/playground/UCLFUKnL/shared" frameBorder="0" width="100%" height="361" name="UCLFUKnL"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---