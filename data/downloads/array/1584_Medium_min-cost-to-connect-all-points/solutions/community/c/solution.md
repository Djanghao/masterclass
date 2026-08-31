# [C++]| Simple Kruskal Algorithm w/ Standard Format & Commented Code | Easy Understanding

**Author:** aryanttripathi
**Votes:** 48
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/1982938/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/1982938/)

---

*  **How we will Implement?**
```
1) If we consider every point as a node and manhattan distance between them as edge weight, 
2) then this question is nothing minimum spanning tree.

3) What is minimum spanning tree? 
We have to remove some of the edges so that graph is still connected & having minimum weight.

Suppose a graph is like this:
      
	            1
             *------*
             |  \\   |
    	5	 |   \\ 3|
			 |    \\ | 2
			 |     \\| 
			 *------*
			      4
				  
	If we change this graph into minimum spanning tree then it looks like,
				  
		        1
             *------*
                    |
    		        |
			        | 2
			        | 
			 *------*
			    4  
				 
			Sum of edge weight here is = 7 ( 1 + 2 + 4)
			Here we can see that every edge is connected and the weight is minimum i.e 7
```
__________________
* **How this question is related to graph ?**
```
If we consider every point as a node then according to question,
we have to return the minimum cost to make all points connected. 
All points are connected if there is exactly one simple path between any two points.

so, this is nothing but minimum spanning tree in some anthor words.
```
_________
* ***Using Kruskal's algorithm with commented code -***
```
class Solution {
public:
    int par[1001]; // parent array to store parent of every node
    
    // Kruskal uses DSU
    
    int find(int a) // find function to find parent of a node
    {
        if(par[a] < 0)
            return a;
        
        return par[a] = find(par[a]); // path compression
    }
    
    // Union function to make one node parent of anthor
    void Union(int a, int b)
    {
        par[a] = b; // here we are making parent of a to b
    }
    
    int minCostConnectPoints(vector<vector<int>>& arr) {
        int n = arr.size(); // extract the size of array
        
        // Intially all are alone, so everyone is -1
        for(int i = 0; i < n; i++) par[i] = -1;
        
        // define adj vector to store three things
        // first value store weight where
        // weight is actually manhattan distance
        
        vector<pair<int, pair<int, int>>> adj;
        
        // generating graph basically with weights
        for(int i = 0; i < n; i++)
        {
            for(int j = i + 1; j < n; j++)
            {
                int weight = abs(arr[i][0] - arr[j][0]) + 
                             abs(arr[i][1] - arr[j][1]);//manhattan distance
                
                adj.push_back({weight, {i, j}});
                
            }
        }
        
        // sort on the basis of their edge weight
        sort(adj.begin(), adj.end());
        
        int sum = 0; //intially define sum as zero
        
        // for each edge we travel
        for(int i = 0; i < adj.size(); i++)
        {
            int a = find(adj[i].second.first); // first node
            int b = find(adj[i].second.second); // second node
            
            if(a != b) // if both parents are not same then add weight
            {
                sum += adj[i].first;
                Union(a, b); // now merge them
            }
        }
        
        return sum; // finally return sum
    }
};
```
***`If u find this useful , please consider to give a upvote!!`***