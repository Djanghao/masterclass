# [Java] Time(1 ms) :  99.48% faster - [O(n)], Space : 100% lesser - [log(n)]

**Author:** deepaktwr
**Votes:** 1
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/665120/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/665120/)

---

Encode : All next sibling are right child of the previous sibling, the one sibling remaining will be left child of parent(Iterative + Recursive)
Decode : All the right child as siblings. since for root one right child exists!(Recursive, preorder)
```
    public TreeNode encode(Node root) {
        if(root == null) return null;
        
        TreeNode t = new TreeNode(root.val);
        TreeNode pre = null;
        for(Node n : root.children) {
            TreeNode last = encode(n);
            if(pre == null) t.left = last;
            else pre.right = last;
            pre = last;
        }
        
        return t;
    }
	
    public Node decode(TreeNode root) {
        return inorder(root, new ArrayList<>());
    }
    
    private Node preorder(TreeNode t, List<Node> container) {
        if(t == null) return null;
        
        Node n = new Node(t.val);
        container.add(n);
        n.children = new ArrayList<>();
        
        inorder(t.left, n.children);
        inorder(t.right, container);
        
        return n;
    }
```