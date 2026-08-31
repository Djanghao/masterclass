# Practice: Lesson 01 — Two Sum & Group Anagrams

## Exercise 1: Contains Duplicate (LeetCode 217)
Given an integer array, return whether any value appears at least twice.

**Approach:** hash table (`set`) pattern — same "have I seen this before" signal as Two Sum, but here existence alone is the answer (no need to store an index/value).

```python
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
```

**Bug caught during practice:** first attempt checked `if num in seen` but never called `seen.add(num)` — `seen` stayed empty forever, so the function always returned `False`. Lesson: after using a hash table to check "have I seen this," don't forget the write-back step that makes future checks possible.

**Style cleanup:** no need for `else` after an `if ... return` — once you return, execution can't reach the code below anyway, so `seen.add(num)` can sit unindented right after the `if` block. Also no need for `enumerate()` if the index isn't used — plain `for num in nums` is cleaner.

**Complexity:** O(n) time, O(n) space.

## Exercise 2: Valid Anagram (LeetCode 242)
Given two strings `s` and `t`, return whether `t` is an anagram of `s`.

**Approach:** transfer of the Group Anagrams counting-key technique, but as a direct pairwise comparison instead of grouping many items — build a 26-length count array for each string and compare them for equality.

```python
def is_anagram(s, t):
    if len(s) != len(t):
        return False
    def get_count(word):
        count = [0] * 26
        for l in word:
            count[ord(l) - ord('a')] += 1
        return count
    return get_count(s) == get_count(t)
```

**Key insight caught during practice:** comparing two `list`s with `==` is valid (element-wise comparison) — no need for `tuple(count)` here, unlike Group Anagrams. `tuple()` was only needed there because the count array had to be a **dict key** (keys must be hashable/immutable). Plain equality comparison between two values has no such restriction, even for mutable types like `list`.

**Early exit:** `if len(s) != len(t): return False` is a cheap (O(1)) necessary-condition check that skips the O(k) counting work when the answer is obviously "no." Doesn't change the Big-O (worst case is still O(k) either way, since unequal-length counts would fail the final comparison anyway), but avoids wasted work in practice — a form of "early exit / fail fast."

**Complexity:** O(k) time (k = string length), O(1) space (count array is fixed size 26, independent of input size).
