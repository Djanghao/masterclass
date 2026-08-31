# c++ solution

**Author:** dilipsuthar60
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3422763/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3422763/)

---

```
class Solution {
public:
    int count[100];
    vector<int>graph[100];
    int path(int node1,int node2,int p=-1)
    {
        if(node1==node2)
        {
            count[node1]++;
            return 1;
        }
        for(auto &it:graph[node1])
        {
            if(it!=p)
            {
                if(path(it,node2,node1))
                {
                    count[node1]++;
                    return 1;
                }
            }
        }
        return 0;
    }
    pair<int,int>find(int node,vector<int>&price,int parent=-1)
    {
        pair<int,int>p={count[node]*price[node],count[node]*price[node]/2};
        for(auto &it:graph[node])
        {
            if(it!=parent)
            {
                pair<int,int>current=find(it,price,node);
                p.first+=min(current.first,current.second);
                p.second+=current.first;
            }
        }
        return p;
    }
    int minimumTotalPrice(int n, vector<vector<int>>& edges, vector<int>& price, vector<vector<int>>& trips) {
        for(auto &it:edges)
        {
            graph[it[0]].push_back(it[1]);
            graph[it[1]].push_back(it[0]);
        }
        for(auto it:trips)
        {
            path(it[0],it[1]);
        }
        pair<int,int>p=find(0,price);
        return min(p.first,p.second);
    }
};
```