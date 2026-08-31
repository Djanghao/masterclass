# Data Structures & Idioms Toolkit

A running cheat sheet of data structures, Python idioms, and techniques encountered across the course. Updated incrementally as each lesson introduces something new — organized by topic, not by lesson.

## Hash Tables (dict / set)

### `collections.defaultdict`
*First seen: Module 1, Lesson 01 (Group Anagrams)*

A `dict` subclass that auto-creates a default value on first access to a missing key, instead of raising `KeyError`.

```python
from collections import defaultdict
d = defaultdict(int)
d["a"] += 1   # no KeyError — auto-initializes to 0, then increments
```

| factory | default value | use case |
|---|---|---|
| `defaultdict(int)` | `0` | counting / frequency |
| `defaultdict(list)` | `[]` | grouping items by key |
| `defaultdict(set)` | `set()` | grouping with dedup |

Still a `dict` under the hood — keys must still be hashable (immutable).

### Hashability rule
Dict keys (and set elements) must be **immutable**. `list` is not hashable (`TypeError: unhashable type: 'list'`) because its contents can change after insertion, which would break the hash bucket it was placed in. Convert to `tuple(...)` or `''.join(...)` (for char lists) when a computed key comes out as a list.

### `in` on a dict
`x in some_dict` checks membership against **keys** only (O(1) average), not values. Checking `x in some_dict.values()` is O(n).

## Algorithmic Techniques

### Counting array instead of sorting (bounded charset)
*First seen: Module 1, Lesson 01 (Group Anagrams optimization)*

**When the character set is bounded and fixed (e.g. 26 lowercase letters), replace sorting with a counting array.** Sorting a string of length k costs O(k log k); counting each character's frequency into a fixed-size array costs O(k). Use the count (converted to a `tuple`, since `list` isn't hashable) as a dict key when grouping.

```python
count = [0] * 26
for ch in word:
    count[ord(ch) - ord('a')] += 1
key = tuple(count)
```

### `ord()` / `chr()`
`ord(ch)` → the character's Unicode code point (int). `chr(n)` → the inverse. Lowercase letters are contiguous (`ord('a')`=97 .. `ord('z')`=122), so `ord(ch) - ord('a')` maps any lowercase letter to a 0-25 index — the standard "character to array index" trick whenever a charset is small and contiguous.

### Evaluate-before-mutate ordering
*First seen: Module 2, Lesson 01 (Container With Most Water)*

**Whenever an operation permanently discards or changes the current state (moving a two-pointer, shrinking/expanding a window), and the current state is a valid candidate answer, evaluate/record it *before* that operation — not after.** Once you move on, that exact combination is gone and can never be reconsidered.

Common in: opposite-direction two pointers (each `(left, right)` pair is visited exactly once — e.g. Container With Most Water), sliding window (a window's validity is a fleeting state at each step).

```python
while left < right:
    res = max(res, compute(left, right))   # evaluate current state first
    if height[left] <= height[right]:      # then mutate (discard this exact pair forever)
        left += 1
    else:
        right -= 1
```
Bug caught during practice: computing `res` *after* moving a pointer means the very first (widest) pair never gets scored — e.g. `height=[1,1]` incorrectly returns `0` instead of `1`, because the initial `(0, n-1)` pair was skipped.
