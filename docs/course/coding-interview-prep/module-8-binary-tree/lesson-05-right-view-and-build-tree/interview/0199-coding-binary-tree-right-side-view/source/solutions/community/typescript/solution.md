# 4-Line Javascript/Typescript Solution (beats 100%)

**Author:** wentland
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/4292477/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/4292477/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
const rightSideView = (
  root: TreeNode | null,
  answer: number[] = [],
  depth = 0
): number[] => {
  if (!root) return answer;
  answer[depth] = root.val;
  rightSideView(root.left, answer, depth + 1);
  return rightSideView(root.right, answer, depth + 1);
};

```