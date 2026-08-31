# Practice: Lesson 02 — Longest Consecutive Sequence

## Edge case 1: Duplicates
`nums = [1, 0, 1, 2]` (LeetCode example 3, expected output 3).

`set(nums)` dedups automatically → `seen = {0, 1, 2}`. Since the algorithm only cares about existence, not count, the hash-set approach is naturally immune to duplicates — no special-case handling needed (unlike the sort-based approach, which needs an explicit `if nums[i] == nums[i-1]: continue`). This is an extra advantage over the sorting solution, not just better complexity.

Trace: `num=1` (first occurrence) → `0 in seen` → not a start, skip. `num=0` → `-1 not in seen` → start! expand: 1✓, 2✓, 3✗ → length 3. `num=1` (duplicate) → same as before, skipped. `num=2` → `1 in seen` → skip. Result: `max_len = 3` ✓.

## Edge case 2: Empty array
`nums = []` → `seen = set()`, the `for` loop body never executes, `max_len` stays `0`, returns `0`. Correct per constraints (`0 <= nums.length`) — no special-case `if not nums: return 0` needed, the code handles it naturally.
