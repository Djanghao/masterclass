# ✅ C++ | Confusion regarding visited status | BFS | Bitmasks

**Author:** SainathTallam
**Votes:** 27
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/1775692/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/1775692/)

---

# Confusion regarding visited
Most of you might have tried doing bfs with normal visited array. But it doesn't work here.

Let's say we have visited a cell before (i.e. we have pushed into the queue)

Then we have to follow the below rules inorder to know if we can push the cell into the queue in the future.

* 1) When we visit the cell , we record the set of keys we had we visited it.
* 2) If we are trying to visit the cell with same set of keys which we earlier visited the cell. Then we should not enter the cell.
* 3) if we are trying to visit the cell and we never visited this cell with same set of keys, then we can enter the cell(i.e. can push into the queue)

# Example
Let's consider a cell with coordinates 2 , 4 -> 2nd row , 4th column
and let k = 6 -> total 6 keys has to be collected

* *Case 1:* we are visiting the cell 2,3 for the first time and we have keys 1 , 2 , 4 with us.
	Since we haven't visited the cell with this set of keys before, we allow it.

* *Case 2:* Next time we are trying to visit the cell and we are having 2, 3, 4 keys with us.
	Since we haven't visited the cell with this set of keys before, we allow it.
	
* *Case 3 :* Next time we are trying to visit the cell and we are having 1, 2, 4, 5 keys with us.
	Since we haven't visited the cell with this set of keys before, we allow it

* *Case 4 :* Next time we are trying to visit the cell and we are having 2, 3, 4 keys with us.
	But we have already visited this cell with same set of keys. So we don't allow this.
	

```

class Solution {
public:
    int shortestPathAllKeys(vector<string>& grid)
    {
        int m = grid.size() , n = grid[0].size() ;
        
        int r , c , k = 0 ;
        
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(grid[i][j]=='@')
                {
                    r = i , c = j ;
                }
                
				 // counting numbers of keys
                if(grid[i][j]>='a' && grid[i][j]<='z')
                    k++ ;
            }
        }
        
        int mask = (1<<k)-1 ;
        
        map<int,set<int>> vis ;
		// key = row*n + col ,  val is set of masks with which we have already visited the cell before.
        // ith bit in mask is 1 implies we donot have its key yet. 0 implies we have the key
        
        queue<pair<int,int>> q ; //row*n+col , mask
        
        q.push({r*n+c,mask}) ;
        vis[r*n+c].insert(mask) ;
        
        int dir[5] = {1,0,-1,0,1} ;
        
        int ans = 0 ;
        
        while(!q.empty())
        {
            int sz = q.size() ;
            
            while(sz--)
            {
                auto p = q.front() ; q.pop() ;
            
                int x = p.first/n , y = p.first%n ;
                mask = p.second ;
            
                if(grid[x][y]>='a' && grid[x][y]<='z')
                {
                    if(mask&(1<<(grid[x][y]-'a')))
                        mask-=(1<<(grid[x][y]-'a')) ;
                }
                
                // we got all the k keys
                if(mask==0)
                    return ans ;
                
                for(int i=0;i<4;i++)
                {
                    int newx = x+dir[i] , newy = y+dir[i+1] ;
                    
					// new cell going out of grid
                    if(newx<0 || newx>=m || newy<0 || newy>=n) 
                        continue ;
                    
                    if(grid[newx][newy]=='#') // new cell is a wall
                        continue ;
                    
					// new cell is lock and we don't have its key yet
                    if(grid[newx][newy]>='A' && grid[newx][newy]<='Z' && (mask&(1<<(grid[newx][newy]-'A'))) )
                    {
                        continue ;
                    }
                    
                    int key = (newx*n)+newy ;
                
				    // if the cell hasn't been visited with same set of keys
                    if(vis[key].find(mask)==vis[key].end()) 
                    {
                        q.push({key,mask}) ;
                        vis[key].insert(mask) ;
                    }
                }
            }
            
            ans++ ;
        }
        
        return -1 ;
        
    }
};
```