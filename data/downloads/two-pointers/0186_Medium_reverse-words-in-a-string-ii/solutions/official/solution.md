# Official Solution

**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solution/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/844727300" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Reverse the Whole String and Then Reverse Each Word

To have this problem in Amazon interview is a good situation since the input is a mutable structure and hence one could aim $$\mathcal{O}(1)$$ space solution without any technical difficulties.

> The idea is simple: reverse the whole string and then reverse each word. 

![fig](../Figures/186/reverse.png)

**Algorithm**

Let's first implement two functions:

- `reverse(l: list, left: int, right: int)`, which reverses array characters between left and right pointers. C++ users could directly use built-in `std::reverse`. 

- `reverse_each_word(l: list)`, which uses two pointers to mark the boundaries of each word and the previous function to reverse it. 

Now `reverseWords(s: List[str])` implementation is straightforward:

- Reverse the whole string: `reverse(s, 0, len(s) - 1)`.

- Reverse each word: `reverse_each_word(s)`.

**Implementation**

!?!../Documents/186_LIS.json:1000,507!?!

<iframe src="https://leetcode.com/playground/DChjKPUj/shared" frameBorder="0" width="100%" height="500" name="DChjKPUj"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$, it's two passes along the string.

* Space complexity: $$\mathcal{O}(1)$$, it's a constant space solution.
<br /> 
<br />