# Floyed Warshall algorithm|| Simple & easy solution

**Author:** demon_code
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4611246/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4611246/)

---

just do what it says :)
prepare graph based on the given connection edge connection information 
here we will be using 0 based node indexing for easy of calculation

so once we are ready with ```adjucency matrix ```
what we are asked is count the no of paths which have length 1, 2, 3, ....... n 
and return a n sized vector of count of such path lengths
so here we need all possible paths as we need counting and one big hint is order of n is just 100 means we can use ```Floyed Warshall algorithm```  to find all pair of paths.

Apply Floyed warshall get all pair paths and then just count it out and return the vector

```
TIME : O(n^3)
SPACE : O(n^2)
```

```
class Solution {
public:
    
    vector<int> solve(vector<vector<int>>&m)
	{
	    int n=m.size();
	    for(auto &i: m)
	    {
	        for(auto &j: i) if(j==-1) j=1e8;
	    }
	    for(int k=0; k<n; k++)
	    {
	        for(int i=0; i<n; i++)
	        {
	            for(int j=0; j<n; j++)
	            {
	               m[i][j]=min(m[i][j],m[i][k]+m[k][j]);
	            }
	        }
	    }
	    
	    map<int,int> mp;
        for(auto i: m)
        {
            for(auto j:i)
            {
                if(j<100) mp[j]++;
            }
        }
        vector<int> ans(n,0);
        
        for(auto i: mp)
        {
            if(i.first!=0)
            ans[i.first-1]=i.second;
        }
        return ans;
        
	    // Code here
	}
    vector<int> countOfPairs(int n, int x, int y) 
    {
        x--;
        y--;
        vector<vector<int>> g(n, vector<int>(n,1e3));
        
        for(int i=0; i<n; i++)
        {
            g[i][i]=0;
            if(i+1<n)
            {
                g[i][i+1]=1;
                g[i+1][i]=1;
            }
        }
        if(x!=y)
        {
            g[x][y]=1;
            g[y][x]=1;
        }//now matrix is ready
		
		
        return solve(g);
        
        
        
        
        
    }
};

```