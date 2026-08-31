# TypeScript greedy from right to left filling smallest boxes

**Author:** afanasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/2214943/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solutions/2214943/)

---

``` typescript
function maxBoxesInWarehouse(boxes: number[], warehouse: number[]): number {
    
    const highestToThePoint = [warehouse[0]];
    for (let i=1; i<warehouse.length; i++) {
        highestToThePoint[i] = Math.min(highestToThePoint[i-1], warehouse[i]);
    }

    const sortedBoxes = boxes.sort((a,b)=>b-a);
    let result = 0;
    for (let i=highestToThePoint.length-1;i>=0 && sortedBoxes.length;i--) {
        if (highestToThePoint[i]>=sortedBoxes[sortedBoxes.length-1-result]) {
            result++;
        }
    }
    return result;
};
```