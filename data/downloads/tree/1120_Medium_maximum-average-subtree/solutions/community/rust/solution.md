# Postorder Traversal, Recursive

**Author:** idiotleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/4205064/](https://leetcode.com/problems/maximum-average-subtree/solutions/4205064/)

---

Solution - [github](https://github.com/idiotleon/lc_soln_rust_leon/tree/main/src/leetcode/lvl2/lc1120)

<b>Problem List</b>
#Postorder - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_algorithm/search/depth_first_search/by_data_structure/tree/traversal/recursive/traversal_postorder_recursive.txt)
#Subtree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_data_structure/tree/by_topic/subtree.txt)
#Tree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_data_structure/tree)
#DFS - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/search/depth_first_search)
#DFS-Tree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/search/depth_first_search/by_data_structure/tree)

```
use std::rc::Rc;
use std::cell::RefCell;

/// @author: Leon
/// https://leetcode.com/problems/maximum-average-subtree/
/// Time Complexity:    O(N)
/// Space Complexity:   O(H)
impl Solution {
    pub fn maximum_average_subtree(root: Option<Rc<RefCell<TreeNode>>>) -> f64 {
        let mut largest: f64 = 0.0;
        Self::postorder(root, &mut largest);
        return largest;
    }
    fn postorder(node: Option<Rc<RefCell<TreeNode>>>, largest: &mut f64) -> (u32, u32){
        if node.is_none(){
            return (0, 0);
        }
        let node = node.unwrap();
        let (left_sum, left_cnt) = Self::postorder(node.borrow().left.clone(), largest);
        let (right_sum, right_cnt) = Self::postorder(node.borrow().right.clone(), largest);
        let sum = left_sum + right_sum + node.borrow().val as u32;
        let cnt = left_cnt + right_cnt + 1;
        let average = (sum as f64) / (cnt as f64);
        *largest = (*largest).max(average);
        return (sum, cnt);
    }
}
```