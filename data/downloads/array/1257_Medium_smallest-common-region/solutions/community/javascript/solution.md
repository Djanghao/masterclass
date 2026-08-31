# JavaScript Solution

**Author:** Deadication
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/885613/](https://leetcode.com/problems/smallest-common-region/solutions/885613/)

---

```
var findSmallestRegion = function(regions, region1, region2) {
    const graph = new Map();
    
    for (const region of regions) { // graph each child region to their parent region
        const [parent, ...children] = region;
        
        for (const child of children) {
            graph.set(child, parent);
        }
    }
    
    const stack1 = [];

    while (region1 != null) { // start from the target region1 and build up stack of ancestors
        stack1.push(region1);
        region1 = graph.get(region1);
    }
    
    const stack2 = [];
    
    while (region2 != null) {
        stack2.push(region2); // start from the target region2 and build up stack of ancestors
        region2 = graph.get(region2);
    }
    
    let lca = "";
    
    while (stack1.length > 0 && stack2.length > 0) {
        const ancestor1 = stack1.pop();
        const ancestor2 = stack2.pop();
        
        if (ancestor1 === ancestor2) lca = ancestor1; // we want to find the lowest common ancestor
        else break; // when two ancestors do not match, then the answer is our last lca
    }
    
    return lca;
};
```