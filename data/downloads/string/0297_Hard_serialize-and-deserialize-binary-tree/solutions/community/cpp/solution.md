# Recursive preorder, Python and C++, O(n)

**Author:** StefanPochmann
**Votes:** 870
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74259/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/74259/)

---

**Python**

    class Codec:
    
        def serialize(self, root):
            def doit(node):
                if node:
                    vals.append(str(node.val))
                    doit(node.left)
                    doit(node.right)
                else:
                    vals.append('#')
            vals = []
            doit(root)
            return ' '.join(vals)
    
        def deserialize(self, data):
            def doit():
                val = next(vals)
                if val == '#':
                    return None
                node = TreeNode(int(val))
                node.left = doit()
                node.right = doit()
                return node
            vals = iter(data.split())
            return doit()

---

**C++**

    class Codec {
    public:
    
        string serialize(TreeNode* root) {
            ostringstream out;
            serialize(root, out);
            return out.str();
        }
    
        TreeNode* deserialize(string data) {
            istringstream in(data);
            return deserialize(in);
        }
    
    private:
    
        void serialize(TreeNode* root, ostringstream& out) {
            if (root) {
                out << root->val << ' ';
                serialize(root->left, out);
                serialize(root->right, out);
            } else {
                out << "# ";
            }
        }
    
        TreeNode* deserialize(istringstream& in) {
            string val;
            in >> val;
            if (val == "#")
                return nullptr;
            TreeNode* root = new TreeNode(stoi(val));
            root->left = deserialize(in);
            root->right = deserialize(in);
            return root;
        }
    };