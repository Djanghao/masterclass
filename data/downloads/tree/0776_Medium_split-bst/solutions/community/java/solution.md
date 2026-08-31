# JAVA | EASY UNDERSTAND

**Author:** CrackItSean
**Votes:** 3
**Link:** [https://leetcode.com/problems/split-bst/solutions/1948064/](https://leetcode.com/problems/split-bst/solutions/1948064/)

---

The solution from leetcode is amazing. But I don't think I can give such a clean code during an interview.
My solution is simple. Split the tree into two lists, then build two trees from the lists.


```
class Solution {
    public TreeNode[] splitBST(TreeNode root, int target) {
        List<TreeNode> smalls=new ArrayList();
        List<TreeNode> bigs=new ArrayList();
        split(root,target,smalls,bigs);
        TreeNode[] res=new TreeNode[2];
        res[0]=parse(smalls);
        res[1]=parse(bigs);
        return res;
    }
    
    private void split(TreeNode root,int target,List<TreeNode> smalls,List<TreeNode> bigs){
        if(root==null){
            return;
        }
        if(root.val<=target){
            smalls.add(root);
            TreeNode right=root.right;
            root.right=null;
            split(right,target,smalls,bigs);
        }else{
            bigs.add(root);
            TreeNode left=root.left;
            root.left=null;
            split(left,target,smalls,bigs);
        }
    }
    
    private TreeNode parse(List<TreeNode> list){
        if(list.isEmpty()){
            return null;
        }
        TreeNode root=list.get(0);
        for(int i=1;i<list.size();i++){
            TreeNode node=list.get(i);
            combine(root,node);
        }
        return root;
    }
    
    private void combine(TreeNode root,TreeNode node){
        if(node.val>root.val){
            if(root.right==null){
                root.right=node;
            }else{
                combine(root.right,node);
            }
        }else {
            if(root.left==null){
                root.left=node;
            }else{
                combine(root.left,node);
            }
        }
    }
}
```