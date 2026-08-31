# Python O(N) time, O(1) space, beats 100%, detailed explanations

**Author:** chenby04
**Votes:** 104
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/291221/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/291221/)

---

There are only two scenarios where the robot can come back to its original location:
1) the robot is already back to its origin by the end of the string traversal, and 
2) the robot is away from the origin, but heading to a direction different from its initial direction. For example, if the robot is facing left by the end of the first string traversal, after three other traversals of left->left->left, it is back to the origin. A second example is that if the robot is facing down by the end of the first string traversal, it only takes another traversal for it to get back to the origin.

Another tip on how to change the directions. You actually do not need to keep a list of all possible directions [(0,1), (-1,0), (0,-1), (1,0)]. Just swap dx and dy and add a negative sign to one of it to rotate the direction by 90 degrees. The proof is that the dot product of (dx,dy) and (dy,-dx) is 0, meaning that these two vectors are perpendicular to each other. 
```
class Solution(object):
    def isRobotBounded(self, instructions):
        """
        :type instructions: str
        :rtype: bool
        """
        di = (0,1)
        x,y = 0,0
        for instruction in instructions:
            if instruction == 'G':
                x,y = x+di[0],y+di[1]
            elif instruction == 'L':
                di = (-di[1],di[0])
            else:
                di = (di[1],-di[0])
            
        return (x==0 and y==0) or di!=(0,1)
```
            
