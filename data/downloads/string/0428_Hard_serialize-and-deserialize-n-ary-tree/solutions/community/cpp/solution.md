# C++ with queue beating 80% runtime; 50 lines

**Author:** Stui
**Votes:** 15
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/850339/](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/solutions/850339/)

---

Minor tweaks from 297. Serialize and Deserialize Binary Tree
Runtime: 68 ms, faster than 80.70% of C++ online submissions for Serialize and Deserialize N-ary Tree.
Memory Usage: 174.3 MB, less than 39.87% of C++ online submissions for Serialize and Deserialize N-ary Tree.

Please upvote if you like solution.
```
class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(Node* root) {
        string s;
        serialize_herlper(root,s);
        return s; 
    }
    
    void serialize_herlper(Node* root, string &s){
        if(!root) return;
        s += " " + to_string(root->val) + " " + to_string(root->children.size());
        for(auto p: root->children)
            serialize_herlper(p,s);    
    }
	
    // Decodes your encoded data to tree.
    Node* deserialize(string data) {
        if(data.size() == 0) return NULL;
        queue<string> q;
        string s;
        
        for(int i = 1; i < data.size(); i ++){
            if(data[i] == ' '){
                q.push(s);
                s ="";
                continue;
            }
            s+= data[i];
        }
        if(s.size() !=0) q.push(s);
        return deserialize_helper(q);
    }
    
    Node* deserialize_helper(queue<string> &q){
        Node* root = new Node(stoi(q.front()));
        q.pop();
      
        int size = stoi(q.front());
        q.pop();

        for(int i=0; i<size;i++) {
            root->children.push_back(deserialize_helper(q));   
        }
        return root; 
    }    
};
```

Let me know if you have any suggestions