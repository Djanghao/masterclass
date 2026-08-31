# 🚀Easy Solution🚀||🔥Fully Explained🔥|| C++ || Python3 || Java

**Author:** Naman_Ag
**Votes:** 39
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075034/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3075034/)

---

# Consider\uD83D\uDC4D
```
                    Please Upvote If You Find It Helpful.
```
# Intuition
    We iterate through each element of array and perform following opration:
    1. We pick the element at that index.
    2. Or we do not pick that element and increase the index.
    3. when we iterate all elements i.e index==n, we check if size of the answer is greater than one (>1). If true then we add it otherwise ignore it.

                        {index, {output}}
                        {initial, {}}
                            /    \\
                           /      \\
                       {0, {}}  {0, {4}}
                        /  \\        /   \\
                       /    \\      /     \\
                {1, {}}  {1,{6}} {1,{4}} {1,{4,6}}
                    |       |       |        |
                    |       |       |        |
                    
# Approach : Backtracking
<!-- Describe your approach to solving the problem. -->
# Time Complexity : O(N.2^N)
# Space Complexity : O(N*N)

# Code
```C++ []
class Solution {
public:
    // Recursive function to find all increasing subsequences
    void solve(vector<int> nums, int index, vector<int> output, set<vector<int>>& ans){
        // Base case: if we have reached the end of the input array
        if(index>=nums.size()){
            // Only insert into ans if output has more than one element
            if(output.size()>1)
                ans.insert(output);
            return ;
        }
        // If output is empty or current element is greater than or equal to the last element in output
        if(output.size()==0 || nums[index] >= output.back()){
            output.push_back(nums[index]);
            solve(nums, index+1, output, ans);
            output.pop_back();
        }
        solve(nums, index+1, output, ans);
    }

    vector<vector<int>> findSubsequences(vector<int>& nums) {
        // Initialize output and set to store all increasing subsequences
        vector<int> output;
        set<vector<int>> ans;
        // Call recursive function to find all increasing subsequences
        solve(nums, 0, output, ans);
        // Return ans as a vector
        return vector(ans.begin(), ans.end());
    }
};
```
```python []
class Solution:
    def solve(self, nums, index, output, ans):
        # base case: if we have reached the end of the input array
        if index >= len(nums):
            # only add the output if it has more than one element
            if len(output) > 1:
                ans.add(tuple(output))
            return
        
        # if the output is empty or the current element is greater than or equal to the last element in the output
        if not output or nums[index] >= output[-1]:
            # add the current element to the output and recursively call solve
            output.append(nums[index])
            self.solve(nums, index+1, output, ans)
            # remove the last element from the output before returning
            output.pop()
        
        # recursively call solve without adding the current element to the output
        self.solve(nums, index+1, output, ans)

    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        # use a set to store the unique sub sequences
        ans = set()
        self.solve(nums, 0, [], ans)
        return [list(x) for x in ans]

```
```Java []
class Solution {
    public void solve(int[] nums, int index, List<Integer> output, Set<List<Integer>> ans) {
        // base case: if we have reached the end of the input array
        if (index >= nums.length) {
            // only add the output if it has more than one element
            if (output.size() > 1) {
                ans.add(new ArrayList<>(output));
            }
            return;
        }
        
        // if the output is empty or the current element is greater than or equal to the last element in the output
        if (output.isEmpty() || nums[index] >= output.get(output.size() - 1)) {
            // add the current element to the output and recursively call solve
            output.add(nums[index]);
            solve(nums, index+1, output, ans);
            // remove the last element from the output before returning
            output.remove(output.size() - 1);
        }
        
        // recursively call solve without adding the current element to the output
        solve(nums, index+1, output, ans);
    }
    
    public List<List<Integer>> findSubsequences(int[] nums) {
        // use a set to store the unique sub sequences
        Set<List<Integer>> ans = new HashSet<>();
        solve(nums, 0, new ArrayList<>(), ans);
        return new ArrayList<>(ans);
    }
}
```

```
                                        Give a \uD83D\uDC4D. It motivates me alot.
```
**Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)**
