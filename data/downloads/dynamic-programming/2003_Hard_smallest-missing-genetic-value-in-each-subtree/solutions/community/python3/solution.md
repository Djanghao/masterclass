# [Python3] dfs

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1461767/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1461767/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/0de189059bd6af4dabe23d9066dde1655f3334fc) for solutions of weekly 258. 
```
class Solution:
    def smallestMissingValueSubtree(self, parents: List[int], nums: List[int]) -> List[int]:
        ans = [1] * len(parents)
        if 1 in nums: 
            tree = {}
            for i, x in enumerate(parents): 
                tree.setdefault(x, []).append(i)
                
            k = nums.index(1)
            val = 1
            seen = set()
            
            while k != -1: 
                stack = [k]
                while stack: 
                    x = stack.pop()
                    seen.add(nums[x])
                    for xx in tree.get(x, []): 
                        if nums[xx] not in seen: 
                            stack.append(xx)
                            seen.add(nums[xx])
                while val in seen: val += 1
                ans[k] = val
                k = parents[k]
        return ans 
```