# [PHP, JavaScript, Swift] Stacks, faster 100%, O(1) time, O(h) space, explained

**Author:** rozinko
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/966100/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/966100/)

---

I use `parents` array to save stack of active nodes.
`Init()` set a smallest element as active (left, left, left,... element).
On call `next()` i get last element from `parents`, delete it, return `val` of it, and change active stack to next element of tree. If deleted element has right childrens, it's new active next elements. Else we do nothing,  because we turn to parent elements in `parents` array yet.
`hasNext()` show has stack for new next element or not - it's `parents` length.

And code..

**PHP:**
```
class BSTIterator
{
    private $parents = [];

    function __construct($root)
    {
        while ($root) {
            $this->parents[] = $root;
            $root = $root->left;
        }
    }

    function next()
    {
        $cur = array_pop($this->parents);
        $val = $cur->val;
        if ($cur->right) {
            $cur = $cur->right;
            while ($cur) {
                $this->parents[] = $cur;
                $cur = $cur->left;
            }
        }
        return $val;
    }

    function hasNext()
    {
        return count($this->parents) > 0;
    }
}
```
**JavaScript:**
```
var BSTIterator = function (root) {
    this.parents = []

    while (root) {
        this.parents.push(root)
        root = root.left
    }
};

BSTIterator.prototype.next = function () {
    let cur = this.parents.pop()
    const val = cur.val
    if (cur.right) {
        cur = cur.right
        while (cur) {
            this.parents.push(cur)
            cur = cur.left
        }
    }
    return val
};

BSTIterator.prototype.hasNext = function () {
    return this.parents.length > 0
};
```
**Swift:**
```
class BSTIterator {
     var parents: [TreeNode?] = []

     init(_ root: TreeNode?) {
         var root = root

         while root != nil {
             self.parents.append(root)
             root = root?.left
         }
     }

     func next() -> Int {
         var cur = self.parents.removeLast()
         let val = cur!.val
         if (cur?.right != nil) {
             cur = cur!.right
             while cur != nil {
                 self.parents.append(cur)
                 cur = cur?.left
             }
         }
         return val
     }

     func hasNext() -> Bool {
         return !self.parents.isEmpty
     }
 }
```

**Thanks and upvote!**