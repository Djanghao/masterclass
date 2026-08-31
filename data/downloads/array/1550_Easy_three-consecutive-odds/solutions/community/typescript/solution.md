# 🥷🏻🔥 Time: O(n), Space: O(1): Go, Typescript, PHP, Javascript 🔥🥷🏻

**Author:** samandareshmamatov
**Votes:** 7
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5394359/](https://leetcode.com/problems/three-consecutive-odds/solutions/5394359/)

---

```javascript []
function threeConsecutiveOdds(arr) {
    let count = 0;
    for(let num of arr){
        if(num % 2 === 0){
            count = 0;
        } else {
            count++
        }

        if(count === 3) return true
    }

    return false
};
```
```Typescript []
function threeConsecutiveOdds(arr: number[]): boolean {
    let count: number = 0;
    for(let num of arr){
        if(num % 2 === 0){
            count = 0;
        } else {
            count++
        }

        if(count === 3) return true
    }

    return false
};
```
```Go []
func threeConsecutiveOdds(arr []int) bool {
    count := 0;
    for _, num := range arr {
        if num % 2 == 0 {
            count = 0;
        } else {
            count++
        }

        if count == 3 {
            return true
        }
    }

    return false
}
```

``` php []
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function threeConsecutiveOdds($arr) {
        $count = 0;
        for ($x = 0; $x < count($arr); $x++) {
            if ($arr[$x] % 2 == 0) {
                $count = 0;
            } else {
                $count++;
            }
    
            if ($count == 3) {
                return true;
            }
        }
    
        return false;
    }
}
```