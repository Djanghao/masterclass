# Hardcoded primes php solution

**Author:** NickHuijgen
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/1632808/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/1632808/)

---

class Solution {

    /**
     * @param Integer $left
     * @param Integer $right
     * @return Integer
     */
    function countPrimeSetBits($left, $right) {
        $answer = 0;
        
        for($i = $left; $i <= $right; $i++) {
            $bin = decbin($i);
            
            $number = substr_count($bin, '1', 0);    
            
			//harcoded primes :(
            if($number == 2 or $number == 3 or $number == 5 or $number == 7 or $number == 11 or $number == 13 or $number == 17 or $number == 19) {
                $answer++;
            }
        }
        
        return $answer;
    }
}