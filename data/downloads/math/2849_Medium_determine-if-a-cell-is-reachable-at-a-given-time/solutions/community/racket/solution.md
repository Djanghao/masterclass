# Chebyshev distance | O(1)

**Author:** tmtappr
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262548/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262548/)

---

# Intuition
If you play much chess, you're probably immediately aware that diagonal motion on a grid covers more observable real distance than vertical or horizontal motion per turn. 

The actual number of moves a king has to make to get from one square to another is the larger of the difference in the rank they're on vs. difference in file. This type of distance calculation is known as [Chebyshev Distance](https://en.wikipedia.org/wiki/Chebyshev_distance). 

A related distance calculation is [Manhattan Distance](https://en.wikipedia.org/wiki/Taxicab_geometry). However, Chebyshev Distance calculation allows diagonal steps on the grid, while Manhattan Distance calculation doesn't.

# Approach
The minimum number of moves required to travel from the starting square to the end square is calculated with the Chebychev distance formula.

$$minMoves = max(|\\Delta x|, |\\Delta y|)$$

If `t` gives us enough moves to travel from start to finish, return `true`. There's one edge case where `distance == 0` and `t == 1` which should report `false`.

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
``` rust []
impl Solution {
    pub fn is_reachable_at_time(sx: i32, sy: i32, 
                                fx: i32, fy: i32, 
                                t: i32) 
        -> bool 
    {
        let dx = (sx - fx).abs();
        let dy = (sy - fy).abs();

        let dist = dx.max(dy);

        dist != 0 && t >= dist || dist == 0 && t != 1
    }
}
```
``` python []
class Solution:
    def isReachableAtTime(self, 
                          sx: int, sy: int, 
                          fx: int, fy: int, 
                          t: int) -> bool:
        dx = abs(sx - fx)
        dy = abs(sy - fy)

        dist = max(dx, dy)

        return dist != 0 and t >= dist or dist == 0 and t != 1
```
``` java []
class Solution {
    public boolean isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        var dx = Math.abs(sx - fx);
        var dy = Math.abs(sy - fy);

        var dist = Math.max(dx, dy);

        return dist != 0 && t >= dist || dist == 0 && t != 1;
    }
}
```
``` kotlin []
class Solution {
    fun isReachableAtTime(sx: Int, sy: Int, fx: Int, fy: Int, t: Int): Boolean {
        val dx = Math.abs(sx - fx)
        val dy = Math.abs(sy - fy)

        val dist = Math.max(dx, dy)

        return dist != 0 && t >= dist || dist == 0 && t != 1
    }
}
```
``` c []
#include <sys/param.h>

bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
    int dx = abs(sx - fx);
    int dy = abs(sy - fy);

    int dist = MAX(dx, dy);

    return dist != 0 && t >= dist || dist == 0 && t != 1;
}
```
``` cpp []
class Solution {
public:
    bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        int dx = abs(sx - fx);
        int dy = abs(sy - fy);

        int dist = max(dx, dy);

        return dist != 0 && t >= dist || dist == 0 && t != 1;
    }
};
```
``` csharp []
public class Solution {
    public bool IsReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        int dx = Math.Abs(sx - fx);
        int dy = Math.Abs(sy - fy);

        int dist = Math.Max(dx, dy);

        return dist != 0 && t >= dist || dist == 0 && t != 1;
    }
}
```
``` javascript []
function isReachableAtTime(sx, sy, fx, fy, t) {
    let dx = Math.abs(sx - fx);
    let dy = Math.abs(sy - fy);

    let dist = Math.max(dx, dy);

    return dist != 0 && t >= dist || dist == 0 && t != 1;
}
```
``` ruby []
def is_reachable_at_time(sx, sy, fx, fy, t)
    dx = (sx - fx).abs()
    dy = (sy - fy).abs()

    dist = [dx, dy].max

    dist != 0 && t >= dist || dist == 0 && t != 1
end
```
``` racket []
(define (is-reachable-at-time sx sy fx fy t)
    (let* ([dx   (abs (- sx fx))]
           [dy   (abs (- sy fy))]
           [dist (max dx dy)])
           
           (or (and (not (= dist 0))      (>= t dist))
               (and      (= dist 0)  (not (=  t 1   ))))
    )
  )
```