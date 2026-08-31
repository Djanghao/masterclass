# O(n log(n)) time — best TS solution on 11/6/23

**Author:** marcococo
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/4257809/](https://leetcode.com/problems/k-empty-slots/solutions/4257809/)

---

# Intuition
Every time a bulb is turned on, we have an opportunity to count the gaps between its left lit neighbor, and its right lit neighbor. If that gap equals k, then we have a solution.

# Approach
To count the gaps on either side, we can maintain a sorted array representing the indexes of lit bulbs, and therefore also representing the size of gaps between lit bulbs. E.g. for the following array of bulbs:

```[1,0,0,1,1,0,0,0,1]```

we can use the following array of lit indexes to represent the size of gaps:

```[0,3,4,8]```

On each insertion into this array, we count the gap to the left and to the right

# Complexity
- Time complexity: inserting into the array of bulb indexes is O(log(n)), and we need to do this (at worst) n times, so O(n log(n))

- Space complexity: O(n) at worst, accounting for the it bulb indexes array

# Code
```
function kEmptySlots(bulbs: number[], k: number): number {
    let sortedIndexes = []
    for (let i = 0; i < bulbs.length; i += 1) {
        const bulbIndex = bulbs[i]
        const insertionIndex = getInsertionIndex(sortedIndexes, bulbIndex)
        sortedIndexes.splice(insertionIndex, 0, bulbIndex)
        const previousGap = sortedIndexes[insertionIndex] - sortedIndexes[insertionIndex - 1]
        const nextGap = sortedIndexes[insertionIndex + 1] - sortedIndexes[insertionIndex]
        if (previousGap === k + 1 || nextGap === k + 1) return i + 1
    }
    return -1
};

/**
 * Assuming a sorted array, given a splitter, return the index the splitter
 * should be inserted at in order to keep the arrray sorted. Return -1 if impossible
 */
function getInsertionIndex(
    array: number[],
    splitter: number,
    start: number = 0,
    end: number = array.length
): number {
    if (end === start) return start

    const middle = start + Math.floor((end - start) / 2)

    if (array[middle] < splitter && array[middle + 1] > splitter) {
        return middle + 1
    } else if (array[middle] > splitter) {
        return getInsertionIndex(array, splitter, start, middle)
    } else {
        return getInsertionIndex(array, splitter, middle + 1, end)
    }
}

```