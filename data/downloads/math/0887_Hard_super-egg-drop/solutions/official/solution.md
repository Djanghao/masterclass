# Official Solution

**Link:** [https://leetcode.com/problems/super-egg-drop/solution/](https://leetcode.com/problems/super-egg-drop/solution/)

---

[TOC]

## Solution

---

### Approach 1: Dynamic Programming with Binary Search

#### Intuition

It's natural to attempt dynamic programming, as we encounter similar subproblems. Our state is $(K, N)$: $K$ eggs and $N$ floors left.  When we drop an egg from floor $X$, it either survives and we have state $(K, N-X)$, or it breaks and we have state $(K-1, X-1)$.

This approach would lead to a $O(K N^2)$ algorithm, but this is not efficient enough for the given constraints.  However, we can try to speed it up.  Let $dp(K, N)$ be the maximum number of moves needed to solve the problem in state $(K, N)$.  Then, by our reasoning above, we have:

$$
\text{dp}(K, N) = 1 + \min\limits_{1 \leq X \leq N} \Big( \max(\text{dp}(K-1, X-1), \text{dp}(K, N-X)) \Big)
$$

Now for the key insight:  Because $\text{dp}(K, N)$ is a function that is increasing on $N$, the first term $\mathcal{T_1} = \text{dp}(K-1, X-1)$ in our $\max$ expression is an increasing function on $X$, and the second term $\mathcal{T_2} = \text{dp}(K, N-X)$ is a decreasing function on $X$.  This means that we do not need to check every $X$ to find the minimum -- instead, we can binary search for the best $X$.


#### Algorithm

<p align="center">
    <img src="../Figures/891/sketch.png" alt="T1, T2 diagram" style="height: 300px;"/>
</p>

Continuing our discussion, if $\mathcal{T_1} < \mathcal{T_2}$, then the $X$ value chosen is too small; and if $\mathcal{T_1} > \mathcal{T_2}$, then $X$ is too big.  However, this argument is not quite correct: when there are only two possible values of $X$, we need to check both.

Using the above fact, we can use a binary search to find the correct value of $X$ more efficiently than checking all $N$ of them.

#### Implementation

<iframe src="https://leetcode.com/playground/f3msix68/shared" frameBorder="0" width="100%" height="500" name="f3msix68"></iframe>

#### Complexity Analysis

* Time Complexity:  $O(K N \log N)$.

* Space Complexity:  $O(K N)$.
<br />
<br />


---

### Approach 2: Dynamic Programming with Optimality Criterion

#### Intuition

As in *Approach 1*, we try to speed up our $O(K N^2)$ algorithm. Again, for a state of $K$ eggs and $N$ floors, where $\text{dp}(K, N)$ is the answer for that state, we have:

$$
\text{dp}(K, N) = 1 + \min\limits_{1 \leq X \leq N} \Big( \max(\text{dp}(K-1, X-1), \text{dp}(K, N-X)) \Big)
$$

Now, suppose $X_{\emptyset} = \text{opt}(K, N)$ is the smallest $X$ for which that minimum is attained: that is, the smallest value for which

$$
\text{dp}(K, N) = 1 + \max(\text{dp}(K-1, X_{\emptyset}-1), \text{dp}(K, N-X_{\emptyset}))
$$

The key insight that we will develop below, is that $\text{opt}(K, N)$ is an increasing function in $N$.

<p align="center">
    <img src="../Figures/891/sketch2.png" alt="T1, T2 diagram" style="height: 300px;"/>
</p>

The first term of our $\max$ expression, $\mathcal{T_1} = \text{dp}(K-1, X-1)$, is increasing with respect to $X$, but constant with respect to $N$.  The second term, $\mathcal{T_2} = \text{dp}(K, N-X)$, is decreasing with respect to $X$, but increasing with respect to $N$.

This means that as $N$ increases, the intersection point $X_{\emptyset} = \text{opt}(K, N)$ of these two lines is increasing, as we can see in the diagram.


#### Algorithm

Perform "bottom up" dynamic programming based on the recurrence below, keeping track of $X_{\emptyset} = \text{opt}(K, N)$.  Again:

$$
\text{dp}(K, N) = 1 + \min\limits_{1 \leq X \leq N} \Big( \max(\text{dp}(K-1, X-1), \text{dp}(K, N-X)) \Big)
$$

When we want to find $\text{dp}(K, N+1)$, instead of searching for $X$ from $1 \leq X \leq N$, we only have to search through $X_{\emptyset} \leq X \leq N$.

Actually, (as illustrated by the diagram,) if ever the next $X+1$ is worse than the current $X$, then we've searched too far, and we know our current $X$ is best for this $N$.

#### Implementation

<iframe src="https://leetcode.com/playground/GTGyD7W5/shared" frameBorder="0" width="100%" height="500" name="GTGyD7W5"></iframe>

#### Complexity Analysis

* Time Complexity:  $O(KN)$.

* Space Complexity:  $O(N)$.
<br />
<br />


---

### Approach 3: Mathematical

#### Intuition

Let's ask the question in reverse: given $T$ moves (and $K$ eggs), what is the most number of floors $f(T, K)$ that we can still "solve" (find $0 \leq F \leq f(T, K)$ with certainty)?  Then, the problem is to find the least $T$ for which $f(T, K) \geq N$.  Because more tries is always at least as good, $f$ is increasing on $T$, which means we could binary search for the answer.

Now, we find a similar recurrence for $f$ as in the other approaches. If in an optimal strategy we drop the egg from floor $X_{\emptyset}$, then either it breaks and we can solve $f(T-1, K-1)$ lower floors (floors $< X_{\emptyset}$); or it doesn't break and we can solve $f(T-1, K)$ higher floors (floors $\geq X_{\emptyset}$).  In total,

$$
f(T, K) = 1 + f(T-1, K-1) + f(T-1, K)
$$

Also, it is easily seen that $f(t, 1) = t$ when $t \geq 1$, and $f(1, k) = 1$ when $k \geq 1$.


<p align="center">
    <img src="../Figures/891/sketch3.png" alt="T1, T2 diagram" style="height: 300px;""/>
</p>

From here, we don't need to solve the recurrence mathematically - we could simply use it to generate all $O(K * \max(T))$ possible values of $f(T, K)$.

However, there is a mathematical solution to this recurrence. If $g(t, k) = f(t, k) - f(t, k-1)$, the difference between the $(k-1)$th and $k$th term, then subtracting the two equations:

$$
f(T, K) = 1 + f(T-1, K-1) + f(T-1, K)
$$

$$
f(T, K-1) = 1 + f(T-1, K-2) + f(T-1, K-1)
$$

we get:

$$
g(t, k) = g(t-1, k) + g(t-1, k-1)
$$

This is a binomial recurrence with solution $g(t, k) = \binom{t}{k+1}$, so that indeed,

$$
f(t, k) = \sum\limits_{1 \leq x \leq k} g(t, x) = \sum \binom{t}{x}
$$


#### Alternative Mathematical Derivation

Alternatively, when we have $t$ tries and $K$ eggs, the result of our $t$ throws must be a $t$-length sequence of successful and failed throws, with at most K failed throws.  The number of sequences with $0$ failed throws is $\binom{t}{0}$, the number of sequences with $1$ failed throw is $\binom{t}{1}$ etc., so that the number of such sequences is $\sum\limits_{0 \leq x \leq K} \binom{t}{x}$.

Hence, we can only distinguish at most these many floors in $t$ tries (as each sequence can only map to 1 answer per sequence.)  This process includes distinguishing $F = 0$, so that the corresponding value of $N$ is one less than this sum.

However, this is also a lower bound for the number of floors that can be distinguished, as the result of a throw on floor $X$ will bound the answer to be either at most $X$ or greater than $X$.  Hence, in an optimal throwing strategy, each such sequence actually maps to a unique answer.

#### Algorithm

Recapping our algorithm, we have the increasing [wrt $t$] function $f(t, K) = \sum\limits_{1 \leq x \leq K} \binom{t}{x}$, and we want the least $t$ so that $f(t, K) \geq N$.  We binary search for the correct $t$.

To evaluate $f(t, K)$ quickly, we can transform the previous binomial coefficient to the next (in the summand) by the formula $\binom{n}{k} * \frac{n-k}{k+1} = \binom{n}{k+1}$.

#### Implementation

<iframe src="https://leetcode.com/playground/ZuKvz2SD/shared" frameBorder="0" width="100%" height="480" name="ZuKvz2SD"></iframe>

#### Complexity Analysis

* Time Complexity:  $O(K\log N)$.

* Space Complexity:  $O(1)$.
<br />
<br />