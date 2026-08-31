# [Python] Beginner-friendly Optimisation Process with Explanation

**Author:** zayne-siew
**Votes:** 160
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/1921241/](https://leetcode.com/problems/last-stone-weight/solutions/1921241/)

---

### Introduction

Given an array of stones `stones`, we repeatedly "smash" (i.e., compare) the two heaviest stones together until there is at most one stone left. If the two heaviest stones are of the same weight, both stones are "destroyed" (i.e., both weights become 0), otherwise, a stone with the absolute weight difference of both stones will remain.

Note that the order in which the stones are "smashed" needs to be followed strictly. Otherwise, we will not end up with the correct weight of the remaining stone, if any.

```text
arr = [2, 7, 4, 1, 8, 1]

CORRECT METHOD
1) Smash 8 and 7 -> arr = [2, 4, 1, 1, 1]
2) Smash 4 and 2 -> arr = [2, 1, 1, 1]
3) Smash 2 and 1 -> arr = [1, 1, 1]
4) Smash 1 and 1 -> arr = [1]

WRONG METHOD #1 (according to index ordering)
1) Smash 2 and 7 -> arr = [5, 4, 1, 8, 1]
2) Smash 5 and 4 -> arr = [1, 1, 8, 1]
3) Smash 1 and 1 -> arr = [8, 1]
4) Smash 8 and 1 -> arr = [7]

WRONG METHOD #2 (in ascending order)
1) Smash 1 and 1 -> arr = [2, 7, 4, 8]
2) Smash 2 and 4 -> arr = [2, 7, 8]
3) Smash 2 and 7 -> arr = [5, 8]
4) Smash 5 and 8 -> arr = [3]
```

---

### Base Approach - Sort and Insert

Since we are required to "smash" the two heaviest stones, we need to know which two stones are the heaviest, and for all iterations. As such, we will first have to sort the stones in order by weight in order to compare the two heaviest stones.

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()
        while stones:
            s1 = stones.pop()  # the heaviest stone
            if not stones:  # s1 is the remaining stone
                return s1
            s2 = stones.pop()  # the second-heaviest stone; s2 <= s1
            if s1 > s2:
                # we need to insert the remaining stone (s1-s2) into the list
                pass
            # else s1 == s2; both stones are destroyed
        return 0  # if no more stones remain
```

All that remains now is how we can insert the stone from the "smashing" of the two heaviest stones back into `stones`. The simplest method is to loop through `stones` and insert the stone in the correct index.

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()
        while stones:
            s1 = stones.pop()  # the heaviest stone
            if not stones:  # s1 is the remaining stone
                return s1
            s2 = stones.pop()  # the second-heaviest stone; s2 <= s1
            if s1 > s2:
                # the remaining stone will be s1-s2
                # loop through stones to find the index to insert the stone
                for i in range(len(stones)+1):
                    if i == len(stones) or stones[i] >= s1-s2:
                        stones.insert(i, s1-s2)
                        break
            # else s1 == s2; both stones are destroyed
        return 0  # if no more stones remain
```

**TC: O(n<sup>2</sup>)**, where `n` is the length of `stones`, due to the nested inserts.
**SC: O(1)**, no additonal data structures are used.

---

### Slight Optimisation - Binary Search Insert

An "optimisation" from the above method to find the index to insert the remaining stone is to binary search for the index to insert to instead of looping through `stones` manually. This involves Python's [bisect library](https://docs.python.org/3/library/bisect.html) which has a pre-written function to help us do just that.

Note that we only need to change one portion of the code; the remaining code logic is the same.

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()
        while stones:
            s1 = stones.pop()  # the heaviest stone
            if not stones:  # s1 is the remaining stone
                return s1
            s2 = stones.pop()  # the second-heaviest stone; s2 <= s1
            if s1 > s2:
                # the remaining stone will be s1-s2
                # binary-insert the remaining stone into stones
                insort_left(stones, s1-s2)
            # else s1 == s2; both stones are destroyed
        return 0  # if no more stones remain
```

**TC: O(n<sup>2</sup>)**. Even though binary searching for the index to insert to takes O(logn) time, the insert function alone takes O(n) time because it needs to shift all the elements after the index to the right by 1. As such, the overall time complexity for `insort_left()` is O(n).
**SC: O(1)**, as discussed above.

---

### Data Structure - Heap Implementation

Unfortunately, due to the implementation of the list data structure, even the binary search optimisation cannot break free of the O(n) insert. If only there was a data structure that could help us sort and insert automatically without having to rely on a heavier insert function...

Python has an in-built [heap library](https://docs.python.org/3/library/heapq.html) that is perfect for this task. Essentially, all we need to do is insert the elements, and the heap will settle the sorting order for us. Unfortunately, Python's heap library implements a min-heap instead of a max-heap, whereby popping will give us the lightest stone instead of the heaviest stone.

A standard (very common!) workaround is to **negate all the weight values of the stones**. This way, the heaviest stone has the most negative value, and hence becomes the smallest value in the heap. Then, all we have to do after obtaining the value from the heap is to un-negate the value to use it in our calculations.

```python
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # first, negate all weight values in-place
        for i, s in enumerate(stones):
            stones[i] = -s
        heapify(stones)  # pass all negated values into the min-heap
        while stones:
            s1 = -heappop(stones)  # the heaviest stone
            if not stones:  # s1 is the remaining stone
                return s1
            s2 = -heappop(stones)  # the second-heaviest stone; s2 <= s1
            if s1 > s2:
                heappush(stones, s2-s1)  # push the NEGATED value of s1-s2; i.e., s2-s1
            # else s1 == s2; both stones are destroyed
        return 0  # if no more stones remain
```

**TC: O(nlogn)**; `heappush()` and `heappop()` both have O(logn) time complexity, and are both nested in the while loop. Note: `heapify()` runs in O(n) time, hence the time complexity is not affected.
**SC: O(1)**; both the negation and the heapify are done in-place.

---

Please upvote if this has helped you! Appreciate any comments as well :)