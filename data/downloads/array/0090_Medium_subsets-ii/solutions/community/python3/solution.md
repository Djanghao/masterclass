# General Backtracking questions solutions in Python for reference :

**Author:** coders-block
**Votes:** 75
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/429537/](https://leetcode.com/problems/subsets-ii/solutions/429537/)

---

I have taken solutions of @caikehe from frequently asked backtracking questions which I found really helpful and had copied for my reference. I thought this post will be helpful for everybody as in an interview I think these basic solutions can come in handy. Please add any more questions in comments that you think might be important and I can add it in the post.

#### Combinations :
```
def combine(self, n, k):
    res = []
    self.dfs(xrange(1,n+1), k, 0, [], res)
    return res
    
def dfs(self, nums, k, index, path, res):
    #if k < 0:  #backtracking
        #return 
    if k == 0:
        res.append(path)
        return # backtracking 
    for i in xrange(index, len(nums)):
        self.dfs(nums, k-1, i+1, path+[nums[i]], res)
```  
	
#### Permutations I
```
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.dfs(nums, [], res)
        return res

    def dfs(self, nums, path, res):
        if not nums:
            res.append(path)
            #return # backtracking
        for i in range(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], path+[nums[i]], res)
```        

#### Permutations II
```
def permuteUnique(self, nums):
    res, visited = [], [False]*len(nums)
    nums.sort()
    self.dfs(nums, visited, [], res)
    return res
    
def dfs(self, nums, visited, path, res):
    if len(nums) == len(path):
        res.append(path)
        return 
    for i in xrange(len(nums)):
        if not visited[i]: 
            if i>0 and not visited[i-1] and nums[i] == nums[i-1]:  # here should pay attention
                continue
            visited[i] = True
            self.dfs(nums, visited, path+[nums[i]], res)
            visited[i] = False
```

 
#### Subsets 1


```
def subsets1(self, nums):
    res = []
    self.dfs(sorted(nums), 0, [], res)
    return res
    
def dfs(self, nums, index, path, res):
    res.append(path)
    for i in xrange(index, len(nums)):
        self.dfs(nums, i+1, path+[nums[i]], res)
```


#### Subsets II  


```
def subsetsWithDup(self, nums):
    res = []
    nums.sort()
    self.dfs(nums, 0, [], res)
    return res
    
def dfs(self, nums, index, path, res):
    res.append(path)
    for i in xrange(index, len(nums)):
        if i > index and nums[i] == nums[i-1]:
            continue
        self.dfs(nums, i+1, path+[nums[i]], res)
```


#### Combination Sum        


```
def combinationSum(self, candidates, target):
    res = []
    candidates.sort()
    self.dfs(candidates, target, 0, [], res)
    return res
    
def dfs(self, nums, target, index, path, res):
    if target < 0:
        return  # backtracking
    if target == 0:
        res.append(path)
        return 
    for i in xrange(index, len(nums)):
        self.dfs(nums, target-nums[i], i, path+[nums[i]], res)
```

        
        
#### Combination Sum II        

```
def combinationSum2(self, candidates, target):
    res = []
    candidates.sort()
    self.dfs(candidates, target, 0, [], res)
    return res
    
def dfs(self, candidates, target, index, path, res):
    if target < 0:
        return  # backtracking
    if target == 0:
        res.append(path)
        return  # backtracking 
    for i in xrange(index, len(candidates)):
        if i > index and candidates[i] == candidates[i-1]:
            continue
        self.dfs(candidates, target-candidates[i], i+1, path+[candidates[i]], res)
```