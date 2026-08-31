# Clean Codes🔥🔥|| Full Explanation✅|| Helper Method✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 109
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/3234703/](https://leetcode.com/problems/construct-quad-tree/solutions/3234703/)

---

# Intuition :
- Here we have to construct a Quadtree from a 2D binary grid, where each node of the Quadtree represents a square of the grid. 

# What is Quad Tree ?
- A Quadtree is represented by a tree of Node objects, where each Node has four children (topLeft, topRight, bottomLeft, and bottomRight) that represent the four quadrants of its square.
- A Quadtree is a way of dividing the picture into smaller and smaller sections, with each node in the tree representing a section of the picture. The tree is built recursively, which means it keeps calling itself until it reaches the smallest possible section.
<!-- Describe your first thoughts on how to solve this problem. -->

# Detail Explanation to Approach :
**Class Solution :**
- Here we have to create a tree-like structure called a Quadtree from a picture that is made up of only black and white squares. 
```
class Solution {
  public Node construct(int[][] grid) {
    return helper(grid, 0, 0, grid.length);
  }

```
- This is the class definition for the solution, which contains one public method called construct. 
- This method takes a 2D integer array called grid as input, and it returns a Node object that represents the root of the Quadtree for that grid. 
- The helper method (defined later) is used to construct the Quadtree recursively, starting from the entire grid.

**Helper Function :**
- See , first start with the entire picture and check if all the squares in that section are the same color. 
- If they are, create a single node in the Quadtree to represent that section of the picture. 
- If they aren't, split that section into four smaller squares and repeats the process for each one. 
- Keep doing this until you reach a point where all the squares in a section are the same color, and create a node to represent that section.
```
  private Node helper(int[][] grid, int i, int j, int w) {
    if (allSame(grid, i, j, w))
      return new Node(grid[i][j] == 1 ? true : false, true);

    Node node = new Node(true, false);
    node.topLeft = helper(grid, i, j, w / 2);
    node.topRight = helper(grid, i, j + w / 2, w / 2);
    node.bottomLeft = helper(grid, i + w / 2, j, w / 2);
    node.bottomRight = helper(grid, i + w / 2, j + w / 2, w / 2);
    return node;
  }

```
- This is the helper method, which is a private recursive function used to construct the Quadtree. It takes four parameters:

1. grid: the 2D integer array representing the current sub-grid.
2. i: the row index of the top-left corner of the current sub-grid.
3. j: the column index of the top-left corner of the current sub-grid.
4. w: the width of the current sub-grid.

**allSame Method :**
- The `allSame` method is a way of checking if all the squares in a section of the picture are the same color. 
- It checks each square in the section and compares it to the top-left square to see if they are the same color. 
- If any square is a different color, it returns false, which means that the section is not all the same color. 
- If it gets to the end of the loop and all squares are the same color, it returns true, which means that the section is all the same color.
```
  private boolean allSame(int[][] grid, int i, int j, int w) {
    for (int x = i; x < i + w; ++x)
      for (int y = j; y < j + w; ++y)
        if (grid[x][y] != grid[i][j])
          return false;
    return true;
  }

```
- This is the allSame helper method, which checks if all the squares in a given sub-grid are the same color. It takes four parameters:

1. grid: the 2D integer array representing the full grid.
2. i: the row index of the top-left corner of the sub-grid.
3. j: the column index of the top-left corner of the sub-grid.
4. w: the width of the sub-grid.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity : O(n^2 * log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
*Let's Code it Up .
There may be minor syntax difference in C++ and Python*
# Codes [C++ |Java |Python3] : 
```C++ []
class Solution {
 public:
  Node* construct(vector<vector<int>>& grid) {
    return helper(grid, 0, 0, grid.size());
  }

 private:
  Node* helper(const vector<vector<int>>& grid, int i, int j, int w) {
    if (allSame(grid, i, j, w))
      return new Node(grid[i][j], true);

    Node* node = new Node(true, false);
    node->topLeft = helper(grid, i, j, w / 2);
    node->topRight = helper(grid, i, j + w / 2, w / 2);
    node->bottomLeft = helper(grid, i + w / 2, j, w / 2);
    node->bottomRight = helper(grid, i + w / 2, j + w / 2, w / 2);
    return node;
  }

  bool allSame(const vector<vector<int>>& grid, int i, int j, int w) {
    return all_of(begin(grid) + i, begin(grid) + i + w,
                  [&](const vector<int>& row) {
      return all_of(begin(row) + j, begin(row) + j + w,
                    [&](int num) { return num == grid[i][j]; });
    });
  }
};
```
```Java []
class Solution {
  public Node construct(int[][] grid) {
    return helper(grid, 0, 0, grid.length);
  }

  private Node helper(int[][] grid, int i, int j, int w) {
    if (allSame(grid, i, j, w))
      return new Node(grid[i][j] == 1 ? true : false, true);

    Node node = new Node(true, false);
    node.topLeft = helper(grid, i, j, w / 2);
    node.topRight = helper(grid, i, j + w / 2, w / 2);
    node.bottomLeft = helper(grid, i + w / 2, j, w / 2);
    node.bottomRight = helper(grid, i + w / 2, j + w / 2, w / 2);
    return node;
  }

  private boolean allSame(int[][] grid, int i, int j, int w) {
    for (int x = i; x < i + w; ++x)
      for (int y = j; y < j + w; ++y)
        if (grid[x][y] != grid[i][j])
          return false;
    return true;
  }
}
```
```Python []
class Node:
    def __init__(self, val, isLeaf, topLeft=None, topRight=None, bottomLeft=None, bottomRight=None):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight

class Solution:
    def construct(self, grid: List[List[int]]) -> Node:
        return self.helper(grid, 0, 0, len(grid))

    def helper(self, grid, i, j, w):
        if self.allSame(grid, i, j, w):
            return Node(grid[i][j] == 1, True)

        node = Node(True, False)
        node.topLeft = self.helper(grid, i, j, w // 2)
        node.topRight = self.helper(grid, i, j + w // 2, w // 2)
        node.bottomLeft = self.helper(grid, i + w // 2, j, w // 2)
        node.bottomRight = self.helper(grid, i + w // 2, j + w // 2, w // 2)
        return node

    def allSame(self, grid, i, j, w):
        for x in range(i, i + w):
            for y in range(j, j + w):
                if grid[x][y] != grid[i][j]:
                    return False
        return True
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
