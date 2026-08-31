# [Python] TC O(1) SC O(h) Generator Solution

**Author:** zayne-siew
**Votes:** 67
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/1965156/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/1965156/)

---

### Explanation

One way to only use O(h) space is to utilise a generator for our inorder traversal. We can implement it as such:

```python
def inorder(node: Optional[TreeNode]) -> Generator[int, None, None]:
    """
    Generator function that takes the root node of a binary tree
    and iterates through the nodes of the tree via inorder traversal.
    @param node - The root node of the binary tree.
    """
    if node:
        yield from inorder(node.left)
        yield node.val
        yield from inorder(node.right)
```

Since a generator does not store the entire inorder traversal in memory, the only space used is effectively the implicit stack used when making recursive calls to the function, which has a maximum recursion depth of `h` (where `h` is the maximum height of the tree).

However, using a generator object alone will not allow us to know whether some nodes in the inorder traversal remain to be traversed (i.e., the `hasNext()` function), since generator objects do not have this functionality. We can overcome this by pre-emptively obtaining and storing the next value in the inorder traversal. Then, `hasNext()` will check whether the next value is valid, whereas `next()` will return the stored value before the *next next* value is obtained.

---

### Solution

```python
class BSTIterator:
    def __init__(self, root: Optional[TreeNode]):
        self.iter = self._inorder(root)
        self.nxt = next(self.iter, None)
    
    def _inorder(self, node: Optional[TreeNode]) -> Generator[int, None, None]:
        if node:
            yield from self._inorder(node.left)
            yield node.val
            yield from self._inorder(node.right)

    def next(self) -> int:
        res, self.nxt = self.nxt, next(self.iter, None)
        return res

    def hasNext(self) -> bool:
        return self.nxt is not None
```

**TC: O(1)**, since the generator object handles everything for us.
EDIT: Amortised O(1), see [this comment](https://leetcode.com/problems/binary-search-tree-iterator/discuss/1965156/Python-TC-O(1)-SC-O(h)-Generator-Solution/1358785) for a simple explanation.
**SC: O(h)**, due to the implicit recursive call stack used by the generator function.

---

Please upvote if this has helped you! Appreciate any comments as well :)