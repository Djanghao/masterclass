# Java - 0ms solution - faster than 100%

**Author:** shilpa1995gupta
**Votes:** 28
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/893661/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/893661/)

---

class Solution {
    
    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
        
        List<Integer> res = new ArrayList<Integer>();
        if(root == null)
            return res;
        
        //add root.
        res.add(root.val);
        
        //add left boundary
        formLeftBoundary(root.left, res);
        
        //add left leaves
        addLeaves(root.left, res);
        
        //add right leaves
        addLeaves(root.right, res);
        
        //add right boundary
        formRightBoundary(root.right, res);
        
        return res;
    }
    
    private void formLeftBoundary(TreeNode root, List<Integer> res){
        if(root == null)
            return;
        
        if(root.left != null){ //only if value is not null, it should be put to the arraylist.
            res.add(root.val);
            formLeftBoundary(root.left, res);
        } else if(root.right != null){
            res.add(root.val);
            formLeftBoundary(root.right, res);
        }
    }
    
    private void formRightBoundary(TreeNode root, List<Integer> res){
        
        if(root == null)
            return;
        
        if(root.right != null){ //only if value is not null, it should be put to the arraylist.
            formRightBoundary(root.right, res);
            res.add(root.val);
        } else if(root.left != null){
            formRightBoundary(root.left, res);
            res.add(root.val);
        }
    }
    
    private void addLeaves(TreeNode root, List<Integer> res){
        
        if(root == null)
            return;
			
        addLeaves(root.left, res);
        
        if(root.left == null && root.right == null)
            res.add(root.val);
        
        addLeaves(root.right, res);
    }
}