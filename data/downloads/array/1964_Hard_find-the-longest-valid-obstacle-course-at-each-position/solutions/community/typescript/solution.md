# Dynamic programming solution using Binary Search in Typescript.

**Author:** AnaySharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3495740/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3495740/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Idea is to use dynamic programming to build up the lengths of the longest obstacle courses incrementally, using the fact that the longest course that ends with a given obstacle can be constructed by adding that obstacle to the longest course that ends with any previous obstacle that is shorter or the same height.
The bisect function is used to find the correct position to insert each obstacle in dp while maintaining its increasing order.

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize an empty array `dp` of length `n` to store the lengths of the longest obstacle courses that end at each index `i`.
- Initialize an empty array `result` to store the lengths of the longest obstacle courses for each index `i`.
- Iterate through the elements of the input array obstacles from left to right:
    - Use the bisect function to find the index idx in dp where `obstacles[i]` should be inserted while maintaining the increasing order of dp.
    - push the value `idx + 1` in `result` array, since this is the length of the longest obstacle course that ends with `obstacles[i]`.
    - Update `dp[idx]` to `obstacles[i]`, since this obstacle can be used to construct a longer course than any previous obstacle at the same index.
- Return the result array.

# Complexity
- Time complexity: $$O(nlogn)$$

- Space complexity: $$O(n)$$

# Code
```
function bisect(arr: number[], val: number): number {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] <= val) left = mid + 1;
        else right = mid;
    }

    return left;
}

function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const res: number[] = [];
    const dp = Array<number>(obstacles.length + 1);

    for (const obstacle of obstacles) {
        const index = bisect(dp, obstacle);
        res.push(index + 1);
        dp[index] = obstacle;
    }

    return res;
}
```