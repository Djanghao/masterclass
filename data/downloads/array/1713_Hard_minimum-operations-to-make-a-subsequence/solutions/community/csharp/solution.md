# Operations for Subsequence Transformation

**Author:** SergeyUrv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5251907/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5251907/)

---

# Intuition
The problem can be solved by finding the Longest Increasing Subsequence (LIS) in the modified array of indices of elements from arr that are present in target. The minimum number of operations needed to make target a subsequence of arr is equal to the length of target minus the length of the LIS.

# Approach
We first create a dictionary indexMap to store the indices of elements from target. Then, we iterate through arr, and for each element in arr, if it exists in target, we add its corresponding index from target to a list indices. Next, we find the length of the LIS in indices using a dynamic programming approach. Finally, we return the difference between the length of target and the length of the LIS.

# Complexity
**Time complexity:**
- Building the `indexMap` takes O(target.Length).
- Building `indices` takes O(arr.Length).
- Finding the LIS takes O(arr.Length * log(arr.Length)).
- So, the overall time complexity is O(arr.Length * log(arr.Length)).

**Space complexity:**
- We use additional space for `indexMap`, `indices`, and `lis`, each of size O(arr.Length).
- So, the overall space complexity is O(arr.Length).

# Code
```
public class Solution {
    public int MinOperations(int[] target, int[] arr) {
        Dictionary<int, int> indexMap = new Dictionary<int, int>();
        
        for (int i = 0; i < target.Length; i++) {
            indexMap[target[i]] = i;
        }
        
        List<int> indices = new List<int>();
        
        foreach (var num in arr) {
            if (indexMap.ContainsKey(num)) {
                indices.Add(indexMap[num]);
            }
        }
        
        int maxLength = LongestIncreasingSubsequence(indices.ToArray());
        
        return target.Length - maxLength;
    }
    
    private int LongestIncreasingSubsequence(int[] nums) {
        List<int> lis = new List<int>();
        
        foreach (var num in nums) {
            int index = lis.BinarySearch(num);
            
            if (index < 0) {
                index = Math.Abs(index) - 1;
            }
            
            if (index == lis.Count) {
                lis.Add(num);
            } else {
                lis[index] = num;
            }
        }
        
        return lis.Count;
    }
}
```