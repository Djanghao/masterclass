# Lesson 02: 3Sum & Trapping Rain Water — Advanced Two-Pointer Variants

## Summary

- **3Sum (LeetCode 15):** already solid coming into this lesson (dedup logic in particular). Core idea recapped: dimension reduction — sort, fix one number (`i`), reduce to two-pointer two-sum on the rest.
- **3Sum dedup has two independent sources of duplicates**, handled at two different loop levels:
  - **Outer (`i`) dedup** (`if i > 0 and nums[i] == nums[i-1]: continue`): prevents re-running an *entire* inner search when the fixed value repeats — without it, a repeated `nums[i]` reruns the same search and produces the exact same result set again.
  - **Inner (`left`/`right`) dedup**: prevents the *same single search* from finding the same value-pair twice at different index positions (e.g. `[-2,-2,0,0,2,2]` with `i=0` fixed at `-2`: `left`/`right` can land on two different index pairs that both read as `(0, 2)`).
  - Neither substitutes for the other — one dedups *across* searches, the other dedups *within* a single search.
- **Trapping Rain Water (LeetCode 42) is NOT the same shape as Container With Most Water (Lesson 01):** Container only cares about *two chosen boundary lines* — nothing between them matters. Trapping Rain Water requires computing an amount at **every interior position**, each with its own left/right boundary.
- **Core invariant:** `water[i] = min(leftMax[i], rightMax[i]) - height[i]`, where `leftMax[i]`/`rightMax[i]` are the tallest bars to the left/right of `i` (inclusive of nearer bars, per position — not one global pair).
- **Progression:** brute force (O(n²) time, O(1) space, re-scans left/right per position) → precomputed `leftMax[]`/`rightMax[]` arrays (O(n) time, O(n) space) → two-pointer (O(n) time, **O(1) space**, drops the arrays entirely).
- **Two-pointer correctness proof — same elimination technique as Container With Most Water's "move the shorter wall":** when `left_max < right_max`, the *true* right boundary for position `left` is unknown exactly, but is guaranteed `>= right_max` (since `right_max` is only the max of the already-scanned right suffix, a subset of the true right region). Since `right_max > left_max`, the true right boundary must also exceed `left_max` — so `min(true_left, true_right) = left_max` is settled *without ever needing the exact true right boundary value*. This is why we can commit to `left`'s water amount and advance `left`, well before `right` has scanned that far.
- **Bug caught during practice:** wrote the comparison backwards initially — `if left_max > right_max: settle left` instead of `if left_max < right_max: settle left`. Traced by hand against `height=[4,2,0,3,2,5]` (expected `9`): the flipped condition never advances `left` (stuck at index 0 the whole run) and produces `13`, not `9`. Fix: the *smaller* max is the bottleneck side to settle, not the larger one.

## 3Sum (LeetCode 15)

### Dimension reduction
Sort the array, then fix `nums[i]` as the "first number." The remaining problem — find two numbers in `nums[i+1:]` that sum to `-nums[i]` — is exactly Two Sum's shape, now solvable with opposite-direction two pointers on the sorted remainder (since sortedness gives monotonicity: moving `left` right increases the sum, moving `right` left decreases it).

```python
def three_sum(nums):
    nums.sort()
    res = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, n - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s < 0:
                left += 1
            elif s > 0:
                right -= 1
            else:
                res.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
    return res
```

### Why two dedup checks are both necessary
- **Outer `i` check** guards against re-doing an *entire* inner two-pointer search: if `nums[i] == nums[i-1]`, the inner search over `nums[i+1:]` would rediscover the exact same set of triplets found last time `i` was at that value.
- **Inner `left`/`right` check** guards against a *single* inner search finding the same triplet twice via different index positions — e.g. two adjacent `0`s and two adjacent `2`s can each be matched by different index pairs that produce the same value-triplet.
- Counter-examples proving neither is redundant: `[-1,-1,0,1]` needs the outer check (repeated `i` value); `[-2,-2,0,0,2,2]` needs the inner check (repeated values *within* one search), even though the outer check already fires once for the repeated `-2`.

### Complexity
O(n log n) for the sort + O(n²) for the fix-i-then-two-pointer loop → O(n²) overall. O(1) extra space (excluding output and the sort's own space).

## Trapping Rain Water (LeetCode 42)

### Contrast with Container With Most Water
Container With Most Water: pick **one pair** of boundary lines from the whole array; everything strictly between them is irrelevant to the answer.

Trapping Rain Water: water accumulates at **every** interior position, and each position's water level depends on *its own* nearest tall boundary on the left and on the right — these boundaries differ from position to position. There is no single global pair of walls that determines the whole answer.

### Core invariant
```
water[i] = min(leftMax[i], rightMax[i]) - height[i]
```
`leftMax[i]` = max of `height[0..i]`; `rightMax[i]` = max of `height[i..n-1]`. If the result is negative, position `i` is taller than the water level and traps nothing (clamp to 0, or note it never happens for valid `i` when leftMax/rightMax are computed correctly as inclusive of position `i`).

### Progression of solutions

**1. Brute force — O(n²) time, O(1) extra space:**
```python
def trap_brute(height):
    n = len(height)
    res = 0
    for i in range(n):
        left_max = max(height[:i + 1])
        right_max = max(height[i:])
        res += min(left_max, right_max) - height[i]
    return res
```
Re-scans left and right for every position — heavy duplicated work (adjacent positions' left-scans overlap almost entirely).

**2. Precomputed arrays — O(n) time, O(n) extra space:**
One left-to-right pass builds `leftMax[]`, one right-to-left pass builds `rightMax[]`, one final pass sums `min(leftMax[i], rightMax[i]) - height[i]`. Three O(n) passes chained = O(n) overall, but now paying O(n) space for the two arrays (note: O(n) + O(n) = O(2n), which simplifies to O(n) — constant factors are dropped in big-O).

**3. Two-pointer — O(n) time, O(1) extra space:**
```python
def trap(height):
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
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
Drops the arrays entirely — `left_max`/`right_max` only need to track the *running* max seen so far from each side, because the decision of which side to settle only ever needs a size comparison, not the exact unscanned value on the other side (see proof below).

### Why the two-pointer version is correct
When `left_max < right_max` at some step: `right_max` is the max of only the *already-scanned* suffix from the right, so the true max of `height[left+1:]` (the full remaining region) is `>= right_max`. Combined with `right_max > left_max`, that means the true right boundary for position `left` is guaranteed to exceed `left_max`, **regardless of its exact value**. So `min(true_left_boundary, true_right_boundary) = left_max` is already determined — `left`'s water amount can be committed and `left` advanced, without ever scanning the unvisited middle region.

Symmetric argument applies when `left_max >= right_max` (settle `right` instead).

**Same proof shape as Container With Most Water's "move the shorter wall":** both rely on establishing a size relationship that's enough to eliminate/settle an outcome, without needing to know an exact unscanned value.

### Complexity
O(n) time, O(1) extra space (excluding input/output).

## Verified bug (from practice)
Wrote `if left_max > right_max: settle left` (backwards) instead of `if left_max < right_max: settle left`. Manual trace on `height=[4,2,0,3,2,5]` (expected `9`) showed `left` never advances past index 0 and the total comes out as `13`. Root cause: confused "which max is smaller" with "which max is larger" when deciding the bottleneck side — the *smaller* max is always the side that's safe to settle exactly.
