# Official Solution

**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solution/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solution/)

---

[TOC]

## Solution

---
### Approach #1: Brute Force [Memory Limit Exceeded]

**Intuition and Algorithm**

Create the multiplication table and sort it, then take the $$k^{th}$$ element.

<iframe src="https://leetcode.com/playground/JNTnTCLa/shared" frameBorder="0" name="JNTnTCLa" width="100%" height="258"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(m*n)$$ to create the table, and $$O(m*n\log(m*n))$$ to sort it.

* Space Complexity:  $$O(m*n)$$ to store the table.

---
### Approach #2: Next Heap [Time Limit Exceeded]

**Intuition**

Maintain a heap of the smallest unused element of each row. Then, finding the next element is a pop operation on the heap.

**Algorithm**

Our `heap` is going to consist of elements $$\text{(val, root)}$$, where $$\text{val}$$ is the next unused value of that row, and $$\text{root}$$ was the starting value of that row.

We will repeatedly find the next lowest element in the table. To do this, we pop from the heap. Then, if there's a next lowest element in that row, we'll put that element back on the heap.

<iframe src="https://leetcode.com/playground/Evrh9ssK/shared" frameBorder="0" name="Evrh9ssK" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(k * m \log m) = O(m^2 n \log m)$$.  Our initial heapify operation is $$O(m)$$.  Afterwards, each pop and push is $$O(m \log m)$$, and our outer loop is $$O(k) = O(m*n)$$

* Space Complexity: $$O(m)$$. Our heap is implemented as an array with $$m$$ elements.

---
### Approach #3: Binary Search [Accepted]

**Intuition**

As $$\text{k}$$ and $$\text{m*n}$$ are up to $$9 * 10^8$$, linear solutions will not work. This motivates solutions with $$\log$$ complexity, such as binary search.

**Algorithm**

Let's do the binary search for the answer $$\text{A}$$.

Say `enough(x)` is true if and only if there are $$\text{k}$$ or more values in the multiplication table that are less than or equal to $$\text{x}$$.  Colloquially, `enough` describes whether $$\text{x}$$ is large enough to be the $$k^{th}$$ value in the multiplication table.

Then (for our answer $$\text{A}$$), whenever $$\text{x}$$ &geq; $$\text{A}$$, `enough(x)` is `True`; and whenever $$\text{x < A}$$, `enough(x)` is `False`.

In our binary search, our loop invariant is `enough(hi) = True`. In the beginning, `enough(m*n) = True`, and whenever `hi` is set, it is set to a value that is "enough" (`enough(mi) = True`). That means `hi` will be the lowest such value at the end of our binary search.

This leaves us with the task of counting how many values are less than or equal to $$\text{x}$$. For each of $$\text{m}$$ rows, the $$i^{th}$$ row looks like $$\text{[i, 2*i, 3*i, ..., n*i]}$$. The largest possible $$\text{k*i &leq; x}$$ that could appear is $$\text{k = x // i}$$. However, if $$\text{x}$$ is really big, then perhaps $$\text{k > n}$$, so in total there are $$\text{min(k, n) = min(x // i, n)}$$ values in that row that are less than or equal to $$\text{x}$$.

After we have the count of how many values in the table are less than or equal to $$\text{x}$$, by the definition of `enough(x)`, we want to know if that count is greater than or equal to $$\text{k}$$.

<iframe src="https://leetcode.com/playground/4ankdsg9/shared" frameBorder="0" name="4ankdsg9" width="100%" height="377"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(m * \log (m*n))$$. Our binary search divides the interval $$\text{[lo, hi]}$$ into half at each step. At each step, we call `enough` which requires $$O(m)$$ time.

* Space Complexity: $$O(1)$$. We only keep integers in memory during our intermediate calculations.