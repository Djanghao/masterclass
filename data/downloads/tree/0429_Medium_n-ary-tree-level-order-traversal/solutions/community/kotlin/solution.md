# ✔ Beat 100% || Easy Understandable || Explained

**Author:** coder481
**Votes:** 10
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532277/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532277/)

---

**Java**
```
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> res = new ArrayList<>();
        solve(root, 0, res);
        return res;
    }
    
    private void solve(Node root, int level, List<List<Integer>> res){
        if(root == null) return;
        
        // When found a new level, add a new list
        if(level >= res.size())
            res.add(new ArrayList<>());
        
        // Add node in the list at the related level
        res.get(level).add(root.val);
        
        // Traverse all the children
        for(Node n : root.children)
            solve(n, level+1, res);
    }
}
```

**Kotlin**
```
class Solution {
    fun levelOrder(root: Node?): List<List<Int>> {
        val res : MutableList<MutableList<Int>> = mutableListOf()
        solve(root,0,res)
        return res
    }
    
    private fun solve(root:Node?, level:Int, res:MutableList<MutableList<Int>>){
        root?.let{
            
            // When found a new level, add a new list
            if(level>=res.size)
                res.add(mutableListOf<Int>())
            
            // Add node in the list at the related level
            res[level].add(it.`val`)
            
            // Traverse all the children
            it.children.forEach{ n ->
                solve(n,level+1,res)
            }
        }
    }
}
```