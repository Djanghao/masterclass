# Kotlin / C++: O(n) time and O(n) space with BFS

**Author:** kotlinvim
**Votes:** 1
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/933312/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/933312/)

---

````
// Kotlin

class Codec() {
	// Encodes a URL to a shortened URL.
    fun serialize(root: TreeNode?): String {
        val q = LinkedList<TreeNode?>()
        q.offer(root)
        
        val res = StringBuilder()
        var lastPos = 0
        while (!q.isEmpty()) {
            val node = q.poll()
            if (node == null) {
                res.append("null")
            } else {
                res.append(node.`val`)
                lastPos = res.length
                q.offer(node.left)
                q.offer(node.right)                
            }
            res.append(",")
        }
        return res.substring(0..lastPos - 1)
    }

    // Decodes your encoded data to tree.
    fun deserialize(data: String): TreeNode? {
        if (data.isEmpty()) return null
        val list = data.split(",")
        val root = TreeNode(list[0].toInt())
        val q = ArrayDeque<TreeNode>()
        q.offer(root)
        
        var i = 1
        while (i < list.size && !q.isEmpty()) {
            val node = q.poll()
            if (i < list.size && list[i] != "null") {
                node.left = TreeNode(list[i].toInt())
                q.offer(node.left)
            }
            i++
            if (i < list.size && list[i] != "null") {
                node.right = TreeNode(list[i].toInt())
                q.offer(node.right)
            }
            i++           
        }
        return root
    }
}

// C++

class Codec {
public:

    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (root == nullptr) return "";

        string res;
        queue<TreeNode*> q;
        int lastPos = 0;

        q.push(root);
        while (!q.empty()) {
            auto n = q.front(); q.pop();
            if (n != nullptr) {
                res += to_string(n->val);
                lastPos = res.length();
            } else res += "#";

            res += ",";

            if (n != nullptr) {
                q.push(n->left);
                q.push(n->right);
            }
        }
        
        return res.substr(0, lastPos);
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        if (data.empty()) return nullptr;

        stringstream ss(data); string s;
        vector<string> arr;
        while (getline(ss, s, ',')) arr.push_back(s);

        TreeNode* root = new TreeNode(stoi(arr[0]));
        queue<TreeNode*> q;
        q.push(root);

        int i = 1;
        while (i < arr.size()) {
            auto n = q.front(); q.pop();
            if (arr[i] != "#") {
                n->left = new TreeNode(stoi(arr[i]));
                q.push(n->left);
            }
            i++;
            if (i < arr.size() && arr[i] != "#") {
                n->right = new TreeNode(stoi(arr[i]));
                q.push(n->right);
            }
            i++;
        }
        
        return root;
    }
};