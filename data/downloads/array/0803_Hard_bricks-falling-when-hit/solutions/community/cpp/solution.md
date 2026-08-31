# C++ | Union Find | Well-Commented Clean Code

**Author:** roboto7o32oo3
**Votes:** 4
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/2710066/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/2710066/)

---

```
// standard union find template, slightly modified for this question
class UnionFind {

public:

	vector<int> parent, rank, size;
    int n;
    
    UnionFind(int n){
        this->n = n;
        parent = vector<int>(n);
        rank = vector<int>(n);
		size = vector<int>(n);
        
        for(int i=0; i<n; i++){
            parent[i] = i; // parent of each node will be itself initially
            rank[i] = 0; // rank will be 0 for all nodes initially
			size[i] = 1; // size will be 1 for all nodes initially
        }
    }
    
    // finds the parent of given node u
    int find(int u) {
		// if the node is the parent of itself, then it is the root of the set 
        if(u == parent[u]){
            return u;
        }
		// else, find the parent while also compressing the paths
        return u = find(parent[u]);
    }
    
    // merges two sets into one, u and v belong to the corresponding sets
	// performs union by rank
    void unionByRank(int u, int v) {
        // find the parents of u and v
        u = find(u);
        v = find(v);
        
        // if u and v does not belong to the same set
        if(u != v){
			// if tree has lower rank
            if(rank[u] < rank[v]){
                swap(u, v);
            }
            
            // attach lower rank tree to higher rank tree
            parent[v] = u;
            
			// if the ranks become equal, then increase the rank
            if(rank[u] == rank[v]){
                rank[u]++;
            }
        }
    }

	// perform union by size
	int unionBySize(int u, int v) {
		// find the parents of u and v
		u = find(u);
		v = find(v);
        int res = 0;

		// if u and v do not belong to the same set
		if(u != v) {
            // if the bricks belonging to the set v is not stable
            if(find(v) != find(n-1)) res = size[v];

			// if size of u is smaller
			if(size[u] < size[v]) {
				swap(u, v);
			}

			// attach smaller size tree to larger size tree
			parent[v] = u;

			// the tree u now contains all the elements of v as well
			size[u] += size[v];
		}

        return res;
	}
};

class Solution {
public:
    int m, n;

    int toInd(int x, int y) {
        return n*x + y;
    }

    vector<int> hitBricks(vector<vector<int>>& grid, vector<vector<int>>& hits) {
        m=grid.size(), n=grid[0].size();

        // remove the nodes that are present in hits from the grid
        for(vector<int>& hit : hits) {
            int x=hit[0], y=hit[1];

            // remove the node only if it is actually present in the grid
            if(grid[x][y]==1) grid[x][y] = -1;
        }

        // create UnionFind of size m*n + 1;
        UnionFind uf(m*n + 1);

        // connect the first row nodes to the top of the grid represented by the special node m*n
        for(int i=0; i<n; i++) {
            if(grid[0][i]==1) uf.unionBySize(i, m*n);
        }

        // connect the remaining nodes
        for(int i=1; i<m; i++) {
            for(int j=0; j<n; j++) {
                if(grid[i][j]==1) {
                    if(grid[i-1][j]==1) uf.unionBySize(toInd(i,j), toInd(i-1,j));
                    if(i+1<m and grid[i+1][j]==1) uf.unionBySize(toInd(i,j), toInd(i+1,j));
                    if(j-1>=0 and grid[i][j-1]==1) uf.unionBySize(toInd(i,j), toInd(i,j-1));
                    if(j+1<n and grid[i][j+1]==1) uf.unionBySize(toInd(i,j), toInd(i,j+1));
                }
            }
        }

        // reverse the hits
        reverse(hits.begin(), hits.end());

        // now add the nodes deleted by hits one by one and check the number of nodes that become stable
        vector<int> result;

        for(vector<int>& hit : hits) {
            int x=hit[0], y=hit[1];

            // if the node was not present in the initial grid
            if(grid[x][y] != -1) {
                result.push_back(0);
                continue;
            }

            // add the node back to the grid
            grid[x][y] = 1;

            // check if the node belongs to the first row, if true then connect it to the special node m*n
            if(x == 0) uf.unionBySize(toInd(x,y), m*n);

            // the number of nodes that belong to the adjacent non-stable components
            int count = 0;

            // connect the current node to the adjacent nodes
            if(x-1>=0 and grid[x-1][y]==1) count += uf.unionBySize(toInd(x,y),toInd(x-1,y));
            if(x+1<m and grid[x+1][y]==1) count += uf.unionBySize(toInd(x,y),toInd(x+1,y));
            if(y-1>=0 and grid[x][y-1]==1) count += uf.unionBySize(toInd(x,y),toInd(x,y-1));
            if(y+1<n and grid[x][y+1]==1) count += uf.unionBySize(toInd(x,y),toInd(x,y+1));

            // if the current node became stable or was already stable
            if(uf.find(toInd(x,y)) == uf.find(m*n)) result.push_back(count);
            else result.push_back(0);
        }

        reverse(result.begin(), result.end());

        return result;
    }
};
```