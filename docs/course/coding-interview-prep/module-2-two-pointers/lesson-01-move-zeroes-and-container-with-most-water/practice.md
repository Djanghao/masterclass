# Practice: Lesson 01 — Move Zeroes & Container With Most Water

## Transfer Exercise: Remove Duplicates from Sorted Array (LeetCode 26, Easy)
Given a **sorted (non-decreasing)** array, remove duplicates in-place so each unique value appears once, keeping relative order. Return `k`, the count of unique values; only `nums[0:k]` needs to be correct.

**Pattern:** same-direction two pointers (fast-slow, read/write) — same family as Move Zeroes, but the "keep or skip" condition is different and depends on the array being sorted.

**Why sortedness matters:** because the array is sorted, duplicate values are guaranteed to be adjacent. So "is this a new value?" only needs to compare against the *previous kept value* — no hash set needed to track "have I seen this before" (that would be necessary if the array were unsorted).

```python
def remove_duplicates(nums):
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1
```

- `slow`: last index of the "confirmed unique" prefix (`nums[0..slow]` is clean).
- `fast`: scans ahead; compares `nums[fast]` to `nums[slow]` (the last kept value) — different means a new unique value, so advance `slow` and write it there; same means a duplicate, skip.

**Why this is safe:** `slow` never exceeds `fast`, so writing to `nums[slow]` only ever overwrites already-processed data (or writes to itself when `slow == fast`) — it never clobbers data `fast` hasn't read yet. This safety argument generalizes to in-place two-pointer rewriting problems.

**Difficulty note:** tagged Easy on LeetCode, but the "sorted → duplicates are adjacent → compare to previous kept value" insight isn't as immediate as Move Zeroes' "is it zero?" check — LeetCode's difficulty label reflects code/edge-case complexity more than the difficulty of spotting the right insight.

**Complexity:** O(n) time, O(1) space.
