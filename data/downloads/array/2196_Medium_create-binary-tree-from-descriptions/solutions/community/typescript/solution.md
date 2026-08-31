# Typescript - Map + DFS based approach

**Author:** ICodeBad
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5515098/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5515098/)

---

# Code
```
 type Node = {
    root: TreeNode | null
    left: TreeNode | null
    right: TreeNode | null
    parent: number | null
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const map: Record<number, Node> = {}
    let root: TreeNode | null = null

    const findRoot = (map: Record<number, Node>, key: number) => {
        if(!map[key]) return

        root = map[key].root
        return findRoot(map, map[key].parent)
    }

    for(let i = 0; i < descriptions.length; i++) {
        const key = descriptions[i][0]
        const childKey = descriptions[i][1]
        const isLeft = descriptions[i][2] == 1

        if(!map[key]) map[key] = { root: new TreeNode(key), left: null, right: null, parent: null }
        
        const root = map[key].root
        const child = !map[childKey] ? new TreeNode(childKey) : map[childKey].root

        if(isLeft) {
            root.left = child
            map[key].left = child
        }
        else { 
            root.right = child
            map[key].right = child
        }

        map[key].root = root

        if(!map[child.val]) map[child.val] = { root: child, left: null, right: null, parent: -1 }
        map[child.val].parent = root.val
    }

    const firstKey: number = Number(Object.keys(map)[0])
    root = map[firstKey].root

    findRoot(map, firstKey)
    return root
};
```