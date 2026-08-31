# Typescript solution | 88ms | DFS

**Author:** weiowengu
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1847368/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solutions/1847368/)

---

```
function longestConsecutive(root: TreeNode | null): number {
    if (!root) return 0;

    return helper(root).max;
};

function helper(root: TreeNode): {
    increaseCumulate: number;
    decreaseCumulate: number;
    max: number;
    val: number;
} {
    if (!root.left && !root.right) {
        return {
            increaseCumulate: 1,
            decreaseCumulate: 1,
            max: 1,
            val: root.val
        };
    }

    const leftConsecutive = root.left ? helper(root.left) : null;
    const rightConsecutive = root.right ? helper(root.right) : null;

    const leftDiff =
        leftConsecutive && Math.abs(root.val - leftConsecutive.val)
            ? root.val - leftConsecutive.val
            : 0;
    const rightDiff =
        rightConsecutive && Math.abs(root.val - rightConsecutive.val)
            ? root.val - rightConsecutive.val
            : 0;

    const trendDiff = leftDiff === 1 && rightDiff === -1 || leftDiff === -1 && rightDiff === 1;

    const leftIncreaseCumulate =
        (leftConsecutive?.increaseCumulate ?? 0) ;
    const rightIncreaseCumulate =
        (rightConsecutive?.increaseCumulate ?? 0);

    const leftDecreaseCumulate =
        (leftConsecutive?.decreaseCumulate ?? 0);
    const rightDecreaseCumulate =
        (rightConsecutive?.decreaseCumulate ?? 0);

    let rootIncreaseCumulate = 1;

    let rootDecreaseCumulate = 1;
    
    if (leftDiff === 1) {
        rootIncreaseCumulate = leftIncreaseCumulate;
    } else if (leftDiff === -1) {
        rootDecreaseCumulate = leftDecreaseCumulate;
    }

    if (rightDiff === 1) {
        rootIncreaseCumulate = rightIncreaseCumulate;
    } else if (rightDiff === -1) {
        rootDecreaseCumulate = rightDecreaseCumulate;
    }
    
     if (leftDiff === rightDiff && leftDiff == 1) {
        rootIncreaseCumulate = Math.max(
            leftIncreaseCumulate,
            rightIncreaseCumulate
        );
    } else if (leftDiff === rightDiff && leftDiff == -1) {
        rootDecreaseCumulate = Math.max(
            leftDecreaseCumulate,
            rightDecreaseCumulate
        );
    }

    if (leftDiff === 1 || rightDiff === 1) {
        rootIncreaseCumulate++;
    }

    if (leftDiff === -1 || rightDiff === -1) {
        rootDecreaseCumulate++;
    }
    
    const rootConsecutive = {
        val: root.val,
        increaseCumulate: rootIncreaseCumulate,
        decreaseCumulate: rootDecreaseCumulate,
        max: Math.max(
            rootIncreaseCumulate,
            rootDecreaseCumulate,
            leftConsecutive?.max ?? 0,
            rightConsecutive?.max ?? 0,
            trendDiff ? rootIncreaseCumulate + rootDecreaseCumulate - 1 : 0
        ),
    };

    return rootConsecutive;
}
```