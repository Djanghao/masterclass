# Official Solution

**Link:** [https://leetcode.com/problems/reverse-string/solution/](https://leetcode.com/problems/reverse-string/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/682181606" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

--- 

### Overview

_Life is short, use Python._ (c) 

<iframe src="https://leetcode.com/playground/SxAYws7t/shared" frameBorder="0" width="100%" height="106" name="SxAYws7t"></iframe>

Speaking seriously, let's use this problem to discuss two things:

- Does _in-place_ mean constant space complexity?

- Two pointers approach. 
<br /> 
<br />


---
### Approach 1: Recursion, In-Place, $$\mathcal{O}(N)$$ Space

**Does _in-place_ mean constant space complexity?**

No. [By definition](https://en.wikipedia.org/wiki/In-place_algorithm), an in-place algorithm is an algorithm that transforms input using no auxiliary data structure. 

The tricky part is that space is used by many actors, not only by data structures. The classical example is to use a recursive function without any auxiliary data structures. 

Is it in place? Yes. 

Is it constant space? No, because of the recursion stack.

![fig](../Figures/344/stack2.png) 

**Algorithm**

Here is an example. Let's implement the recursive function `helper` which receives two pointers, left and right, as arguments. 

- Base case: if `left >= right`, do nothing.

- Otherwise, swap `s[left]` and `s[right]` and call `helper(left + 1, right - 1)`.

To solve the problem, call the helper function passing the head and tail indexes as arguments: `return helper(0, len(s) - 1)`.

**Implementation**

<iframe src="https://leetcode.com/playground/6aQgR4Za/shared" frameBorder="0" width="100%" height="276" name="6aQgR4Za"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ time to perform $$N/2$$ swaps. 

* Space complexity : $$\mathcal{O}(N)$$ to keep the recursion stack.
<br /> 
<br />


---
### Approach 2: Two Pointers, Iteration, $$\mathcal{O}(1)$$ Space

**Two Pointers Approach**

In this approach, two pointers are used to process two array elements at the same time. Usual implementation is to set one pointer in the beginning and one at the end and then to move them until they both meet.  

Sometimes one needs to generalize this approach in order to use three-pointers, like for classical [Sort Colors problem](https://leetcode.com/articles/sort-colors/).

**Algorithm**

- Set the pointer left at index 0, and the pointer right at index `n - 1`, where n is the number of elements in the array.

- While left < right:

    - Swap `s[left]` and `s[right]`.
    
    - Move the left pointer one step right, and the right pointer one step left.
    
![fig](../Figures/344/two.png)    

**Implementation**

<iframe src="https://leetcode.com/playground/LteeH4sn/shared" frameBorder="0" width="100%" height="225" name="LteeH4sn"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ to swap $$N/2$$ element. 

* Space complexity : $$\mathcal{O}(1)$$, it's a constant space solution.