# [JAVA] BEATS 100.00% MEMORY/SPEED 0ms // APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/complete-binary-tree-inserter/solutions/1973225/](https://leetcode.com/problems/complete-binary-tree-inserter/solutions/1973225/)

---


	class CBTInserter {

    Queue<TreeNode> q = new LinkedList<>();
    TreeNode ptr = new TreeNode();
    TreeNode root;
    public CBTInserter(TreeNode root) {
        this.root = root;
        
        Queue<TreeNode> que = new LinkedList<>();
        
        que.offer(root);
        
        while(!que.isEmpty()){
            TreeNode temp = que.poll();
            
            if(temp != null){
                if(temp.left == null || temp.right == null)
                    q.offer(temp);
                
                if(temp.left != null)
                    que.offer(temp.left);
                
                if(temp.right != null)
                    que.offer(temp.right);
            }
        }
        
        ptr = q.peek();
    }
    
    public int insert(int val) {
        int ans = ptr.val;
        
        if(ptr.left == null){
            TreeNode newNode = new TreeNode(val);
            
            ptr.left = newNode;
            
            q.offer(newNode);
        }
        else{
            TreeNode newNode = new TreeNode(val);
            
            ptr.right = newNode;
            
            q.poll();
            
            q.offer(newNode);
            
            ptr = q.peek();
        }
        return ans;
    }
    
    public TreeNode get_root() {
        return root;
    }
	}