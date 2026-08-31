# Python3 Greedy / Linear scan O(n) beats 100%

**Author:** cinderace
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194453/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4194453/)

---

# Intuition

Scan from 1 to min(c.values()) and search among each number in the Counter

The search function checks if there is a viable split for either index or index + 1 group size, since the maxsize - minsize needs to be less than or equal to 1. This means if we're checking for a split size of 3, 3 or 4 are both accepted as a viable solution.

We check this by testing the viability of each number in our Counter.values(), meaning the frequency of each number in the input array. If the current (frequency % split_size) > (frequency // split_size), it means there is no way to form a viable split since there is guaranteed to be a remained, and that remainder can not be eliminated by adding 1 to each group (for example, if our split size is 7 and our frequency is 17, there's no way to evenly split 17 into groups of either 7 or 8 without a remainder).

You could also reverse the range and loop backwards, immediately returning the answer if you find a viable split. The worst case of each solution is still the same though, and I think this method provides a bit more clarity.

# Complexity

Time Complexity: $$O(n)$$
Space Complexity: $$O(n)$$

# Code
```
class Solution:
    def minGroupsForValidAssignment(self, nums: List[int]) -> int:
        c = Counter(nums)
        
        if len(c) == 1:
            return 1
        
        def search(num):
            ans = 0
            for key in c:
                t = c[key] % num
                if t > c[key] // num:
                    return 0
                
                ans += ceil(c[key] / (num + 1))
                    
            return ans
        
        minn, maxx = 1, min(c.values())
        ans = float('inf')
        for i in range(minn, maxx + 1):
            s = search(i)
            if s:
                ans = min(ans, s)
                
        return ans
            
            
                
```