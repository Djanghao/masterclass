# Java | Easy | Line by Line Explanation | Level Order Traversal

**Author:** NITHESH_23
**Votes:** 80
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/3124300/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/3124300/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
    Level Order Traversal
    If needed further explanation kindly do comment...And Please do Upvote....

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# Code
```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

 // Create class tuple to store the node and coordinates.
 class Tuple{
    TreeNode node;
    int row;
    int col;
    // Constructor for tuple.
    public Tuple(TreeNode _node, int _row, int _col){
        node = _node;
        row = _row;
        col = _col;
    }
 }
class Solution {

    // We perform Level order trversal to get the output....

    public List<List<Integer>> verticalTraversal(TreeNode root) {

        // We need a treemap to store the vertical values(columns) and PriorityQueue to store the node values in increasing order.
        // (x,y,node)
        TreeMap<Integer,TreeMap<Integer,PriorityQueue<Integer>>> map = new TreeMap<>();

        // Create a queue for instering each node with respective row(x), column(y) values during iteration.
        // Initially coordinates of node are...(node,x->(0),y->(0))
        Queue<Tuple> q = new LinkedList<Tuple>();

        // Insert the tuple
        q.add(new Tuple(root,0,0));

        // Loop untill queue is empty.
        while(!q.isEmpty()){

            // Pop the tuple from stack.
            Tuple tuple = q.poll();

            // Initialize the values inside the tuple.
            TreeNode node = tuple.node;
            int x = tuple.row;
            int y = tuple.col;

            // Insert the values into the treemap.

            // x - > vertical coordinate --> check example test cases.
            if(!map.containsKey(x)) map.put(x,new TreeMap<>());

            // y - > horizontal coordinate --> check example test cases.
            if(!map.get(x).containsKey(y)) map.get(x).put(y,new PriorityQueue<>());

            // Finally insert node value (!!!not node!!!) into map inside PriorityQueue.
            map.get(x).get(y).add(node.val);

            // Check is there exists a left or right node to the node present in the queue.
            // If present, then add it to the queue.
            if(node.left!=null) q.add(new Tuple(node.left,x-1,y+1));
            if(node.right!=null) q.add(new Tuple(node.right, x+1,y+1));
        }

        // Create a List Of List to store the list of node values.
        List<List<Integer>> list = new ArrayList<>();

        // Loop through the map and add the values.
        // x - > key, (y, nodes) -> values.
        for(TreeMap<Integer,PriorityQueue<Integer>> yn : map.values()){
            // Create a sublist to store node values in each vertical.
            list.add(new ArrayList<>());

            // Now iterate in the PriorityQueue.
            for(PriorityQueue<Integer> nodes : yn.values()){
                // Add node into the sublist from 
                while(!nodes.isEmpty()){
                    list.get(list.size()-1).add(nodes.poll());
                }
            }
        }return list;
    }
}

```
![image.png](./images/0.png)

