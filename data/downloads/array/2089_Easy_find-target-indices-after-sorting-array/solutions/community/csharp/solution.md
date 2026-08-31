# Simple O(n) solution. No sorting.

**Author:** vm2591
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3452412/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3452412/)

---

# Intuition
You don't need to sort the Array, you only need to find numbers bigger than target and smaller than target. Once you have that you can easily count the indices.

# Approach
Iterate over each number in the array and keep track of numbers lesser than target in the variable startSkip and numbers greater than target in the variable endSkip. 

Run a for look starting from the first index where the first occurance of target will occur in the sorted array and iteratively keep adding indices until you reach the last index of target number, which will be endSkip numbers away from the last index of the array.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) to store the elements.

# Code
```
public class Solution {
    public IList<int> TargetIndices(int[] nums, int target) {
        List<int> nos = new List<int>();
        int startSkip = 0;
        int endSkip = 0;
        foreach(int num in nums){
            if (num > target){
                endSkip++;
            }
            if (num < target){
                startSkip++;
            }
        }
        
        for(int i = startSkip; i<nums.Length-endSkip; i++){
            nos.Add(i);
        }

        return nos;
    }
}
```