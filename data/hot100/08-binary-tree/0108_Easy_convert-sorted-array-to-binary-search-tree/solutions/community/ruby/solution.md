# Ruby Solution

**Author:** onshop2321
**Votes:** 5
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/4304723/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/4304723/)

---


# Code
```
def sorted_array_to_bst(nums)
    @nums = nums
    binary_search_bst(0, nums.length - 1)    
end

def binary_search_bst(left, right)
    return nil if left > right

    mid = (left + right) / 2

    # preorder traversal
    root = TreeNode.new(@nums[mid])
    root.left = binary_search_bst(left, mid - 1)
    root.right = binary_search_bst(mid + 1, right)

    root
end
```