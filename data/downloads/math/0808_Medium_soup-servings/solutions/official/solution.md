# Official Solution

**Link:** [https://leetcode.com/problems/soup-servings/solution/](https://leetcode.com/problems/soup-servings/solution/)

---

[TOC]

## Solution

--- 

### Overview

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before coming back to this article.

At first, one may notice that all soup amounts in all four operations are multiples of $25$ ml. This observation allows us to consider $25$ ml as one serving. In terms of servings, the operations will be as follows:
1. Serve four servings of soup A and 0 servings of soup B.
2. Serve three servings of soup A and one serving of soup B.
3. Serve two servings of soup A and two servings of soup B.
4. Serve one serving of soup A and three servings of soup B.

$n$ milliliters of soup is $\left\lfloor \frac{n}{25} \right\rfloor$ full servings plus $n \% 25$ milliliters. For example, $n = 474$ ml is $18$ full servings plus $24$ ml. In this case, $474$ ml will run out after $19$ servings: $18$ full servings plus one more to serve the remaining $24$ ml.

We will consider $n$ ml as $\text{ceil}\left(\frac{n}{25}\right)$ servings, even though the last one will not be full.

---

### Approach 1: Bottom-Up Dynamic Programming

#### Intuition

We will solve the problem using dynamic programming.

Let $\text{dp}[i][j]$ be the answer to the problem when we start with $i$ servings of soup A and $j$ servings of soup B.

Consider the base cases.
* The state $\text{dp}[i][j]$ with $i = 0, j > 0$ means that we ran out of soup A, but there remains soup B. In this case, the probability that soup A is empty first is $1$, and this is the value of $\text{dp}[0][j]$.
* The state with $i > 0, j = 0$ is symmetrical – the soup B is empty first, and thus $\text{dp}[i][0] = 0$.
* $i = 0, j = 0$ means that both types of soup ran out. Since the answer includes half the probability that A and B become empty at the same time, $\text{dp}[0][0] = \frac{1}{2}$.

Now we need to write down the recurrence relation of this DP.

First consider an example of calculating $\text{dp}[7][4]$.

![dp[7][4]](../Figures/808/808_example.png)

From the state $[7][4]$ we have four equiprobable transitions into $[3][4]$, $[4][3]$, $[5][2]$, and $[6][1]$. Thus $\text{dp}[7][4] = \frac{1}{4} (\text{dp}[3][4] + \text{dp}[4][3] + \text{dp}[5][2] + \text{dp}[6][1])$.

Now we write down the recurrence relation for arbitrary $i, j$.

At each state $\text{dp}[i][j]$ with $i > 0, j > 0$, we have four options each with an equal probability $\frac{1}{4}$.
* If we choose the first operation, we will decrease the amount of soup A by $4$ servings. After that, we will be in the state $\text{dp}[\max (0, i - 4)][j]$.
* The second operation decreases $i$ by $3$ and $j$ by $1$, thus the new state will be $\text{dp}[\max(0, i - 3)][j - 1]$.
* Similarly, the third operation brings us to the state $\text{dp}[\max(0, i - 2)][\max(0, j - 2)]$.
* Finally, the state after the fourth operation is $\text{dp}[i - 1][\max(0, j - 3)]$.
* The $\max$ in the transitions prevents negative indices. It handles the case when we try to serve more servings than there are.

Combining the above four transitions, we obtain the recurrence relation: $\text{dp}[i][j] = \frac{1}{4} (\text{dp}[\max (0, i - 4)][j] + \text{dp}[\max(0, i - 3)][j - 1] + \text{dp}[\max(0, i - 2)][\max(0, j - 2)] + \text{dp}[i - 1][\max(0, j - 3)])$.

Let $m = \text{ceil}\left(\frac{n}{25}\right)$ denote the initial amount of servings.

The answer to the problem is $\text{dp}[m][m]$ – the initial amount of both types of soup is $m$ servings.

The number of states in this DP is $O(m^2)$ – $O(m)$ options for $i$, and $O(m)$ options for $j$. Since, the constraints are $n \le 10^9$, thus $m \le \frac{10^9}{25} = 4 \cdot 10^7$. For such a large $m$, the DP solution is inappropriate.

But for small $m$, the solution works fast enough, and we can still implement this DP to investigate how $\text{dp}[m][m]$ depends on $m$. The provided values are with $5$ digits after the decimal point.

* $\text{dp}[1][1] = 0.62500$.
* $\text{dp}[2][2] = 0.62500$.
* $\text{dp}[3][3] = 0.65625$.
* $\text{dp}[4][4] = 0.71875$.
* $\text{dp}[5][5] = 0.74219$.
* $\text{dp}[6][6] = 0.75781$.
* $\text{dp}[7][7] = 0.78516$.

The first observation is that $\text{dp}[m][m]$ increases starting from $m = 2$. Let's proceed to investigate for larger values of $m$.

* $\text{dp}[10][10] = 0.82764$.
* $\text{dp}[20][20] = 0.91634$.
* $\text{dp}[30][30] = 0.95646$.
* $\text{dp}[40][40] = 0.97657$.
* $\text{dp}[50][50] = 0.98713$.
* $\text{dp}[100][100] = 0.99925$.
* $\text{dp}[150][150] = 0.99995$.
* $\text{dp}[200][200] = 1.00000$.
* $\text{dp}[250][250] = 1.00000$.
* $\text{dp}[300][300] = 1.00000$.

Wow! Starting from $m \approx 200$, $\text{dp}[m][m]$ is very close to $1$, closer than $10^{-5}$. Since the allowed error of our answer is $10^{-5}$ (as stated in the problem description), starting from $m \approx 200$, the testing system will accept $1$ as the correct answer.

The strict mathematical proof of the observed fact is beyond this article's scope, because the detailed analysis requires a strong knowledge of probability theory, which we do not expect from you.

However, we will give an intuition behind why $\text{dp}[m][m]$ tends to $1$ when $m$ tends to infinity.

<details>
<summary>Before analyzing our problem, consider a simple example with a fair coin. The coin can show either heads or tails with equal probability $\frac{1}{2}$.</summary>

* After $10$ tosses, the most probable outcome is to get $5$ heads. This can be considered the average result, with an equal number of heads and tails. However, the actual scenario can deviate from this average. The probability of getting exactly $5$ heads is $0.25$, while the probabilities of getting $4$ and $6$ heads are $0.21$ each. The probability of the number of heads falling outside the range of $4$ to $6$ is $1 - 0.21 - 0.25 - 0.21 = 0.34$. As we can see, this probability is not negligible. The likelihood of obtaining fewer than $4$ heads or more than 6 heads is significant.
* And what if we toss the coin $30$ times instead of $10$? The probability of getting fewer than $12$ heads in $30$ tosses is approximately $0.10$, and the probability of getting more than $18$ heads is also approximately $0.10$. Therefore, the probability of the number of heads not falling into the range $[12, 18]$ is $0.10 + 0.10 = 0.20$. As we can see, with $30$ tosses, the probability of obtaining a number of heads outside the range $[12, 18]$ is smaller compared to $10$ tosses, but it is still notable.
* If we toss the fair coin $100$ times, then the probability of not falling into $[40, 60]$ is $\approx 0.035$, which is smaller than the probability we got for $10$ tosses and even smaller than the probability we got for $30$ tosses.
* For $300$ tosses and the range $[120, 180]$, this probability is $4.1 \cdot 10^{-4}$, which is much smaller than the probability we got for $10$, $30$, and even $100$ tosses. This confirms that as the number of tosses increases, the distribution of the number of heads becomes more and more concentrated around the average value.

While the exact probabilities are not that important in this article, the key idea is that the more times we toss a fair coin, the more likely the number of heads will be close to the **expected value**.

With this example, we are demonstrating [the law of large numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers). It states that as more trials are performed, the results tend toward the expected value.
</details>

The four operations decrease the soup A amount by $4$, $3$, $2$, and $1$ servings, respectively. Since they are equiprobable, one operation **on average** decreases the amount by $\frac{1}{4} (4 + 3 + 2 + 1) = \frac{5}{2}$. For soup B, notice that there is no operation that decreases it by $4$ servings (the problem statement even explicitly mentions this, which can be taken as a hint). The **average** served amount is $\frac{1}{4} (0 + 1 + 2 + 3) = \frac{3}{2}$.

After completing $\frac{2m}{5}$ operations, the **average** number of servings served is $\frac{2m}{5} \cdot \frac{5}{2} = m$ for soup A and $\frac{2m}{5} \cdot \frac{3}{2} = \frac{3m}{5}$ for soup B. In other words, after $\frac{2m}{5}$ operations, soup B has, **on average**, $\frac{2m}{5}$ servings remaining, while soup A is already empty. This indicates that, in the **average** scenario, soup A is depleted first.

When $m$ is small, there is a noteworthy probability that the actual outcome will deviate sufficiently from the average, resulting in soup B finishing first. However, as $m$ grows larger, according to the law of large numbers, this probability diminishes.

While it is not a strict proof, the law of large numbers explains why $\text{dp}[m][m]$ tends to $1$.

One of the possible approaches to solve this problem is the following.
* Implement the $O(m^2)$ DP solution.
* Investigate how the answer to the problem depends on $m$.
* Make an observation that when $m$ increases, the answer also increases and tends to $1$.
* Find the value $m_0$ when the answer starts to be greater than $1 - 10^{-5}$.
* If $m < m_0$, run the DP solution, otherwise return $1$.

We have $m_0 \approx 200$. This can be found by experimenting with the code. For example, one could use an if statement to check if $\text{dp}[m][m]$ is greater than $1 - 10^{-5}$ and print a message when it is. Then you could repeatedly input values of $m$ until the message is printed.

But what if one cannot experiment with the code to find $m_0$? In this case, the provided approach is inappropriate. However, it is not necessary to find $m_0$ explicitly. We can calculate $\text{dp}[k][k]$ for all $k \le m$, but as soon as $\text{dp}[k][k]$ becomes greater than $1 - 10^{-5}$, we return $1$ as the answer.

The algorithm will be as follows.
* Initialize $\text{dp}[0][0] = \frac{1}{2}$.
* Iterate $k$ from $1$ to $m$.
	* Calculate $\text{dp}[i][j]$ for all $i$, $j$ such that $\max (i, j) = k$.
	* If $\text{dp}[k][k] > 1 - 10^{-5}$, return $1$.
* Return $\text{dp}[m][m]$.

#### Algorithm

We will use an auxiliary function $\text{calculateDP}(i, j)$, that will calculate $\text{dp}[i][j]$ using the DP recurrence relation $\text{dp}[i][j] = \frac{1}{4} (\text{dp}[\max (0, i - 4)][j] + \text{dp}[\max(0, i - 3)][j - 1] + \text{dp}[\max(0, i - 2)][\max(0, j - 2)] + \text{dp}[i - 1][\max(0, j - 3)])$.

The main function will be as follows.
* Calculate $m = \text{ceil}\left(\frac{n}{25}\right)$ – the initial amount of soup servings.
* Declare the hash map $\text{dp}$.
* Initialize $\text{dp}[0][0] = \frac{1}{2}$ as the base case of the DP.
* Iterate $k$ from $1$ to $m$.
	* Assign $\text{dp}[0][k] = 1$, $\text{dp}[k][0] = 0$ as the base cases.
	* Iterate $j$ from $1$ to $k$.
		* Set $\text{dp}[j][k] = \text{calculateDP}(j, k)$.
		* Set $\text{dp}[k][j] = \text{calculateDP}(k, j)$.
	* If $\text{dp}[k][k] > 1 - 10^{-5}$, return $1$.
* Return $\text{dp}[m][m]$.
		

#### Implementation

<iframe src="https://leetcode.com/playground/BQBS6QL8/shared" frameBorder="0" width="100%" height="500" name="BQBS6QL8"></iframe>


#### Complexity Analysis

* Time complexity: $O(1)$.

Let $\epsilon$ be the error tolerance, and $m_0$ be the first value such that $\text{dp}[m_0][m_0] > 1 - \epsilon$.

We calculate $O(\min(m, m_0) ^ 2) = O(m_0 ^ 2)$ states of DP in $O(1)$ each, meaning the total time complexity of the solution is $O(m_0  ^ 2)$.

We assume $\epsilon$ to be constant. It implies that $m_0$ is also constant, thus $O(m_0 ^ 2) = O(1)$. In our case, $\epsilon$ is $10^{-5}$, which gives us $m_0 \approx 200$.

* Space complexity: $O(1)$.

The space complexity is $O(m_0 ^ 2) = O(1)$.

---

### Approach 2: Top-Down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will compute the same DP, but the manner of computation will be different. We will use a recursive function $\text{calculateDP}(i, j)$ that will return $\text{dp}[i][j]$.

We will allow negative values $i$ and $j$, meaning the corresponding soup is empty.

The base cases are:
* $\text{calculateDP}(i, j) = \frac{1}{2}$ for $i \le 0, j \le 0$ – ran out of both types of soup.
* $\text{calculateDP}(i, j) = 1$ for $i \le 0, j > 0$ – ran out of only soup A.
* $\text{calculateDP}(i, j) = 0$ for $i > 0, j \le 0$ – ran out of only soup B.

The recurrence relation in terms of $\text{calculateDP}$ is $\text{calculateDP}(i, j) = \frac{1}{4} (\text{calculateDP}(i - 4, j) + \text{calculateDP}(i - 3, j - 1) + \text{calculateDP}(i - 2, j - 2) + \text{calculateDP}(i - 1, j - 3))$.

Since we do not want to recompute $\text{dp}[i][j]$ for the same state multiple times, we will store already found values in the hash map $\text{dp}$. Let's see how it works for $i = 4, j = 7$.

We call $\text{calculateDP}(4, 7)$ for the first time and the hash map $\text{dp}$ does not contain the state $i = 4, j = 7$ yet. We calculate this value using the recurrence formula and write it into $\text{dp}[4][7]$. When we will call $\text{calculateDP}(4, 7)$ later, we will not compute $\text{dp}[4][7]$ once more, but return the stored value $\text{dp}[4][7]$ from the hash map immediately.

Instead of iterating over DP states in nested `for` loops, we call the function with needed parameters, and the recursion will compute DP values for all required states.

#### Algorithm

The recursive function $\text{calculateDP}$ takes two parameters $i$ and $j$.
* If $i \le 0$ and $j \le 0$, return $\frac{1}{2}$.
* If $i \le 0$, return $1$.
* If $j \le 0$, return $0$.
* If the hash map $\text{dp}$ contains the result for the state $[i][j]$, return $\text{dp}[i][j]$.
* Compute $\text{dp}[i][j]$ as $\frac{1}{4} (\text{calculateDP}(i - 4, j) + \text{calculateDP}(i - 3, j - 1) + \text{calculateDP}(i - 2, j - 2) + \text{calculateDP}(i - 1, j - 3))$.
* Return $\text{dp}[i][j]$.

The main function.
* Calculate $m = \text{ceil}\left(\frac{n}{25}\right)$ – the initial amount of soup servings.
* Declare the hash map $\text{dp}$.
* Iterate $k$ from $1$ to $m$.
	* If $\text{calculateDP}(k, k) > 1 - 10^{-5}$, return $1$.
* Return $\text{calculateDP}(m, m)$.

#### Implementation

<iframe src="https://leetcode.com/playground/LrBgr5KW/shared" frameBorder="0" width="100%" height="500" name="LrBgr5KW"></iframe>

#### Complexity Analysis

* Time complexity: $O(1)$.

* Space complexity: $O(1)$.

Both time and space complexities are the same as in the first approach.