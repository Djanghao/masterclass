# Recursive method to find twoSum of BST

**Author:** Akromium
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2681001/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/2681001/)

---

```
class Solution {
    func findTarget(_ root: TreeNode?, _ k: Int) -> Bool {
        var set = Set<Int>()      // create a set to store the values
        return find(root, k, &set)          // call the helper function
    }
}

func find(_ root: TreeNode?, _ k: Int, _ set: inout Set<Int>) -> Bool {
    guard let root = root else { return false } // if the root is nil, return false
    if set.contains(k - root.val) {             // if the set contains the difference between k and the root value, return true
        return true                             // because we found the pair
    }   
    set.insert(root.val)                        // insert the root value into the set
    return find(root.left, k, &set) || find(root.right, k, &set) // call the helper function on the left and right subtrees
}
}
```