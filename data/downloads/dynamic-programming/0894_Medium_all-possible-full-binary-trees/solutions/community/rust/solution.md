# O(2^n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-possible-full-binary-trees/solutions/5518922/](https://leetcode.com/problems/all-possible-full-binary-trees/solutions/5518922/)

---

# Complexity
- Time complexity:$$O(2^n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
final class Solution {
    private final Map<Integer, List<TreeNode>> dp = new HashMap<>();
    public List<TreeNode> allPossibleFBT(final int n) {return bk(n);}
    private List<TreeNode> bk(final int n){
        if(n % 2 == 0) return List.of();
        if(n == 1) return List.of(new TreeNode(0));
        if (dp.containsKey(n)) return dp.get(n);
        final List<TreeNode> res = new ArrayList<>();
        for(int l = 0; l < n; l++){
            final var r = n - 1 - l;
            final var lt = bk(l);
            final var rt = bk(r);
            lt.forEach(a -> rt.forEach(b -> res.add(new TreeNode(0, a, b))));
        }dp.put(n, res);
        return res;
    }
}
```
``` python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        dp = {}
        def bk(n: int) -> List[Optional[TreeNode]]:
            match(n):
                case _ if n % 2 == 0: return []
                case 1: return [TreeNode(0)]
                case _: 
                    if n in dp: return dp[n]
                    res = []
                    for l in range(n):
                        r = n - 1 - l
                        lt, rt = bk(l), bk(r)
                        for t1 in lt: 
                            for t2 in rt: res.append(TreeNode(0, t1, t2))
                    dp[n] = res
                    return res
        return bk(n)
```
``` rust []
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::{rc::Rc, cell::RefCell, collections::HashMap};
type T = Option<Rc<RefCell<TreeNode>>>;
macro_rules! treeNode {
    () => { Some(Rc::new(RefCell::new(TreeNode::new(0)))) };
    ($a:expr, $b:expr) => { Some(Rc::new(RefCell::new(TreeNode { val: 0, left: $a, right: $b, })))};
}
impl Solution {
    pub fn all_possible_fbt(n: i32) -> Vec<T> {
        fn bk(n: i32, dp: &mut HashMap<i32, Rc<Vec<T>>>) -> Rc<Vec<T>> {
            match n {
                0 => dp.get(&0).unwrap().clone(),
                1 => dp.get(&1).unwrap().clone(),
                _ if dp.contains_key(&n) => dp.get(&n).unwrap().clone(),
                _ => {
                    let mut res = Vec::new();
                    for l in (1..n).step_by(2) {
                        let r = n - 1 - l;
                        for t1 in bk(l, dp).iter() {
                            for t2 in bk(r, dp).iter() { res.push(treeNode!(t1.clone(), t2.clone())); }
                        }
                    }
                    let res = Rc::new(res);
                    dp.insert(n, res.clone());
                    res
                }
            }
        }
        let result = bk( n, &mut HashMap::from([ (0, Rc::new(Vec::<T>::new())), (1, Rc::new(vec![treeNode!()])), ]));
        Rc::try_unwrap(result).unwrap() 
    }
}
```