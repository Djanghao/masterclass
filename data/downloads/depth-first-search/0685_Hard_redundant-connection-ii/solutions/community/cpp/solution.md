# ✅ C++ | INDEGREE + UNION-FIND | EASY & CLEAN CODE | WITH EXPLANATION

**Author:** akshitasinghal
**Votes:** 42
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/1882687/](https://leetcode.com/problems/redundant-connection-ii/solutions/1882687/)

---

We are given a tree with 1 extra edge i.e. indegree of every node except root was 1 before extra edge . Thus the addition of extra edge can lead to 2 cases -
1. indegree of root becomes 1 
2. indegree of any other node becomes 2

In first case, it will cause formation of cycle . Thus we return the edge causing cycle .

In second case, it may or may not create a cycle . But we only have to check those 2 edges that leads to increase in indegree. For this we first remove the later edge and check if a cycle is present or not . If cyle is present this is nnot the correct edge else it's the correct edge .

```
    int find(int u,vector<int> &parent)
    {
        if(parent[u]<0)
            return u;
        
        parent[u]=find(parent[u],parent);
        return parent[u];
    }
    
    bool union_by_weight(int u,int v,vector<int> &parent)
    {
        int pu=find(u,parent);
        int pv=find(v,parent);
        
        if(pu==pv)
            return 0;
        
        if(parent[pu]<parent[pv])
        {
            parent[pu]+=parent[pv];
            parent[pv]=pu;   
        }
        else
        {
            parent[pv]+=parent[pu];
            parent[pu]=pv;
        }
        return 1;
    }
    
    vector<int> findRedundantDirectedConnection(vector<vector<int>>& e) {
        
        int i,n=e.size();
        vector<int> parent(n+1,-1);
        vector<int> in(n+1,-1);
        int e1=-1,e2=-1;
        
        for(i=0;i<n;i++)
        {
            if(in[e[i][1]]!=-1)         // indegree 2
            {
                e2=in[e[i][1]];         // first edge causing indegree 2
                e1=i;                   // second edge causing indegree 2
                break;
            }
            in[e[i][1]]=i;    
        }
    
        for(i=0;i<n;i++)
        {
            if(i==e1)                                        //ignore edge causing indegree
                continue;
            
            if(!union_by_weight(e[i][0],e[i][1],parent))     //cycle is present
            {
                if(e1!=-1)                                   //indegree 2 , wrong edge ignored
                    return e[e2];
                else                                         //indegree 1 , remove edge causing cycle
                    return e[i];
            }
        }
        return e[e1];
    }
```

Time - O( N ) + O( N * LOG N ) = O( N * LOG N )
Space - O( N )
**Do share your views & upvote if you like !!!** \uD83D\uDE04