# O(n^2) solution with explanation

**Author:** yorkshire
**Votes:** 2
**Link:** [https://leetcode.com/problems/falling-squares/solutions/108792/](https://leetcode.com/problems/falling-squares/solutions/108792/)

---

The height of the base of each box is the highest top of any other box already dropped that overlaps along the x-axis.

So for each box, we iterate over all previously dropped boxes to find the base_height of the new box. The default is zero (ground level) if no overlaps are found.
If there is no overlap between a box and a previous box, then they are separate and will not stick, so the new box will not go on top of the previous box.
If there is overlap then the base_height of the new box will be the max of the previous base_height and height of the top of the previous box.

Store the height of the new box as being base_height + side_length. Then append to the result the higher of the previous maximum height and this new box height. 

```
class Solution(object):
    def fallingSquares(self, positions):
        """
        :type positions: List[List[int]]
        :rtype: List[int]
        """
        heights, result = [], []    # heights is the top edge height for each box dropped
        highest = 0                 # greatest height so far
        
        for i, position in enumerate(positions):

            left, side_length = position[0], position[1]
            
            base_height = 0         # default if no overlap with any boxes
            for j in range(i):      # loop over all previously dropped boxes
                                
                prev_left, prev_side = positions[j][0], positions[j][1]  
                if (left + side_length <= prev_left) or (left >= prev_left + prev_side):
                    continue        # no overlap between this box and previous box
                base_height = max(base_height, heights[j])
            
            heights.append(base_height + side_length)
            highest = max(highest, heights[-1])
            result.append(highest)
        
        return result