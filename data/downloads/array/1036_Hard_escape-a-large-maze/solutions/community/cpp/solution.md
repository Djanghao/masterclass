# C++ uses DFS w.r.t Manhattan distance & unordered_set over pairs

**Author:** anwendeng
**Votes:** 6
**Link:** [https://leetcode.com/problems/escape-a-large-maze/solutions/3631149/](https://leetcode.com/problems/escape-a-large-maze/solutions/3631149/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The  Manhattan distance ($L_1$-norm) between two points $(x_0, y_0), (x,y)$is given by
$$
L_1((x_0, y_0), (x,y))=|x-x_0|+|y-y_0|.
$$
It is important to note that when considering the "circle" shape using Manhattan distance, it is actually represented by a diamond or an equilateral quadrilateral. Given that there are at most $B=200$ blocked grids, you can employ either DFS (Depth-First Search) or BFS (Breadth-First Search) to solve this maze with a size of 1M^2. The search can be limited to visiting a maximum of $B(B+1)/2$ grids or extending up to a Manhattan distance from the initial point that is greater than or equal to $B$.

DFS with respect to Manhattan distance is significantly faster than DFS with respect to the size of the visited grid. 

The hash set can be implemented using either C++ unordered_set or (ordered) set. While the theoretical time complexity for searching and inserting elements in C++ set is O(log m), which is slower than the O(1) time complexity of unordered_set, in practice, set can be faster.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
//Use unordered_set over pair with own Hash & DFS w.r.t Manhattan distance
class Solution {
public:
    struct MyHash
    {
        size_t operator()(const pair<int, int>& x) const
        {
            hash<int> f;
            size_t digest=f((x.first<<3)^(x.second));
            return digest; 
        }
    };
    unordered_set<pair<int, int>, MyHash> Blocked, Visit;
    bool dfs(int i, int j, int i0, int j0, int t_i, int t_j ){
        if (i==t_i && j==t_j) return true;
        int d=abs(i-i0)+abs(j-j0);
    //    cout<<"("<<i<<","<<j<<") d="<<d<<endl;
        if (d>=200) return true;
        Visit.insert({i, j});
        vector<pair<int, int>> adj={{i+1,j},{i, j+1},{i-1,j}, {i, j-1}};  
        for(auto& [a, b]: adj){
            if (a>=0 && a<1e6 && b>=0 && b<1e6 &&
            Visit.count({a, b})==0 && Blocked.count({a, b})==0)
            {
                if (dfs(a, b, i0, j0, t_i, t_j)) return true;
            }
        }
        return false;
    }

    bool isEscapePossible(vector<vector<int>>& blocked, vector<int>& source, vector<int>& target) 
    {
        for (vector<int>& B: blocked){
            Blocked.insert({B[0], B[1]});
        }
        bool a=dfs(source[0], source[1], source[0], source[1],target[0], target[1]);
     //   cout<<"========\
";
        Visit.clear();
        bool b=dfs(target[0], target[1], target[0], target[1], source[0], source[1]);
        return a && b;
    }
};
```