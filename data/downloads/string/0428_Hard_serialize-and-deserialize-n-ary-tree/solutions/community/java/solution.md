# Java Common template serialization & deserialization of BT, BST, N-ary Tree

**Author:** bluesky299
**Votes:** 33
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/364841/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/364841/)

---

The common approach is to use a Queue and recursion. 

**Time**: O(N)
**Space**: O(N) where N = no.of nodes in the tree.

449. Serialize and Deserialize BST - [Link](https://leetcode.com/problems/serialize-and-deserialize-bst/)
297. Serialize and Deserialize Binary Tree - [Link](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
428. Serialize and Deserialize N-ary Tree - [Link](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/)


**Serialize and Deserialize BST** - here we need to make sure when we de-serialize, we insert the nodes to maintain the BST order.

    public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeBST(root, sb);
        
        return sb.toString();
    }
    private void serializeBST(TreeNode root, StringBuilder sb){
        if(root == null) return;
        sb.append(root.val).append(",");
        serializeBST(root.left, sb);
        serializeBST(root.right, sb);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.isEmpty()) return null;
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeBT(q, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    private TreeNode deserializeBT(Queue<String> q, Integer low, Integer high){
        if(q.isEmpty()) return null;
        String s = q.peek();
        int val = Integer.valueOf(s);
        
        if(val < low || val > high) return null;
        q.poll();
        
        TreeNode root = new TreeNode(val);
        root.left = deserializeBT(q, low, val);
        root.right = deserializeBT(q, val, high);
        
        return root;
    }
    }
	
**Serialize and Deserialize Binary Tree** - no need to compare the values, just append them to the string.

    public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeBT(root, sb);
        return sb.toString();
    }
    private void serializeBT(TreeNode root, StringBuilder sb){
        if(root == null){
            sb.append("#").append(",");
        }else{
            sb.append(root.val).append(",");
            serializeBT(root.left, sb);
            serializeBT(root.right, sb);
        }
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeBT(q);
    }
    private TreeNode deserializeBT(Queue<String> q){
        String s = q.poll();
        if(s.equals("#")) return null;
        
        TreeNode root = new TreeNode(Integer.valueOf(s));
        root.left = deserializeBT(q);
        root.right = deserializeBT(q);
        return root;
    }
    }
	
**Serialize and Deserialize N-ary Tree** - here, we append the no.of children of each node, so that we can call that many no.of time the recursive function.

    class Codec {

    // Encodes a tree to a single string.
    public String serialize(Node root) {
        StringBuilder sb = new StringBuilder();
        serialize(root, sb);
        return sb.toString();
    }
     
    private void serialize(Node root, StringBuilder sb){
        if(root == null) {
          sb.append("#").append(",");   
        }else{
            sb.append(root.val).append(",");
            sb.append(root.children.size()).append(",");
            for(Node child : root.children){
                serialize(child, sb);
            }
        }      
    }
    // Decodes your encoded data to tree.
    public Node deserialize(String data) {
        Queue<String> q = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserialize(q);
    }
    private Node deserialize(Queue<String> q){
        String s = q.poll();
        if(s.equals("#")) return null;
        
        Node root = new Node(Integer.valueOf(s));
        int children = Integer.valueOf(q.poll());
        
        root.children = new ArrayList<>();
        for(int i=0; i< children; i++){
            root.children.add(deserialize(q));
        }
        return root;
    }
    }
	

