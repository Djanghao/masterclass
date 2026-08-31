# Simple Stack Solution

**Author:** lilyx998
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3725351/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3725351/)

---

# Intuition
Use a stack to simulate the tree traversal.

# Approach

Push the root node in first. Then, iteratively:

1. When facing a new edge, if the parent is not at the top of the stack, pop off the stack;
1. If the stack becomes empty, that means this is an invalid Preorder;
1. Push the node in;

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  fun isPreorder(nodes: List<List<Int>>): Boolean {
    val st = Stack<Int>()
    if (nodes[0][1] != -1)
      return false;
    st.push(nodes[0][0])
    for (i in 1 until nodes.size) {
      val (me, par) = nodes[i]
      while (st.isNotEmpty() && st.peek() != par)
        st.pop()
      if (st.isEmpty()) return false
      st.push(me)
    }
    return true
  }
}
```