# [C++/Java/Python] Simple DP O(n) Time O(1) Space with Explanation

**Author:** zayne-siew
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1564560/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1564560/)

---

### Explanation

This problem relies on the fact that it is possible for both `nums1` and `nums2` to be strictly increasing in the end. Since we can only perform swaps between elements with the same index, i.e. we can only swap `nums1[i]` with `nums2[i]` for `0 <= i < n` (where `n` is the length of the arrays), we can therefore deduce that **it is possible for both subarrays of `nums1` and `nums2` from index `0` to `i` (`0 <= i < n`) to be strictly increasing**.

Therefore, at any given index `i` (`1 <= i < n`), we can assert that both subarrays of `nums1` and `nums2` from index `0` to `i-1` are strictly increasing. When the next element at index `i` is introduced, we need to decide what to do at the index: swap `nums1[i]` and `nums2[i]`, or leave it as it is. To help us make that decision, we have the following two cases:

1. **The subarrays of `nums1` and `nums2` from index `0` to `i` is already strictly increasing.**

```text
nums1: [ 1, 2, 3, ... ]
               ^
               i
			   v
nums2: [ 2, 3, 4, ... ]
```

This means that we don't actually need to do anything. Hence, if we chose to leave the `i-1`<sup>th</sup> index unswapped previously, we can similarly leave the `i`<sup>th</sup> index unswapped. However, if we chose to swap `nums1[i-1]` and `nums2[i-1]` previously, we now need to perform one more swap to "cancel out" the effects of the previous swap and maintain the order of the arrays. We can write this as the following two equations:

```text
CASE 1 (already strictly increasing):
	keep[i] = keep[i-1]     --> subarrays from index 0 to i-1 left unswapped, so leave nums1[i] and nums2[i] unswapped
	swap[i] = swap[i-1] + 1 --> if nums1[i-1] and nums2[i-1] were previously swapped, swap nums1[i] and nums2[i] also
```

2. **The subarrays of `nums1` and `nums2` from index `0` to `i` is strictly increasing AFTER swapping `nums1[i]` and `nums2[i]`.**

```text
nums1: [ 0, 3, 2, ... ]
               ^
               i
			   v
nums2: [ 0, 1, 4, ... ]
```

Simple enough, we just perform the swap, right? Not really, since our comparison depends on what we did previously. If we had swapped `nums1[i-1]` and `nums2[i-1]` prior to the comparison, then there would be a discrepancy in comparison since the code doesn't actually modify the array and thus cannot 'see' the swap performed previously:

```text
   WHAT THE CODE SEES        WHAT THE ARRAYS LOOKS LIKE CURRENTLY*
nums1: [ 0, 3, 2, ... ]            nums1: [ 0, 1, 2, ... ]
               ^                                  ^
               i         VS                       i
			   v             			          v
nums2: [ 0, 1, 4, ... ]            nums2: [ 0, 3, 4, ... ]

*after swapping nums1[i-1] and nums2[i-1]
```

Hence, counterintuitively, if we had previously swapped `nums1[i-1]` and `nums2[i-1]`, we can choose to leave `nums1[i]` and `nums2[i]` unswapped and thus no additional swaps are needed. Likewise, if we had left `nums1[i-1]` and `nums2[i-1]` unswapped, we can choose to swap `nums1[i]` and `nums2[i]` and thus 1 additional swap is needed. We can write this as the following two equations:

```text
CASE 2 (requires swapping first):
	keep[i] = swap[i-1]     --> nums1[i-1] and nums2[i-1] was already swapped, so leave nums1[i] and nums2[i] unswapped
	swap[i] = keep[i-1] + 1 --> if nums1[i-1] and nums2[i-1] were previously unswapped, then swap nums1[i] and nums2[i]
```

Note that these 2 cases are not mutually exclusive. However, as mentioned previously, each index `i` will fulfil at least one of these two cases, since it is guaranteed that the subarrays up to index `i` can be strictly increasing. Thus, we can compute the number of swaps required for each case, and take the minimum number afterward.

---

### Implementation

- Use variables `keep` and `swap` to keep track of the previous minimum swaps given the action taken (swapping or leaving unswapped).
- Check cases via comparing `nums1[i-1]`, `nums1[i]`, `nums2[i-1]` and `nums2[i]` appropriately, in a sliding-window fashion.
- Iterate through each index to ensure the subarrays up to the index are strictly increasing, and perform the necessary actions if needed.

<iframe src="https://leetcode.com/playground/ckNCn9Lq/shared" frameBorder="0" width="900" height="450"></iframe>

---

Please upvote if this has helped you! Appreciate any comments as well :)