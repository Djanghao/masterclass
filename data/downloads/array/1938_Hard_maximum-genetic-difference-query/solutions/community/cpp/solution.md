# Intuition + Approach - Tries Solution

**Author:** tanish_chugh
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5712279/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/5712279/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Whenever we see questions like to find maximum XOR... The first intuition is to use trie.
https://leetcode.com/problems/maximum-xor-with-an-element-from-array/

Try the above question first to get the intuition.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach is simple:-
1.) We store the queries in a sorted order(acoording to the nodei) in a map.
1.) We apply dfs on the tree.
2.) At each node, we check if we have a query up to that node.
4.) If yes, then we find the maximum XOR using the trie.
5.) When we traverse to the 1st child node, then we add that node to the trie, and when we traverse the 2nd child node we backtrack and remove the first child node from the trie.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
struct Node{
    Node* child[2];
    int cnt;
    vector<int> wend;

    Node(){
        child[0] = NULL;
        child[1] = NULL;
        
        cnt = 0;     
    }
};
class Trie{
public:
    Node* root;

    Trie(){
        root = new Node;
    }

    void insert(int n, int ln){
        Node* curr = root;
        for(int i=(ln-1); i>=0; i--){
            curr->cnt++;
            int x = (n&(1<<i)) ? 1 : 0;

            if(curr->child[x] == NULL){
                curr->child[x] = new Node;
            }

            curr=curr->child[x];
        }
        curr->cnt++;
        curr->wend.push_back(n);
    }
    
    void remove(int n, int ln){
        Node* curr = root;
        for(int i=(ln-1); i>=0; i--){
            curr->cnt--;
            int x = (n&(1<<i)) ? 1 : 0;

            if(curr->child[x] == NULL){
                curr->child[x] = new Node;
            }

            curr=curr->child[x];
        }
        curr->cnt--;
        curr->wend.pop_back();
    }

    int getXorMax(int x, int ln){
        Node* curr = root;
        for(int i=(ln-1); i>=0; i--){
            int bit = (x&(1<<i)) ? 1 : 0;

            if(curr->child[0] == NULL || curr->child[0]->cnt == 0){
                curr = curr->child[1];
            }
            else if(curr->child[1] == NULL || curr->child[1]->cnt == 0){
                curr = curr->child[0];
            }
            else{
                if(!bit){
                    curr = curr->child[1];
                }
                if(bit){
                    curr = curr->child[0];
                }
            }
        }

        return curr->wend[0];
    }
};
class Solution {
public:
    Trie trie;
    void dfs(int node, vector<vector<int>>& adj, map<int, vector<pair<int, int>>>& mp, vector<int>& result){
        if(mp.find(node) != mp.end()){
            vector<pair<int, int>> temp = mp[node];
            for(auto it:temp){
                int i = it.first;
                int p = it.second;

                result[i] = (p^trie.getXorMax(p, 31));
            }
        }

        for(auto adjNode:adj[node]){
            trie.insert(adjNode, 31);
            dfs(adjNode, adj, mp, result);
            trie.remove(adjNode, 31);
        }
    }
    vector<int> maxGeneticDifference(vector<int>& parents, vector<vector<int>>& queries) {
        int n=parents.size();
        vector<vector<int>> adj(n);
        
        int root = -1;
        for(int i=0; i<n; i++){
            if(parents[i] == -1){
                root = i;
                continue;
            }
            adj[parents[i]].push_back(i);
        }

        map<int, vector<pair<int, int>>> mp;
        for(int i=0; i<queries.size(); i++){
            vector<int> temp = queries[i];
            int node=temp[0];
            int p=temp[1];

            mp[node].push_back({i, p});
        }

        trie.insert(root, 31);
        vector<int> result(queries.size(), 0);
        dfs(root, adj, mp, result);

        return result;
    }
};
```