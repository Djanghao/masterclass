# Javascript | Beats 100% | Comments and code clear

**Author:** YokaiCode
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5319244/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5319244/)

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
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
    boxes = boxes.sort((a,b)=>a-b);

    let ptrL = 0;
    let ptrR = warehouse.length-1;
    let leftMax = warehouse[0];
    let rightMax = warehouse[warehouse.length-1]

    let count = 0;

    while(count < warehouse.length && ptrL <= ptrR && (boxes[0] <= leftMax || boxes[0] <= rightMax)) {

        // If the boxes are too tall for either end, remove
        while(boxes[boxes.length-1] > leftMax && boxes[boxes.length-1] > rightMax) {
            boxes.pop()
        }

        // Can tallest box fit in left entrance?
        if(boxes[boxes.length-1] <= leftMax) {
            boxes.pop()
            ptrL+=1;
            count+=1;
            leftMax = Math.min(warehouse[ptrL], leftMax);
        }

        // Can tallest Box fit in right entrace?
        if(boxes[boxes.length-1] <= rightMax) {
            boxes.pop()
            ptrR-=1;
            count+=1;
            rightMax = Math.min(warehouse[ptrR], rightMax);
        }
    }

    return count



};
```