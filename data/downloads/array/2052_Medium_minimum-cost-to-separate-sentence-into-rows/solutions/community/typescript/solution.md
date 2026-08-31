# Typescript | 100% | 84ms | Recursion | With Easy To Understand Comments

**Author:** nicolich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1651177/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/1651177/)

---



```
function minimumCost(sentence: string, k: number, rowStartIndex: number = 0): number {
    /* Determine the worst case end of the row (but not longer than the sentence itself): */
    let rowEndIndex = Math.min(rowStartIndex + k, sentence.length);
    
    /* Edge case when we reached the end of the sentence: */
    if (rowEndIndex === sentence.length) {
        return 0;
    }
    
    let minCost = Number.MAX_SAFE_INTEGER;
    /* Iterate over the characters of the row: */
    for (let index = rowStartIndex; index < rowEndIndex; index++) {
        const char = sentence.charAt(index);
        /* Check if we hit a space (possible linebreak): */
        if (char === " ") {
            /* Calculate cost of this row, up to the space we found: */
            const rowLength = index - rowStartIndex;
            const rowCost = Math.pow(k - rowLength, 2)
            
            /* Recursion (DFS) to find optiomal solution of the rest of the sentence.
             * Basically we pretend the current space might be the optimal linebreak 
             * in the current recursion step and calculate the min of its recursion steps: */
            const restCost = minimumCost(sentence, k, index + 1);
            
            /* Cost from the current recursion step's PoV is the cost of the row itself + min of its recursion steps: */
            const cost = rowCost + restCost;
            
            /* Update the minimal cost (if it's better): */
            minCost = Math.min(minCost, cost);
        }
    }
    
    /* Check if there's a space after the current end index (i.e. row is full, or row is whole word): */
    if (sentence.charAt(rowEndIndex) === ' ') {
        /* Note: We know the row is full, so the "rowCost" = 0: */
        const rowCost = 0;
        const restCost = minimumCost(sentence, k, rowEndIndex + 1);
        const cost = rowCost + restCost;
        
        /* Update the minimal cost (if it's better): */
        minCost = Math.min(minCost, cost);
    }
    
    return minCost;
};
```