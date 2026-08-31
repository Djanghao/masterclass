# [JavaScript] Max Heap Approach O(N logN) Time

**Author:** control_the_narrative
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1166299/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/1166299/)

---

Time: `O((N + M) * logN)` where `N` is # of  `classes` and `M` is # of `extraStudents`
Space: `O(N)`
```javascript
var maxAverageRatio = function(classes, extraStudents) {
    const heap = new MaxPriorityQueue({priority: x => x[2]});
    
    for(let [pass, total] of classes) {
        const before = pass/total;
        const after = (pass+1)/(total+1)
        heap.enqueue([pass, total, after-before]);
    }
    
    while(extraStudents--) {
        let [pass, total] = heap.dequeue().element;
        pass++;
        total++;
        const before = pass/total;
        const after = (pass+1)/(total+1);
        heap.enqueue([pass, total, after-before]);
    }
    
    let sum = 0;
    
    while(!heap.isEmpty()) {
        const [pass, total] = heap.dequeue().element;
        sum += (pass/total);
    }
    return sum/classes.length;
};
```