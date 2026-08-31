# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solution/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solution/)

---

[TOC]

## Solution

---

### Approach 1: Dynamic Programming

>**Note.** For this approach, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this approach.

#### Intuition

To solve the problem of determining the minimum number of taps needed to water the entire garden, we can employ a dynamic programming (DP) approach.

Let $\text{dp}$ be an array of length $n + 1$, where $n$ is the length of the garden. The value $\text{dp}[i]$ represents the minimum number of taps needed to water the garden from position $0$ to position $i$.

We initialize this array with a large value like infinity for each position. By doing so, we indicate that no taps have been applied yet, and we can consider these positions as "unreachable" until we find a tap that can water them.

**Base case**

The first step in calculating every DP is finding the base cases.

In this DP, we have a base case $\text{dp}[0]$. We set $i = 0$ in the DP definition and obtain that $\text{dp}[0]$ is the minimum number of taps needed to water the garden from position $0$ to position $0$ (the part of garden of zero length). Since we do not have to open any taps to water a part of zero length, thus $\text{dp}[0] = 0$.

By setting the value of $\text{dp}[0]$ to $0$, we establish the base case of our dynamic programming solution.

**DP transitions**

Now, we iterate through each tap, one by one. For each tap, we identify its leftmost and rightmost positions that can be reached and watered. The leftmost position of the $i^\text{th}$ tap is $\text{tap\_start} = \max (0, i - \text{ranges}[i])$ and the rightmost one is $\text{tap\_end} = \min (n, i + \text{ranges}[i])$.

Consider an arbitrary position $j$ inside the range of the $i^\text{th}$ tap. By DP definition, we need $\text{dp}[j]$ taps to water the part of the garden from position $0$ to position $j$.

Thus if we open these $\text{dp}[j]$ taps and the $i^\text{th}$ tap ($\text{dp}[j] + 1$ taps in total), we will water the part of the garden from position $0$ to position $\text{tap\_end}$. It means that we can update $\text{dp}[\text{tap\_end}]$ with $\text{dp}[j] + 1$.

In particular, when position $0$ is inside the range of the $i^\text{th}$ tap, this one tap is sufficient to water the garden from position $0$ to position $\text{tap\_end}$, and thus $\text{dp}[i] = 1$. How does our DP "know" that $\text{dp}[i]$ must be $1$? When considering $j = 0$, we will update $\text{dp}[i]$ with $\text{dp}[0] + 1 = 1$. This is how we make use of our base case $\text{dp}[0] = 0$.

So we will iterate through the positions within the tap's range, from left to right. At each position $j$, we compare $\text{dp}[j] + 1$ (the minimum number of taps needed at $j$ plus one) with the current value of $\text{dp}[\text{tap\_end}]$. If $\text{dp}[j] + 1$ is smaller than $\text{dp}[\text{tap\_end}]$, we update $\text{dp}[\text{tap\_end}]$ with $\text{dp}[j] + 1$. By doing so, we ensure that $\text{dp}[\text{tap\_end}]$ holds the optimal minimum number of taps needed to reach $\text{tap\_end}$ from the previous positions.

After processing all the taps, we check the number of taps needed at the last position of the garden. If the value is still infinity, it means that the garden cannot be watered, and we return $-1$ to indicate this. Otherwise, if the value is a finite number, we return it as the minimum number of taps needed to water the entire garden.

#### Algorithm

1. Declare an array $\text{dp}$ of size $n + 1$. Initialize it with infinite values (in code, we use a large number $10^9$ to represent infinity).
2. Set $\text{dp}[0]$ to $0$ (the base case of the DP).
3. Iterate $i$ from $0$ to $n$ (through each tap from left to right).
	* Calculate the leftmost position reachable by the current tap as $\text{tap\_start} = \max (0, i - \text{ranges}[i])$.
	* And the rightmost position $\text{tap\_end} = \min (n, i + \text{ranges}[i])$.
	* Iterate through the positions $j$ from $\text{tap\_start}$ to $\text{tap\_end}$ (within the tap's reach).
		* Update $\text{dp}[\text{tap\_end}]$ with $\text{dp}[j] + 1$ if it's smaller.
4. If $\text{dp}[n]$ is infinite, it means that it's impossible to water the entire garden and we return $-1$.
5. Return $\text{dp}[n]$.


#### Implementation

<iframe src="https://leetcode.com/playground/W3PptqgM/shared" frameBorder="0" width="100%" height="500" name="W3PptqgM"></iframe>


#### Complexity Analysis

Let $m$ be the average range of the taps.

* Time Complexity: $O(n \cdot m)$.

Iterating through each tap and updating the minimum number of taps for each position within its range requires nested loops. The outer loop iterates through each of the $n + 1$ taps. The inner loop iterates through the positions within the range of each tap. The number of iterations for the inner loop is $O(m)$.

Overall, the time complexity of the solution is $O(n \cdot m)$.

* Space Complexity: $O(n)$.

The space complexity is determined by the additional memory used to store the DP array. The size of the DP array is $n + 1$.

Therefore, the space complexity is $O(n)$.

---

### Approach 2: Greedy

>We highly recommend you to solve the problem [Jump Game II](https://leetcode.com/problems/jump-game-ii/) before reading this approach.

#### Intuition

Let the leftmost position of the tap's range be $\text{start}$ and the rightmost position be $\text{end}$.

First, we compute an auxiliary array $\text{max\_reach}$. Let $\text{max\_reach}[i]$ be the maximum $\text{end}$ over all taps having $\text{start} = i$. We will use this array in our algorithm.

>Let's reformulate our problem in a slightly different manner.
>You start at the position $0$. You can jump from position $i$ to the right but not further that $\text{max\_reach}[i]$. What is the minimum number of jumps to reach position $n$?
>In this way, we reduce our problem to [Jump Game II](https://leetcode.com/problems/jump-game-ii/).

In the greedy approach, we follow an intuitive strategy. We start with $\text{taps} = 0$ and a pointer $\text{curr\_end}$. $\text{taps}$ represents the number of taps used. The pointer $\text{curr\_end}$ represents the position such that we have currently watered the part of the garden from position $0$ to $\text{curr\_end}$. Initially $\text{curr\_end} = 0$ points to the start of the garden since we have not watered anything yet.

At each step, we select the tap that can water the *furthest right* in the garden (we denote this position as $\text{next\_end}$) among the taps that can reach $\text{curr\_end}$. Then we set $\text{curr\_end}$ to $\text{next\_end}$ and continue the process.

We can formulate the *subproblem* as follows: find $\text{next\_end}$ – the maximum $\text{end}$ over the taps having $\text{start} \le \text{curr\_end}$ (covering the position $\text{curr\_end}$).

The tap is interesting only if $\text{max\_reach}[\text{start}] = \text{end}$ because otherwise there exists another tap with the same $\text{start}$ but with greater $\text{end}$ and it covers a bigger range.

How can we rewrite the subproblem in terms of $\text{max\_reach}$? We replace $\text{start}$ with $i$ and $\text{end}$ with $\text{max\_reach}[i]$ and obtain: find $\text{next\_end}$ – the maximum $\text{max\_reach}[i]$ over the positions $i \le \text{curr\_end}$.

After finding $\text{next\_end}$, we treat it as our new current position in the garden and assign $\text{curr\_end} = \text{next\_end}$. This allows us to move forward and continue the iteration. We also increment $\text{taps}$, since we open one more tap ending at the position $\text{next\_end}$.

By iterating through the taps in this manner and selecting the tap with the furthest reach at each step, we aim to maximize the coverage of the garden with each tap selection. This strategy helps ensure that we efficiently water as much of the garden as possible with the minimum number of taps.

This process continues until we reach the end of the garden. At that point, if we have successfully selected taps that cover the entire garden, we return the count of chosen taps as the minimum number required. However, if it is not possible to water the entire garden, we return $-1$ to indicate that it cannot be achieved.

#### Algorithm

1. Declare the array $\text{max\_reach}$.
2. Iterate $i$ from $0$ to $n$ (over the taps).
	* Calculate $\text{start}$ – the leftmost and $\text{end}$ – the rightmost positions the tap can reach.
	* Update $\text{max\_reach}[\text{start}]$ with $\text{end}$ if it is larger.
3. Declare the variables $\text{taps}$ – number of taps used, $\text{curr\_end}$ – current rightmost position reached, $\text{next\_end}$ – next rightmost position that can be reached. Initialize $\text{taps} = 0$, $\text{curr\_end} = 0$, $\text{next\_end} = 0$.
4. Iterate $i$ from $0$ to $n$ through the garden.
	* If $i > \text{next\_end}$, it means that the current position cannot be reached and we return $-1$.
	* If $i > \text{curr\_end}$, it means that we have to open a new tap ending at the position $\text{next\_end}$.
		* Increment $\text{taps}$.
		* Set $\text{curr\_end}$ to $\text{next\_end}$.
	* Update $\text{next\_end}$ with $\text{max\_reach}[i]$ if it is larger.
5. Return $\text{taps}$.

#### Implementation

<iframe src="https://leetcode.com/playground/3BfePubr/shared" frameBorder="0" width="100%" height="500" name="3BfePubr"></iframe>


#### Complexity Analysis

* Time Complexity: $O(n)$.

We iterate through the garden once to calculate the maximum reach for each position, and then iterate through the garden again to choose the taps and determine the minimum number of taps required. The iteration involves visiting each position in the garden once, resulting in a linear time complexity.

* Space Complexity: $O(n)$.

We use additional space to store the $\text{max\_reach}$ array of size $n + 1$. Therefore, the space complexity is linear with respect to the size of the garden.