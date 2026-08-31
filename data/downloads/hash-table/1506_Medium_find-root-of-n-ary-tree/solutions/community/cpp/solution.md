# Need to figure out Node with 0 In-Degree | C++

**Author:** meeshika
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4569984/](https://leetcode.com/problems/find-root-of-n-ary-tree/solutions/4569984/)

---

# Intuition
Just to find the node with 0 in-degree. 


# Complexity
- Time complexity: O(N*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

/*
1  3 2 4 
3 5 6
2 
4 
5 
6

*/

class Solution {
public:
    Node* findRoot(vector<Node*> tree) {
        int n = tree.size();
        map<Node*,int>mp;
        for(int i = 0 ; i < n ; i++){
            for(auto node: tree[i]->children){
                mp[node]++;
            }
        }
        for(int i = 0 ; i < n ;i++){
            if(mp.find(tree[i]) == mp.end()) return tree[i];
        }
        return nullptr;
    }
};
```