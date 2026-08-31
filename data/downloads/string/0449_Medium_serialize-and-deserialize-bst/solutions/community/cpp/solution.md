# BT & BST C++ Solution: Preorder, Comma seperated with comments

**Author:** AnkurHaritosh
**Votes:** 45
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/549891/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/549891/)

---

(1) Binary Search Tree
```
class Codec {
public:
    void serializehelper(TreeNode* root, string& s){
        if(root==nullptr) return;
        
        s+=to_string(root->val) + ","; // ',' for seperating each value
        serializehelper(root->left, s);
        serializehelper(root->right, s);
    }
    
    string serialize(TreeNode* root) {
        if(root==nullptr) return "";
        
        string s="";
        serializehelper(root, s);
        
        return s;
    }
    
    int convertStringtoInt(string& data, int& pos){ // Find ',' and return value
        pos=data.find(',');
        int value=stoi(data.substr(0, pos));
        return value;
    }
    
    TreeNode* deserializehelper(string& data, int min, int max) {
        if(data.size()==0) return nullptr; // If no more elements, return nullptr
        
        int pos=0;
        int value = convertStringtoInt(data, pos); // Find new value and position of ','
        if (value < min || value > max) return nullptr; // Is new value in given range
        
        TreeNode* tnode = new TreeNode(value); 
        data=data.substr(pos+1); // Update only when in range
        
        tnode->left=deserializehelper(data, min, tnode->val); // Branch off to left & right subtree with given ranges
        tnode->right=deserializehelper(data, tnode->val, max);
        return tnode;
    }
    
    TreeNode* deserialize(string data) {
        if(data=="") return nullptr;
        return deserializehelper(data, INT_MIN, INT_MAX);
    }
};
```

(2) Binary Tree
```
class Codec {
public:
    string serialize(TreeNode* root) {
        if(root==nullptr) return "X";
        
        return to_string(root->val) + "," + serialize(root->left) + "," + serialize(root->right); // to_string
    }
    int convertStringtoInt(string& data){
        int pos=data.find(',');
        int value=stoi(data.substr(0, pos));
        data=data.substr(pos+1);
        return value;
    }
    TreeNode* deserializehelper(string& data) { // data is updated, hence by reference
        if(data[0]=='X'){
            if(data.size()>1)
                data=data.substr(2);  // keep removing data 
            return nullptr;
        }
        
        TreeNode* tnode = new TreeNode(convertStringtoInt(data));  // covert data using stoi
        tnode->left=deserializehelper(data);
        tnode->right=deserializehelper(data);
        return tnode;
    }
    TreeNode* deserialize(string data) {
        return deserializehelper(data);
    }
};
```
I appreciate your upvote !!