# DP O(1) Python

**Author:** serremierthe1st
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5502222/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/5502222/)

---

# Intuition
I thought it was a mathematical counting problem, probably could be done, but removing the double-counting was too annoying. 

I thought DFS might work, but the memory usage from bookkeeping would be massive. 

So after looking at other people's answers haha, I settled on DP. 

# Approach
This problem is honestly in my opinion hard-level, idk how it could be classified as medium unless you knew the trick beforehand. 

Bottom line is that for any k-free subset, you can build it using smaller k-free subsets. 

So then if you partition your numbers into strictly arithmetically increasing arrays, for each partition you can use dynamic programming to figure out the total number of k-free subsets. Then you simply have to multiply the results of each partition together (hence finding all permutations) to generate the number of all k-free subsets. Intuitive right?

There is a small but necessary proof you need to convince yourself of, in that for any k-free subset, there is strictly only ONE way to generate it by combining k-free subsets from the partitions. Otherwise we would be prone to double-counting and missing solutions. 

Basic idea of proof: 
1. Let a, b, c, d, e be a k-free subset
2. There is exactly one assignment from each letter to a partition
3. e.g. (a, c) (b), (d, e)
4. Then if our dp algorithm is correct, each subset from each partition will be counted once, so our algorithm can find every solution exactly once. 

The partitioning part was a little tricky, I ended up doing the stupid way with 2 sets. 

The dp portion was also done stupidly, but because the size of nums is super small, we can afford to loop. 


# Complexity
- Time complexity:
O(1000) * O(1000) or O(1). 

- Space complexity:
O(1000) from dp array and sets used. 

# Code
```
class Solution(object):
    def countTheNumOfKFreeSubsets(self, nums, k):
        # set up the arrays
        nums.sort()
        pool = set(nums)
        seen = set()
        d = {}
        for num in nums:
            if num in seen:
                continue
            else:
                ls = [num]
                nxt = num + k
                while nxt in pool:
                    seen.add(nxt)
                    ls.append(nxt)
                    nxt += k
                d[num] = ls
        
        # now count
        product = 1
        for key in d:
            arr = d[key]
            # set to 1 for dp because every number by itself already is a k-free subset
            dp = [1 for _ in range(len(arr))]
            for i in range(len(arr)):
                for j in range(0, i-1):
                    dp[i] += dp[j]
            product *= (1 + sum(dp)) # add 1 to account for empty set
        
        return product
                

        
```