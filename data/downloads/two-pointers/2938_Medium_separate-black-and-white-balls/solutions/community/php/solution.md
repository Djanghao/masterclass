# Php Solution - Very Easy

**Author:** shunottarasarade2017
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5946209/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5946209/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
![image.png](./images/0.png)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumSteps($s) {
        $count=0;
        $len = strlen($s);
        $isOneFound = 0;
        $oneCount=0;
        for($i=0; $i<$len; $i++){
            if($s[$i] == '1'){
                $isOneFound = true;
                $oneCount++;
            }
            if($isOneFound && $s[$i] == 0){
                $count = $count+$oneCount;
            }
        }

        return $count;
    }
}
```