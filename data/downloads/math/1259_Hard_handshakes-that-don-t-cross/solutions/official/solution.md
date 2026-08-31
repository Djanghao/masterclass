# Official Solution

**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solution/](https://leetcode.com/problems/handshakes-that-dont-cross/solution/)

---

[TOC]

## Solution

---

### Approach 1: Bottom-Up Dynamic Programming

#### Intuition

Consider a circle with $2 \cdot i$ people.

![A circle with 2i people](../Figures/1259/1259_circle.drawio.png)

Person `1` shakes hands with another person `k`. We denote their handshake with a line in the picture. There are people to the left (green) and right (blue).

A "left" person cannot shake hands with a "right" one because their handshake would cross over the handshake between people `1` and `k`. Thus "left" people shake hands only with "left" ones, and "right" people only with "right" ones. For everybody to shake hands at the end, the number of people in both sections must be even.

Notice that after the split, one can treat the left and right halves as smaller circles (they are smaller subproblems). We will solve the problem using dynamic programming. Let $\text{dp}[i]$ be the answer to the problem with $2 \cdot i$ people.

The base case is $\text{dp}[0] = 1$, – when there are no people, there are no handshakes, which is the only way to shake hands. Now one needs to write down the recurrence relation for this DP.

Initially, there are $2i$ people. We choose two people to shake hands, so there are $2i - 2$ remaining people. If there are $2j$ "left" people, the number of "right" people is $2i - 2 - 2j = 2 \cdot (i - j - 1)$. In this case, there are $\text{dp}[j]$ ways for the "left" people and $\text{dp}[i - j - 1]$ for the "right" people to shake hands. By the [rule of product](https://en.wikipedia.org/wiki/Rule_of_product), the number of ways for all people to shake hands is $\text{dp}[j] \cdot \text{dp}[i - j - 1]$.

To find $\text{dp}[i]$, we should try all possible handshakes that split the people into "left" and "right", i.e. all possible values for $j$: $\text{dp}[i] = \sum_{j=0}^{i-1} \text{dp}[j] \cdot \text{dp}[i - j - 1]$.

#### Algorithm

1. Initialize an array `dp` of length `numPeople / 2 + 1`. Remember that `dp[i]` is the answer to the problem if there are `2i` people. Set the base case `dp[0] = 1`.
2. Iterate `i` from `1` to `numPeople / 2` inclusive.
	* Iterate `j` from `0` to `i - 1` inclusive.
		* Increase `dp[i]` by `dp[j] * dp[i - j - 1]`. Remember to perform operations modulo `10⁹ + 7`.
3. Return `dp[numPeople / 2]`.

#### Implementation


<iframe src="https://leetcode.com/playground/77Vxq57R/shared" frameBorder="0" width="100%" height="310" name="77Vxq57R"></iframe>


#### Complexity Analysis

* Time complexity: $O(\text{numPeople}^2)$.

We calculate the DP in two nested loops. Both the outer and the inner loops do $O(\text{numPeople})$ iterations, so the total complexity is $O(\text{numPeople}^2)$.

* Space complexity: $O(\text{numPeople})$.

We store the array `dp`, which is of size $O(\text{numPeople})$. 

---

### Approach 2: Top-Down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will calculate the same DP, but the manner of organizing computations will differ. Here we will use a recursive function $\text{calculateDP}(i)$ that returns the value of $\text{dp}[i]$.

The base case of this function is the base case of DP: $\text{calculateDP}(0) = \text{dp}[0] = 1$.

The recurrence relation in terms of $\text{calculateDP}$: $\text{calculateDP}(i) = \sum_{j=0}^{i-1} \text{calculateDP}(j) \cdot \text{calculateDP}(i - j - 1)$.

Since we do not want to calculate the value of $\text{dp}[i]$ multiple times, but only once, thus we will store found values in the array $\text{dp}$.

When we call the function $\text{calculateDP}$ for some $i$ for the first time, we calculate the value of $\text{dp}[i]$ using the recurrence formula and write the result into the DP array. When we call $\text{calculateDP}(i)$ after that, we return $\text{dp}[i]$ from the array immediately.

The answer to the problem is $\text{calculateDP}\left(\frac{\text{numPeople}}{2}\right) = \text{dp}\left[\frac{\text{numPeople}}{2}\right]$.

There remains one small technical question: how to know whether we call $\text{calculateDP}(i)$ for the first time and need to compute the result, or we call it later and can return $\text{dp}[i]$ found earlier? One can handle this by initializing the $\text{dp}$ array with the value of $-1$. Then $\text{dp}[i] = -1$ will mean that we have not calculated $\text{calculateDP}(i)$ yet. As soon as we find the result of $\text{calculateDP}(i)$, we will write it into $\text{dp}[i]$, and this value will not be $-1$ anymore.

#### Algorithm

The recursive function $\text{calculateDP}$ takes a parameter $i$.
* If $\text{dp}[i] \ne -1$ (we found the result earlier), return $\text{dp}[i]$.
* Set $\text{dp}[i]$ to $0$.
* Iterate $j$ from $0$ to $i - 1$.
	* Add $\text{calculateDP}(j) \cdot \text{calculateDP}(i - j - 1)$ to $\text{dp}[i]$.
* Return $\text{dp}[i]$.

In the main function we have to declare the array $\text{dp}$, initialize $\text{dp}[0] = 1$ and $\text{dp}[i] = -1$ for all $i > 0$. Then we return $\text{calculateDP}\left(\frac{\text{numPeople}}{2}\right)$ as the answer.

#### Implementation


<iframe src="https://leetcode.com/playground/9a2cNtuR/shared" frameBorder="0" width="100%" height="446" name="9a2cNtuR"></iframe>


#### Complexity Analysis

* Time complexity: $O(\text{numPeople}^2)$.

Even though we changed the order of DP computation, the time complexity remains the same. As in the first approach, there are $O(\text{numPeople})$ states of DP, and for each, we compute the answer in $O(\text{numPeople})$. Since we use memoization, we calculate each DP value only once.

* Space complexity: $O(\text{numPeople})$.

It is the same as in the previous approach.

---

### Approach 3: Catalan Numbers

#### Intuition

> This is a very mathematical approach. You are not expected to come up with this approach during an interview.

First, we introduce the definition of a *balanced bracket sequence*.

> * The empty string is a balanced bracket sequence.
> * If a string $s$ is a balanced bracket sequence, then so is $(s)$.
> * If $s$ and $t$ are balanced bracket sequences, then so is $st$.

For instance, `(())()`  is a balanced bracket sequence, but  `())(` is not.

In a balanced bracket sequence, any left parenthesis `(` has a corresponding right parenthesis `)` and any right one has a corresponding left one.

One may establish the following bijection between balanced bracket sequences and pairing people in the circle without crossings – when brackets at positions `i` and `j` correspond to each other, people `i` and `j` shake hands. Since a bracket sequence is balanced, the handshakes do not cross.

Look at the following example where the handshakes between $i_1$ and $j_1$ and between $i_2$ and $j_2$ cross ($i_1 < i_2 < j_1 < j_2$).

![Intersection](../Figures/1259/1259_intersection.drawio.png)

We flatten the circle in the picture into a straight line for a better understanding of the connection between handshakes in a circle and balanced bracket sequences.

![Intersection on a straight line](../Figures/1259/1259_intersection_straight.drawio.png)

There does not exist a balanced sequence corresponding to this example. The bracket at position $i_1$ must correspond to the one at $j_1$. The same holds for $i_2$ and $j_2$. The pairs $(i_1, j_1)$ and $(i_2, j_2)$ must intersect, but it is impossible in a balanced sequence.

Let $n$ denote `numPeople / 2` and $m = 10^9 + 7$.

Due to the bijection, the number of ways for $2n$ people to shake hands without crossings is equal to the number of balanced bracket sequences containing $n$ pairs of parentheses, which equals $C_n$ – the $n$-th [Catalan number](https://en.wikipedia.org/wiki/Catalan_number).

The Catalan numbers have the recurrence relation: $C_0 = 1$ and $C_{i+1} = \frac{2 (2i+1)}{i+2} C_i$ for $i \ge 0$. We use this relation to calculate $C_n$.

The issue here is that we have a division by $i+2$, but we need to perform modular arithmetic with $10^9 + 7$ to prevent the answer from overflowing.

Let's quickly talk about division with modulo.

>Given an integer $m$ > 1, called a *modulus*, two integers $a$ and $b$ are said to be *congruent* modulo $m$, written $a \equiv b \pmod{m}$ if $a-b$ is divisible by $m$ (or equivalently if $a$ and $b$ have the same remainder when divided by $m$).

>A [modular multiplicative inverse](https://en.wikipedia.org/wiki/Modular_multiplicative_inverse) of an integer $a$ is an integer $x$ such that $a \cdot x$ is congruent to $1$ with respect to the modulus $m$. To write it formally: we want to find an integer $x$ so that $a \cdot x \equiv 1 \pmod{m}$. We will denote $x$ with $a^{-1}$.

Instead of dividing an element, we multiply by its reciprocal/inverse. One may rewrite the formula modulo $m$: 

$C_{i+1} \equiv 2 (2i+1) (i+2)^{-1} C_i \pmod{m}$.

We need to find the modular inverse for every $i + 2$ before going through the recurrence relation. We can precompute this in an array `inv`.

Given that $m > i$, according to [Euclidean division](https://en.wikipedia.org/wiki/Euclidean_division) $m = k \cdot i + r$ where $k = \lfloor \frac{m}{i} \rfloor$ and `r = m % i`.
* $k \cdot i + r \equiv 0 \pmod{m}$.
* $r \equiv -k \cdot i \pmod{m}$.
* $r \cdot i^{-1} \equiv -k \pmod{m}$.
* $i^{-1} \equiv -k \cdot r^{-1} \pmod{m}$.

Applying the last expression, we can compute the modular inverse for every number in the range $[1, n+1]$ before calculating the Catalan numbers.

#### Algorithm

1. Compute the modular inverse for every number in the range $[1, n+1]$ using the formula described above and store the values in an array `inv`.
2. Calculate the Catalan numbers using the relation described above: $C_0 = 1$, $C_{i+1} \equiv 2 (2i+1) (i+2)^{-1} C_i \pmod{m}$.
3. Return $C_n$.

#### Implementation


<iframe src="https://leetcode.com/playground/2tFVBaFS/shared" frameBorder="0" width="100%" height="429" name="2tFVBaFS"></iframe>


#### Complexity Analysis

* Time complexity: $O(\text{numPeople})$.

First, we calculate the inverse elements for numbers in the range $[1, n+1]$ in $O(n)$. Then we compute Catalan numbers in $O(n)$. Total complexity is $O(n) = O(\text{numPeople})$.

* Space complexity: $O(\text{numPeople})$.

We use the array `inv` of size $O(n)$ for storing inverse elements.