# 99% beats Space Complexity and Time Complexity PHP

**Author:** Amirniyaz
**Votes:** 4
**Link:** [https://leetcode.com/problems/jump-game/solutions/4167926/](https://leetcode.com/problems/jump-game/solutions/4167926/)

---

# Intuition
counting my max jump length if I can jump over last step or on last step. 

# Approach
I am moving backward checking every time if I can jump over last step or on last step. And if I can do it I am assuming that I have jumped on that step. After the loop I am checking if I am at the beginning of array if yes then I can do it else not. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canJump($nums) {
        $end = count($nums)-1;
        for($i=count($nums)-1; $i>=0; $i--){
            if($nums[$i]+$i-$end>=0) {
                $end=$i;
            }
        }
        if($end!=0) return false;
        return true;
    }
}
```