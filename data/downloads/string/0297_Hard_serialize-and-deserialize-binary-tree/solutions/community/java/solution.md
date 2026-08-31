# Short and straight forward BFS Java code with a queue

**Author:** annieqt
**Votes:** 394
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74264/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74264/)

---

Here I use typical BFS method to handle a binary tree. I use string `n` to represent null values. The string of the binary tree in the example will be `"1 2 3 n n 4 5 n n n n "`.

When deserialize the string, I assign left and right child for each not-null node, and add the not-null children to the queue, waiting to be handled later.



    public class Codec {
        public String serialize(TreeNode root) {
            if (root == null) return "";
            Queue<TreeNode> q = new LinkedList<>();
            StringBuilder res = new StringBuilder();
            q.add(root);
            while (!q.isEmpty()) {
                TreeNode node = q.poll();
                if (node == null) {
                    res.append("n ");
                    continue;
                }
                res.append(node.val + " ");
                q.add(node.left);
                q.add(node.right);
            }
            return res.toString();
        }

        public TreeNode deserialize(String data) {
            if (data == "") return null;
            Queue<TreeNode> q = new LinkedList<>();
            String[] values = data.split(" ");
            TreeNode root = new TreeNode(Integer.parseInt(values[0]));
            q.add(root);
            for (int i = 1; i < values.length; i++) {
                TreeNode parent = q.poll();
                if (!values[i].equals("n")) {
                    TreeNode left = new TreeNode(Integer.parseInt(values[i]));
                    parent.left = left;
                    q.add(left);
                }
                if (!values[++i].equals("n")) {
                    TreeNode right = new TreeNode(Integer.parseInt(values[i]));
                    parent.right = right;
                    q.add(right);
                }
            }
            return root;
        }
    }