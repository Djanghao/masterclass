# Official Solution

**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal/solution/](https://leetcode.com/problems/minimum-operations-to-make-array-equal/solution/)

---

[TOC]

## Solution

---

### Overview: Define the Target for Each Element

First of all, let's notice that the array contains the standard sequence of odd numbers: 

$$
(2 \times 0 + 1), (2 \times 1 + 1), ..., (2 \times i + 1), ..., (2 \times (n - 1) + 1)
$$

![simple](../Figures/1551/odd.png) 
*Fig 1. Array contains the standard sequence of odd numbers.*


> It's well-known that the such a sum of odd numbers is equal to $$n^2$$. It's easy to derive by splitting the sum into two parts:

$$
\sum\limits_{i  = 0}^{n - 1}{(2 i + 1)} = 2\sum\limits_{i  = 0}^{n - 1}{i} + \sum\limits_{i  = 0}^{n - 1}{1} \qquad(1)
$$

The first one is a [sum of natural numbers](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) and the second one is simple:

$$
\sum\limits_{i  = 0}^{n - 1}{(2 i + 1)} = 2\frac{(n - 1)n}{2} + n = n^2 \qquad(2)
$$

> Hence, the target value for each array element is $$n$$:

$$
\frac{\sum(arr)}{n} = \frac{n^2}{n} = n \qquad(3)
$$

<br />
<br />


---
### Approach 1: Brute Force

Now that we know that the target value is $$n$$, it's pretty evident how to make the input array equal using the minimum number of the operations.

![simple](../Figures/1551/schema.png) 
*Fig 2. How to make the input array equal using the minimum number of the operations.*


The minimum number of operations is the sum

$$
(n - 1) + (n - 3) + (n - 5) + ... + 1 (\text{or } 0) \qquad(4)
$$

Let's first compute this sum using a brute-force approach.

**Implementation**

<iframe src="https://leetcode.com/playground/eWMpmrp3/shared" frameBorder="0" width="100%" height="259" name="eWMpmrp3"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ to perform $$\frac{N}{2}$$ operations in a while loop.
    
* Space complexity: $$\mathcal{O}(1)$$ since we don't allocate any additional data structures here. 
<br />
<br />


---
### Approach 2: Math

As discussed in Approach 1, the problem is to compute the following sum:

$$
S = (n - 1) + (n - 3) + (n - 5) + ... + 1 (\text{or } 0) \qquad(4)
$$

In Approach 1, we do that in a linear time. Although, we could do that in a constant time using some math. It's not an interview-easy solution, but it's nice to know that we could do the job in a constant time.

Let's consider two cases here.

> Case 1. $$n$$ is even $$n = 2k$$.

![simple](../Figures/1551/schema.png) 
*Fig 3. Case 1: $$n$$ is even.*


Then the sum looks like

$$
S = (n - 1) + (n - 3) + ... + 1 = (2k - 1) + (2k - 3) + ... + 1 = 
\sum\limits_{i = 0}^{i = \frac{n}{2} - 1}{(2i + 1)}, \qquad n = 2k \qquad(5)
$$

As before, we could split this sum into two parts

$$
S = 2\sum\limits_{i = 0}^{i = \frac{n}{2} - 1}{i} + \sum\limits_{i = 0}^{i = \frac{n}{2} - 1}{1}, \qquad n = 2k \qquad(6)
$$

where the first term is a [sum of natural numbers](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) and the second one is easy to compute

$$
S = 2\frac{\frac{n}{2}\left(\frac{n}{2} - 1\right)}{2} + \frac{n}{2} = \frac{n^2}{4}, \qquad n = 2k \qquad(7)
$$

> Case 2. $$n$$ is odd $$n = 2k + 1$$. 

![simple](../Figures/1551/case2.png) 
*Fig 4. Case 2: $$n$$ is odd.*


Then the sum looks like

$$
S = (n - 1) + (n - 3) + (n - 5) + ... + 0 = \sum\limits_{i = 0}^{i = \frac{n - 1}{2}}{2i}, \qquad n = 2k + 1 \qquad(8)
$$

That's a [sum of natural numbers](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF):

$$
S = 2 \frac{\frac{n - 1}{2}\frac{n + 1}{2}}{2} = \frac{n^2 - 1}{4}, \qquad n = 2k + 1 \qquad(9)
$$

Now we simply merge the formulas (7) and (9) to get the answer

$$
S = \begin{cases}
\frac{n^2}{4} & n = 2k\\
\frac{n^2 - 1}{4} & n = 2k + 1
\end{cases}
$$


**Implementation**

<iframe src="https://leetcode.com/playground/4WHvcyAC/shared" frameBorder="0" width="100%" height="140" name="4WHvcyAC"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$ since we only return the answer.
    
* Space complexity: $$\mathcal{O}(1)$$ since we don't allocate any additional data structures here.