# [Python3] DFS solutions/templates to 6 different classic backtracking problems & more

**Author:** edtsoi430
**Votes:** 213
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/750378/](https://leetcode.com/problems/combination-sum-ii/solutions/750378/)

---

I have compiled solutions for all the 6 classic backtracking problems, you can practise them together for better understanding. Good luck with your preparation/interviews! 

[39. Combination Sum](https://leetcode.com/problems/combination-sum/)
```
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        if not candidates: return []
        res = []
        candidates.sort()
        def dfs(idx, path, cur):
            if cur > target: return
            if cur == target:
                res.append(path)
                return
            for i in range(idx, len(candidates)):
                dfs(i, path+[candidates[i]], cur+candidates[i])
        dfs(0, [], 0)
        return res
```

[40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/discuss/?currentPage=1&orderBy=recent_activity&query=)
```
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()
        def dfs(idx, path, cur):
            if cur > target: return
            if cur == target:
                res.append(path)
                return
            for i in range(idx, len(candidates)):
                if i > idx and candidates[i] == candidates[i-1]:
                    continue
                dfs(i+1, path+[candidates[i]], cur+candidates[i])
        dfs(0, [], 0)
        return res
```
[78. Subsets](https://leetcode.com/problems/subsets/)
```
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(idx, path):
            res.append(path)
            for i in range(idx, len(nums)):
                dfs(i+1, path+[nums[i]])
        dfs(0, [])
        return res
```

[90. Subsets II](https://leetcode.com/problems/subsets-ii/)
```
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        def dfs(idx, path):
            res.append(path)
            for i in range(idx, len(nums)):
                if i > idx and nums[i] == nums[i-1]:
                    continue
                dfs(i+1, path+[nums[i]])
        dfs(0, [])
        return res
```

[46. Permutations](https://leetcode.com/problems/permutations/)
```
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(counter, path):
            if len(path) == len(nums):
                res.append(path)
                return
            for x in counter:
                if counter[x]:
                    counter[x] -= 1
                    dfs(counter, path+[x])
                    counter[x] += 1
        dfs(Counter(nums), [])
        return res 
```

[47. Permutations II](https://leetcode.com/problems/permutations-ii/)
```
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(counter, path):
            if len(path) == len(nums):
                res.append(path)
                return
            for x in counter:
                if counter[x]:
                    counter[x] -= 1
                    dfs(counter, path+[x])
                    counter[x] += 1
        dfs(Counter(nums), [])
        return res
```

More good backtracking problems for practice:
[131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
[784. Lettercase Permutation](https://leetcode.com/problems/letter-case-permutation/)
[1087. Brace Expansion](https://leetcode.com/problems/brace-expansion/)
[93. Restore IP addresses](https://leetcode.com/problems/restore-ip-addresses/)
[1079 Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/)