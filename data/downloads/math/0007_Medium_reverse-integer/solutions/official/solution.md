# Official Solution

**Link:** [https://leetcode.com/problems/reverse-integer/solution/](https://leetcode.com/problems/reverse-integer/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/832735103" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Pop and Push Digits & Check before Overflow

**Intuition**

We can build up the reverse integer one digit at a time.
While doing so, we can check beforehand whether or not appending another digit would cause overflow.

**Algorithm**

Reversing an integer can be done similarly to reversing a string.

We want to repeatedly "pop" the last digit off of $$x$$ and "push" it to the back of the $$\text{rev}$$. In the end, $$\text{rev}$$ will be the reverse of the $$x$$.

To "pop" and "push" digits without the help of some auxiliary stack/array, we can use math.

```cpp
// pop operation:
pop = x % 10;
x /= 10;

// push operation:
temp = rev * 10 + pop;
rev = temp;
```

However, this approach is dangerous, because the statement $$\text{temp} = \text{rev} \cdot 10 + \text{pop}$$ can cause overflow.

Luckily, it is easy to check beforehand whether or this statement would cause an overflow.

To explain, lets assume that $$\text{rev}$$ is positive.

1. If $$temp = \text{rev} \cdot 10 + \text{pop}$$ causes overflow, then it must be that $$\text{rev} \geq \frac{INTMAX}{10}$$
2. If $$\text{rev} > \frac{INTMAX}{10}$$, then $$temp = \text{rev} \cdot 10 + \text{pop}$$ is guaranteed to overflow.
3. If $$\text{rev} == \frac{INTMAX}{10}$$, then $$temp = \text{rev} \cdot 10 + \text{pop}$$ will overflow if and only if $$\text{pop} > 7$$

Similar logic can be applied when $$\text{rev}$$ is negative.

<iframe src="https://leetcode.com/playground/fm5j6WLP/shared" frameBorder="0" width="100%" height="378" name="fm5j6WLP"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(\log(x))$$. There are roughly $$\log_{10}(x)$$ digits in $$x$$.
* Space Complexity: $$O(1)$$.