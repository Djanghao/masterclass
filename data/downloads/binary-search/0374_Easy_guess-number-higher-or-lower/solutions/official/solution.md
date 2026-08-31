# Official Solution

**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solution/](https://leetcode.com/problems/guess-number-higher-or-lower/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/780501676" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

### Approach 1: Brute Force

We check every number from 1 to n-1 and pass it to the $$guess$$ function. The number
for which a 0 is returned is the required answer.

<iframe src="https://leetcode.com/playground/g7L477Q5/shared" frameBorder="0" width="100%" height="276" name="g7L477Q5"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. We scan all the numbers from 1 to n.
* Space complexity : $$O(1)$$. No extra space is used.
<br>
<br>

---
### Approach 2: Using Binary Search

**Algorithm**

We can apply Binary Search to find the given number. We start with the mid
number. We pass that number to the $$guess$$ function. If it returns a -1, it implies that the guessed number is larger than the required one. Thus, we use Binary Search for numbers lower than itself. Similarly, if it returns a 1, we use Binary Search
 for numbers higher than itself.

<iframe src="https://leetcode.com/playground/8bfHrALf/shared" frameBorder="0" width="100%" height="429" name="8bfHrALf"></iframe>

**Complexity Analysis**

* Time complexity : $$O\big(\log_2 n\big)$$. Binary Search is used.
* Space complexity : $$O(1)$$. No extra space is used.
<br>
<br>

---
### Approach 3: Ternary Search

**Algorithm**

In Binary Search, we choose the middle element as the pivot in splitting. In Ternary Search, we choose two pivots (say $$m1$$ and $$m2$$) such that the given range is divided into three equal parts. If the required number $$num$$ is less than $$m1$$ then we apply ternary search on the left segment of $$m1$$. If $$num$$ lies between $$m1$$ and $$m2$$, we apply ternary search between $$m1$$ and $$m2$$. Otherwise we will search in the segment right to $$m2$$.

<iframe src="https://leetcode.com/playground/3B6eoVYW/shared" frameBorder="0" width="100%" height="500" name="3B6eoVYW"></iframe>

**Complexity Analysis**

* Time complexity : $$O\big(\log_3 n \big)$$. Ternary Search is used.
* Space complexity : $$O(1)$$. No extra space is used.
<br>
<br>

---
## Follow up

It seems that ternary search is able to terminate earlier compared to binary search. But why is binary search more widely used?

### Comparisons between Binary Search and Ternary Search

Ternary Search is worse than Binary Search. The following outlines the recursive formula to count comparisons of Binary Search in the worst case.

$$
\begin{aligned}
T(n) &= T\bigg(\frac{n}{2} \ \bigg) + 2, \quad T(1) = 1 \\
T\bigg(\frac{n}{2} \ \bigg) &= T\bigg(\frac{n}{2^2} \ \bigg) + 2 \\
\\
\therefore{} \quad T(n) &= T\bigg(\frac{n}{2^2} \ \bigg) + 2 \times 2 \\
&= T\bigg(\frac{n}{2^3} \ \bigg) + 3 \times 2 \\
&= \ldots \\
&= T\bigg(\frac{n}{2^{\log_2 n}} \ \bigg) + 2 \log_2 n \\
&= T(1) + 2 \log_2 n \\
&= 1 + 2 \log_2 n
\end{aligned}
$$

The following outlines the recursive formula to count comparisons of Ternary Search in the worst case.

$$
\begin{aligned}
T(n) &= T\bigg(\frac{n}{3} \ \bigg) + 4, \quad T(1) = 1 \\
T\bigg(\frac{n}{3} \ \bigg) &= T\bigg(\frac{n}{3^2} \ \bigg) + 4 \\
\\
\therefore{} \quad T(n) &= T\bigg(\frac{n}{3^2} \ \bigg) + 2 \times 4 \\
&= T\bigg(\frac{n}{3^3} \ \bigg) + 3 \times 4 \\
&= \ldots \\
&= T\bigg(\frac{n}{3^{\log_3 n}} \ \bigg) + 4 \log_3 n \\
&= T(1) + 4 \log_3 n \\
&= 1 + 4 \log_3 n
\end{aligned}
$$

As shown above, the total comparisons in the worst case for ternary and binary search are $$1 + 4 \log_3 n$$ and $$1 + 2 \log_2 n$$ comparisons respectively. To determine which is larger, we can just look at the expression $$2 \log_3 n$$ and $$\log_2 n$$ . The expression $$2 \log_3 n$$ can be written as $$\frac{2}{\log_2 3} \times \log_2 n$$ . Since the value of $$\frac{2}{\log_2 3}$$ is greater than one, Ternary Search does more comparisons than Binary Search in the worst case.

Analysis written by: [@vinod23](https://leetcode.com/vinod23)