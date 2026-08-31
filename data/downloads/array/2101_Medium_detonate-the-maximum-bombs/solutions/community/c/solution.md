# C++ || DFS || Connected Component Count

**Author:** bsh2409
**Votes:** 8
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2441011/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2441011/)

---


	
	// Function to calculate dis^2 between two points
    long long dis(int x1, int y1, int x2, int y2)
    {
        return pow(x2-x1,2) + pow(y2-y1,2);
    }
    // DFS connected components count
    void dfs(int node, vector<vector<int>> &adj, vector<bool>& visited , int &count)
    {
        if(visited[node]) return;
        
        visited[node]=true;
        
        // increment count each time we visit a new node
        count++;
        
        for(auto i: adj[node])
            if(!visited[i])
                dfs(i,adj,visited,count);
    }
    int maximumDetonation(vector<vector<int>>& bomb) {
        
        int n=bomb.size();
        
        vector<vector<int>> adj(n);
        
        // for every comparison of bomb i->j check if the distance between the center of those two
        // bombs is less than or equal to the radius of either of the bomb. If yes then push them
        // adj[i] = {j} means that if we trigger i, j will be triggered
        for(int i=0;i<n;i++)
            for(int j=i+1;j<n;j++)
            {
                long long r =dis(bomb[i][0],bomb[i][1],bomb[j][0],bomb[j][1]);
                if(r<= pow(bomb[i][2],2)) adj[i].push_back(j);
                if(r<= pow(bomb[j][2],2)) adj[j].push_back(i);
            }
        
        int ans=INT_MIN;
        
        vector<bool> visited;
        
        // perform DFS for every bomb
        for(int i=0;i<n;i++)
        {
            visited=vector(n,false);
            int count=0;
            dfs(i,adj,visited,count);
            ans=max(ans,count);
        }
        
        return ans;
    }
	
