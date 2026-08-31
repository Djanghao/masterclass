# Official Solution

**Link:** [https://leetcode.com/problems/remove-interval/solution/](https://leetcode.com/problems/remove-interval/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/479459715" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Sweep Line, One Pass.

**Best Possible Time Complexity**

> What is the best possible time complexity here?

The input is sorted, which usually means _at least_ linear time complexity. Is it possible to do $$\mathcal{O}(\log N)$$? No, because to copy input elements into output still requires $$\mathcal{O}(N)$$ time.

**Sweep Line**

[Sweep Line algorithm](https://en.wikipedia.org/wiki/Sweep_line_algorithm) is a sort of geometrical visualization. Let's imagine a vertical line that is swept across the plane, stopping at some points. That could create various situations, and the decision to make depends on the stop point.

![line](../Figures/1272/sweep2.png)

**Algorithm**

Let's sweep the line by iterating over input intervals and consider what it could bring to us.

- Current interval has no overlaps with toBeRemoved one. That means there is nothing to take care of, just update the output.

![line](../Figures/1272/no_overlaps.png)

- The second situation is when toBeRemoved interval is inside of the current interval. Then one has to add two non-overlapping parts of the current interval in the output.

![line](../Figures/1272/inside2.png)

- "Left" overlap.

![line](../Figures/1272/left_overlap.png)

- "Right" overlap.

![line](../Figures/1272/right_overlap.png)

And here we are, all situations are covered, and the job is done.

**Implementation**

One way of converting the above into code would be to check for each of the four situations described above. A better way though is to recognize that *if there is any overlap*, then the overlapped interval will be broken into *up to two new intervals*; a left interval and a right interval. We can, therefore, treat situation 2 as being both situation 3 and situation 4.

<iframe src="https://leetcode.com/playground/8zsxMCkA/shared" frameBorder="0" width="100%" height="412" name="8zsxMCkA"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ since it's one pass along the input array.

* Space complexity : $$\mathcal{O}(1)$$ without considering $$\mathcal{O}(N)$$ space for the output list.