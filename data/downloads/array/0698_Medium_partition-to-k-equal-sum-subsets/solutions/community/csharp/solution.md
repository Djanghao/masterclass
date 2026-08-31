# C# DFS, 80ms, beats 100%

**Author:** onatm
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/671019/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/671019/)

---

```csharp
public class Solution {
    public bool CanPartitionKSubsets(int[] nums, int k) {
        if (nums.Length == 0 || k == 0) {
            return false;
        }
        
        if (k == 1) {
            return true;
        }
        
        var sum = nums.Sum();
        
        if (sum % k != 0) {
            return false;
        }
        
        var visited = new bool[nums.Length];
        
        return Search(nums, k, sum/k, 0, 0, visited);
    }
    
    public bool Search(int[] nums, int k, int target, int start, int sum, bool[] visited) {
        if (k == 1) {
            return true;
        }
        
        if (sum == target) {
            return Search(nums, k - 1, target, 0, 0, visited);
        }
        
        for (var i = start; i < nums.Length; i++) {
            var localSum = nums[i] + sum;
            if (localSum > target || visited[i]) {
                continue;
            }
            visited[i]=true;
            if (Search(nums, k, target, i, localSum, visited)) {
                return true;
            }
            visited[i]=false;
        }
        
        return false;
    }
}
```