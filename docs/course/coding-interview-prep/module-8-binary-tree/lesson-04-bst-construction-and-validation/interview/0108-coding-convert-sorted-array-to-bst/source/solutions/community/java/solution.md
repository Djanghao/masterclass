# ✅Java Solution || Recursion || 0ms 100% Faster 🔥🔥🔥 || Beginner Friendly

**Author:** ganajayant
**Votes:** 287
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2404676/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2404676/)

---

**If you really found my solution helpful please upvote it, as it motivates me to post such kind of codes and help the coding community, if you have some queries or some improvements please feel free to comment and share your views.**
```
    public TreeNode sortedArrayToBST(int[] nums) {
        return CreateBST(nums, 0, nums.length - 1);
    }

    private TreeNode CreateBST(int nums[], int l, int r) {
        if (l > r) { // Base Condition or Recursion Stoping Condition
            return null;
        }
        // so basically in this question we have to convert sorted array to height
        // balanced tree
        // so if we directly create tree in given sorted order it will become linked
        // list
        // so we have to take middle element as head value such it will become height
        // balanced tree
        int mid = l + (r - l) / 2; // this is the formula to find mid value
        TreeNode root = new TreeNode(nums[mid]); // mid value or median
        root.left = CreateBST(nums, l, mid - 1); // assign the value for left of subtree that is l to mid -1 for given
                                                 // array
        root.right = CreateBST(nums, mid + 1, r); // assign the value for right go subtree that is mid+1 to r for given
                                                  // array
        return root;
    }
```