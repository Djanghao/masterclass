# C# O(N^2)

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/5047828/](https://leetcode.com/problems/contains-duplicate-iii/solutions/5047828/)

---

# Intuition
To solve the problem of finding if there exist two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most valueDiff and the absolute difference between i and j is at most indexDiff, I considered sorting the array while keeping track of original indices. This approach leverages sorting to efficiently check for value differences.


# Approach
First, encapsulate each number with its original index into a tuple and store these in a list.
Sort this list by values. This allows us to easily check for valueDiff by only considering a narrow window of elements around each element, since any number beyond this window would exceed the valueDiff.
Iterate through the sorted list, and for each element, only check subsequent elements until the value difference exceeds valueDiff. This ensures the comparisons are bounded and efficient.
During these comparisons, also check if the index difference constraint (indexDiff) is satisfied. If both constraints are met, return true.
If the end of the list is reached without finding such a pair, return false.

# Complexity
- Time complexity:
O(nlogn)
- Space complexity:
O(n)
# Code
```
public class Solution {
    public bool ContainsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
         List<(int index, int val)> list = new List<(int index, int val)>();
        for (int i = 0; i < nums.Length; i++) {
            list.Add((i, nums[i]));
        }
        list.Sort((a, b) => a.val.CompareTo(b.val));
        for (int i = 0; i < list.Count; i++) {
            for (int j = i + 1; j < list.Count; j++) {
                var (indexI, valI) = list[i];
                var (indexJ, valJ) = list[j];
                long diff = Math.Abs((long)valJ - valI);
                if (diff > valueDiff) {
                    break; 
                }
                int idiff = Math.Abs(indexJ - indexI);
                if (idiff <= indexDiff) {
                    return true; 
                }
            }
        }
        return false; // mo  pair found
    }
}
```