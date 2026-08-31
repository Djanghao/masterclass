# [faster than 100.00% ][C++][beginner friendly]

**Author:** rajat_gupta_
**Votes:** 30
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1020116/](https://leetcode.com/problems/redundant-connection/solutions/1020116/)

---

**Runtime: 0 ms, faster than 100.00% of C++ online submissions 
Memory Usage: 9.1 MB, less than 92.16% of C++ online submissions**
```
class Solution {
public:
    vector<int> parent;
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        if(edges.size()==0) return{};
        parent.resize(edges.size()+1);
        for(int i=1;i<edges.size()+1;i++){
            parent[i]=i;
        }
        for(vector<int> edge : edges){
            int f1=find(edge[0]);
            int f2=find(edge[1]);
            if(f1!=f2)
                parent[f1]=f2;
            else
                return edge;
        }
        return {};
    }
    int find(int x){
        return parent[x]==x ? x : find(parent[x]);
    }
    
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
