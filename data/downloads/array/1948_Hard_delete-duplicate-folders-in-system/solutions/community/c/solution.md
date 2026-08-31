# C++ | Short step by step easy to understand | Build a Trie

**Author:** shourabhpayal
**Votes:** 18
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1361252/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1361252/)

---

**Note**: I could not solve this completely during contest. Try to grasp it one step at a time.

**Algorithm**
1. We will be building a trie. Every node of the trie will store :
	```
	end -> Is the path ending here
	exclude -> should this be excluded/pruned while constructing the final answer
	name -> name of the directory
	child -> the children we have for this node
	```
1. Using ```paths``` contruct the Trie with help of ```insert``` function.
2. Perform ```dfs``` on Trie and obtain ```childPath``` which is a serialization of the subtree rooted at current node excluding current node.
3. Record the current node as parent of ```childPath``` in ```parentMap```.
4. For every key in  ```parentMap```, mark ```exclude = true``` for all nodes if size of value (vector of parents) > 1 (Their subtrees have occured more than once and hence need to be excluded).
5. Use ```getans``` to build our answer. (Here we check if ```root->end = true```)

**Note:** We use ```map<string, node*> child``` instead of ```unordered_map<string, node*> child``` to guarantee correct serialization. Thanks @chenjun15

**Code**
```
class node{
    public: 
        map<string, node*> child;
        bool end;
        bool exclude;
        string name;
        node(string fname){
            exclude = false;
            end = false;
            name = fname;
        }
};

class Solution {
public:
    node *root;
    unordered_map<string, vector<node*>> parentMap;
    vector<vector<string>> ans;
    vector<vector<string>> deleteDuplicateFolder(vector<vector<string>>& paths) {
        root = new node("/");
        for(int i = 0 ; i < paths.size(); i++) insert(root, paths[i], 0);
        dfs(root);
        for(auto &e : parentMap)
            if(e.second.size() > 1)
                for(auto &parent : e.second)
                    parent->exclude = true;
        vector<string> temp;
        getans(root, temp);
        return ans;
    }
    
    void getans(node *root, vector<string> &temp){
        if(root->exclude) return;
        if(root->name != "/") temp.push_back(root->name);
        if(root->end) ans.push_back(temp);
        for(auto &e : root->child)
            getans(e.second, temp);
        if(root->name != "/") temp.pop_back();
    }
    
    string dfs(node *root){
        string childPath = "";
        for(auto &e : root->child){
            childPath += dfs(e.second);
            childPath += "|";
        }
        if(childPath != "") parentMap[childPath].push_back(root);
        return root->name + "|" + childPath;
    }
    
    void insert(node *root, vector<string> &path, int pos){
        if(pos < path.size()){
            if(root->child.count(path[pos]) == 0) root->child[path[pos]] = new node(path[pos]);
            insert(root->child[path[pos]], path, pos+1);
        }
        else if(pos == path.size()) root->end = true;
    }
};
```