# 🥷🏻✔️ Beats Beats Beats 😎 100% Go, Typescript, PHP, Javascript ✔️🥷🏻

**Author:** samandareshmamatov
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5378519/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5378519/)

---

![image.png](./images/0.png)


# Code
```Go []
func minimumOperations(nums []int) int {
    count := 0;

    for _, value := range nums {
        if(value % 3 != 0) {count++}
    }

    return count
}
```
```Typescript []
function minimumOperations(nums: number[]): number {
    let count: number = 0;

    for(let num of nums){
        if(num % 3 !== 0) count++
    }

    return count
};
```
```Javascript []
function minimumOperations(nums) {
    let count = 0;

    for(let num of nums){
        if(num % 3 !== 0) count++
    }

    return count
};
```

```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumOperations($nums) {
        $count = 0;

        foreach($nums as $key=>$val) {
            if($val % 3 != 0) {$count++;}
        }

        return $count;
    }
}
```