# c++ | easy | short

**Author:** venomhighs7
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/2700808/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/2700808/)

---



# Code
```
struct Node {
    string name;
    map<string, Node*> next; 
    bool del = false;
    Node(string n = "") : name(n) {}
};
class Solution {
    void addPath(Node *node, vector<string> &path) { 
        for (auto &s : path) {
            if (node->next.count(s) == 0) node->next[s] = new Node(s);
            node = node->next[s];
        }
    }
    unordered_map<string, Node*> seen; 
    string dedupe(Node *node) { 
        string subfolder;
        for (auto &[name, next] : node->next) {
            subfolder += dedupe(next);
        }
        if (subfolder.size()) { 
            if (seen.count(subfolder)) { 
                seen[subfolder]->del = node->del = true;
            } else {
                seen[subfolder] = node;
            }
        }
        return "(" + node->name + subfolder + ")"; 
    }
    vector<vector<string>> ans;
    vector<string> path;
    void getPath(Node *node) {
        if (node->del) return; 
        path.push_back(node->name);
        ans.push_back(path);
        for (auto &[name, next] : node->next) {
            getPath(next);
        }
        path.pop_back();
    }
public:
    vector<vector<string>> deleteDuplicateFolder(vector<vector<string>>& A) {
        Node root;
        for (auto &path : A) addPath(&root, path);
        dedupe(&root);
        for (auto &[name, next] : root.next) getPath(next);
        return ans;
    }
};
```