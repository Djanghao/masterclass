# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 8
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2010981/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2010981/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public TreeNode sortedArrayToBST(int[] num) {
    if (num.length == 0) {
        return null;
    }
    TreeNode head = helper(num, 0, num.length - 1);
    return head;
}

public TreeNode helper(int[] num, int low, int high) {
    if (low > high) { // Done
        return null;
    }
    int mid = (low + high) / 2;
    TreeNode node = new TreeNode(num[mid]);
    node.left = helper(num, low, mid - 1);
    node.right = helper(num, mid + 1, high);
    return node;
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return helper(nums, 0, nums.size()-1);
    }
    TreeNode* helper(vector<int>& nums, int low,int high){
        if(low<=high){
            int mid = low + (high-low)/2;
            TreeNode* root = new TreeNode(nums[mid]);
            root->left = helper(nums, low, mid-1);
            root->right = helper(nums, mid+1, high);
            return root;
        }
        return NULL;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    # @param num, a list of integers
    # @return a tree node
    # 12:37
    def sortedArrayToBST(self, num):
        if not num:
            return None

        mid = len(num) // 2

        root = TreeNode(num[mid])
        root.left = self.sortedArrayToBST(num[:mid])
        root.right = self.sortedArrayToBST(num[mid+1:])

        return root
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0 || null === nums){
        return null;
    }
    let mid = Math.floor(nums.length/2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1, nums.length));
    return root;
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
fun main() {
  val node = sortedArrayToBST(intArrayOf(-10,-3,0,5,9))
}

fun sortedArrayToBST(nums: IntArray): TreeNode? {
  return buildTree(nums,0,nums.size-1)
}
fun buildTree(nums: IntArray,start:Int,end:Int):TreeNode?{

    if(start>end) return null
    val mid = (start+end)/2
    val node = TreeNode(nums[mid])
    node.left = buildTree(nums,start,mid-1)
    node.right = buildTree(nums,mid+1,end)
    return node
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
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

// Strategy:
// * probably some form of recursion
// * recursion returns the head
// * base case: 
// * if array only has one value, return that value
// * if array is empty, return nil

class Solution {
    func sortedArrayToBST(_ nums: [Int]) -> TreeNode? {
        func createBSTRecursive(_ leftIdx: Int, _ rightIdx: Int) -> TreeNode? {
            if leftIdx > rightIdx {
                return nil
            }
            if leftIdx == rightIdx {
                return TreeNode(nums[leftIdx])
            }
            
            let middleIdx = (leftIdx + rightIdx) / 2
            let val = nums[middleIdx]
            
            let tree = TreeNode(val)
            tree.left = createBSTRecursive(leftIdx, middleIdx - 1)
            tree.right = createBSTRecursive(middleIdx + 1, rightIdx)
            
            return tree
        }
        
        return createBSTRecursive(0, nums.count - 1)
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
