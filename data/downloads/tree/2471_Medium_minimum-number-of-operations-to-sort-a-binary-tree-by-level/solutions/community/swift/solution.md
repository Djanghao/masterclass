# Time Complexity, ~O(N2)

**Author:** HimanshuChowdhary
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/5584855/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/5584855/)

---

# Intuition
find minimum number of swaps required to sort each level of tree

# Approach
1. level order traversal, recursively
2. sort each level by swaping min value in each iteration 

# Complexity
- Time complexity:
~O(N2)

- Space complexity:
~O(N)

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func minimumOperations(_ root: TreeNode?) -> Int {
        // level order traversal of try
        // try to sort using native sorting (minmum will go to front (zero index))
        // count swapping
        guard let root else {return 0}
        var swaps = 0
        levelOrder(array: [root], swaps: &swaps)
        return swaps
    }

    func levelOrder(array: [TreeNode], swaps: inout Int) {
        if array.isEmpty {return}
        // create new array of childs
        var nArray = [TreeNode]()
        var arr = [Int]()
        for node in array {
            if let left = node.left {
                nArray.append(left)
            }
            if let right = node.right {
                nArray.append(right)
            }
            arr.append(node.val)
        }
        // call recursively
        levelOrder(array: nArray, swaps: &swaps)
        // try sorting array and add swaps
        swaps += numberOsSwapsRequired(arr: &arr)
    }

    func numberOsSwapsRequired(arr: inout [Int]) -> Int {
        var s = 0
        for i in 0..<arr.count {
            var k = i, min = arr[i]
            for j in i..<arr.count {
                if min > arr[j] {k = j; min = arr[j]}
            }
            if k != i {
                var val = arr[i]
                arr[i] = arr[k]
                arr[k] = val
                s += 1
            }
        }
        return s
    }
}
```