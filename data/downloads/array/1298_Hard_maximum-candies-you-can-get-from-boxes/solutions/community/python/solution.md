# [Python] Simple, easy to understand solution

**Author:** codewithpurpose
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/457653/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/457653/)

---

```
class Solution(object):
    def maxCandies(self, status, candies, keys, containedBoxes, initialBoxes):
        """
        :type status: List[int]
        :type candies: List[int]
        :type keys: List[List[int]]
        :type containedBoxes: List[List[int]]
        :type initialBoxes: List[int]
        :rtype: int
        """
		
		# Inventory of boxes, keys and candies
        inv_boxes = initialBoxes # Reference to same object; i.e. repurpose initialBoxes rather than copying
        inv_keys = set()
        inv_candies = 0
        
		# Process boxes in our inventory
        while inv_boxes:
            took_stuff = False

            # If any boxes are opened/openable, take their contents (boxes, keys and candies) and throw away the box
            for box_id in inv_boxes:
                if status[box_id] == 1 or box_id in inv_keys:
                    took_stuff = True

                    # Add boxes to inventory
					inv_boxes.extend(containedBoxes[box_id])
                    # Add keys to inventory
                    for contained_key in keys[box_id]:
                        inv_keys.add(contained_key)
                    # Add candies to inventory
                    inv_candies += candies[box_id]
                    # We're done with this box, so throw it away
                    inv_boxes.remove(box_id)

            # If none of our boxes this round were opened/openable, then we can't proceed any further
            if not took_stuff:
                break
        return inv_candies
```