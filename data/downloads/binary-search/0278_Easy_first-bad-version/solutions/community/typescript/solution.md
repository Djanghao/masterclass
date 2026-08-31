# TS | O(log n) | Binary search algorithm | Intuitive solution described

**Author:** LexiosAlex
**Votes:** 6
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/3230406/](https://leetcode.com/problems/first-bad-version/solutions/3230406/)

---

# Intuition
Since the versions are sorted in 

# Approach
Binary search is a search algorithm that finds the index of a target value in a sorted array.

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: (version: number) => boolean ) {

    return function(n: number): number {
        let start = 0; // define start
        let end = n; // define end for binary search
        let lastBadVersion = 1; // We take the first bad version as 1

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
             // Defining pivot, 
             // so we are starting from the middle
             // of the versions provided

            if (isBadVersion(mid)) { // Checking if our pivot is bad
                end = mid - 1; 
                // getting rid of the versions
                // after our pivot version
                lastBadVersion = mid;
                // assigining the pivot as last bad version
            } else { 
                // if pivot was not bad,
                start = mid + 1; 
                // getting rid of
                // versions before pivot
            }
        }

        return lastBadVersion;
    };
};
```