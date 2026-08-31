# Degree Count and Case Analysis

**Author:** BrehamPie
**Votes:** 30
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2923492/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2923492/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Let us count the degree of all the nodes first. Now let's analyse the following cases:
<ul>
    <li> <b>Every node has an even degree</b>: We don't need to add any extra edges here and we can return true.</li>
    <li> <b> One(Odd number) node has odd degree:</b> We can't make the degree of each node with two edges. A single edge using this node will create one node with odd degree and one node with even degree.</li>
<li><b>Two nodes have odd degree:</b> We can use one edge to connect the two nodes to make their degree even. But what if they are already connected ? In this case we can find another node that has no edge with either of them and connect that node with both of them. As a result every node will have even degree.
<li><b>Four nodes have odd degree:</b> We can try all possible combinations(there can be three ways) to add two edges between them and see if it's possible to satisfy the condition.
<li><b>Other cases:</b> It is not possible to make all the degree even with just two edges anymore.
</ul>


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool isPossible(int n, vector<vector<int>>& edges) {
        vector<int>degree(n+1);
        map<pair<int,int>,bool>hasEdge;
        for(auto&e:edges){
            int u = e[0];
            int v = e[1];
            degree[u]++;
            degree[v]++;
            hasEdge[{u,v}]= 1;
            hasEdge[{v,u}]= 1;
        }
        vector<int>odd;
        for(int i=1;i<=n;i++){
            if(degree[i]%2) odd.push_back(i);
        }
        if(odd.size()%2 || odd.size()>4) return false;
        if(odd.size()==0) return true;
        if(odd.size()==2){
            int a = odd[0];
            int b = odd[1];
            if(hasEdge[{a,b}]){
                for(int i=1;i<=n;i++){
                    if(i==a || i==b)continue;
                    if(!hasEdge[{i,a}] && !hasEdge[{i,b}]) return true;
                }
                return false;
            }else return true;
        }
        else if(odd.size()==4){
            int a = odd[0];
            int b = odd[1];
            int c = odd[2];
            int d = odd[3];
            if(!hasEdge[{a,b}] && !hasEdge[{c,d}]) return true;
            if(!hasEdge[{a,c}] && !hasEdge[{b,d}]) return true;
            if(!hasEdge[{a,d}] && !hasEdge[{c,b}]) return true;
            return false;
        }
        return false;
    }
};
```