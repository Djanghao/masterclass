# Typescript | Inorder Traversal + Reduce | O(h) memory

**Author:** jkalmeij
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1964898/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1964898/)

---

Basic idea: 

Inorder traversal on binary tree should give a sorted traversal.
But since two elements are swapped, we compare `prev` and `n` checking for non-sortedness.
It is possible we identify only a single instance of non-sortedness, in which case a child and parent need to be swapped.
It is also possible we identify two instances of non-sortedness, in which case two siblings need to be swapped.

```typescript
function recoverTree(root: TreeNode | null): void {
    function* inOrder(root: TreeNode): Iterable<TreeNode> {
        if (root == null) return
        yield* inOrder(root.left)
        yield root
        yield* inOrder(root.right)
    }
    
    // javascript stdlib doesn't allow reduce on iterables :/
    function reduce<A, B>(xs: Iterable<A>, f: (acc: B, v: A) => B, z: B): B {
        for (let x of xs) z = f(z, x)
        return z
    }

    var [a, b, _] = reduce(inOrder(root), ([a, b, prev], n) => {
        if (prev == null || n.val > prev.val) return [a, b, n]
        if (a == null) return [prev, n, prev]
        return [a, n, prev]
    }, [null, null, null]); // https://2ality.com/2011/05/semicolon-insertion.html

    [a.val, b.val] = [b.val, a.val]
}
```