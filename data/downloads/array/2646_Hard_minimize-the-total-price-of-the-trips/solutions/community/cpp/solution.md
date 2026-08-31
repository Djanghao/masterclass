# DFS+DP explained| easy| Why bipartite set fails | Video Solution

**Author:** i_pranav
**Votes:** 71
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421713/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421713/)

---

# Intuition
Will try to explain the logic in a way I myself came up with the final solution. 

Q. Can we convert the trips array to some other form such that I could directly compute the answer in a single traversal?
A. YES! Let\u2019s try each trip and note down the number of times a node appears [let\u2019s call this contribution of that node]


Q. Can I make a bipartite graph to solve this problem by using those nodes which would contribute the most? 
A. No! It is not necessary that for every node which isn't included you are bound to use the child of the same. For example a node P has 2 children A and B, A further has 1 child C. Let's say the optimal solution is to halve B and C. If you use bipartite approach here then the graph is divided into {P,C} and {A,B} so you're gonna halve either P&C or A&B which are not gonna be optimal. 

Q. What would be the brute way to solve this? 
A. For each node there would be 2 possibilities i.e. to halve the price of that node vs not halving the price [although this would depend on the value of the parent], asymptotically we can say that trying for all the options would give us a TC of 2^n.

Q. can I use DP to reduce the TC? 
A. YES! Let\u2019s say we mark any random node R as the root, now from this node R we can try to traverse the tree and we already would know the contribution of each node [from our last question], however now the problem is that a node can either be halved or could remain as it is. Let\u2019s try for both possibilities! 
In the dfs call, I can use a flag for indicating if the value of the parent was set or not. On reaching on a node in this dfs call I could either have the total contribution of this node as [num of times this node appears in trip]\\*[score of this node] OR num of times this node appears in trip]\\*[score of this node]/2. 
Since I have already rooted the tree hence for each node I can save the states. It would only require 2 variables to define the state of any node i.e. the node itself and whether it\u2019s parent was set. Since the number of nodes are <=50. Hence the space at TC would also be limited to 50*2. Which is a small number. 
The code is self explanatory and have also provided a video solution for reference! 
Check the video solution: https://youtu.be/lHffgybzmWo
Happy coding!

# Complexity
- Time complexity:
O(n*t)  where t is the number of trips and n is the number of nodes
- Space complexity:
O(n)

# Code
```
class Solution {
private:
    void makeContri(int node,vector<int>& curr,vector<int>& contri,int end,vector<vector<int>>& g,int p){
        curr.push_back(node);       //this node is present in the traversal
        if(end==node){              //we reached the required end node! 
            for(auto& i:curr)   contri[i]++;   
            curr.pop_back();
            return;
        }
        for(auto& ch:g[node])   if(ch!=p)    makeContri(ch,curr,contri,end,g,node);
        curr.pop_back();        // pop the current node. 
    }
    int dp[51][2];      // dp[i][j] for the ith node if it's parent was halved or not! 
    int dfs(vector<int>& contri,vector<int>& pr,int node,vector<vector<int>>& g,int p=-1,bool parentHalved=false){
        int res1=(contri[node]*pr[node])/2,res2=contri[node]*pr[node];
        
        if(dp[node][parentHalved]!=-1)   return dp[node][parentHalved];
        
        for(auto& ch:g[node])   if(ch!=p)   res2+=dfs(contri,pr,ch,g,node,0);
        if(parentHalved) return dp[node][parentHalved]=res2;      // can't halve this node if parent was halved!
        
        for(auto& ch:g[node])   if(ch!=p)    res1+=dfs(contri,pr,ch,g,node,1);
        return dp[node][parentHalved]=min(res1,res2);
    }
public:
    int minimumTotalPrice(int n, vector<vector<int>>& edges, vector<int>& price, vector<vector<int>>& trips) {
        vector<vector<int>> g(n);
        memset(dp,-1,sizeof dp);
        for(auto& e:edges){
            g[e[0]].push_back(e[1]);
            g[e[1]].push_back(e[0]);
        }
        vector<int> contri(n,0);        // number of times each node is traversed
        for(auto& t:trips){
            vector<int> curr;
            makeContri(t[0],curr,contri,t[1],g,-1);
        }// contribution of each node has been stored! 
        
        return dfs(contri,price,0,g,-1,0);
        
    }
};
```