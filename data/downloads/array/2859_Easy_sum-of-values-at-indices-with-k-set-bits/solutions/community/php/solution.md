# BEATS 100% in PHP Calculate Sum of Values at Indices With K Set Bits

**Author:** webdevanjali
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/5975132/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/5975132/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Main idea is to convert the array's index 0,1,2,3... to their binary form (01 representations) and check the total count of one's in each index's binary if there are K number of 1's in the binary representation of index add that index value from array to `sum` .

# Approach
<!-- Describe your approach to solving the problem. -->
1. Look at each index in the array.
2. Convert that index to binary (like changing the number to a string of 0s and 1s).
3. Count how many 1s are in that binary string.
4. If the count of 1s is equal to k, then add the number from the array at that index to the total `sum`.

# Complexity
- Time complexity: $$ O(n\u22C5log\u2061(n))$$, where nn is the length of the `nums` array, due to iterating through each element and counting set bits.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`, as only a fixed amount of extra space is used for variables.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function sumIndicesWithKSetBits($nums, $k) {
        $sum=0;
        foreach($nums as $indice => $num){
             $binary = decbin($indice);
            $setbits=0;
        
             for($i=0; $i<strlen($binary);$i++){
                if($binary[$i]==1) $setbits++;
             }
             if ($setbits == $k){
                $sum+=$num;
             }
        }
        return $sum;
    }
}
```