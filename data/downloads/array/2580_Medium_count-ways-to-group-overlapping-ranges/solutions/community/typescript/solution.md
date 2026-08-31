# Solution in TypeScript ✨🚀💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/5382082/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/5382082/)

---

# Intuition

The problem requires us to group overlapping ranges into two distinct groups and count the number of valid ways to do this. A crucial observation is that if two ranges overlap, they must be in the same group. We can approach this problem by finding all connected components of overlapping ranges and then determining the number of ways to assign these components to two groups.

# Approach

1. **Sort the Ranges**: Start by sorting the ranges based on their start values. This helps in efficiently identifying overlapping ranges.
2. **Find Connected Components**: Traverse through the sorted list and merge overlapping ranges into connected components. A connected component is a group of ranges where every range overlaps with at least one other range in the group.
3. **Count the Ways to Split**: Each connected component can be independently placed in either of the two groups. If we have *c* connected components, the number of ways to assign these components to two groups is *2\u1D9C* .

# Complexity

- **Time Complexity**: ***O(n log n)*** due to the sorting step, where *n* is the number of ranges. Merging the ranges is *O(n)*, making the overall complexity ***O(n log n)***.
- **Space Complexity**: ***O(1)*** for space used, excluding the input and output, as we are sorting the input array in place.

# Code

```typescript
function countWaysToSplitRanges(ranges: number[][]): number {
    const MOD = 1_000_000_007;

    ranges.sort((a, b) => a[0] - b[0]);

    let connectedComponents = 0;
    let i = 0;
    const n = ranges.length;

    while (i < n) {
        connectedComponents++;
        let j = i + 1;
        let maxEnd = ranges[i][1];

        while (j < n && ranges[j][0] <= maxEnd) {
            maxEnd = Math.max(maxEnd, ranges[j][1]);
            j++;
        }

        i = j;
    }

    let result = 1;
    for (let i = 0; i < connectedComponents; i++) {
        result = (result * 2) % MOD;
    }

    return result;
};

```

### Explanation of the Code

1. **Sorting**: The ranges are sorted based on their start values to facilitate the merging of overlapping ranges.
2. **Merging Overlapping Ranges**: We use a while loop to merge overlapping ranges into connected components. Each time we find a new starting range that does not overlap with the previous, we increment the count of connected components.
3. **Counting the Ways**: For each connected component, there are two choices (group 1 or group 2), leading to *2\u1D9C* ways, where *c* is the number of connected components.
4. **Modulo Operation**: Since the result can be very large, we use modulo *10\u2079 + 7* to ensure the result fits within standard integer limits.