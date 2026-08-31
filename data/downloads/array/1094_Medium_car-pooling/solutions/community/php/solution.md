# [PHP] Simple solution with sort

**Author:** rozinko
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-pooling/solutions/857435/](https://leetcode.com/problems/car-pooling/solutions/857435/)

---

```
function carPooling($trips, $capacity) {
        $array = [];
        foreach($trips as list($pass, $start, $end)) {
            $array[$start] = isset($array[$start]) ? $array[$start] + $pass : $pass;
            $array[$end] = isset($array[$end]) ? $array[$end] - $pass : $pass*-1;
        }
        ksort($array);
        $now = 0;
        foreach($array as $pass) if(($now += $pass) > $capacity) return false;
        return true;
    }
```