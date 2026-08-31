# C++/Java/Python/Rust Solution using BST Property Approach

**Author:** rpn2eax
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/4534869/](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/solutions/4534869/)

---

# Intuition
**Basic BST Properties**

---

# Approach
Whenever you encounter a null, it can also be a BST. Set it's min value as INT_MAX, max value as INT_MIN to simultaneously update the parents and ancestors. 
When you encounter a node that doesn't follows the property of BST. Mark Invalid by setting ISBST as false and max and min as INT_MAX and INT_MIN so that no further nodes can interfere between them and their ancestors will also be set Invalid.
If you encounter a valid node, then take the sum and maximize ans accordingly.


---

# Complexity
- Time complexity: O(No. of nodes) + O(Setting node as Valid / Invalid)

- Space complexity: O(log(No. of nodes)) in a Binary Tree whereas O(No. of nodes) in a skewed tree


---



# Code
```C++ []
struct T {
  bool isBST;
  int max;
  int min;
  int sum;
  T() : isBST(false) {}
  T(bool isBST, int max, int min, int sum)
      : isBST(isBST), max(max), min(min), sum(sum) {}
};

class Solution {
 public:
  int maxSumBST(TreeNode* root) {
    int ans = 0;
    traverse(root, ans);
    return ans;
  }

 private:
  T traverse(TreeNode* root, int& ans) {
    if (root == nullptr)
      return T(true, INT_MIN, INT_MAX, 0);

    const T left = traverse(root->left, ans);
    const T right = traverse(root->right, ans);

    if (!left.isBST || !right.isBST)
      return T();
    if (root->val <= left.max || root->val >= right.min)
      return T();

    // The `root` is a valid BST.
    const int sum = root->val + left.sum + right.sum;
    ans = max(ans, sum);
    return T(true, max(root->val, right.max), min(root->val, left.min), sum);
  }
};
```
```Java []
class T {
  public boolean isBST;
  public Integer max;
  public Integer min;
  public Integer sum;
  public T() {
    this.isBST = false;
    this.max = null;
    this.min = null;
    this.sum = null;
  }
  public T(boolean isBST, int max, int min, int sum) {
    this.isBST = isBST;
    this.max = max;
    this.min = min;
    this.sum = sum;
  }
}

class Solution {
  public int maxSumBST(TreeNode root) {
    traverse(root);
    return ans;
  }

  private int ans = 0;

  private T traverse(TreeNode root) {
    if (root == null)
      return new T(true, Integer.MIN_VALUE, Integer.MAX_VALUE, 0);

    T left = traverse(root.left);
    T right = traverse(root.right);

    if (!left.isBST || !right.isBST)
      return new T();
    if (root.val <= left.max || root.val >= right.min)
      return new T();

    // The `root` is a valid BST.
    final int sum = root.val + left.sum + right.sum;
    ans = Math.max(ans, sum);
    return new T(true, Math.max(root.val, right.max), Math.min(root.val, left.min), sum);
  }
}
```
```Python []
class T:
  def __init__(self, isBST: bool = False,
               max: Optional[int] = None,
               min: Optional[int] = None,
               sum: Optional[int] = None):
    self.isBST = isBST
    self.max = max
    self.min = min
    self.sum = sum


class Solution:
  def maxSumBST(self, root: Optional[TreeNode]) -> int:
    self.ans = 0

    def traverse(root: Optional[TreeNode]) -> T:
      if not root:
        return T(True, -math.inf, math.inf, 0)

      left: T = traverse(root.left)
      right: T = traverse(root.right)

      if not left.isBST or not right.isBST:
        return T()
      if root.val <= left.max or root.val >= right.min:
        return T()

      # The `root` is a valid BST.
      summ = root.val + left.sum + right.sum
      self.ans = max(self.ans, summ)
      return T(True, max(root.val, right.max), min(root.val, left.min), summ)

    traverse(root)
    return self.ans
```
```Rust []

use std::rc::Rc;
use std::cell::RefCell;
struct T { is_bst: bool, mx: i32, mn: i32, sm: i32 }
impl T{
    fn new(is_bst: bool, mx: i32, mn: i32, sm: i32) -> T{
        T { is_bst, mx, mn, sm }
    }
}

impl Solution {
    pub fn max_sum_bst(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut ans = 0;
        fn traverse(root: &Option<Rc<RefCell<TreeNode>>>, ans: &mut i32) -> T{
            if root.is_some(){
                    let root_ref = root.as_ref().unwrap().borrow();
                    let left = traverse(&root_ref.left, ans);
                    let right = traverse(&root_ref.right, ans);
                    if !left.is_bst || !right.is_bst{
                        return T::new(false, i32::MAX, i32::MIN, 0);
                    }
                    
                    if root_ref.val <= left.mx || root_ref.val >= right.mn{
                        return T::new(false, i32::MAX, i32::MIN, 0);
                    }

                    let sum = root_ref.val + left.sm + right.sm;
                    *ans = i32::max(*ans, sum);
                    T::new(true, i32::max(root_ref.val, right.mx), i32::min(root_ref.val, left.mn), sum)
                } else{
                    T::new(true, i32::MIN, i32::MAX, 0)
                }
        }
        traverse(&root, &mut ans);
        ans
    }
}
```
