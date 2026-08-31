# [Python] Simplest Prefix Sum | O(N) TC | East to Understand Logic

**Author:** visheshsinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4950443/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4950443/)

---

#### Approach:
1. Set the `target` needed for first player to win - i.e, one more than the total sum of nums while treating `0`'s as `-1`
2. Iterate & count how many levels from the start does the user need using prefixSum & a count variable
3. Handle the -ve's and also see that the answer should not be equal to the length of the array since we have to give atleast one level to play to the second player as well 


```
class Solution:
    def minimumLevels(self, nums: List[int]) -> int:
        target = (((2 * sum(nums)) - len(nums)) // 2) + 1
        points = 0
        answer = 0
        
        for num in nums:
            points += 1 if num else -1
            answer += 1
            
            if points >= target:
                break
        
        return answer if answer != len(nums) else -1
```

Let me know if you liked the explaination of the solution / have any questions. Thanks.