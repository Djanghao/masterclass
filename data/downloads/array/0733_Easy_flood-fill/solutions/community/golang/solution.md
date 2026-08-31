# Python/JS/Go/C++ sol by DFS [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 22
**Link:** [https://leetcode.com/problems/flood-fill/solutions/626424/](https://leetcode.com/problems/flood-fill/solutions/626424/)

---

Python/JS/Go/C++ sol by DFS and BFS

---

**Implementation** by DFS:

Python:

```
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        
        h, w = len(image), len(image[0])
        
		
        def dfs( r, c, src_color):
            
            if r < 0 or c < 0 or r >= h or c >= w or image[r][c] == newColor or image[r][c] != src_color:
                # Reject for invalid coordination, repeated traversal, or different color
                return
            
            # update color
            image[r][c] = newColor
            
            
            # DFS to 4-connected neighbors
            dfs( r-1, c, src_color )
            dfs( r+1, c, src_color )
            dfs( r, c-1, src_color )
            dfs( r, c+1, src_color )
            
        # ---------------------------------------------------------------------------
        
        dfs(sr, sc, src_color = image[sr][sc] )
        
        return image
```

---

Javascript:

```
var floodFill = function(image, sr, sc, newColor) {
    
    let [h, w] = [image.length, image[0].length];
    
    let dfs = function(r, c, srcColor){
        
        if( (r < 0 ) || ( r >=  h ) || ( c < 0) || ( c >= w) 
                     || ( image[r][c] == newColor )          
                     || ( image[r][c] != srcColor )            ){
        
            // Reject for invalid coordination, repeated traversal, or different color      
            return;
                         
        }
        
        
        // update color
        image[r][c] = newColor;
        
        
        // DFS to 4-connected neighbors
        dfs( r-1, c, srcColor );
        dfs( r+1, c, srcColor );
        dfs( r, c-1, srcColor );
        dfs( r, c+1, srcColor );
        
        return;
    }
    
    dfs(sr, sc, image[sr][sc] );
    
    return image;
    
    
};
```

---

Go:

```
func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
    
    h := len(image)
    w := len(image[0])
    
    var dfs func( int, int, int)
    
    dfs = func( r, c, srcColor int){

        if( (r < 0 ) || ( r >=  h ) || ( c < 0) || ( c >= w) || 
                     ( image[r][c] == newColor )             ||
                     ( image[r][c] != srcColor )            ){

            // Reject for invalid coordination, repeated traversal, or different color      
            return;
        }


        // update color
        image[r][c] = newColor;


        // DFS to 4-connected neighbors
        dfs( r-1, c, srcColor );
        dfs( r+1, c, srcColor );
        dfs( r, c-1, srcColor );
        dfs( r, c+1, srcColor );

        return;
    }
    
    // =====================
    
    dfs(sr, sc, image[sr][sc] );
    return image
}
```


---

C++

```
class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        
        const int h = image.size(), w = image[0].size();
        
        std::function<void(int, int, int)> dfs;
        
        dfs = [&](int r, int c, int srcColor) -> void{
          
            if( (r < 0 ) || ( r >=  h ) || ( c < 0) || ( c >= w) 
                         || ( image[r][c] == newColor )          
                         || ( image[r][c] != srcColor )            ){

                // Reject for invalid coordination, repeated traversal, or different color      
                return;
            }


            // update color
            image[r][c] = newColor;


            // DFS to 4-connected neighbors
            dfs( r-1, c, srcColor );
            dfs( r+1, c, srcColor );
            dfs( r, c-1, srcColor );
            dfs( r, c+1, srcColor );

            return;
        };
        // ==================================
        
        dfs( sr, sc, image[sr][sc] );
        
        return image;
        
    }
};
```

---

**Implementation** by BFS:

```
from collections import deque
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        
        h, w = len(image), len(image[0])
        
        src_color = image[sr][sc]
        
        traversal_queue = deque( [(sr, sc)] )
        
        while traversal_queue:
            
            cur_r, cur_c = traversal_queue.popleft()
            
            if cur_r < 0 or cur_r >= h or cur_c < 0 or cur_c >= w or image[cur_r][cur_c] == newColor  or image[cur_r][cur_c] != src_color:
                continue
            
            # update color
            image[cur_r][cur_c] = newColor
            
            
            # BFS to 4-connected neighbors
            traversal_queue.append( (cur_r-1, cur_c) )
            traversal_queue.append( (cur_r+1, cur_c) )
            traversal_queue.append( (cur_r, cur_c-1) )
            traversal_queue.append( (cur_r, cur_c+1) )
        
        return image
```