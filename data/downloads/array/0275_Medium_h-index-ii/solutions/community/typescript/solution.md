# Binary search with an explanation.

**Author:** sadiglianar
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/5980290/](https://leetcode.com/problems/h-index-ii/solutions/5980290/)

---

# Intuition
Since the citations array is sorted, and we\u2019re looking for a spesific target, in this case it is the highest possible h-index, we can use binary search to efficiently narrow down the solution.

The target h-index condition is basically this: there should be at least h papers with at least h citations each.

# Approach
Using binary search, we repeatedly check the middle element in our search range. For example, if citations = [0, 1, 3, 5, 6], we start with left = 0 and right = 4, giving us mid = 2 (the middle index). The element at this position is citations[2] = 3.

For each midpoint mid, we calculate a possible "popularity level" as h = n - mid, which represents the number of papers from mid to the end of the array. For example, with n = 5 papers in total, at mid = 2, we calculate h = 5 - 2 = 3. This means we\u2019re testing a popularity level of 3\u2014we need at least 3 papers with 3 or more citations.

If the number of citations at mid is at least h, then we know this popularity level is achievable, and we keep searching to see if an even higher level is possible. In our example, citations[2] = 3, which meets our requirement of at least 3 citations for this level, so we continue searching to the right to see if a higher level is achievable.

If the citations at mid are too low, we adjust our search range, moving left or right depending on whether we need higher or lower citation counts to meet our target. For instance, if citations[2] had been less than 3, we would have moved our search to the right half of the array to find higher citation counts.

By adjusting the range this way, we narrow down the search and quickly find the highest possible popularity level that meets the conditions for the h-index. In our example, this approach ultimately confirms that the h-index is 3.


# Code
```typescript []
function hIndex(citations: number[]): number {
    let n = citations.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let h = n - mid;

        if (citations[mid] === h) {
            return h;
        } else if (citations[mid] < h) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return n - left;
};
```