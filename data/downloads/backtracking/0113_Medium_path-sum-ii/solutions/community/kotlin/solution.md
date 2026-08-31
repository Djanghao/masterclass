# ✔✔ 100% faster 🔥 || Easy Explanation || Backtracking || DFS

**Author:** coder481
**Votes:** 6
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/2616212/](https://leetcode.com/problems/path-sum-ii/solutions/2616212/)

---

**Java**
```
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        dfs(root, targetSum, res, list);
        return res;
    }
    
    private void dfs(TreeNode root, int ts, List<List<Integer>> res, List<Integer> list){
        if(root == null) return;
        
        list.add(root.val);
        
        // Found a leaf node, if targetSum becomes zero after adding leaf node value then a path is found, add the path to the result list
        if(root.left == null && root.right == null){
            if((ts-root.val)==0) res.add(new ArrayList<>(list));
            return;
        }
        
        // Traverse left part(reduce targetSum by node value), and backtrack (by deleting node from list) after completing the left subtree
        if(root.left != null){
            dfs(root.left, ts-root.val, res, list);
            list.remove(list.size()-1);   
        }
        
        
        // Traverse right part and backtrack
        if(root.right != null){
            dfs(root.right, ts-root.val, res, list);
            list.remove(list.size()-1);    
        }
        
    }
}
```

**Kotlin**
```
class Solution {
    fun pathSum(root: TreeNode?, targetSum: Int): List<List<Int>> {
        val res = mutableListOf<List<Int>>()
        val list = mutableListOf<Int>()
        dfs(root,targetSum,list,res)
        return res
    }
    
    private fun dfs(root : TreeNode?, ts : Int, list : MutableList<Int>, res : MutableList<List<Int>>){
        root?.let{
            list.add(root.`val`)
            
            if(root.left==null && root.right==null){
                if((ts-root.`val`)==0) res.add(list.toMutableList())
                return
            }
            
            root.left?.let{
                dfs(root.left, ts-root.`val`, list, res)
                list.removeAt(list.size-1)
            }
            root.right?.let{
                dfs(root.right, ts-root.`val`, list, res)
                list.removeAt(list.size-1)
            }
        }
    }
}
```