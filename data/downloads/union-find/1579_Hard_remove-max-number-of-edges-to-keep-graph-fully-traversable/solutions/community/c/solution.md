# C++(Using Disjoint Set)

**Author:** amit_singhh
**Votes:** 13
**Link:** [https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/1505983/](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/solutions/1505983/)

---

**Please Upvote  if you like the Solution!**

    class Solution {
    public:
    bool static comp(vector<int> &a ,vector<int> &b)//Compare according to type-3
    {
        return a[0]>b[0];
    }
    int findparent(int node,vector<int> &parent)//find parent function (fro disjoint set)
    {
        if(node==parent[node])
            return node;
        return parent[node]=findparent(parent[node],parent);
    }
    bool unionn(int u,int v,vector<int> &parent,vector<int> &rank)//Union function
    {
        u=findparent(u,parent);
        v=findparent(v,parent);
        
        if(u!=v)// when u and v are not equal return true else return false
        {
            if(rank[u]<rank[v])
                parent[u]=v;
            else if(rank[u]>rank[v])
                parent[v]=u;
            else
            {
                parent[v]=u;
                rank[u]++;
            }
            return true;
        }
        return false;
    }
    int maxNumEdgesToRemove(int n, vector<vector<int>>& edges) 
    {
        sort(edges.begin(),edges.end(),comp);//sort according to type 3, because type 3 solves problem of both alice and bob
        
        vector<int> parent_Alice(n+1);
        vector<int> parent_Bob(n+1);
        vector<int> rank_Alice(n+1);
        vector<int> rank_Bob(n+1);
        
        //Initialize the parent and rank Array
        for(int i=0;i<parent_Alice.size();i++)
        {
            parent_Alice[i]=i;//intially every node is their own parent and rank of all is 1
            parent_Bob[i]=i;
            rank_Alice[i]=1;
            rank_Bob[i]=1;
        }
        int merge_Alice=1;//to count how many nodes we already processed for alice
        int merge_Bob=1;//to count how many nodes we already processed for bob
        
        int remove_edges=0;//for counting how many edges we remove
        
        for(auto it:edges)
        {
            if(it[0]==3)//for type-3 edges,which is followed by both bob and Alice
            {
                bool temp_Alice=unionn(it[1],it[2],parent_Alice,rank_Alice);//unionn when it[0] is of type-3 for Alice
                bool temp_Bob=unionn(it[1],it[2],parent_Bob,rank_Bob);//unionnn when it[0] is of type-3 for Bob
                 if(temp_Alice==true)//if it[0] and it[1] are not merged increase merge count
                    merge_Alice++;
                
                if(temp_Bob==true)
                    merge_Bob++;
                
                if(temp_Alice==false && temp_Bob==false)//when they are already merged,then increase count of removed edges
                    remove_edges++;
            }
            else if(it[0]==1)//for type 1, path followed by Alice
            {
                 bool temp_Alice=unionn(it[1],it[2],parent_Alice,rank_Alice);//unionn for Alice
                
                 if(temp_Alice==true)//if unionn function is true, increase merge_ALice count
                    merge_Alice++;
                 else
                     remove_edges++;//increase remove edges count, if unionn is false
            }
            else
            {
                bool temp_Bob=unionn(it[1],it[2],parent_Bob,rank_Bob);//for type2,which is followed by bob
                 
                if(temp_Bob==true)
                    merge_Bob++;
                 else
                     remove_edges++;
            }
        }
        if(merge_Alice!=n || merge_Bob!=n)//when merge count is not equal to number of nodes return -1
        {
            return -1;
        }
        return remove_edges;
      }
      };