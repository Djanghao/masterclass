# Official Solution

**Link:** [https://leetcode.com/problems/rotate-list/solution/](https://leetcode.com/problems/rotate-list/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: 

**Intuition**

The nodes in the list are already linked, and hence the rotation basically means 

- To close the linked list into the ring.

- To break the ring after the new tail and just in front of the new head.

![rotate](../Figures/61/rotate.png)

> Where is the new head?

In the position `n - k`, where `n` is the number of nodes in the list. The new tail is just before, in the position `n - k - 1`. 

> We were assuming that `k < n`. What about the case of `k >= n`?

`k` could be rewritten as a sum `k = (k // n) * n + k % n`, where the first term doesn't result in any rotation. Hence one could simply replace `k` with `k % n` to always have a number of rotation places smaller than `n`.

**Algorithm**

The algorithm is quite straightforward :

* Find the old tail and connect it with the head `old_tail.next = head` to close the ring. Compute the length of the list `n` at the same time.

* Find the new tail, which is `(n - k % n - 1)`th node from the `head`, and the new head, which is `(n - k % n)`th node.

* Break the ring `new_tail.next = None` and return `new_head`.

**Implementation**

!?!../Documents/61_LIS.json:1000,583!?!

<iframe src="https://leetcode.com/playground/CwfUarQp/shared" frameBorder="0" width="100%" height="500" name="CwfUarQp"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ where $$N$$ is a number of elements in the list.
 
* Space complexity : $$\mathcal{O}(1)$$ since it's a constant space solution.