# Official Solution

**Link:** [https://leetcode.com/problems/falling-squares/solution/](https://leetcode.com/problems/falling-squares/solution/)

---

[TOC]

### Approach Framework

**Intuition**

Intuitively, there are two operations: `update`, which updates our notion of the board (number line) after dropping a square; and `query`, which finds the largest height in the current board on some interval. We will work on implementing these operations.

**Coordinate Compression**

In the below approaches, since there are only up to `2 * len(positions)` critical points, namely the left and right edges of each square, we can use a technique called *coordinate compression* to map these critical points to adjacent integers, as shown in the code snippets below.  

For brevity, these snippets are omitted from the remaining solutions.

<iframe src="https://leetcode.com/playground/6Bho7TMC/shared" frameBorder="0" width="100%" height="276" name="6Bho7TMC"></iframe>

---
### Approach 1: Offline Propagation

**Intuition**

Instead of asking the question "What squares affect this query?", let's ask the question "What queries are affected by this square?"

**Algorithm**

Let `qans[i]` be the maximum height of the interval specified by `positions[i]`. In the end, we'll return a running max of `qans`.

For each square `positions[i]`, the maximum height will get higher by the size of the square we drop. Then, for any future squares that intersect the interval `[left, right)` (where `left = positions[i][0], right = positions[i][0] + positions[i][1]`), we'll update the maximum height of that interval.

<iframe src="https://leetcode.com/playground/VgRrtWC6/shared" frameBorder="0" width="100%" height="500" name="VgRrtWC6"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where $$N$$ is the length of `positions`. We use two for-loops, each of complexity $$O(N)$$.

* Space Complexity: $$O(N)$$, the space used by `qans` and `ans`.
<br>
<br>

---
### Approach 2: Brute Force with Coordinate Compression

**Intuition and Algorithm**

Let `N = len(positions)`. After mapping the board to a board of length at most $$2* N \leq 2000$$, we can brute force the answer by simulating each square's drop directly.

Our answer is either the current answer or the height of the square that was just dropped, and we'll update it appropriately.

<iframe src="https://leetcode.com/playground/cwsSAUWX/shared" frameBorder="0" width="100%" height="500" name="cwsSAUWX"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where $$N$$ is the length of `positions`. We use two for-loops, each of complexity $$O(N)$$ (because of coordinate compression.)

* Space Complexity: $$O(N)$$, the space used by `heights`.
<br>
<br>

---
### Approach 3: Block (Square Root) Decomposition

**Intuition**

Whenever we perform operations (like `update` and `query`) on some interval in a domain, we could segment that domain with size $$W$$ into blocks of size $$\sqrt{W}$$.  

Then, instead of a typical brute force where we update our array `heights` representing the board, we will also hold another array `blocks`, where `blocks[i]` represents the $$B = \lfloor \sqrt{W} \rfloor$$ elements `heights[B*i], heights[B*i + 1], ..., heights[B*i + B-1]`.  This allows us to write to the array in $$O(B)$$ operations.

**Algorithm**

Let's get into the details.  We actually need another array, `blocks_read`. When we update some element `i` in block `b = i / B`, we'll also update `blocks_read[b]`. If later we want to read the entire block, we can read from here (and stuff written to the whole block in `blocks[b]`.)

When we write to a block, we'll write in `blocks[b]`. Later, when we want to read from an element `i` in block `b = i / B`, we'll read from `heights[i]` and `blocks[b]`.

Our process for managing `query` and `update` will be similar.  While `left` isn't a multiple of `B`, we'll proceed with a brute-force-like approach, and similarly for `right`. In the end, `[left, right+1)` will represent a series of contiguous blocks: the interval will have a length that is a multiple of `B`, and `left` will also be a multiple of `B`.

<iframe src="https://leetcode.com/playground/cRHYBAtW/shared" frameBorder="0" width="100%" height="500" name="cRHYBAtW"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N\sqrt{N})$$, where $$N$$ is the length of `positions`. Each `query` and `update` has complexity $$O(\sqrt{N})$$.

* Space Complexity: $$O(N)$$, the space used by `heights`.
<br>
<br>

---
### Approach 4: Segment Tree with Lazy Propagation

**Intuition**

If we were familiar with the idea of a segment tree (which supports queries and updates on intervals), we could immediately crack the problem.  

**Algorithm**

Segment trees work by breaking intervals into a disjoint sum of component intervals, whose number is at most `log(width)`. The motivation is that when we change an element, we only need to change `log(width)` of many intervals that aggregate on an interval containing that element.

When we want to update an interval all at once, we need to use *lazy propagation* to ensure good run-time complexity. This topic is covered in more depth [here](https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/).

With such an implementation in hand, the problem falls out immediately.

<iframe src="https://leetcode.com/playground/QL2PYqb9/shared" frameBorder="0" width="100%" height="500" name="QL2PYqb9"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N \log N)$$, where $$N$$ is the length of `positions`. This is the run-time complexity of using a segment tree.

* Space Complexity: $$O(N)$$, the space used by our tree.
<br>
<br>