# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/5924160/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/5924160/)

---

# Approach
To solve the problem, think of maximizing how many groups can be served fresh donuts based on the batches available while keeping track of how many donuts of each size you have left. The approach is to count how many groups fit into the batch size, try to pair complementary groups, and then use a depth-first search (DFS) to explore all possible arrangements of serving the remaining groups.

# Complexity
- Time complexity:
O(N * B), where N is the number of groups and B is the batch size, because we explore each group and each possible batch size combination. 

- Space complexity:
O(B), as we use a map to store states based on the count of group sizes.

# Code
```typescript []
function maxHappyGroups(batchSize: number, groups: number[]): number {
    // Create a memoization map to store results for specific counts of groups
    const dp = new Map<string, number>();

    // Depth-first search function to calculate the maximum happy groups
    function dfs(cnt: number[], left: number): number {
        // Create a unique key for the current count array to use in memoization
        const key = cnt.toString();

        // If the result for this key is already computed, return it
        if (dp.has(key)) {
            return dp.get(key)!; // Non-null assertion as we know it exists
        }

        let res = 0; // Variable to store the result of this state

        // Iterate through the counts of groups
        for (let j = 1; j < batchSize; ++j) {
            // If there are groups of this size remaining
            if (cnt[j] > 0) {
                --cnt[j]; // Decrease the count of this group size
                // Calculate the new result by considering the current group
                res = Math.max(res, (left === 0 ? 1 : 0) + dfs(cnt, (batchSize + left - j) % batchSize));
                ++cnt[j]; // Restore the count back
            }
        }

        // Store the computed result in the memoization map
        dp.set(key, res);
        return res; // Return the result for this state
    }

    // Initialize the counts of groups for each remainder
    const cnt = new Array(batchSize).fill(0);
    let res = 0; // Count of happy groups initially

    // Process each group to fill the counts
    for (const group of groups) {
        if (group % batchSize === 0) {
            // If the group size is exactly divisible by batch size, it's a happy group
            ++res;
        } else if (cnt[batchSize - group % batchSize] > 0) {
            // If there is a complementary group size, pair them
            --cnt[batchSize - group % batchSize];
            ++res;
        } else {
            // Otherwise, add to the count of this group size
            ++cnt[group % batchSize];
        }
    }

    // Return the total happy groups from the DFS and initial counts
    return dfs(cnt, 0) + res;
}



```