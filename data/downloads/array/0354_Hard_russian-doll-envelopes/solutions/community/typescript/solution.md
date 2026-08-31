# Beats 100%, LIS, Binary Search

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/5320728/](https://leetcode.com/problems/russian-doll-envelopes/solutions/5320728/)

---

## Intuition
The problem of finding the maximum number of envelopes that can be Russian dolled is a variant of the longest increasing subsequence (LIS) problem. By sorting the envelopes by width (and by height in descending order for envelopes of the same width), we can transform the problem into finding the LIS based on the height of the envelopes. This approach leverages the fact that we can't nest envelopes with the same width.

## Approach
1. **Sort the Envelopes**: 
   - First, sort the envelopes by width in ascending order. 
   - If two envelopes have the same width, sort them by height in descending order. This sorting ensures that envelopes of the same width are considered in the correct order and can't be nested within each other.
   
2. **Extract Heights**: 
   - After sorting, extract the heights of the envelopes into a separate list.

3. **Find LIS in Heights**:
   - Use a dynamic programming approach with binary search to find the longest increasing subsequence of the heights.
   - Maintain a `dp` array where `dp[i]` indicates the length of the LIS ending at index `i`.
   - Use a `ends` array to keep track of the minimum possible tail value for all increasing subsequences of length `i+1`.

4. **Binary Search for Position**:
   - For each height, perform a binary search on the `ends` array to find the position where the current height can be placed to extend the LIS.
   - Update the `ends` array accordingly and record the LIS length in the `dp` array.

5. **Return Result**: 
   - The maximum value in the `dp` array represents the length of the longest increasing subsequence, which corresponds to the maximum number of envelopes that can be Russian dolled.

## Complexity
- **Time Complexity**: 
  - Sorting the envelopes takes \\(O(n \\log n)\\).
  - Finding the LIS using binary search in the `ends` array takes \\(O(n \\log n)\\).
  - Therefore, the overall time complexity is \\(O(n \\log n)\\).

- **Space Complexity**: 
  - The `ends` array and `dp` array both require \\(O(n)\\) space.
  - Thus, the space complexity is \\(O(n)\\).

# Code
```
function maxEnvelopes(envelopes: number[][]): number {
    const heights = envelopes
        .sort(([wa, ha], [wb, hb]) => wa - wb || hb - ha)
        .map(([, h]) => h);

    const ends: number[] = [];
    const dp = Array<number>(heights.length);
    let max = -Infinity;
    heights.forEach((v, i) => {
        let l = 0;
        let r = ends.length - 1;
        let closest = r + 1;
        while (l <= r) {
            const m = l + ((r - l) >> 1);
            if (ends[m] >= v) {
                closest = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        ends[closest] = v;
        dp[i] = closest + 1;
        max = Math.max(max, dp[i]);
    });

    return max;
}
```