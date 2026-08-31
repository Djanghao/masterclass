# typescript memoization solution 100%/100% - w/ comments

**Author:** carti
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/835056/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/835056/)

---

```
// map for memoization
const memo: Map<number, Array<TreeNode | null>> = new Map();

function allPossibleFBT(N: number): Array<TreeNode | null> {
    // all possible tree nodes
    const trees: Array<TreeNode | null> = [];

    // check if N is even (we cannot return any trees satisfying this condition)
    if (N % 2 === 0) return trees;
    // check memo
    if (memo.has(N)) return memo.get(N)!;
    // if N is just 1 (just add a treenode and return)
    if (N === 1) {
        trees.push(new TreeNode(0));
        return trees;
    }

    // decrement N (since we handled this level)
    N--;

    // go from 0 to N
    for (let i = 0; i < N; i++) {
        // calculate left and right possible trees
        const left: Array<TreeNode | null> = allPossibleFBT(i);
        const right: Array<TreeNode | null> = allPossibleFBT(N - i);

        // iterate through children of both subtrees
        for (let l of left) {
            for (let r of right) {
                // create node
                const cur: TreeNode = new TreeNode(0);
                cur.left = l;
                cur.right = r;

                // add to trees list
                trees.push(cur);
            }
        }
    }

    // store the trees calculated for this level
    memo.set(N, trees);

    return trees;
}
```
