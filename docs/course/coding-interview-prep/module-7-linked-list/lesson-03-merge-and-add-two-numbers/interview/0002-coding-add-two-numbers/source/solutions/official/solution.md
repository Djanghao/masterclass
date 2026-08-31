# Official Solution

**Link:** [https://leetcode.com/problems/add-two-numbers/solution/](https://leetcode.com/problems/add-two-numbers/solution/)

---

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/817450104" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Elementary Math

**Intuition**

Keep track of the carry using a variable and simulate digits-by-digits sum starting from the head of list, which contains the least-significant digit.

![Illustration of Adding two numbers](../Figures/2_add_two_numbers.svg){:width="539px"}


*Figure 1. Visualization of the addition of two numbers: $$342 + 465 = 807$$.  
Each node contains a single digit and the digits are stored in reverse order.*


**Algorithm**

Just like how you would sum two numbers on a piece of paper, we begin by summing the least-significant digits, which is the head of $$l1$$ and $$l2$$. Since each digit is in the range of $$0 \ldots 9$$, summing two digits may "overflow". For example $$5 + 7 = 12$$. In this case, we set the current digit to $$2$$ and bring over the $$carry = 1$$ to the next iteration. $$carry$$ must be either $$0$$ or $$1$$ because the largest possible sum of two digits (including the carry) is $$9 + 9 + 1 = 19$$.

The pseudocode is as following:

* Initialize current node to dummy head of the returning list.
* Initialize carry to $$0$$.
* Loop through lists $$l1$$ and $$l2$$ until you reach both ends and carry is $$0$$.
    * Set $$x$$ to node $$l1$$'s value. If $$l1$$ has reached the end of $$l1$$, set to $$0$$.
    * Set $$y$$ to node $$l2$$'s value. If $$l2$$ has reached the end of $$l2$$, set to $$0$$.
    * Set $$sum = x + y + carry$$.
    * Update $$carry = sum / 10$$.
    * Create a new node with the digit value of $$(sum \bmod 10)$$ and set it to current node's next, then advance current node to next.
    * Advance both $$l1$$ and $$l2$$.
* Return dummy head's next node.

Note that we use a dummy head to simplify the code. Without a dummy head, you would have to write extra conditional statements to initialize the head's value.

Take extra caution of the following cases:

| Test case | Explanation |
| ------------- | ---------------- |
| $$l1=[0,1]$$<br>$$l2=[0,1,2]$$ | When one list is longer than the other. |
| $$l1=[]$$<br>$$l2=[0,1]$$ | When one list is null, which means an empty list. |
| $$l1=[9,9]$$<br>$$l2=[1]$$ | The sum could have an extra carry of one at the end, which is easy to forget. |

**Implementation**

<iframe src="https://leetcode.com/playground/XsLdm2AA/shared" frameBorder="0" width="100%" height="497" name="XsLdm2AA"></iframe>

**Complexity Analysis**

* Time complexity : $$O(\max(m, n))$$. Assume that $$m$$ and $$n$$ represents the length of $$l1$$ and $$l2$$ respectively, the algorithm above iterates at most $$\max(m, n)$$ times.

* Space complexity : $$O(1)$$. The length of the new list is at most $$\max(m,n) + 1$$ However, we don't count the answer as part of the space complexity.

**Follow up**

What if the the digits in the linked list are stored in non-reversed order? For example:

$$
(3 \to 4 \to 2) + (4 \to 6 \to 5) = 8 \to 0 \to 7
$$