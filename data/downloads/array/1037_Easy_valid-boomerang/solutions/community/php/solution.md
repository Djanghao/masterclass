# 100.00% faster and  100.00% less memory in PHP

**Author:** tusharGore26
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1793932/](https://leetcode.com/problems/valid-boomerang/solutions/1793932/)

---

```
function isBoomerang($points){
        $a = $points[0][0] - $points[1][0];
        $b = $points[0][1] - $points[1][1];
        $c = $points[0][0] - $points[2][0];
        $d = $points[0][1] - $points[2][1];
        if($a*$d - $b*$c == 0) return false;
        return true;
    }
	```