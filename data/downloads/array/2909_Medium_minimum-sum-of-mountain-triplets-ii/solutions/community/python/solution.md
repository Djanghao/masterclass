# most Optimised Solution so far with Explanation !!! beats 100% time , 100%  Space ACCEPTED!!!

**Author:** ResilientWarrior
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4195354/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4195354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![image.png](./images/0.png)


# Approach
<!-- Describe your approach to solving the problem. -->
Here, we keep track of left min and right min and whenever we find an element greater than the to in between then we update our answer to
min of ans and some of the three

Key points:

\u2705 checks if all elements are the same and returns -1 if true.

\u2705 Initializes m1 as the first element(or m1 used to keep track of left min) and m2(or m2 used to keep track of right min) as the minimum value among elements starting from the third element.
\u2705 Iterates over the list, updating m1 and m2, and checks if the current element is greater than both.
If true,  calculates the sum of the current element, m1, and m2, and updates ans with the minimum sum encountered so far.
\u2705Finally,  return ans if it is not infinity (indicating a minimum sum was found),
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        ans = float('inf')
        
        N = len(nums)
        if len(set(nums)) == 1: 
            return -1

        m1 = nums[0]
        m2 = min(nums[2:])
        for i in range(1,N-1):
            m1 = min(m1,nums[i-1])
            if nums[i] == m2:
                m2 = min(nums[i+1:])
                
            
            if nums[i] > m1 and nums[i] > m2:
                ans = min(ans,nums[i] + m1 + m2)
                
        

                            
        return ans if ans != float("inf") else -1 
        
```