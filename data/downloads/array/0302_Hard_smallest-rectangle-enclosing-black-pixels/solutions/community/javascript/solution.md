# Simple Javascript DFS explained

**Author:** theesoteric
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1522802/](https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/solutions/1522802/)

---

```
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
    /*
    Approach: if know the minimum and maximum coordinates for x and y or then the area will can be calculated as below
    area  = (maxX-minX+1)*(maxY-minY+1);
    Now to get maxX,minX,maxY and minY we can use simple DFS. 
    */
    let dx = [[0,1],[1,0] , [0,-1],[-1,0]],visited={};
    let maxX=Number.MIN_SAFE_INTEGER,minX=Number.MAX_SAFE_INTEGER,maxY=Number.MIN_SAFE_INTEGER,minY=Number.MAX_SAFE_INTEGER;

    dfs(x,y);
    let area  = (maxX-minX+1)*(maxY-minY+1); 
    return area;
    function dfs(row,col){
        visited[row+"_"+col]=true;//Mark current cell visited
        maxX = Math.max(maxX,row);
        minX = Math.min(minX,row);
        maxY = Math.max(maxY,col);
        minY = Math.min(minY,col);
        for(let d=0;d<dx.length;d++){//Check all the neighbours
            let i = row+dx[d][0];
            let j = col+dx[d][1];
            if(image[i]!==undefined && image[i][j]!==undefined && image[i][j]==='1' && visited[i+"_"+j]===undefined){
                dfs(i,j);
            }
        }
    }
};
```