# Easy C# solution

**Author:** Thomas1995
**Votes:** 6
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74454/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74454/)

---

public class Codec {

    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {
        if(root == null) return "null";
        return root.val + " " + serialize(root.left) + " " + serialize(root.right);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {
        List<TreeNode> list = new List<TreeNode>();
        
        if(data == "null") return null;
        
        string[] words = data.Split(' ');
        TreeNode root = new TreeNode(Convert.ToInt32(words[0]));
        list.Add(root);
        
        bool goLeft = true;
        for(int i=1;i<words.Count();++i)
        {
            if(words[i] == "null")
            {
                if(goLeft) goLeft = false;
                else list.RemoveAt(list.Count()-1);
            }
            else
            {
                TreeNode node = new TreeNode(Convert.ToInt32(words[i]));
                if(goLeft)
                {
                    list[list.Count()-1].left = node;
                }
                else
                {
                    list[list.Count()-1].right = node;
                    list.RemoveAt(list.Count()-1);
                }
                list.Add(node);
                goLeft = true;
            }
        }
        
        return root;
    }
}