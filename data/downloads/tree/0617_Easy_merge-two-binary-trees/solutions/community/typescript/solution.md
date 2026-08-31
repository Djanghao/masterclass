# JavaScript and TypeScript stack solution

**Author:** mrkjdy
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/664202/](https://leetcode.com/problems/merge-two-binary-trees/solutions/664202/)

---

The compiled javascript:
```
"use strict";
const mergeTrees = (t1, t2) => {
    if (!t1 || !t2)
        return t1 || t2;
    const stack = Array();
    stack.push([t1, t2]);
    while (stack.length > 0) {
        const pair = stack.pop();
        if (!pair[0] || !pair[1])
            continue;
        pair[0].val += pair[1].val;
        if (!pair[0].left)
            pair[0].left = pair[1].left;
        else
            stack.push([pair[0].left, pair[1].left]);
        if (!pair[0].right)
            pair[0].right = pair[1].right;
        else
            stack.push([pair[0].right, pair[1].right]);
    }
    return t1;
};
```

TypeScript gives us a warning if we don't check if pair is undefined:
```
interface TreeNode {
    val: number;
    left?: TreeNode;
    right?: TreeNode;
}

type MTreeNode = TreeNode | undefined;

const mergeTrees = (t1: MTreeNode, t2: MTreeNode): MTreeNode => {
    if (!t1 || !t2)
        return t1 || t2;

    const stack = Array<[MTreeNode,MTreeNode]>();
    stack.push([t1, t2]);
    while (stack.length > 0) {
        const pair = stack.pop();
        if (!pair)
            break;
        if (!pair[0] || !pair[1])
            continue;
        pair[0].val += pair[1].val;
        if (!pair[0].left)
            pair[0].left = pair[1].left;
        else
            stack.push([pair[0].left, pair[1].left]);
        if (!pair[0].right)
            pair[0].right = pair[1].right;
        else
            stack.push([pair[0].right, pair[1].right]);
    }
    return t1;
}
```