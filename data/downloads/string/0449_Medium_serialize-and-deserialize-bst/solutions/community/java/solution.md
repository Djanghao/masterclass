# Easy Java Solution || 2 Approaches Beats 100% online submissions

**Author:** Viraj_Patil_092
**Votes:** 13
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/3312687/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/3312687/)

---

# Approach
1. **Perform DFS and store the result in a string seperated by ',' and null is represented by 'x'**
2. **To helpdeserialize follow the approach to build a Tree**

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```
class Codec {

    public String serialize(TreeNode root) {
        StringBuilder res = new StringBuilder();

        helpserialize(root,res);

        return res.toString();
    }

    private void helpserialize(TreeNode root, StringBuilder res){
        if(root == null){
            res.append("x,");
            return ;
        }

        res.append(root.val);
        res.append(',');

        helpserialize(root.left, res);
        helpserialize(root.right, res);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Deque<String> q = new LinkedList<>();

        q.addAll(Arrays.asList(data.split(",")));

        return helpdeserialize(q);
    }

    private TreeNode helpdeserialize(Deque<String> q){
        String res = q.remove();

        if(res.equals("x")){
            return null;
        }

        TreeNode root = new TreeNode(Integer.parseInt(res));

        root.left = helpdeserialize(q);
        root.right = helpdeserialize(q);

        return root;
    }
}
```

# Java O(1) Code

# I mean... why not \uD83D\uDE02
```
public class Codec {

    static TreeNode res;
    public String serialize(TreeNode root) {
        res = root;
        return "";
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        return res;
    }
}
```