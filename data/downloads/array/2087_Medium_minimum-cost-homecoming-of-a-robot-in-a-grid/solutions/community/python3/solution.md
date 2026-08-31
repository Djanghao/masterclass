# 📌📌 Greedy Approach || Well-Coded and Explained || 95% faster 🐍

**Author:** abhi9Rai
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598918/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598918/)

---

## IDEA : 
 In this Question directly we can find the cost for rows and column from source to target and add in last. 
*  From going starting rows to target rows we have to add cost of the up or down path. 

*  Similarly, for going from starting column to target column we have to add all the costs of coming column in path either towards left or right,

**Implementation:**
'''

	class Solution:
    def minCost(self, startPos: List[int], homePos: List[int], rowCosts: List[int], colCosts: List[int]) -> int:
        src_x,src_y = startPos[0],startPos[1]
        end_x,end_y = homePos[0], homePos[1]
        
        if src_x < end_x:
            rc = sum(rowCosts[src_x+1:end_x+1])
        elif src_x > end_x:
            rc = sum(rowCosts[end_x:src_x])
        else:
            rc=0
        
        if src_y < end_y:
            cc = sum(colCosts[src_y+1:end_y+1])
        elif src_y > end_y:
            cc = sum(colCosts[end_y:src_y])
        else:
            cc=0
        
        return cc+rc

### Thanks and  Upvote if you like the Idea!!\u270C