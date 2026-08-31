# simple looping solution

**Author:** thomas2025
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-primes/solutions/3025601/](https://leetcode.com/problems/count-primes/solutions/3025601/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function countPrimes($n) {
     $primes=[];
     for($i=0;$i<$n;$i++){
         $primes[]=false;
     }

 for($i=2;$i*$i<count($primes);$i++){
  if(!$primes[$i]){
      for($j=$i;$j*$i<count($primes);$j++){
          $primes[$i*$j]=true;
      }
  }

 }
     $primeCount=0;
    for($i=2;$i<count($primes);$i++){
        if(!$primes[$i]) $primeCount++;
    }
     return $primeCount;
    }
        
 
    }
```