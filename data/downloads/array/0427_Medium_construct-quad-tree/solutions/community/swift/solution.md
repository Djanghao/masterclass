# [Java/C++/Python/JavaScript/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/1995560/](https://leetcode.com/problems/construct-quad-tree/solutions/1995560/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
 public Node construct(int[][] grid) {
        return make(grid, 0, 0, grid.length);
    }
    private Node make(int grid[][], int r, int c, int length) {
        if(length == 1)
            return new Node(grid[r][c] == 1? true : false, true);
        Node topLeft = make(grid, r, c, length/2);
        Node topRight = make(grid, r, c + length/2, length/2);
        Node bottomLeft = make(grid, r + length/2, c, length/2);
        Node bottomRight = make(grid, r + length/2, c + length/2, length/2);
        if(topLeft.val == topRight.val && bottomLeft.val == bottomRight.val && topLeft.val == bottomLeft.val && topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf)
            return new Node(topLeft.val, true);
        else
            return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
  Node* construct(vector<vector<int>>& grid) {
    grid_ = move(grid);
    leafNodes_[0] = new Node(false, true, nullptr, nullptr, nullptr, nullptr);
    leafNodes_[1] = new Node(true,  true, nullptr, nullptr, nullptr, nullptr);
    return construct(0, 0, grid_.size());
  }
  
  Node* construct(int r, int c, int s) {
    if (s == 1)
      return leafNodes_[grid_[r][c]];
    s /= 2;
    Node* tl = construct(r,   c,   s);
    Node* tr = construct(r,   c+s, s);
    Node* bl = construct(r+s, c,   s);
    Node* br = construct(r+s, c+s, s);
    if (tl == tr && tl == bl && tl == br)
      return tl;
    return new Node(false, false, tl, tr, bl, br);
  }
  
private:
  vector<vector<int>> grid_;
  array<Node*, 2> leafNodes_;
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""

class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':
        
        '''
        Make a helper function helper(x, y, size) where x,y is coord of top left. 
        
        If size is 1, set val to grid[x][y], isLeaf true, and children to None.
        
        Create node for all children.
        
        If all children are leaves with same value, set same value, set isLeaf to True and children to None. 
        Otherwise value can be whatever, set isLeaf false.
        
        topleft : helper(x, y, size // 2)
        topright : helper(x, y + size // 2, size // 2)
        bottomleft: helper(x + size // 2, y, size // 2)
        bottomright: helper(x + size // 2, y + size // 2, size // 2)
        
        '''
        
        def helper(x, y, size):
            if size == 1:
                return Node(grid[x][y], True, None, None, None, None)
            
            half = size // 2
            topLeft = helper(x, y, half)
            topRight = helper(x, y + half, half)
            bottomLeft = helper(x + half, y, half)
            bottomRight = helper(x + half, y + half, half)
            
            children = [topLeft, topRight, bottomLeft, bottomRight]
            
            allLeaves = all(c.isLeaf for c in children)
            allMatch = all(c.val == topLeft.val for c in children)
            
            isLeaf = allLeaves and allMatch
            
            if isLeaf:
                return Node(topLeft.val, True, None, None, None, None)
            else:
                return Node(1, False, topLeft, topRight, bottomLeft, bottomRight)
            
        return helper(0, 0, len(grid))
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var construct = function(grid) {
    const len = grid.length;
    
    function split(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        const halfWidth = (rowEnd - rowStart) / 2 
        const midRow = rowStart + halfWidth;
        const midCol = colStart + halfWidth;
        
        const topLeft = [[rowStart, colStart], [midRow, midCol]];
        const topRight = [[rowStart, midCol], [midRow, colEnd]];
        const bottomLeft = [[midRow, colStart], [rowEnd, midCol]];
        const bottomRight = [[midRow, midCol], [rowEnd, colEnd]]
        
        return {topLeft, topRight, bottomLeft, bottomRight}
    }
    
    function recurse(matrix) {
        const [[rowStart, colStart], [rowEnd, colEnd]] = matrix;
        
        if(rowEnd - rowStart === 1) return new Node(grid[rowStart][colStart], true)
        
        const {topLeft, topRight, bottomLeft, bottomRight} = split(matrix);
        
        const nodeTL = recurse(topLeft);
        const nodeTR = recurse(topRight);
        const nodeBL = recurse(bottomLeft);
        const nodeBR = recurse(bottomRight);
        
        // if all 4 quadrants are leaf nodes and have the same value 
        // they can be merge into one quadrant
        if(nodeTL.isLeaf && nodeTR.isLeaf && nodeBL.isLeaf && nodeBR.isLeaf && 
           (nodeTL.val === nodeTR.val && nodeTR.val === nodeBL.val && nodeBL.val === nodeBR.val))  {
            return new Node(nodeTL.val, true);
        }
        return new Node(false, false, nodeTL, nodeTR, nodeBL, nodeBR);
    }
    return recurse([[0, 0], [len, len]])
};
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
final class Solution {
    func construct(_ grid: [[Int]]) -> Node? {
        return helper(grid, 0,0, grid.count)
    }
    
    func helper(_ grid: [[Int]], _ x: Int, _ y: Int, _ len: Int) -> Node {
        if len == 1 {
            return Node(grid[x][y] != 0, true)
        }
        let result = Node(true, false)
        let topLeft = helper(grid, x, y, len/2)
        let topRight = helper(grid, x, y + len/2, len/2)
        let bottomLeft = helper(grid, x + len/2, y, len/2)
        let bottomRight = helper(grid, x + len/2, y + len/2, len/2)
        
        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf && topLeft.val == topRight.val && topRight.val == bottomLeft.val && bottomLeft.val == bottomRight.val) {
            result.isLeaf = true
            result.val = topLeft.val
        } else {
            result.topLeft = topLeft
            result.topRight = topRight
            result.bottomLeft = bottomLeft
            result.bottomRight = bottomRight
        }
        return result
    }
 }
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***