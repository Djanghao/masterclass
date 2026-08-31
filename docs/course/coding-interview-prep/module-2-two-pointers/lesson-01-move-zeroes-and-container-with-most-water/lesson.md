# Lesson 01: Move Zeroes & Container With Most Water — Two Pointers Pattern Recognition

## Summary

- **Two variants covered:** same-direction (fast-slow, read/write — Move Zeroes) vs. opposite-direction (converging — Container With Most Water). One-line distinction: same-direction asks "keep this element, and where does it go?"; opposite-direction asks "which end should shrink?"
- **Move Zeroes bug:** opposite-direction (swap-from-both-ends) breaks relative order — traced and confirmed with `[0,1,0,3,12]`. The correct pattern is same-direction: `fast` scans, `slow` marks the next write position, and the invariant "everything between slow and fast is a confirmed 0" is what preserves order.
- **Container With Most Water greedy proof:** moving the taller wall is provably never better (smaller width, height capped by the shorter wall) — so only the shorter wall is ever worth moving. This eliminates a whole batch of candidate pairs per step, not just "the current pair."
- **Important nuance:** the greedy proof guarantees the optimal pair is never eliminated — it does *not* mean each step's computed area improves monotonically (verified: it fluctuates up and down while `max()` tracks the true best).
- **Cross-cutting principle:** evaluate a valid candidate state *before* an operation that discards it (moving a pointer) — captured in `toolkit.md`. A bug where this was reversed caused `[1,1]` to incorrectly return `0`.
- **Transfer practice:** Remove Duplicates from Sorted Array (LeetCode 26) — same same-direction family as Move Zeroes, but the "keep or skip" condition relies on the array being sorted (duplicates are adjacent) rather than a fixed check like "is it zero."

## The two two-pointer variants

**Opposite-direction (converging):** two pointers start from both ends of the array and move toward each other. Signal: sorted array, or a "two-ended squeeze" structure; typically finding an optimal combination over a range, often with a greedy justification for which pointer to move.

**Same-direction (fast-slow, read/write):** both pointers start from the same end and move the same direction, but with different roles — fast pointer scans/scouts, slow pointer marks the write position. Signal: in-place modification, filtering, dedup, or reordering while preserving relative order.

**One-line distinction:** opposite-direction is about *which end should move* (shrinking a search space); same-direction is about *whether this element should be kept, and where it should be written* (in-place rearrangement).

## Move Zeroes (LeetCode 283)

### Why opposite-direction pointers fail here
First instinct was swapping from both ends (`left`/`right` converging). Traced with `[0,1,0,3,12]`: result came out as `[12,1,3,0,0]` — **the relative order of non-zero elements got scrambled** (should be `1,3,12`, got `12,1,3`).

Root cause: the two ends scan independently with no knowledge of each other's progress, so there's no guarantee "whatever appeared first ends up first in the result." Opposite-direction two pointers work for partitioning where internal order doesn't matter (e.g. quicksort's partition step), not for problems that require preserving relative order.

### The correct pattern: same-direction two pointers
```python
def move_zeroes(nums):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != 0:
            nums[slow], nums[fast] = nums[fast], nums[slow]
            slow += 1
    return nums
```

- `fast` scans every element left to right.
- `slow` marks "where the next non-zero value should be written" — it always points to the next empty slot in the "confirmed non-zero" region.
- **Invariant:** everything strictly between `slow` and `fast` is guaranteed to already be a confirmed `0`. So swapping `nums[slow]` and `nums[fast]` when `nums[fast] != 0` just moves the non-zero value into place while pushing a `0` out to `fast`'s old position — this invariant is exactly why order is preserved.

Trace on `[0,1,0,3,12]` confirms `slow`/`fast` produces `[1,3,12,0,0]` — correct order.

### Python note: tuple-swap
`nums[slow], nums[fast] = nums[fast], nums[slow]` evaluates the entire right-hand side tuple `(nums[fast], nums[slow])` first, then unpacks it into the left-hand targets — so both original values are read before either is overwritten. Equivalent to `tmp = nums[slow]; nums[slow] = nums[fast]; nums[fast] = tmp}`, but without the manual temp variable. Contrast with the classic bug of writing `nums[slow] = nums[fast]` then `nums[fast] = nums[slow]` sequentially — the second line reads back the already-overwritten value, not the original.

### Complexity
O(n) time (single pass via `fast`), O(1) space (in-place, two pointers only — no extra array).

## Container With Most Water (LeetCode 11)

### Not the same as Trapping Rain Water
This problem only cares about the **two boundary lines chosen** — area = `min(height[left], height[right]) * (right - left)`, an idealized rectangle. Whatever bars sit between the two chosen lines don't affect the calculation at all. This is different from Trapping Rain Water (LeetCode 42, next lesson), where *every* position between two walls matters — water gets trapped based on the terrain profile at each interior position.

### Brute force: O(n^2)
Enumerate all C(n,2) pairs, take the max area. O(n^2) time, O(1) space.

### Optimal: opposite-direction two pointers, O(n)
```python
def max_area(height):
    left, right = 0, len(height) - 1
    res = 0
    while left < right:
        res = max(res, min(height[left], height[right]) * (right - left))
        if height[left] <= height[right]:
            left += 1
        else:
            right -= 1
    return res
```

### The greedy proof: why moving the shorter wall is safe
Suppose `height[left] < height[right]` (left is the bottleneck). For **any** `x` with `left < x < right`, the pair `(left, x)` is provably no better than `(left, right)`:
- Width is strictly smaller (`x - left < right - left`)
- Height is `min(height[left], height[x])`, which is capped at `height[left]` (since `height[left]` was already the smaller of the two) — it cannot exceed the current bottleneck height

Smaller width + height that can't improve → `(left, x)` can never beat `(left, right)`. **This eliminates every pair where `right` shrinks inward while `left` stays fixed** — so `left` pairing with anything closer than `right` is a dead end, and `left` should advance instead. When `height[left] == height[right]`, the same elimination argument holds symmetrically in both directions, so it doesn't matter which side moves.

**Important nuance:** this does *not* mean the computed area improves monotonically step to step — it can go up and down (verified by tracing `[1,8,6,2,5,4,8,3,7]`: 8 → 49 → 18 → 40 → 16 → ... — clearly non-monotonic). The actual guarantee is narrower: **the optimal pair is never eliminated from consideration**, which is why tracking a running `max` throughout is essential, not just returning the last computed value.

### Bug caught during practice: evaluate before mutating
First attempt computed `res` *after* moving a pointer, meaning the initial widest pair `(0, n-1)` was never scored. Traced with `height=[1,1]`: returned `0` instead of the correct `1`. Fix: evaluate the current `(left, right)` pair *before* moving either pointer — once you move, that exact pair is gone forever. See `module-0-data-structures-toolkit/toolkit.md` → "Evaluate-before-mutate ordering" for the generalized principle.

### Complexity
O(n) time (left + right pointers move at most n times combined), O(1) space.
