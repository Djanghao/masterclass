# Typescript | 100% | Line Sweep | With Easy To Understand Comments

**Author:** nicolich
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1496404/](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1496404/)

---

```
function averageHeightOfBuildings(buildings: number[][]): number[][] {
    /* Create a map of all the positions of where the buildings start or end.
     * For those positions we map to how much the height changes and how the 
     * count of buildings changes: */
    const changeMap: Map<number, [number, number]> = new Map();
    
    for (const [startInclusive, endExclusive, height] of buildings) {
        if (!changeMap.has(startInclusive)) {
            changeMap.set(startInclusive, [height, 1]);
        } else {
            const [existingChange, existingCount] = changeMap.get(startInclusive);
            changeMap.set(startInclusive, [existingChange + height, existingCount + 1]);
        }
        if (!changeMap.has(endExclusive)) {
            changeMap.set(endExclusive, [-height, -1]);
        } else {
            const [existingChange, existingCount] = changeMap.get(endExclusive);
            changeMap.set(endExclusive, [existingChange - height, existingCount - 1]);
        }
    }
    
    /* Sort all those positions in order, so that we can sweep from left to right: */
    const changes = [...changeMap.entries()].sort(([positionLhs, changeLhs], [positionRhs, changeRhs]) => positionLhs - positionRhs);
    
    const result: number[][] = [];
    
    /* Pluck out the first change: */
    let [left, [height, count]] = changes.shift();
    
    /* Compare to all the other change positions: */
    for (const [right, [heightChange, countChange]] of changes) {
        const heightAverage = count > 0 ? Math.floor(height/count) : 0;
        
        height += heightChange;
        count += countChange;
        
        const isFirst = result.length === 0;
        
        if (isFirst) {
            /* The first result segment can never extend a prior one: */
            result.push([left, right, heightAverage])
        } else {
            /* Instead of blindly adding this result segment, check if it
             * has the same height as the previous segment (if possible): */
            const [,,previousHeightAverage] = result[result.length - 1];
            if (heightAverage === previousHeightAverage) {
                /* If so, extend the previous one: */
                result[result.length - 1][1] = right;
            } else {
                /* Height changed, add a new one: */
                result.push([left, right, heightAverage])
            }
        }
        
        left = right;
    }
    
    /* Filter out areas without buildings (height === 0): */
    return result.filter(([left, right, height]) => height > 0);
};
```