# Lesson 01: Two Sum & Group Anagrams — Hash Table Pattern Recognition

## Summary

- **Core value of hash tables:** trade O(n) space for O(1) average lookup/insert, flattening nested-loop brute force into a single pass.
- **Two Sum pattern:** query-before-insert — check for the complement before recording the current element, in one pass.
- **Group Anagrams pattern:** design a key that preserves every piece of information distinguishing categories (don't `set()`-dedup letters — that loses counts). Grouping = `defaultdict(list)`; counting = `defaultdict(int)`; grouping with dedup = `defaultdict(set)`.
- **Optimization signal:** bounded, contiguous character set (e.g. 26 lowercase letters) → replace sorting (O(k log k)) with a counting array (O(k)).
- **Hashability rule:** dict keys / set elements must be immutable (`list` isn't; convert to `tuple` or `str`). This is separate from equality comparison — two `list`s can be compared with `==` directly, no hashability needed.
- **Big O nuance:** O describes an upper bound on growth and can apply to worst/average/best case separately — e.g. hash table ops are O(1) average but O(n) worst case (collisions).
- Verified via transfer practice: Contains Duplicate (LeetCode 217) and Valid Anagram (LeetCode 242) — both solved by recognizing the same hash table signal in a new problem shape.

## Two Sum

### The pattern-recognition signal
When a problem asks "does the complement/pair of the current element already exist?", that's the signal to reach for a hash table: trade O(n) space for O(1) average lookup, turning an O(n^2) brute force into O(n).

### The technique: query before insert
```python
def two_sum(nums, target):
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
```

Order matters: for each number, **first check whether its complement was already seen**, then record the current number. This guarantees:
- Each element is used at most once (you never match a number with itself before it's stored).
- Single pass, O(n) time, O(n) space.

### Common bugs (from working through it live)
- `{}` creates a `dict` in Python, not a `set`. A `set` can't recover the index — since Two Sum needs to return indices, a `dict` (value -> index) is the right structure, not a `set`.
- The critical logic bug: if the complement **is** found, you must `return` immediately with the answer. Skipping/continuing when the complement is found silently throws away the answer.
- Only storing the raw value loses the index — always ask "what does the problem need me to return?" when choosing what to store as the dict value.

### `in` on a dict checks keys, not values
`complement in seen` checks membership against `seen`'s **keys** (O(1) average). `seen[num] = i` stores `num` as the key and `i` as the value, so this correctly checks "has this number appeared before."
- `complement in seen.keys()` also works and is equivalent (the `.keys()` view is backed by the same hash table, still O(1)) — but `in seen` is the idiomatic form, no need for `.keys()`.
- Checking `in seen.values()` would be O(n) — the rule of thumb: **whatever you need to query should be the dict key.**

## Group Anagrams

### The pattern-recognition signal
When a problem asks to **group** items that share some normalized identity (here: same letters, different order), the hash table pattern shifts from "lookup a single complement" to "use a computed key to bucket items together." The key design is the whole problem.

### Designing the key: what to preserve
- First instinct: `sorted(set(word))` — **wrong**. `set()` dedups letters, so `"aab"` and `"ab"` collapse to the same key (`{'a','b'}`) even though they aren't anagrams (different letter counts). Lesson: a grouping key must preserve every piece of information that distinguishes categories — dropping letter counts silently merges non-equivalent items.
- Correct: `sorted(word)` (no `set()`) — preserves duplicate letters. `sorted("aab") == ['a','a','b']` vs `sorted("ab") == ['a','b']`, correctly distinct.
- `sorted(...)` always returns a **list**, and lists are unhashable (mutable → can't be a dict key, Python raises `TypeError: unhashable type: 'list'`). Convert to an immutable type before using as a key: `''.join(sorted(word))` (most common) or `tuple(sorted(word))`.

### Manual dict version
```python
def group_anagrams(words):
    seen_words = {}
    for word in words:
        key = ''.join(sorted(word))
        if key in seen_words:
            seen_words[key].append(word)
        else:
            seen_words[key] = [word]
    return list(seen_words.values())
```
Note: `dict.values()` returns a `dict_values` view object (live view, not indexable, no `.append()`) — must wrap in `list(...)` to get an actual list. `[x]` (wrap x as the single element of a new list) and `list(x)` (unpack x's elements into a new list) are different operations — don't confuse them.

### Idiomatic version: `collections.defaultdict`
```python
from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())
```
`defaultdict(factory)` auto-invokes `factory()` to create a default value on first access to a missing key, instead of raising `KeyError` — eliminates the manual if/else. Still a dict subclass, so the key must still be hashable (the `sorted()` → unhashable-list trap still applies).

**Pattern signal to remember:** "group by key" → `defaultdict(list)`; "count/frequency" → `defaultdict(int)`; "group with dedup" → `defaultdict(set)`.

### Complexity
Sorting each word of length k costs O(k log k); doing this for n words costs O(n · k log k) total. Space is O(n·k).

### Optimization: counting instead of sorting
**Pattern signal: when the character set is bounded and fixed (e.g. 26 lowercase letters), replace sorting with a counting array.** Computing a fixed-size frequency count is O(k) instead of O(k log k) for sorting, dropping total time from O(n·k log k) to O(n·k).

```python
def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        count = [0] * 26
        for ch in word:
            count[ord(ch) - ord('a')] += 1
        key = tuple(count)   # list is unhashable — convert to tuple, same rule as before
        groups[key].append(word)
    return list(groups.values())
```
`ord(ch)` returns a character's Unicode code point (integer); lowercase letters are contiguous (`ord('a')`=97 ... `ord('z')`=122), so `ord(ch) - ord('a')` maps any lowercase letter to a 0-25 index. `chr(int)` is the inverse.

## Two Sum — Complexity
- Time: O(n) — single pass, O(1) average hash lookup/insert per element.
- Space: O(n) — worst case stores nearly every element before finding the match.
- This is the concrete shape of "space-time tradeoff": O(n) extra space brings time down from the brute force's O(n^2) to O(n).
