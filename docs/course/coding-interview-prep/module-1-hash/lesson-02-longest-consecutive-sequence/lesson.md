# Lesson 02: Longest Consecutive Sequence — Hash Set "Jump Detection"

## Summary

- **Pattern:** hash set used for O(1) existence checks while expanding outward from a sequence "start" (`num - 1 not in seen`), not for complement lookup or grouping — a third distinct hash table use case.
- **Why O(n):** every number is touched at most twice (one O(1) start-check + at most one expansion visit), so total work across the whole run is O(n), beating the O(n log n) sort-based approach.
- **Bug caught:** checking `while num in seen` re-confirms the start itself (trivially true), overcounting by 1 — must check `current = num + 1` instead, the *next* candidate.
- **Bonus:** the hash-set approach is naturally immune to duplicates (`set()` dedups) and handles the empty-array edge case with no special-casing — both advantages over the sort-based solution.

## The pattern-recognition signal
"Longest consecutive sequence" (values consecutive, not necessarily contiguous in the array) is a different hash table use case than Lesson 01: not complement lookup, not grouping — here the hash set is used purely for O(1) existence checks while **expanding outward from a sequence start**.

## Why sorting isn't optimal
Sort + linear scan works (O(n log n)): after sorting, walk the array — if `nums[i] == nums[i-1] + 1`, extend the current run; if `nums[i] == nums[i-1]`, skip (duplicate, don't break or extend the streak); otherwise reset the run to 1. Track the max throughout. This is correct but the sort itself is the bottleneck — the problem requires O(n).

## The O(n) technique: only expand from a "start"
1. Put all numbers into a `set` for O(1) lookup.
2. For each number, check if it's a **sequence start**: `num - 1 not in seen`. If `num - 1` exists, this number will be reached by expanding from an earlier start, so skip it — no need to process it independently.
3. Only for starts, expand forward (`num+1`, `num+2`, ...) while each next number exists in the set, counting the length.
4. Track the max length seen across all starts.

```python
def longest_consecutive(nums):
    seen = set(nums)
    max_len = 0
    for num in nums:
        if (num - 1) not in seen:      # only enter from a sequence start
            current = num + 1
            seq_len = 1
            while current in seen:
                current += 1
                seq_len += 1
            max_len = max(max_len, seq_len)
    return max_len
```

### Bug caught during practice: checking the wrong number
First attempt used `while num in seen: num += 1; len += 1` — but `num` (the start itself) is trivially already known to be in `seen`, so the first loop iteration always fires "for free," overcounting the length by 1. Fix: introduce a separate `current = num + 1` and check `current in seen` — you want to know whether the **next** number exists, not re-confirm the current one you already know is there.

### Style notes
- Don't name a variable `len` — it shadows the built-in `len()` function.
- No need for a trailing `continue` at the end of a loop body — the loop advances automatically either way.

## Why this is O(n) overall
Every number gets touched at most twice: once by the outer loop's O(1) start-check, and at most once more by an inner expansion loop (only if it's part of some sequence — and each number belongs to exactly one sequence, visited by exactly one start's expansion). So total work across the whole function is O(n) + O(n) = O(n). Space is O(n) for the set.
