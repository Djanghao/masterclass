# Best explaination : UNION AND FIND Swin in Rising Water

**Author:** rahuldev072002
**Votes:** 25
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/3385647/](https://leetcode.com/problems/swim-in-rising-water/solutions/3385647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
PS: we need to find at what time we will be able to reach the last location starting from the first location such that time taken is minimum.
obviously we can't reach any lesser than the height of the last location and not any longer than the max height.
{Intuition for binary search on answer approach}
Intutively thinking about the union and find approach is hard.

1. Would describe the approaches:
          Bascially if we could start from the very first and keep on increasing time and see if we can reach the last , if at any time we would be able to reach the last then that time would be minimum.
//DFS
2. Improved version of the prev approach {DFS+binary search}
we know that our ans would always be in the range{last height,max heigh}
we can apply binary search for the answer in this range, and pick the approapriate answer, rather than trying for all the possible times.
3. basically the third approach is pure dikstra,
we keep on selecting the min, and have a priority queue for the min {rather than selecting all in dfs approach},
in dikstra we get a path which contains all the min possible nodes to reach the end.
since the max of the nodes would be the least time required to visit this particular path given by the dikstra algorithm so we could be having the max of it as our time.
4. Now here we can see the connectivity, Union and find intution,
   all the elements got connected at last,
   see if we could be connecting all the elements in increasing time,
   and at a particular time we see that the first and the last element
   also got connected then since we are increasing the time linearly 
   we must have got the min time.

# Approach
<!-- Describe your approach to solving the problem. -->
     Union and find approach
     start from time 0,
     see the elements that can swim at this time.
     mark it as visited
     find it's location {need a method to store the location of   elements which can be reached exactly at time t}
      
     start from the first location,
     mark this location as visited
     see its neighbours , if anoyone already visited that means they are in the path and should be connected to it.
     connect both the components
    if anytime you find that the first and last location got connected
    this particular time should be the min as we came here first time only.
     

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    n square * log(n)
   nsquare : for time traversal
   logn: max time to update the parents in find operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n square)
     visited array,disjoint array
     we can instead of visited array either use the grid array itself
     or since any element value less than time t will be already  visited.


# Code
```
class Disjointset
{
private:
    vector<int> parent, size; // parent will store the parents '
                              // size will be taken to rank or compare the parent order while doing union.
public:
    Disjointset(int n)
    {
        parent.resize(n + 1);
        size.resize(n, 1);
        for (int i = 0; i < n + 1; i++)
        {
            parent[i] = i; // element will be it's parent only
        }
    }
    int find(int X)
    {
        if (parent[X] == X)
            return X;

        return parent[X] = find(parent[X]); // path compression
    }
    void UNION(int X, int Y)
    {
        int parent1 = find(X);
        int parent2 = find(Y);
        if (parent1 == parent2)
            return; // CYCLE DETECTED.
        if (size[parent1] < size[parent2])
        {
            parent[parent1] = parent2;
            size[parent2] += size[parent1];
        }
        else
        {
            parent[parent2] = parent1;
            size[parent1] += size[parent2];
        }
    }
    void printArrays()
    {
        cout << "PARENT" << endl;
        for (auto it : parent)
        {
            cout << it << " ";
        }
        cout << endl;
        cout << "SIZE" << endl;
        for (auto it : size)
        {
            cout << it << " ";
        }
    }
    int SIZE(int vertex) // returns the size of the whole disjoint set of which the current vertex is a part of.
    {
        return size[find(vertex)]; // returns the size of disjoint set that it is a part of.
    }

    int noOfdisjointSets(int n) // pass n as indexing. , gives all disjoint sets and not particular
    {
        // find the parent of all nodes.

        for (int i = 0; i < n; i++)
        {
            parent[i] = find(i);
        }

        int cnt = 0;
        for (int i = 0; i < n; i++)
        {
            if (parent[i] == i)
            {
                cnt++;
            }
        }
        return cnt;

        /*
      //   METHOD 2
        set<int> s;
        for(int i=0;i<n;i++)
        {
            s.insert(parent[i]);
        }
        return s.size();
        */
    }
};

class Solution
{
public:
    int swimInWater(vector<vector<int>> &grid)
    {
        return UnionAndFind_swimInWater(grid);
    }
    int UnionAndFind_swimInWater(vector<vector<int>> &grid)
    {
        int n = grid.size();
        Disjointset ds(n * n);
        pair<int, int> locations[n * n];                // store the location of the element reachable exactly at time t.
        vector<vector<int>> vis(n, vector<int>(n, -1)); // can use grid for this purpose also.
        for (int i = 0; i < n; i++)                     // storing the locations of elements
        {
            for (int j = 0; j < n; j++)
            {
                locations[grid[i][j]] = {i, j};
            }
        }

        int delRow[] = {0, 0, 1, -1};
        int delCol[] = {1, -1, 0, 0};
        // now the time will be in range from 0 to n*n -1
        for (int time = 0; time < n * n; time++)
        {

            // find the loc of element reachable exactly at  this time {x,y}
            int x = locations[time].first;
            int y = locations[time].second;
            // mark the current as visited
            vis[x][y] = 1;
            // check if all it's neighbours, if they have already been reached then merge with it.
            for (int k = 0; k < 4; k++)
            {
                int nrow = x + delRow[k];
                int ncol = y + delCol[k];
                if (underBoundaries(nrow, ncol, n, n) && vis[nrow][ncol] == 1)
                {
                    ds.UNION(x*n+y,nrow*n+ncol);//join the locations here and not the heights.
                }
            }
            if (ds.find(0) == ds.find(n*n-1)) // if last element location in the connected component
            {
                return time;
            }
        }

        return n * n - 1; // since in max time it will be possible to reach the desired
        // the code will itself cover this situation and does not require it here only.
        /*
         some intutive improvements in the problem:
          since time is increasing linearly,
          so any element which has lesser value than current time is already visited
          so we can say element<time then already visited.
          we can save ourselves of vis extra n square space.
        */
    }
    bool underBoundaries(int nrow, int ncol, int n, int m)
    {
        if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m)
        {
            return true;
        }
        return false;
    }
};
```