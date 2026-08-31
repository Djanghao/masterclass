# Java O(N)

**Author:** fatezai
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2283929/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2283929/)

---

To get the minium number of swaps, we need to:
1. find the index of the largest number; in case of duplicates, we should find the rightmost largest so less swaps -- `rindex`
2. find the index of the smallest number; in case of duplicates, we should find the leftmost smallest so less swaps -- `lindex`

Now the number of swaps is really the distance between the indexes we found above to either ends based on the requirements. We should be aware that, if `lindex > rindex` (the smallest number is on the right side of the largest number), we need to do one less swap operation because swapping one of the largest/smallest number to its destination would swap the other. For example, `[2,1]` only needs one swap operation, not two.

```
    public int minimumSwaps(int[] nums) {
        int maxi = nums.length - 1, mini = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[maxi] < nums[nums.length - 1 - i]) {
                maxi = nums.length - 1 - i;
            }
            if (nums[mini] > nums[i]) {
                mini = i;
            }
        }
        return (nums.length - 1 - maxi) + mini - (mini > maxi ? 1 : 0);
    }
```