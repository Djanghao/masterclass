# Simple Python solution (DFS).

**Author:** OldCodingFarmer
**Votes:** 655
**Link:** [https://leetcode.com/problems/permutations/solutions/18296/](https://leetcode.com/problems/permutations/solutions/18296/)

---

        
    # DFS
    def permute(self, nums):
        res = []
        self.dfs(nums, [], res)
        return res
        
    def dfs(self, nums, path, res):
        if not nums:
            res.append(path)
            # return # backtracking
        for i in xrange(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], path+[nums[i]], res)