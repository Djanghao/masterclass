# Official Solution

**Link:** [https://leetcode.com/problems/4-keys-keyboard/solution/](https://leetcode.com/problems/4-keys-keyboard/solution/)

---

[TOC]

## Solution

---

### A Dynamic Programming Approach

>**Note.** For this approach, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this approach.

#### Intuition

Let's make the first observation: once we have used the copy operation, there is no need to print a single letter `A` anymore because we can paste the buffer instead. Thus we press a single letter `A` only at the beginning.

Let's say that we have used up $m$ presses so far and have obtained a string of length $l$.

* After these $m$ presses, one can copy-paste the text by pressing Ctrl+A, Ctrl+C, and Ctrl+V. It costs three key presses and doubles the length, so we have a length of $2l$ with a total of $m + 3$ presses.
* We can press Ctrl+V again, and the length will be $3l$ with $m+4$ total presses.
* We can continue this pattern – if we press Ctrl+V 3 times, we have a length of $4l$ with $m+5$ total presses. In general, we can have a length of $k \cdot l$ with $m + k + 1$ presses, where $k \ge 2$.

Here, we use the answer to the smaller problem ($m$) to get the answer to the bigger ones ($m+3$, $m+4$, $m+5$). It alludes to dynamic programming. But before jumping into DP, we make one more observation.

There is no need to press Ctrl+V more than four times in a row. Let the current length be $l$. Assume we press Ctrl+A, Ctrl+C, then Ctrl+V 5 times. After this sequence, the length becomes $6l$, and the buffer contains $l$ characters.

However, if we press Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+V instead, the length also becomes $6l$, but the buffer contains $2l$ characters now, which is not worse than in the former case. In both scenarios, we used seven presses.

Now we formulate the DP. Let $\text{dp}[i]$ be the answer when we can do $i$ presses.

We can initialize base cases as $\text{dp}[i]=i$ (print the letter `A` $i$ times, this is the first observation we made).

Now we want to describe transitions (the recurrence relation). As stated above, it is inefficient to press Ctrl+V 5 times or more in a row. This means we will press Ctrl+A, Ctrl+C, and then Ctrl+V up to four times:

- $\text{dp}[i + 3] = 2 \cdot \text{dp}[i]$
- $\text{dp}[i + 4] = 3 \cdot \text{dp}[i]$
- $\text{dp}[i + 5] = 4 \cdot \text{dp}[i]$
- $\text{dp}[i + 6] = 5 \cdot \text{dp}[i]$

In general, we have $\text{dp}[j] = (j - i - 1) \cdot \text{dp}[i]$, where $i + 3 \le j \le i + 6$. We want to take the maximum value, and this gives us our recurrence relation.

#### Algorithm

1. Create an array $\text{dp}$ of length `n + 1`. Initialize $\text{dp}[i] = i$.
2. Iterate with a variable $i$ until $n - 3$:
	* For each $j$ from $i+3$ to $\min (n, i+6)$ update (if greater) $\text{dp}[j]$ with $(j-i-1) \cdot \text{dp}[i]$.
3. Return $\text{dp}[n]$.

#### Implementation


<iframe src="https://leetcode.com/playground/eJSaUPTN/shared" frameBorder="0" width="100%" height="293" name="eJSaUPTN"></iframe>


#### Complexity Analysis

* Time complexity: $O(n)$.

There are $O(n)$ states in the DP. We visit each state once and loop up to 4 times, which costs $O(1)$ at each state.

* Space complexity: $O(n)$.

We store all $O(n)$ states in our `dp` array.