# EASY SOLUTION && FULLY EXPLAINED BASED ON UNION FIND

**Author:** deep6201
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3285281/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3285281/)

---

# Intuition
Basically the intuition behind this ques is similar to Leetcode 1202: SMALLEST STRING WITH SWAPS.
For example 
let suppose we are given allowedSwaps=[[1,2],[2,3],[4,5]]
Normal understanding: We can swap 1 and 2 , 2 and 3, 4 and 5.

Depth understanding : we can swap 1 with 2 as well as 3.
So we are going to use the concept of union (making connected component).
For this example we will have two components (1,2 3) as one and (4,5)
as other.

Inside a particular component(i,j,k) ,we can swap any source[i] with source[j] or source[k].

Ignore DisjointSet Class Code (as this makes our code lengthy but easy to write) .

 

# Complexity
- Time complexity:
Regarding the time complexity. Since we use path compression and ranking, the complexity of union-find operation is O(\uD835\uDEFC). For all practical purposes, we can consider it O(1).

Traversal T.C=O(n)

- Space complexity:
Unordered_map is used.

# Code
```
class DisjointSet
{
    public:
    vector<int>rank,parent,size;

    DisjointSet(int n)
    {
        rank.resize(n+1,0);
        parent.resize(n+1,0);
        size.resize(n+1,1);

        for(int i=0;i<=n;i++)
        {
            parent[i]=i;
           
        }

    }

    int findParent(int node)
    {
        if(node==parent[node])
        {
            return node;
        }

        return parent[node]=findParent(parent[node]);

    }

    void UnionByRank(int u,int v)
    {
        int ulp_u=findParent(u);
        int ulp_v=findParent(v);

        if(ulp_u==ulp_v)
        {
            return;
        }

        if(rank[ulp_u]<rank[ulp_v])
        {
            parent[ulp_u]=ulp_v;
        }

        else if(rank[ulp_u]>rank[ulp_v])
        {
            parent[ulp_v]=ulp_u;
        }

        else
        {
            parent[ulp_v]=ulp_u;
            rank[ulp_v]++;

        }

    }

    
};
class Solution {
public:
    int minimumHammingDistance(vector<int>& source, vector<int>& target, vector<vector<int>>& allowedSwaps) 
    {
        int n=source.size();
        
        DisjointSet ds(n);

        for(auto it:allowedSwaps)
        {
            ds.UnionByRank(it[0],it[1]); // We are making connected component
        }
        
        unordered_map<int,unordered_map<int,int>>mp;

        
        for(int i=0;i<source.size();i++)
        {
            mp[ds.findParent(i)][source[i]]++;

// for each ultimate parent we are storing all other members of that component
        }
        int hamming=n;
        
        for(int i=0;i<n;i++)
        {
            
            
               unordered_map<int,int>& freq=mp[ds.parent[i]];
                
               if(freq.find(target[i])==freq.end())
               {
                   continue;
                   
               }
            
            else
            {
                hamming--;
                freq[target[i]]--;
                if(freq[target[i]]==0)
                {
                    freq.erase(target[i]);
                }
            }
            
            
            
            
            
        }
        
        return hamming;
        
        
        

        
    }
};
```