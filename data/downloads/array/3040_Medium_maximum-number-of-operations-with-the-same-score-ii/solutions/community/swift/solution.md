# Clean Swift - O(n^2) - DP - Recursion.

**Author:** timchenggu123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4925260/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4925260/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can construct a decision tree for the problem where each node has 3 children based on the 3 actions we can take. We want to find the height of the tree. The height of each node on the tree is 1 + <the max height of the three sub trees>. Each node is also associated with a subarray that we need to check, denoted with [i,j] where i < j. A node is a leaf when i >= j. From here, we simply need to conduct a tree walk resursively, and update the value of each node based on the max of its three children. DP comes into play since multiple paths may lead to the same node, so if we already know the value of the node we can simply store it in an array. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func subHeight(_ i: Int, _ j: Int, _ val: Int, _ nums:[Int], _ dp: inout [[Int]], _ first: Bool) -> Int{
        if i >= j {return 0}
        if dp[i][j] != -1 {return dp[i][j]}
 
        var op1 = 0; var op2 = 0; var op3 = 0
        var v = nums[i] + nums[i+1]
        if first || v == val {
            op1 = 1 + subHeight(i+2, j, v, nums, &dp, false)
        }
        v = nums[j] + nums[j-1]
        if first || v == val{
            op2 = 1 + subHeight(i, j-2, v, nums, &dp, false)
        }
        v = nums[i] + nums[j]
        if first || v == val{
            op3 = 1 + subHeight(i+1, j-1, v, nums, &dp, false)
        }
        var ans = max(op1, op2, op3)
        dp[i][j] = ans
        return ans
 
    }
    func maxOperations(_ nums: [Int]) -> Int {
        var i = 0; var j = nums.count-1; var val = 0;
        var dp = Array(repeating: Array(repeating: -1, count: nums.count), count: nums.count)
        return subHeight(0, nums.count - 1, 0, nums, &dp, true)
    }   
}
```