# [Typescript] Time: O(NlogN) | Space:  O(N) | No Heap Needed

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4011757/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/4011757/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

This approach is similar to "Approach 4: Optimal Merge Pattern" in the editorial and achieves the same time / space complexity. 

However, Priority Queues / Heaps are not built-in to Javascript. A queue (array) is used instead.

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Typescript
// Time: O(NlogN)
// Space: O(N)
function minBuildTime(blocks: number[], split: number): number {

    // Check input
    let N = blocks.length;
    if (N < 1) {
        return 0;
    }
    
    // Time: O(NlogN)
    // Space: O(logN)
    blocks.sort((a, b) => b - a);

    // Time: O(N)
    // Space: O(N)
    while (N > 1) {
        N -= 2;
        blocks.pop();
        const q = [blocks.pop() + split];
        let i = 0;
        let M = 1;
        do {
            if (N > 1 && q[i] >= blocks[N-2]) {
                N -= 2;
                blocks.pop();
                M = q.push(blocks.pop() + split);
            } else if (N > 0 && q[i] >= blocks[N-1]) {
                N -= 1;
                blocks.pop();
                M = q.push(q[i++] + split);
            } else {
                N = blocks.push(q[i++]);
            }
        } while (i < M);
    }

    return blocks[0];
};
```