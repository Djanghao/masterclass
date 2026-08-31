# [java] O(1) space | O(nlogn + (m+n)) time greedy

**Author:** hitzy
**Votes:** 1
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/1199283/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/1199283/)

---

```
class Solution {
    public int maxBoxesInWarehouse(int[] boxes, int[] warehouse) {
        if (boxes == null || boxes.length == 0 || warehouse == null || warehouse.length == 0) {
            return 0;
        }
		// Sort the boxes by height
        Arrays.sort(boxes);
		// Will start checking boxes from higher to lower height so we can ignore greater height boxes
        int i = boxes.length-1;
        int count = 0;
        int l = 0, r = warehouse.length-1;
        while (l <= r) {
			// If can't insert box from either left or right, leave it
            while (i >= 0 && boxes[i] > warehouse[l] && boxes[i] > warehouse[r]) {
                i--;
            }
			// If all boxes over return count
            if (i == -1) {
                return count;
            }
			// If both left and right ware house possible, make Greedy choice to choose smaller room
            if (boxes[i] <= warehouse[l] && boxes[i] <= warehouse[r]) {
                if (warehouse[l] <= warehouse[r]) {
                    l++;
                }
                else {
                    r--;
                }
            }
			// If only left possible choose left
            else if (boxes[i] <= warehouse[l]) {
                l++;
            }
			// If only right possible choose right
            else {
                r--;
            }
            count++;
            i--;
        }
        return count;
    }
}
```