# Solved after contest 🥲 efficiently

**Author:** zNuke
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4678069/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4678069/)

---

# Intuition
Check all corner cases
# Approach
1.Sort to keep y> then x>, 
2.Keep curr variable to denote current possible x which will keep decreasing for every point top_x, top_y. 
2-->current points px, py
2.a.if py>top_y pass
2.b.if px ==top_x it will override further points at any case so end
2.c.check in future if top_x == point's x for given px if {so its 2.b}
else{its normal i++}
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((x,y)=>{
        if (x[1]==y[1]) return y[0] - x[0]
        else return y[1]-x[1]
    })
    var res = 0
    for (const[top_x, top_y] of points){
        var curr = Number.MAX_SAFE_INTEGER 
        var flag = 0
        var i =0
        while (i<points.length){
            const [px,py] = points[i]
            if((top_x==px && top_y==py)|| py>top_y){
                i+=1
                continue}
            else if(px==top_x) {
                flag+=1
                break}
            else if (px>top_x){
                if (py==top_y){
                    curr=Math.min(curr, px)
                    flag = 1   
                }else if (px>=curr){
                    i+=1
                    continue
                }
                else{
                    bb=false
                    while(i+1<points.length && points[i+1][1]==py && points[i+1][0]>=top_x){
                        i+=1
                        curr = Math.min(curr, points[i][0])
                        if (points[i][0]==top_x){
                            flag += 1
                            bb=true}
                    }
                    if (bb==true)break;
                    if (points[i][0]<=curr){
                        res+=1
                        curr = points[i][0]
                    }
                }
            }
            i+=1
        }
        res+=flag
    } 
    return res
};
```