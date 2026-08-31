# Practice: Lesson 02 — 3Sum & Trapping Rain Water

## Exercise: Implement Trapping Rain Water (LeetCode 42) from scratch

Given the two-pointer invariant taught in the lesson (`water[i] = min(leftMax[i], rightMax[i]) - height[i]`, settled via a converging `left`/`right` pointer pair), implement `trap(height)` unaided.

### First attempt — two bugs found via manual trace

```python
def trap(height):
    left_max, right_max = 0, 0
    left, right = 0, len(height) - 1
    res = 0
    while left < right:
        left_max = max(left_max, height[left])
        right_max = max(tight_max, height[right])   # BUG 1
        if left_max > right_max:                    # BUG 2
            res += left_max - height[left]
            left += 1
        else:
            res += right_max - height[right]
            right -= 1
```

**Bug 1 — typo:** `tight_max` instead of `right_max` → `NameError` at runtime. Caught immediately, trivial to spot once run.

**Bug 2 — comparison direction reversed:** wrote `if left_max > right_max: settle left`. Correct condition is `if left_max < right_max: settle left` — the *smaller* max is the side whose true boundary is already provably the bottleneck (see lesson.md proof). This bug is more dangerous than Bug 1 because it doesn't crash — it silently produces a wrong number.

**How the bug was caught:** manual trace of the *actual written code* (not a mental re-derivation of the "correct" algorithm) against `height=[4,2,0,3,2,5]` (expected `9`). With the reversed condition, `left_max=4` starting from `height[0]=4` never exceeds `right_max` (which locks at `5` on step one, since `height[5]=5` is the global max), so the `if` branch never fires — `left` stays stuck at index `0` for the entire run, and the accumulated total comes out to `13` instead of `9`.

**Lesson-worthy takeaway:** tracing your own written code line-by-line (following the actual `if`/`else` as written) is a different — and necessary — check from mentally re-deriving what the *correct* answer should be per position. The latter can be right (`2+4+1+2=9` computed correctly by hand) while the former (the code as actually written) is still wrong.

### Corrected version

```python
def trap(height):
    left_max, right_max = 0, 0
    left, right = 0, len(height) - 1
    res = 0
    while left < right:
        left_max = max(left_max, height[left])
        right_max = max(right_max, height[right])
        if left_max < right_max:
            res += left_max - height[left]
            left += 1
        else:
            res += right_max - height[right]
            right -= 1
    return res
```

Verified against both examples:
- `trap([0,1,0,2,1,0,1,3,2,1,2,1])` → `6` ✓
- `trap([4,2,0,3,2,5])` → `9` ✓

**Complexity:** O(n) time, O(1) extra space.
