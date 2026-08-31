# Ruby 100%. Explanation. Image.

**Author:** user9697N
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/571156/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/571156/)

---

#### Leetcode: 1039. Minimum Score Triangulation of Polygon.

This is a recursive function. To calculate a minimum split into triangle pices we select one **edge** between to vertex (let it be an edge between first and last vertex). And draw all possible triangles with this **edge**. It will be **N-2** triangles, because there are **N-2** vertexes beside first and last one.  In this funcion we split the poigon in three sub poligons: **prev poligon**, triange that used this edge, and **future poligion**. 
For eaxmple if we have 5 vertexes with indices 0, 1, 2, 3, 4, it's could be **prev poligon: [0,1,2]**,  **triange: [0,2,4]**, **future poligion: [2,3,4]**. Each of this poligons could be send in recursive call, or calculated inplace if it has 3 sides.

![Examples of splitting the poligons in 3 pats, for recursive calls](./images/0.png)


```Ruby
# 1039. Minimum Score Triangulation of Polygon
# https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
# Runtime: 84 ms, faster than 100.00% of Ruby online submissions for Minimum Score Triangulation of Polygon.
# Memory Usage: 9.5 MB, less than 100.00% of Ruby online submissions for Minimum Score Triangulation of Polygon.
# @param {Integer[]} a
# @return {Integer}
def min_score_triangulation(a)
    @h = Array.new(a.size).map{Array.new(a.size)}
    @a = a
    rec(0,a.size-1)
    
end

def rec(first,last)
    size = last - first + 1
    return 0 if 3 > size
    return @a[first+0]*@a[first+1]*@a[first+2] if 3 == size
    return @h[first][last] if @h[first][last]
    min = 1_000_000
    finish = last
    (first+1...finish).each do |k|
        prev_val = rec(first,k)
        cur_val = @a[first] * @a[k] * @a[finish]
        future_val = rec(k,finish)
        total = prev_val+cur_val+future_val
        min = total if total < min
    end
    @h[first][last] = min
    return min

end
```