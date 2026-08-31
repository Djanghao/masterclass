# ✅ BFS | Detailed Explaination | Easy

**Author:** anmolrajsoni15
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314254/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/3314254/)

---

# Please upvote this post if it helped you.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
## How to check if a grid is valid for a knight's tour problem

Hello, fellow coders! In this post, I will explain how to write a function that checks if a given grid is valid for a knight's tour problem. A knight's tour problem is a classic puzzle where you have to move a knight on an n x n chessboard such that it visits every square exactly once. The knight can only move in L-shaped patterns, as shown below:

![knight moves](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Knight%27s_tour_anim_2.gif/220px-Knight%27s_tour_anim_2.gif)

# Approach
<!-- Describe your approach to solving the problem. -->


The function we will write is called `checkValidGrid` and it takes one parameter: `grid`, which is a vector of vectors of integers. The grid represents the chessboard where each square has a number from 0 to n^2 - 1 indicating the order in which the knight visited that square. For example, this is a valid grid for n = 5:

```
0 59 38 33 30
37 34 31 60 9
32 49 36 29 44
35 48 41 10 43
50 45 28 39 42
```

The function returns true if the grid is valid and false otherwise. Here is how the function works:

- First, we get the size of the grid by calling `grid.size()`. We store this value in an integer variable called `n`.
- Next, we create a vector of pairs of integers called `dir` that stores all the possible directions that the knight can move in. Each pair represents an offset in x and y coordinates. For example, (-2,-1) means moving two squares up and one square left.
- Then, we create another vector of vectors of booleans called `vis` that keeps track of which squares have been visited by the knight. We initialize this vector with false values for all squares.
- We also create two integer variables called `x` and `y` that store the current position of the knight on the grid. We initialize them with zero, meaning that we start from the top-left corner.
- Now, we enter a for loop that iterates from zero to n^2 -1 times. This loop represents each step of the knight's tour.
- Inside the loop, we first check if the value at `grid[x][y]` matches with our loop counter `i`. If not, then we return false because it means that either there is a duplicate or missing number on the grid or that the order of visiting does not match with our expectation.
- Next, we mark the current square as visited by setting `vis[x][y]` to true.
- Then, we loop through all possible directions stored in `dir` and try to find the next square to move to. For each direction pair `(dx, dy)`, we calculate new coordinates `(X,Y)` by adding them to our current coordinates `(x,y)`. We also check if these new coordinates are within bounds and not already visited and if they have value equal to i+1 on the grid. If all these conditions are met, then we update our current coordinates `(x,y)` with `(X,Y)`.
- After exiting from both loops, we return true because it means that we have successfully completed a valid knight's tour.

That's it! That's how you can write a simple function to check if a given grid is valid for a knight's tour problem. I hope you enjoyed this post and learned something new. Happy coding!


# Complexity
- Time complexity: O(N*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N*N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool checkValidGrid(vector<vector<int>>& grid) {
        int n = grid.size();
        
        vector<pair<int, int>> dir = {{-2,-1},{-2,1},{-1,-2},{-1,2},{1,-2},{1,2},{2,-1},{2,1}};
        vector<vector<bool>> vis(n,vector<bool>(n,false));
        int x = 0;
        int y = 0;
        
        for(int i = 0; i<n*n; i++){
            if(grid[x][y] != i)
                return false;
            vis[x][y] = true;
            for(auto [dx, dy] : dir){
                int X = x+dx;
                int Y = y+dy;
                if(X >=0 && X < n && Y >= 0 && Y < n && !vis[X][Y] && grid[X][Y] == i+1){
                    x = X;
                    y = Y;
                }
            }
        }
        return true;
    }
};
```