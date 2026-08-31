# Official Solution

**Link:** [https://leetcode.com/problems/reverse-linked-list/solution/](https://leetcode.com/problems/reverse-linked-list/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/692021660" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Iterative

**Intuition**

Assume that we have linked list `1 → 2 → 3 → Ø`, we would like to change it to `Ø ← 1 ← 2 ← 3`.

While traversing the list, we can change the current node's next pointer to point to its previous element. Since a node does not have reference to its previous node, we must store its previous element beforehand. We also need another pointer to store the next node before changing the reference. Do not forget to return the new head reference at the end!

**Implementation**

<iframe src="https://leetcode.com/playground/aN8NyFQD/shared" frameBorder="0" width="100%" height="293" name="aN8NyFQD"></iframe>

**Complexity analysis**

* Time complexity : $$O(n)$$.
Assume that $$n$$ is the list's length, the time complexity is $$O(n)$$.

* Space complexity : $$O(1)$$.

---
### Approach 2: Recursive

**Intuition**

The recursive version is slightly trickier and the key is to work backwards. Assume that the rest of the list had already been reversed, now how do we reverse the front part? Let's assume the list is: n<sub>1</sub> → … → n<sub>k-1</sub> → n<sub>k</sub> → n<sub>k+1</sub> → … → n<sub>m</sub> → Ø

Assume from node n<sub>k+1</sub> to n<sub>m</sub> had been reversed and we are at node n<sub>k</sub>.

n<sub>1</sub> → … → n<sub>k-1</sub> → <b>n<sub>k</sub></b> → n<sub>k+1</sub> ← … ← n<sub>m</sub>

We want n<sub>k+1</sub>’s next node to point to n<sub>k</sub>.

So,

n<sub>k</sub>.next.next = n<sub>k</sub>;

Be very careful that n<sub>1</sub>'s next must point to Ø. If you forget about this, your linked list will have a cycle in it. This bug could be caught if you test your code with a linked list of size 2.

**Implementation**

<iframe src="https://leetcode.com/playground/TTya2eb6/shared" frameBorder="0" width="100%" height="259" name="TTya2eb6"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$.
Assume that $$n$$ is the list's length, the time complexity is $$O(n)$$.

* Space complexity : $$O(n)$$.
The extra space comes from implicit stack space due to recursion. The recursion could go up to $$n$$ levels deep.