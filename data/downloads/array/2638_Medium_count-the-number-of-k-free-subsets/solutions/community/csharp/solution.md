# Two observations to solve this problem.

**Author:** pavansonty
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5047869/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5047869/)

---

# Intuition
**OBSERVATION1:**
Total count of Subsets of a large group formed from 2 smaller groups is product of their subset counts.
That is - Subset of 5 element group is 32. Subset of 4 element group is 16.
Total Subsets of 9 element group is 32 * 16.

Divide array into following groups: Group of 1-element (say X) when there is no element Y in array for which 
(X-Y = K) is not present in array.
And form elements X1, X2, X3...as one group where (X2-X1), (X3-X2)...are all k.
For ex: [5,4,9,3,12,7,13,11,15] K = 1;
Groups are: (3,4,5), 7, 9, (11, 12, 13), 15 

**OBSERVATION2:**
Subset count of Group (X1, X2, X3...) where diff of two consecutive elements like X5-X4 is K & thus both are not supposed to be in one Subset, will be:
fibnocci count of n, where n is total number of elements if the group.
Series starts with fib(0) = 1, fib(1) = 2.

So - based on OBSERVATION1 & OBSERVATION2, 
Divide array into chains. Multiply each of their subset count.


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long CountTheNumOfKFreeSubsets(int[] nums, int k) 
    {
        Array.Sort(nums);

        // Get element Count in each of K-Diff chains.
        Dictionary<int, int> kDiffChainCount = new Dictionary<int, int>(nums.Length);

        for (int i = 0; i < nums.Length; i++)
        {
            if (kDiffChainCount.ContainsKey(nums[i]-k))
            {
                kDiffChainCount[nums[i]] = kDiffChainCount[nums[i]-k] + 1;
                kDiffChainCount.Remove(nums[i]-k);
            }
            else
            {
                kDiffChainCount[nums[i]] = 1;
            }
        }

        // Only count of each chain is required. 
        // Form list with those values.
        List<int> groupsCount = new List<int>(kDiffChainCount.Values);

        // We want fib(x) for each entry in the groupsCount list.
        // Since fib() is costly, we want to do it once per each
        // element in groupsCount. So, sort the list and if next
        // element is what we are calculating fib() for, multiply
        // it to final result. Note that list may contain duplicates.
        // Hence inner while loop.

        groupsCount.Sort();
        int finalFib = groupsCount[groupsCount.Count-1];

        if (finalFib == 0)
            return finalFib+1;

        long result = 1;
        int j = 0;
        long prev = 1, cur = 1, next;
        int f = 1;

        while (f <= finalFib)
        {
            next = prev + cur;
            prev = cur;
            cur = next;

            while (j < groupsCount.Count && f == groupsCount[j])
            {
                result *= next;
                j++;
            }

            f++;
        }

        return result;
        
    }
}
```