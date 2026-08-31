# [Typescript][Javascript] O(N) DFS Solution NO SORTING

**Author:** lolimdumbwataboutu
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4526127/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/4526127/)

---

# Complexity
- Time complexity: O(N) we travel to each node only once
- Space complexity: O(N) for the stack space
# Code
```
function diameter(root: Node): number {
    let max = 0;
    dfs(root);
    return max;

    function dfs(node: Node) {
        if (node.children.length === 0) return 0;

        let first = 0, second = 0;
        for (const child of node.children) {
            const len = 1 + dfs(child);
            if (len >= first) {
                second = first;
                first = len;
            } else if (len > second) {
                second = len;
            }
        }

        max = Math.max(first + second, max);
        return first;
    } 
};
```