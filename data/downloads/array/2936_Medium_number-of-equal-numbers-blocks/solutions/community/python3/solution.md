# [Python] Exponential search + intuition (Updated with divide and conquer)

**Author:** NotTheSwimmer
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4297942/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4297942/)

---

# .at avoiding divide and conquer (4089ms) - Credit to @votrubac in comments
This divide-and-conquer approach gets 4089ms in Python
```python
class Solution:
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        def helper(l: int, val_l: int, r: int, val_r: int):
            if val_l == val_r:
                return 1
            if l + 1 == r:
                return 2
            m = (l + r) // 2
            val_m = nums.at(m)
            return helper(l, val_l, m, val_m) + helper(m, val_m, r, val_r) - 1
        return helper(0, nums.at(0), nums.size() - 1, nums.at(nums.size() - 1))
```

See comments for details. I'd originally discarded it as slow, but @votrubac found an optimization to make it extremely fast.

---- 

# Exponential Search (6872ms)
At the time of writing, all other Python solutions posted take over 12 seconds. 

I made a post with an implementation of this in all languages. 

Check it out here: https://leetcode.com/problems/number-of-equal-numbers-blocks/discuss/4298417/All-languages-Exponential-search-(Faster-than-binary-search)

```python
class Solution:
    def countBlocks(self, nums):
        i = 0
        ans = 0
        size = nums.size()

        while i < size:
            x = nums.at(i)
            di = 2
            remaining = size - i
            while di < remaining and nums.at(i + di) == x:
                di *= 2

            # Binary search to find the next block
            left = i + (di // 2)
            right = min(i + di, size)
            while left < right:
                mid = left + (right - left) // 2
                if nums.at(mid) != x:
                    right = mid
                else:
                    left = mid + 1
            i = left
            ans += 1

        return ans
```

I've outlined my discovery process further down in this post, but here's a brief summary:

1. You start with an approach where, for each index i which marks the start of a unique number, you binary search your way to the first value that isn't equal to nums.at(i)
2. This is good, except it requires log(n) operations each time. If you have all unique items, you are doing n * log(n) operations.
3. If you start, instead, by exponentially increasing the distance you check with an unbounded search, then
	1. If you have all unique items, you're only doing n operations
	2. If you have only one unique item, you're only doing log(n) operations
3. Once you've found a different number, you can check between the two bounds (the different number and the last same number) using a binary search.

This strategy has a name and it's called an exponential search. Read about it here: https://en.wikipedia.org/wiki/Exponential_search

-----

Here was the evolution of my original post, if you're curious about the intuition that lead to this solution including the optimizations like why di starts at 2.

# Slow - Binary Search (12485ms)
My original intuition:
"We can just do a normal binary search from the current position to the end for the first number that's different"
```python
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        i = ans = 0
        size = nums.size()
        class Helper:
            def __getitem__(self, j: int) -> bool:
                return nums.at(j) != x
        helper = Helper()
        while i < size:
            x = nums.at(i)
            i = bisect_left(helper, True, i, size)
            ans += 1
        return ans
```

# Fast - Exponential Search (7477ms)
Then, I went "Wow 12485ms? That's really slow. I guess in the worst case you'd do log(n) operations only to find that it's the next number in the sequence. That's really bad, too, because if there are a lot of unique numbers we also get less benefit out of doing the binary search in the first place. So we should assume the next different value is nearby at first, doubling the distance we check each time, so that if it's close we don't have to search a lot of space"

```python
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        i = ans = 0
        size = nums.size()
        class Helper:
            def __getitem__(self, j: int) -> bool:
                return nums.at(j) != x
        helper = Helper()
        while i < size:
            x = nums.at(i)
            di = 1
            remaining = size - i
            while di < remaining and nums.at(i + di) == x:
                di *= 2
            i = bisect_left(helper, True, i + (di // 2), min(i + di, size))  # Search between the last known position of x and the first known position of not x
            ans += 1
        return ans
```

This nearly halved the time and I was pretty satisfied. Still, 7477ms is slow for most leetcode solutions, so I'm interested to see if anyone found something more clever.
EDIT: Wow, nope, every other Python solution posted so far took at least 12 seconds.
EDIT 2: I googled it and it's called an exponential search. https://en.wikipedia.org/wiki/Exponential_search

# Optimization - Exponential Search from 2 (7259ms)
This is a small optimization that I just "tried" and it worked. But it makes sense:
- If di ends up being 1, then we binary search between i and i + 1
- But we know the binary search will never return i because we'd be checking if nums.at(i) != nums.at(i)
- So we can start searching 1 ahead and save even more time

```python
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        i = ans = 0
        size = nums.size()
        class Helper:
            def __getitem__(self, j: int) -> bool:
                return nums.at(j) != x
        helper = Helper()
        while i < size:
            x = nums.at(i)
            di = 2
            remaining = size - i
            while di < remaining and nums.at(i + di) == x:
                di *= 2
            i = bisect_left(helper, True, i + (di // 2), min(i + di, size))
            ans += 1
        return ans
```

# Clean - Exponential Search with key and range (7216ms)
```python
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        i = ans = 0
        size = nums.size()
        indices = range(size)
        def key(j):
            return nums.at(j) != x
        while i < size:
            x = nums.at(i)
            di = 2
            remaining = size - i
            while di < remaining and nums.at(i + di) == x:
                di *= 2
            i = bisect_left(indices, True, i + (di // 2), min(i + di, size), key=key)
            ans += 1
        return ans
```