# Bottom-up vs. Top-down

**Author:** votrubac
**Votes:** 89
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/231102/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/231102/)

---

#### Bottom-up
> This solution was initially accepted, but it now gives wrong answer for a test case added later. The second solution works properly. 

Traverse the tree, building up the string in the reverse order. Return the value when we find a leaf; track the smalest string of left and right subtrees.

The trick here is to ignore non-leaf nodes with one child. To do that, we can return "|", which is larger than 'z'. 

Also thanks [@Ninja_fz](https://leetcode.com/Ninja_fz) for simplifying my original solution!
**C++**
```cpp
string smallestFromLeaf(TreeNode* r) {
  if (r == nullptr) 
      return "|";
  auto s = string(1, 'a' + r->val);
  return r->left == r->right ? s : min(smallestFromLeaf(r->left) + s, smallestFromLeaf(r->right) + s);
}
```
As [@jamesPB](https://leetcode.com/jamespb/) noted below, the bottom-up approach is accepted but it does not work for case like this:
```
[25, 1, null, 0, 0, 1, null, null, null, 0]
```
#### Bottom-up
So, it looks like we do need to use a top-down approach instead
**C++**
```cpp
string smallestFromLeaf(TreeNode* r, string s = "") {
    s = string(1, 'a' + r->val) + s;
    return r->left == r->right ? s : min(r->left ? smallestFromLeaf(r->left, s) : "|", 
        r->right ? smallestFromLeaf(r->right, s) : "|");
}
```