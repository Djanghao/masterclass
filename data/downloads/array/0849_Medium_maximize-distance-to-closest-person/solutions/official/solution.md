# Official Solution

**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solution/](https://leetcode.com/problems/maximize-distance-to-closest-person/solution/)

---

[TOC]

---
### Approach #1: Next Array [Accepted]

**Intuition**

Let `left[i]` be the distance from seat `i` to the closest person sitting to the left of `i`.  Similarly, let `right[i]` be the distance to the closest person sitting to the right of `i`.  This is motivated by the idea that the closest person in seat `i` sits a distance `min(left[i], right[i])` away.

**Algorithm**

To construct `left[i]`, notice it is either `left[i-1] + 1` if the seat is empty, or `0` if it is full.  `right[i]` is constructed in a similar way.

<iframe src="https://leetcode.com/playground/6XidR9wx/shared" frameBorder="0" width="100%" height="480" name="6XidR9wx"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `seats`.

* Space Complexity:  $$O(N)$$, the space used by `left` and `right`.


---
### Approach #2: Two Pointer [Accepted]

**Intuition**

As we iterate through seats, we'll update the closest person sitting to our left, and closest person sitting to our right.

**Algorithm**

Keep track of `prev`, the filled seat at or to the left of `i`, and `future`, the filled seat at or to the right of `i`.

Then at seat `i`, the closest person is `min(i - prev, future - i)`, with one exception.  `i - prev` should be considered infinite if there is no person to the left of seat `i`, and similarly `future - i` is infinite if there is no one to the right of seat `i`.

<iframe src="https://leetcode.com/playground/mVHbkNFV/shared" frameBorder="0" width="100%" height="429" name="mVHbkNFV"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `seats`.

* Space Complexity:  $$O(1)$$.



---
### Approach #3: Group by Zero [Accepted]

**Intuition**

In a group of `K` adjacent empty seats between two people, the answer is `(K+1) / 2`.

**Algorithm**

For each group of `K` empty seats between two people, we can take into account the candidate answer `(K+1) / 2`.

For groups of empty seats between the edge of the row and one other person, the answer is `K`, and we should take into account those answers too.

<iframe src="https://leetcode.com/playground/UEoNSFkp/shared" frameBorder="0" width="100%" height="500" name="UEoNSFkp"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `seats`.

* Space Complexity:  $$O(1)$$.