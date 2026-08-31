# Official Solution

**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solution/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solution/)

---

### Approach: Simulation + Deque

#### Intuition

We can directly simulate the process based on the description of the problem.

We use two deques, $\textit{know}$ and $\textit{share}$, which represent people who know the secret (but will not share it) and people who will share the secret, respectively. Each element in these two deques is a tuple $(\textit{day}, \textit{cnt})$, where $\textit{day}$ indicates the day the secret becomes known, and $\textit{cnt}$ represents the number of people who know the secret on that day.

Initially, on the first day, only one person knows the secret and will not share it, so $\textit{know} = [(1, 1)]$ and $\textit{share} = []$.

On the $i$-th day $(2 \leq i \leq n)$:

1. On the $(i - \textit{delay})$-th day, people who knew the secret start to share it. Therefore, if the first element of $\textit{know}$ is $(i - \textit{delay}, \textit{cnt})$, remove it and add it to the end of $\textit{share}$.

2. On the $(i - \textit{forget})$-th day, people who learned the secret forget it. Therefore, if the first element of $\textit{share}$ is $(i - \textit{forget}, \textit{cnt})$, remove it.

3. Everyone in $\textit{share}$ teaches the secret to new people. Therefore, we add $(i, \textit{cnt})$ to the end of $\textit{know}$, where $\textit{cnt}$ is the sum of all counts in $\textit{share}$.

The time complexity of steps 1 and 2 is $O(1)$, while step 3 is $O(n)$ because it requires traversing $\textit{share}$. Although this is sufficient to solve the problem within the limits, we can optimize it to $O(1)$. We can maintain two variables, $\textit{know}\textit{cnt}$ and $\textit{share}\textit{cnt}$, to store the sum of counts in $\textit{know}$ and $\textit{share}$, respectively. In this way, the time complexity of steps 1 and 2 remains $O(1)$, and step 3 is reduced to $O(1)$ as well.

The final answer is $\textit{know}_\textit{cnt} + \textit{share}_\textit{cnt}$.

#### Implementation

<iframe src="https://leetcode.com/playground/fNe9k3eE/shared" frameBorder="0" width="100%" height="500" name="fNe9k3eE"></iframe>

#### Complexity Analysis

- Time complexity: $O(n)$.
  
  We need to simulate each of the $n$ days.

- Space complexity: $O(n)$.
  
  The deques require up to $O(n)$ space to store the elements.

---