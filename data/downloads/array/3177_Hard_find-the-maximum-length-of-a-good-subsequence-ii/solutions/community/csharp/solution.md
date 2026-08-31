# dynamic programming solution, O(nk) time, O(n) space. Beats 100% of C#; no other solutions currently

**Author:** StanleyDodds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5284431/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5284431/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each index in the array (an index representing an entry in the array that must be included in an extended subsequence, occuring after all current subsequence elements) and for each number of constant subarrays of the subsequence with distinct constants (we are allowed up to k + 1 such subarrays), consider the maximum possible subsequence length where the final entry in the subsequence is different from the entry at the above index, or has length 0.

W.l.o.g, this set of maximum possible lengths for a fixed number of constant subarrays is sufficient to calculate all maximum possible lengths for all indices with 1 more constant subarray.

To see this, suppose we are given any maximum length subsequence satisfying the above for some index and number of subarrays greater than zero. Then the subsequence containing all elements up to but not including the first index of the last constant subarray also satisfies the above, with this first index (whose entry is different from the new last entry of the reduced subsequence) and 1 less subarray. If its length were not maximal, we could exchange this head of our original subsequence with a longer subsequence satisfying the same properties, contradiction that our original subsequence had maximal length for the given parameters. Therefore, the reduced subsequence must have also had maximal length for its parameters, and by induction, this is true in general.
# Approach
<!-- Describe your approach to solving the problem. -->
Suppose we have, for a given number of distinct constant subarrays, an array of all maximum lengths for each next index (as described above). To compute the next maximum lengths, for 1 extra constant subarray, we iterate through all indices, keeping track of both the longest possible subsequence (and its final entry) as well as the longest possible subsequence for any distinct final entry from that of the longest. To do this, when we get to a new index, we find both a previously stored value indicating the maximum length of a subsequence ending in this value at the previous index at which it occured (with the new number of distinct constant subarrays already), as well as our dynamic programming value indicating the maximum length of a subsequence with the old number of distinct constant subarrays, whose next entry must be this index, guarunteed to be different to the final entry in this maximal subsequence. We take the maximum of these two lengths (a subsequence ending in this same value, and a subsequence ending in a different value), and increment by 1 to indicate including this entry. We store this new length in our array of lengths for looking up subsequences ending in the same value, used above. We now use this length to update our 2 running maximum lengths (which we save in the dynamic programming array, now that we have used the current index and no longer need it). If this new length is greater than the overall maximum, we need to be slightly careful. It may be that the overall maximum occured with exactly this value as the final entry, in which case we simply update the length of the overall maximum. Otherwise, the 2nd maximum can be updated to the old overall maximum, as it occurs at a different value to the new overall maximum, which we update to the new length and new value at which it occurs. Finally, if this new length is only greater thant the 2nd maximum, we simply update this 2nd maximum's length and value. Note that it is guarunteed to be distinct from the overall maximum's value, because if they were the same, we would be in the first case where the new length beats the old length occuring at the same value.

Finally, at the end of each iteration through the array, we update a true maximum length of all subsequences to the final maximum we reached in this iteration, and return it after iterating through all allowed numbers of distinct constant subarrays.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(nk)$

We do a uniform constant amount of work, $O(1)$, for each inner iteration through the array, $O(n)$, for each allowed number of distinct constant subarrays in the subsequences, $O(nk)$.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n)$

We store a few arrays of length $O(n)$, and use an initial temporary dictionary of size $O(n)$ to compute previous indices of values in the array. Otherwise, we update dynamic programming values in place, so the arrays are reused over all $O(k)$ iterations. So overall no additional space is used.
# Code
```
public class Solution {
    public int MaximumLength(int[] nums, int k) {
        int[] prevIndexOfVal = new int[nums.Length];
        Dictionary<int, int> temp = new();
        for (int i = 0; i < nums.Length; i++) {
            int val = nums[i];
            ref int entry = ref System.Runtime.InteropServices.CollectionsMarshal.GetValueRefOrAddDefault(temp, val, out bool exists);
            prevIndexOfVal[i] = exists ? entry : nums.Length;
            entry = i;
        }
        int[] dp = new int[nums.Length];
        int[] lengths = new int[nums.Length + 1];
        int maxLength = 0;
        while (k-- >= 0) {
            int max1Length = 0;
            int max1Val = -1;
            int max2Length = 0;
            int max2Val = -1;
            for (int i = 0; i < nums.Length; i++) {
                int val = nums[i];
                int length = lengths[i] = Math.Max(lengths[prevIndexOfVal[i]], dp[i]) + 1;
                dp[i] = val == max1Val ? max2Length : max1Length;
                if (length > max1Length) {
                    if (max1Val == val) {
                        max1Length = length;
                    }
                    else {
                        max2Length = max1Length;
                        max2Val = max1Val;
                        max1Length = length;
                        max1Val = val;
                    }
                }
                else if (length > max2Length) {
                    max2Length = length;
                    max2Val = val;
                }
            }
            maxLength = Math.Max(maxLength, max1Length);
        }
        return maxLength;
    }
}
```