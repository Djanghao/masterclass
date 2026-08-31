# PHP O(n) simple solution

**Author:** positroid
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6034176/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6034176/)

---

# Intuition
We can substract a maximum possible `p` from each i-element from the start to the end. 

# Approach
1. Calculate all prime numbers less than 1000 and store it into the dictionary (hashmap).
2. For each i-element find maximum `p` with this constraints:
* `nums[i] - p > nums[i-1]`
* `p < nums[i] - nums[i-1] - 2` (num must be positive)

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function primeSubOperation($nums) {
        $primeNumbers = $this->getPrimeNumbers();

        foreach ($nums as $i => $num) {
            if ($nums[$i] <= ($nums[$i-1] ?? 0)) return false;
            
            $nums[$i] -= $this->getMaxPrimeToSub($num, $nums[$i - 1] ?? 0, $primeNumbers);
        }

        return true;
    }

    function getMaxPrimeToSub($cur, $prev, $primeNums) {
        $maxSub = $cur - $prev - 1;
        while ($maxSub > 0 && !isset($primeNums[$maxSub])) {
            $maxSub--;
        }
        return $maxSub;
    }

    function getPrimeNumbers($max = 1000) {
        $allNumbers = array_flip(range(2, $max));
        foreach ($allNumbers as $key => $number) {
            $notPrime = $key;
            do {
                $notPrime += $key;
                unset($allNumbers[$notPrime]);
            } while ($notPrime < 1000);
        }
        return $allNumbers;
    }
}
```