# Official Solution

**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solution/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solution/)

---

### Approach: Analyze Fundamentally Different Standing Situations + Memoized Search

#### Intuition

We can represent the earliest round number of the competition between the two best athletes, who are the $f$th and $s$th athletes from the left in a row, with $n$ people remaining as $F(n, f, s)$.

Similarly, we use $G(n, f, s)$ to represent the latest round in which they compete.

How is state transition carried out?

**We only consider situations with fundamentally different relative positions.**

If we simply use $F(n, f, s)$ for state transitions, the resulting algorithm and code would become quite complex. For example, we need to consider whether $f$ is on the left (i.e., counting from the front), in the middle (i.e., skipping a turn), or on the right (i.e., counting from the back). We must also consider several possibilities for $s$, which makes the state transition equations rather cumbersome.

We can consider analyzing the **essentially different positioning situations** and obtain the following table:

| | $s$ on the left | $s$ in the middle | $s$ on the right |
| :-: | :-: | :-: | :-: |
| $f$ on the left | maintain unchanged | maintain unchanged | maintain unchanged |
| $f$ in the middle | equivalent to "$f$ on the left, $s$ in the middle"| There is no such situation | equivalent to "$f$ on the left, $s$ in the middle"|
| $f$ on the right | equivalent to "$f$ on the left，$s$ on the right"| equivalent to "$f$ on the left, $s$ in the middle" | equivalent to "$f$ on the left, $s$ on the left"|

The correctness is based on the following invariants:

- $F(n, f, s) = F(n, s, f)$ holds true. That is, swapping the positions of the two best athletes does not change the result.

- $F(n, f, s) = F(n, n+1-s, n+1-f)$ holds true. Since each $i$-th athlete from the front competes with the $i$-th athlete from the back, flipping the entire arrangement does not affect the outcome.

We use these two transformation rules to ensure that in $F(n, f, s)$, $f$ is always less than $s$. Therefore, $f$ must be on the left, while $s$ can be on the left, in the middle, or on the right. In this way, we reduce the original $8$ cases to $3$ cases.

For $G(n, f, s)$, the approach is completely the same.

**Design of state transition equations**

Since we know that $f$ is definitely on the left, we can then design the state transition equations separately according to whether $s$ is on the left, in the middle, or on the right.

![fig1](./images/0.png)

If $s$ is on the left, as shown in the figure above:

- $f$ has $f-1$ athletes on the left, who will compete with the corresponding athletes on the right, leaving $[0, f-1]$ athletes.

- $f$ and $s$ have $s-f-1$ athletes in between, who will compete with the corresponding athletes on the right, leaving $[0, s-f-1]$ athletes remaining.

If there are $f-1$ athletes remaining and $i$ of them, and $s-f-1$ athletes remaining and $j$ of them, then in the next round, the two best athletes are located at positions $i+1$ and $i+j+2$, respectively, and the total number of remaining athletes is $\lfloor \dfrac{n+1}{2} \rfloor$, where $\lfloor x \rfloor$ denotes the floor function of $x$. Therefore, we can obtain the state transition equation:

$$
F(n, f, s) = \left( \min_{i\in [0,f-1], j \in [0, s-f-1]} F(\lfloor \frac{n+1}{2} \rfloor, i + 1, i + j + 2) \right) + 1
$$

![fig2](./images/1.png)

If $s$ is in the middle, as shown in the figure above, the state transition equation is the same as in the case where $s$ is on the left.


If $s$ is on the right, the situation will be more complicated, and there will be three cases:

- In the simplest case, $f$ and $s$ just match each other, that is, $f+s=n+1$, then $F(n, f, s)=1$.

- In addition, if the one-on-one competition in this round is between $s$ and $s'=n+1-s$, then $f < s'$ is one case, and $f > s'$ is another case.

![fig3](./images/2.png)

However, we can know that according to the analysis similar to the previous section "Essentially Different Positioning Situations," we change $f$ to $n+1-s$, and $s$ to $n+1-f$. In this way, $f$ is still less than $s$, and $f$ is also less than $s'$ now. Therefore, we only need to consider the case where $f < s'$, as shown in the figure above:

- $f$ has $f-1$ athletes on the left, who will compete with the corresponding athletes on the right, leaving $[0, f-1]$ athletes.

- $f$ and $s'$ have $s'-f-1$ athletes in between, who will compete with the corresponding athletes on the right, leaving $[0, s'-f-1]$ athletes remaining.

- $s'$ will definitely lose to $s$.

- There are $n - 2s'$ athletes between $s'$ and $s$. If $n - 2s'$ is even, they compete in pairs, leaving $\dfrac{n - 2s'}{2}$ athletes; if $n - 2s'$ is odd, one person is eliminated by default, and the remaining athletes compete in pairs, leaving $\dfrac{n - 2s' + 1}{2}$ athletes. Therefore, regardless of whether $n - 2s'$ is odd or even, there will always be $\lfloor \dfrac{n - 2s' + 1}{2} \rfloor$ athletes between $s'$ and $s$.

If there are $f-1$ athletes and we keep $i$ of them, and $s'-f-1$ athletes and we keep $j$ of them, then in the next round, the two best athletes are respectively located at positions $i+1$ and $i+j+\lfloor \dfrac{n-2s'+1}{2} \rfloor+2$. Therefore, we can obtain the state transition equation:

$$
F(n, f, s) = \left( \min_{i\in [0,f-1], j \in [0, s'-f-1]} F(\lfloor \frac{n+1}{2} \rfloor, i + 1, i+j+\lfloor \dfrac{n-2s'+1}{2} \rfloor+2) \right) + 1
$$

So we have obtained all the state transition equations for $F$. For $G$, we just need to change all the $\min$ to $\max$.

**Details**

In the section on "Essentially Different Positioning Situations," we mentioned two transformation rules. So, when exactly should we apply each transformation rule, based on the actual values of $n$, $f$, and $s$ (rather than the abstract labels "left," "middle," or "right")?

There are many design methods here, and we introduce a relatively simple one, the method used in the solution code:

- Firstly, we use top-down memoization search instead of dynamic programming for state transition, which makes the code more concise and intuitive, and does not require consideration of the order of state evaluation.

- The entry of the memoized search is $F(n, \textit{firstPlayer}, \textit{secondPlayer})$. Before starting the memoized search, we first transform it using the transformation rule $F(n, f, s) = F(n, s, f)$ to ensure that $\textit{firstPlayer}$ is always less than $\textit{secondPlayer}$. In this way, since the other transformation rule $F(n, f, s) = F(n, n+1-s, n+1-f)$ does not change the size relationship between $f$ and $s$, in the subsequent memoized search, $f < s$ is always true, and we do not need to use the transformation rule $F(n, f, s) = F(n, s, f)$ anymore.

- In the previous table, there are $5$ cases that we need to transform, which are: "f is in the middle, s is on the left", "f is in the middle, s is on the right", "f is on the right, s is on the left", "f is on the right, s is in the middle", and "f is on the right, s is on the right". Since we have already ensured that $f < s$ always holds, there are only $2$ cases left to handle, namely: "f is in the middle, s is on the right" and "f is on the right, s is on the right". In addition, in the section "Design of State Transition Equations", we also found another case that needs to be handled, that is, "f is on the left, s is on the right, and $f > s' = n + 1 - s$".

So, can these three cases be unified? For the last case, we have $f+s > n+1$, and both "f in the middle, s on the right" and "f on the right, s on the right" also satisfy $f+s > n+1$, and all cases that do not require transformation do not satisfy $f+s > n+1$. Therefore, we only need to use the transformation rule $F(n, f, s) = F(n, n+1-s, n+1-f)$ once when $f+s > n+1$.

#### Implementation

<iframe src="https://leetcode.com/playground/abtQw2aU/shared" frameBorder="0" width="100%" height="500" name="abtQw2aU"></iframe>

#### Complexity analysis

- Time complexity: $O(n^4 \log n)$.
  
  In the state $F(n, f, s)$ (the same for $G(n, f, s)$), the range of each dimension is $O(n)$, and each state requires $O(n^2)$ time to enumerate all possible states that can be transferred to, thus the overall time complexity of the algorithm is $O(n^5)$.
  
  However, we can find that the number of values taken by $n$ in $F(n, f, s)$ is finite. During the process of memoization search, $n$ will become $\lfloor \dfrac{n+1}{2} \rfloor$ and continue to recurse downward, so the number of values taken by $n$ is only $O(\log n)$, that is, the total time complexity is $O(n^4 \log n)$.

- Space complexity: $O(n^2 \log n)$ or $O(n^3)$.
  
  The space required for storing all states. In C++ code, we use an array to store all states, even though the number of possible values for $n$ is only $O(\log n)$, we still need to allocate $O(n)$ space for the first dimension. In the Python code, the @cache uses a tuple as the key of a dictionary to store the values of all states, and the number of states is $O(n^2 \log n)$, so the space used is also $O(n^2 \log n)$.
  
  In addition, since the LeetCode platform calculates the running time by summing the running times of all test data, all test data will be tested in one run. **In this problem, the memoized storage results can be shared between different test cases**. Therefore, the command to clear the memoized results in the code (such as $\texttt{memset}$ in $\texttt{C++}$ or $\texttt{cache\_clear}$ in $\texttt{Python}$) can be omitted.