# Javascript Solution using MinPriorityQueuehe

**Author:** mircovianello
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4376463/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4376463/)

---

```
/**
 * @param {number[]} blocks
 * @param {number} split
 * @return {number}
 */
var minBuildTime = function(blocks, split) {
    const minHeap = new MinPriorityQueue({ priority: x => x })
    for (let block of blocks) {
      minHeap.enqueue(block);
    }
    while (minHeap.size() > 1) {
      const first = minHeap.dequeue().element;
      const second = minHeap.dequeue().element;
      minHeap.enqueue(second + split);
    }            
    
    return minHeap.dequeue().element;
};
```