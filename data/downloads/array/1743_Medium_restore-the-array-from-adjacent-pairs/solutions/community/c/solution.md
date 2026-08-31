# C++ || Gaphs || Adjacency List || DFS with explaination

**Author:** gunjan13082000
**Votes:** 11
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/1158240/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/1158240/)

---

First store all vertices and their adjacents in an adjacent list(here ```mp```). Here, I used an unordered map for implementing adjacency list.
Consider the below example - 
```
adjacentPairs = [[2,1],[3,4],[3,2]]
```
the adjacency list for the above will be - 
```
4   -> -2 -> 1
-2  -> 4
1   -> 4 -> -3
-3  -> 1
```
The first and last elements of the array are the nodes who have only 1 adjacent node.
So, first we traverse the adjacency list and find the starting point of array (here its -2 coz it has only 1 neighbour)
We push -2 to our answer vector (here ```ans```).
From -2, we start a depth first search and keep on appending each node into ans till we have traversed all nodes.
We also maintain a map (here ```visited```) to check which node to visit next. (We won't be visiting the nodes which are already traversed.)
The code is given below. Upon dry-running it for sample test case, you will have a better clarity - 
```
class Solution {
public:
    void dfs(unordered_map<int,vector<int>> &mp, unordered_map<int,bool> &visited, int sv, vector<int> &ans){
        for(auto x:mp[sv]){
            if(!visited[x]){
                visited[x]=true;
                ans.push_back(x);
                dfs(mp,visited,x,ans);
            }
        }
    }
    vector<int> restoreArray(vector<vector<int>>& adjacentPairs) {
        vector<int> ans;
        unordered_map<int,bool> visited;
        unordered_map<int,vector<int>> mp;
        for(auto x:adjacentPairs){
            mp[x[0]].push_back(x[1]);
            mp[x[1]].push_back(x[0]);
        }
        int start_node;
        for(auto x:mp){
            if(x.second.size()==1){
                start_node=x.first;
                break;
            }
        }
        visited[start_node]=true;
        ans.push_back(start_node);
        dfs(mp,visited,start_node,ans);
        return ans;
    }
};
```
