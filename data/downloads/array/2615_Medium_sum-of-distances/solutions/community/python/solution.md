# Easiest Solution and optimal solution  --- solution by 2 Approaches Easy and optimal

**Author:** satyamsherawat19102002
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/5371593/](https://leetcode.com/problems/sum-of-distances/solutions/5371593/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def distance(self, nums: List[int]) -> List[int]:


        '''Easiest solution '''
        '''ans = []

        for i in range(len(nums)):
            c = 0
            for j in range(len(nums)):
                
                if i != j and nums[i] == nums[j]:
                    c += abs(i-j)

            ans.append(c)


        return ans'''


        '''Optimal Solution'''
        n, dict1 = len(nums), defaultdict(list)

        for i,v in enumerate(nums):
            dict1[v].append(i)

        arr = [0]*n 

        for key,val in dict1.items():
            pre_sum, suf_sum = 0, sum(val)
            p, s = 0, len(val)

            for i in val:
                pre_sum += i
                suf_sum -= i
                p += 1
                s -= 1
                arr[i] = -pre_sum + i*p + suf_sum - i*s

        return arr


        
```