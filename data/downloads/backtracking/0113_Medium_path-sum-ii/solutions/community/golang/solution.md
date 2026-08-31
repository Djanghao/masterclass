# Python/JS/GO/C++ O(n) by DFS [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 13
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/1151494/](https://leetcode.com/problems/path-sum-ii/solutions/1151494/)

---

O(n) by DFS

---

**Implementation** by DFS in Python

```
class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
        
        def dfs( node, cur_path, cur_target ):
            
            # base case
            if not node:
                # empty node or empty tree
                return
        
            # general case
            
            # update current path
            cur_path.append( node.val )
            
            # update current target
            cur_target -= node.val
            
            if not node.left and not node.right and cur_target == 0:
                
                # current path is valid with wanted targetSum
				# list is pass-by-reference in Python, so here we have to make a copy of list
                answer.append( cur_path[::] )
                
                # undo selection and go back to previous level
                cur_path.pop()
                return
            
            # solve subproblem in DFS
            dfs(node.left, cur_path, cur_target)
            dfs(node.right, cur_path, cur_target)
            
            # undo selection and go back to previous level
            cur_path.pop()
            return
        
        #------------------------------------------
        answer = []
        
        dfs(root, [], targetSum)
        
        return answer
```

---

Javascript:

```
var pathSum = function(root, targetSum) {
    
    function dfs(node, curPath, curTarget){
        
        // base case
        if( node == null ){
            // empty node or empty tree
            return;
        }
        
        // general case
        
        // update current path
        curPath.push( node.val );
        
        // update current target
        curTarget -= node.val;
        
        if( node.left == null && node.right == null && curTarget == 0 ){
            
            // current path is valid with wanted targetSum
            // array is pass-by-reference in Javascript, so here we have to make a copy of array
            answer.push( curPath.slice() );
            
            // undo selection and go back to previous level
            curPath.pop();
            return;
        }
        
        // solve subproblem in DFS
        dfs( node.left, curPath, curTarget );
        dfs( node.right, curPath, curTarget );

        // undo selection and go back to previous level
        curPath.pop();
        return;
    }
    
    // --------------------------
    
    answer = [];
    dfs(root, [], targetSum);
    return answer;
    
};
```

---

Go:

```
func pathSum(root *TreeNode, targetSum int) [][]int {
    
    
    answer := [][]int{}
    curPath := []int{}
    
    
    var dfs func( *TreeNode, []int, int)
    
    dfs = func(node *TreeNode, curPath []int, curTarget int){
        
        // base case
        if node == nil{
            
            // empty node or empty tree
            return
        }
        
        // general case
        
        // update current path
        curPath = append(curPath, node.Val)

        // update current target
        curTarget -= node.Val
        
        if node.Left == nil && node.Right == nil && curTarget == 0{
            
            curSolution := append([]int{}, curPath...)
            answer = append(answer, curSolution )
            
            // undeo selection and go back to previous level
            curPath = curPath[:len(curPath)-1]
            return
        }
        
        dfs( node.Left, curPath, curTarget )
        dfs( node.Right, curPath, curTarget )
        
        // undeo selection and go back to previous level
        curPath = curPath[:len(curPath)-1]
        return
        
        
    }
    

    dfs( root, curPath, targetSum)
    
    return answer
    
}
```

---

C++:

```
class Solution {
public:
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        vector<int> curPath = {};
        
        dfs(root, curPath, targetSum);
        return answer;
    }
    
private:
    vector<vector<int>> answer;
    void dfs(TreeNode* node, vector<int>& curPath, int curTarget){
        
        // base case
        if( node == nullptr ){
            // empty node or empty tree
            return;
        }
        
        // general case
        
        // update current path
        curPath.push_back( node->val );

        // update current target
        curTarget -= node->val;
            
        if( node->left == nullptr && node->right == nullptr and curTarget == 0 ){
            
            // current path is valid with wanted targetSum
            answer.push_back( curPath );
            
            // undo selection and go back to previous level
            curPath.pop_back();
            return;
        }
        
        // solve subproblem in DFS
        dfs( node->left, curPath, curTarget);
        dfs( node->right, curPath, curTarget);
        
        // undo selection and go back to previous level
        curPath.pop_back();
        return;
    }
};
```

---

Related leetcode challenge:

[Leetcode #112 Path Sum](https://leetcode.com/problems/path-sum/)

[Leetcode #437 Path Sum III](https://leetcode.com/problems/path-sum-iii/)

[Leetcode #666 Path Sum IV (Locked)(Premium Access)](https://leetcode.com/problems/path-sum-iv)