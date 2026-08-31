# ✅Just Compute the Distance  | No Fancy Math For Reflection and Rotation  🔥

**Author:** ksarankumar21
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/3504216/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/3504216/)

---

It's an extension to the popular problem [https://leetcode.com/problems/number-of-distinct-islands/. The core idea to solve the problem remains the same, but how to identify two Islands are same after rotation/reflection?

\uD83D\uDCA1Idea:  Two Islands are the same if the distance between all the lands is the same.

Reflection and rotation do not change the distance of the internal cells of an Island.

Let's take an example to understand the above idea.

(0,0) (0,1) (1,0)  --> Island 1 

 (3,4) (3,3) (2,4) --> Island 2 

To check if they are the same, let us compute the distance of each piece of land within the islands

How to get the distance between two coordinated (x1,y1) and (x2,y2)?

distance : sqrt(  pow( x1-x2, 2) + pow(y1-y2,2) )  -- Euclidean Distance Formula

For Island 1 : 
distance between (0,0) -> (0,1): 1
distance between (0,0) -> (1,0): 1
distance between (0,1) -> (1,0) :  1.14  (sqrt(2)) 

So Island 1 Can be represented by distance vector {1,1,1.14}

For Island 2 : 
distance between (3,4) -> (3,3): 1
distance between (3,4) -> (2,4): 1
distance between (3,3) -> (2,4) :  1.14  (sqrt(2)) 

So Island 2 Can be represented by distance vector {1,1,1.14}

both the distance vectors are the same, hence we treat them as the same shape Islands.

Note : 
1. Order of insertion into the distance vector is irrelevant, sorting can fix the order. 
   E.g.: {1,1.14,1} and {1.4,1,1} are the same vectors after sorting.
   
2. We don\u2019t need to compute the exact distance in decimal, we can avoid the sqrt part. 
in that case distance : pow( x1-x2, 2) + pow(y1-y2,2) 

```
class Solution {
public:
    int numDistinctIslands2(vector<vector<int>>& grid) {
        
        if(grid.empty() || grid.size() == 0)
            return 0;
        
        int rows = grid.size();
        int cols = grid[0].size();
        
        vector<vector<int>> visited(rows,vector<int>(cols,0));
        
        set<vector<float>> s; // set store vectors , each vector repersents island's co-ordinate distance : same shape islands will have same component distance
        
        
        for(int i=0; i<rows; i++)
        {
            for(int j=0; j<cols; j++)
            {
                if(visited[i][j] == 0 && grid[i][j] == 1) //if its land and not visited : call DFS
                {
                    vector<pair<int,int>> distance; //collect all the co-ordinates of islands, used to compute the distance among the cell , will get populated for each  and every islands in dfs
                    
                    dfs(grid,visited,i,j,distance);
                                        
                    computeDistanceAndStoreInSet(distance,s);
                                       
                }
            }
        }
        
        return s.size();
        
    }
    
    void dfs(vector<vector<int>>& grid, vector<vector<int>>& visited, int i, int j, vector<pair<int,int>> &distance )
    {
        
        if(i<0 || i>= grid.size() || j<0 || j>= grid[0].size() || visited[i][j] == 1 || grid[i][j] ==0)
            return ; //invalid case : dont mark it as part of Island : simply return
        
        //mark the current cell as visited
        visited[i][j] = 1;
        
        //push the coordinates to distance vector also
        distance.push_back({i,j});
        
        dfs(grid,visited,i+1,j,distance);
        dfs(grid,visited,i-1,j,distance);
        dfs(grid,visited,i,j+1,distance);
        dfs(grid,visited,i,j-1,distance);
           
    }
    
    
   void computeDistanceAndStoreInSet(vector<pair<int,int>> &distance, set<vector<float>> &s)
    {
        int n = distance.size();
        
        vector<float> ans;
        
        for(int i=0; i<n; i++)
        {
            for(int j= i+1; j<n; j++)
            {   
                 pair<int,int> p1 = distance[i];
                 pair<int,int> p2 = distance[j];
                
                ans.push_back(sqrt(pow(p1.first-p2.first,2) + pow(p1.second-p2.second,2)));
            }
        }
        
        sort(ans.begin(),ans.end()); //so that the computed distance are in order 
       
        s.insert(ans); 
    }
   
};
```






