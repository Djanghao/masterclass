# Generator Functions  | Stack

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/6128304/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/6128304/)

---

```javascript []
class BSTIterator {
  constructor(root) {
    this.values = [];
    this.pos = -1;
    this.iter = this.#inorder(root);
  }

  *#inorder(node) {
    const stack = [];
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      node = stack.pop();
      yield node.val;
      node = node.right;
    }
  }

  hasNext() {
    if (this.pos + 1 < this.values.length) return true;
    const next = this.iter.next();
    if (!next.done) {
      this.values.push(next.value);
      return true;
    }
    return false;
  }

  next() {
    return this.hasNext() && this.values[++this.pos]
  }

  hasPrev() {
    return this.pos > 0;
  }

  prev() {
    return this.values[--this.pos];
  }
}
```