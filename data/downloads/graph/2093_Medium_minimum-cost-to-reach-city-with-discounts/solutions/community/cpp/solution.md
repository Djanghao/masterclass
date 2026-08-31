# Modified BFS or SPFA

**Author:** akshitagarwal11
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3695926/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/3695926/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use modified BFS or SPFA to solve this proble.
# Approach
<!-- Describe your approach to solving the problem. -->
Push without discount first and then with discount.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minimumCost(int n, vector<vector<int>>& highways, int discounts) {
        vector<vector<pair<int,int>>> adjMat(n);
        for(auto e: highways){
            adjMat[e[0]].push_back({e[1],e[2]});
            adjMat[e[1]].push_back({e[0],e[2]});
        }

        vector<int> dis(n,INT_MAX);
        dis[0]=0;
        queue<vector<int>> q; //Node,Dist,discounts
        q.push({0,0,discounts});

        while(!q.empty()){
            auto data = q.front();
            q.pop();
            int u = data[0];
            int cDis = data[1];
            int discLeft = data[2];

            // cout << u << " " << cDis << " " << discLeft << endl;

            for(int i=0;i<adjMat[u].size();i++){
                int v = adjMat[u][i].first;
                int wt = adjMat[u][i].second;
                //Process without discount
                if(dis[v]>wt+cDis){
                    dis[v]=wt+cDis;
                    q.push({v,wt+cDis,discLeft});
                }
                //Process with discount
                if(discLeft && dis[v]>wt/2+cDis){
                    dis[v] = wt/2+cDis;
                    q.push({v,wt/2+cDis,discLeft-1});
                }
            }
        }

        if(dis[n-1]==INT_MAX)
            return -1;

        return dis[n-1];
        
        
    }
};
```