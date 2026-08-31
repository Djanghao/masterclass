# PHP.T-O(m*n),M-O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/4800287/](https://leetcode.com/problems/prime-in-diagonal/solutions/4800287/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*m)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[][] $nums
     * @return Integer
     */
    function diagonalPrime($nums) {
        $res = 0;
        $r = count($nums)-1;
        $l = 0;
        $d = [];
        foreach($nums as $y => $row){
            $ll = $nums[$y][$l];
            $rr = $nums[$y][$r];
            
            if(!isset($d[$ll]) && $res < $ll && $this->isPrime($ll)){
                $res = $ll;
                $d[$ll] = true;
            } 
            if(!isset($d[$rr]) && $res < $rr && $this->isPrime($rr)){
                $res = $rr;
                $d[$rr] = true;
            }
            $l++;
            $r--;
        }
        return $res;
    }
    function isPrime($n){for($i=$n**.5|1;$i&&$n%$i--;);return!$i&&$n>1;}
}
```