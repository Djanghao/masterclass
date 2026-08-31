# Easy || 0 ms || 100% || Fully Explained || (Java, C++, Python, JS, C, Python3)

**Author:** PratikSen07
**Votes:** 114
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2428167/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/2428167/)

---

We need to keep track of two things:
	**1. Any node should have smaller elements as left children and vice versa for right children... 
	2. The BST should be Height Balanced...**
Note, A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one...
# **Java Solution:**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 43 MB, less than 82.54% of Java online submissions for Convert Sorted Array to Binary Search Tree.
```
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        // Base condition...
        if (nums.length == 0)
			return null;
        // Call the function recursively...
		return sortedArrayToBST(nums, 0, nums.length - 1);
	}
    // Create another function which will convert any particular range of given nums array...
    // & return its corresponding BST root node....
	public TreeNode sortedArrayToBST(int[] nums, int beg, int end) {
        // If beg > end, return NULL, as we receive a wrong range...
		if (beg > end)
			return null;
        // set the middle node...
		int mid = (beg + end) / 2;
        // Initialise root node with value same as nums[mid]...
		TreeNode root = new TreeNode(nums[mid]);
        // Assign left subtrees as the same function called on left subranges...
		root.left = sortedArrayToBST(nums, beg, mid - 1);
        // Assign right subtrees as the same function called on right subranges...
		root.right = sortedArrayToBST(nums, mid + 1, end);
        // Return the root node...
		return root;
    }
}
```

# **C++ Solution:**
Runtime: 5 ms, faster than 89.56% of C++ online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 13.1 MB, less than 87.25% of C++ online submissions for Convert Sorted Array to Binary Search Tree.
```
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        // Base condition...
        if (nums.size() == 0)
			return NULL;
        // Call the function recursively...
		return sortedArrayToBST(nums, 0, nums.size() - 1);
    }
    // Create another function which will convert any particular range of given nums array...
    // & return its corresponding BST root node....
	TreeNode* sortedArrayToBST(vector<int>& nums, int beg, int end) {
        // If beg > end, return NULL, as we receive a wrong range...
		if (beg > end)
			return NULL;
        // If beg == end, return a new node having value same as nums[beg]... 
        if(beg == end)
            return new TreeNode(nums[beg]);
        // set the middle node...
		int mid = (beg + end) / 2;
        // Initialise root node with value same as nums[mid]
		TreeNode* root = new TreeNode(nums[mid]);
        // Assign left subtrees as the same function called on left subranges...
		root->left = sortedArrayToBST(nums, beg, mid - 1);
        // Assign right subtrees as the same function called on right subranges...
		root->right = sortedArrayToBST(nums, mid + 1, end);
        // Return the root node
		return root;
    }
};
```

# **Python Solution:**
```
class Solution(object):
    def sortedArrayToBST(self, nums):
        # Base condition...
        if len(nums) == 0:
            return None
        # set the middle node...
        mid = len(nums)//2
        # Initialise root node with value same as nums[mid]
        root = TreeNode(nums[mid])
        # Assign left subtrees as the same function called on left subranges...
        root.left = self.sortedArrayToBST(nums[:mid])
        # Assign right subtrees as the same function called on right subranges...
        root.right = self.sortedArrayToBST(nums[mid+1:])
        # Return the root node...
        return root
```
        
# **JavaScript Solution:**
```
var sortedArrayToBST = function(nums) {
    // Call the function recursively...
	return ConvToBST(nums, 0, nums.length - 1);
}
// Create a function which will convert any particular range of given nums array...
// & return its corresponding BST root node....
var ConvToBST = function(nums, beg, end) {
    // If beg > end, return NULL, as we receive a wrong range...
	if (beg > end)
		return null;
    // set the middle node...
	var mid = Math.ceil((beg + end) / 2);
    // Initialise root node with value same as nums[mid]...
	var root = new TreeNode(nums[mid]);
    // Assign left subtrees as the same function called on left subranges...
	root.left = ConvToBST(nums, beg, mid - 1);
    // Assign right subtrees as the same function called on right subranges...
	root.right = ConvToBST(nums, mid + 1, end);
    // Return the root node...
	return root;
};
```

# **C Language:**
```
struct TreeNode* ConvToBST(int *nums, int beg, int end){
    if(end < beg)
        return NULL ;
    int mid = (beg + end)/2 ;
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->val = nums[mid];
    root->left = ConvToBST(nums, beg, mid-1);
    root->right = ConvToBST(nums, mid+1, end);
    return root;
}
struct TreeNode* sortedArrayToBST(int* nums, int numsSize){
    if(numsSize <= 0)
        return NULL;
    else
        return ConvToBST(nums, 0, numsSize-1);
}
```

# **Python3 Solution:**
```
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        # Base condition...
        if len(nums) == 0:
            return None
        # set the middle node...
        mid = len(nums)//2
        # Initialise root node with value same as nums[mid]
        root = TreeNode(nums[mid])
        # Assign left subtrees as the same function called on left subranges...
        root.left = self.sortedArrayToBST(nums[:mid])
        # Assign right subtrees as the same function called on right subranges...
        root.right = self.sortedArrayToBST(nums[mid+1:])
        # Return the root node...
        return root
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**