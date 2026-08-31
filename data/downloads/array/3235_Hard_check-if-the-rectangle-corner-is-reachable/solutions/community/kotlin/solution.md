# Intersections and checking left, right

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5549818/](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5549818/)

---

# Approach
Intersections and checking left, right
# Complexity
![image.png](./images/0.png)
# Code
```
class Solution {
    fun canReachCorner(X: Int, Y: Int, circles: Array<IntArray>): Boolean {
        val len = circles.size
        var cont_left = BooleanArray(len)
        var cont_right = BooleanArray(len)
        fun test(i: Int,j: Int) {
            var circle = circles[i] ; val i_x = circle[0] ; val i_y = circle[1] ; val i_r = circle[2]
            circle = circles[j] ; val j_x = circle[0] ; val j_y = circle[1] ; val j_r = circle[2]
            val dx = i_x - j_x
            val dy = i_y - j_y
            var r_r = dx * dx + dy * dy
            if ((i_r+j_r) *  (i_r+j_r) >= r_r) { // intersection
                cont_left[i] = cont_left[i] || cont_left[j]
                cont_left[j] = cont_left[i]
                cont_right[i] = cont_right[i] || cont_right[j]
                cont_right[j] = cont_right[i]
            }
        }
// The first single pass - check if it is possible to exit at once and fill the joint arrays on left and right
        for (i in 0 until len) {
            val circle = circles[i] 
            val cir_x = circle[0]
            val cir_y = circle[1]
            val cir_r = circle[2]
            if ((cir_x+cir_r>=X && cir_y+cir_r>=Y) || // top-right grip
                (cir_x-cir_r<=0 && cir_y-cir_r<=0)) // bottom-left
                return false
            if (cir_x-cir_r<=0 || cir_y+cir_r>=Y) { // tackle left or up
                cont_left[i] = true
            }
            if (cir_x+cir_r>=X || cir_y-cir_r<=0) { // grip right or down
                cont_right[i] = true
            }

        }
        for (i in 0 until len) {
            val circle = circles[i] 
            val cir_x = circle[0]
            val cir_y = circle[1]
            val cir_r = circle[2]
            for (j in 0 until len) {
                if (i==j) continue
                test(i,j) // check for joints
                if ((cont_left[i] && cont_right[i]) ||
                    (cont_left[j] && cont_right[j])) return false
            }
        }
        return true
    }
}
```