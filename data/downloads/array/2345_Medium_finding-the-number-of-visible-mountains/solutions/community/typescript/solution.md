# TS solution

**Author:** mojojoliu
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3650804/](https://leetcode.com/problems/finding-the-number-of-visible-mountains/solutions/3650804/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Compare the bases of these triangles. If triangles have bases fully inside another triangle, we discount it. Edge case for this problem is if two or more triangles are fully overlapping, we remove them completely.

Create a new array of bases, in ascending order of starting point. Where starting point is the same, sort in ascending order of ending point.

Move down the x-axis, comparing the bases of these triangles.

Right-angled isoceles triangles have the relationship of base being 2 * height.

# Complexity
- Time complexity: O(nlog(n))

- Space complexity: O(2n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
function visibleMountains(peaks: number[][]): number {
    const numMountains = peaks.length;
    const bases = [];
    for (let i = 0; i < numMountains; i++) {
        const currMountain = peaks[i];
        // for a right-angled isoceles triangle, base is 2 * height
        bases.push([currMountain[0] - currMountain[1], currMountain[0] + currMountain[1]]);
    }

    // sort bases in ascending order of starting position. Is starting position is the same, sort in ascending order of ending position.
    bases.sort((a, b) => (a[0] - b[0] === 0) ? a[1] - b[1] : a[0] - b[0]);
    const startIndex = 0;
    const endIndex = 1;

    let numPeaks = 1; // constraint: there'll always be at least one mountain
    let overlapStart;
    let overlapEnd;

    let prevBase = bases[0];
    let horizontalDistanceCovered = prevBase[endIndex];
    let i = 1;

    while (i < numMountains) {
        if (bases[i][startIndex] === prevBase[startIndex] && bases[i][endIndex] === prevBase[endIndex]) { //edge case: continuous overlapping means no peak
            if (bases[i][startIndex] !== overlapStart && bases[i][endIndex] !== overlapEnd) {
                overlapStart = bases[i][startIndex];
                overlapEnd =  bases[i][endIndex];
                numPeaks -= 1;
            }
                i += 1;
                continue;
        }

        numPeaks += 1;

        if (bases[i][startIndex] <= horizontalDistanceCovered && bases[i][endIndex] <= horizontalDistanceCovered) {
            numPeaks -= 1;
            i += 1;
            continue;
        }

        if (bases[i][startIndex] === prevBase[startIndex]) {
            if (bases[i][endIndex] >= prevBase[endIndex]) {
                horizontalDistanceCovered = bases[i][endIndex];
                prevBase = bases[i];
                numPeaks -= 1;
                i += 1;
                continue;
            }
        }

        horizontalDistanceCovered = bases[i][endIndex];
        prevBase = bases[i];
        i += 1;
    }


    return numPeaks;
};


```