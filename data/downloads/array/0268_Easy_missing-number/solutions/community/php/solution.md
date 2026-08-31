# O(1) space solution (not XOR) with explanation

**Author:** dmitriyklyu
**Votes:** 9
**Link:** [https://leetcode.com/problems/missing-number/solutions/1859342/](https://leetcode.com/problems/missing-number/solutions/1859342/)

---

We know that we have `n` numbers in the `nums` input array. What if we compare the sum of the numbers in the input array with sum of numbers of a "perfect" array, where no elements are missing?
In other words, if we have `n` elements in nums, we can do this:
1. Count all numbers from 1 to `n` - 0+1+2+3+ ... + n
2. Count all of the numbers in the input array - 0+1+3+4 ... + n (2 is missing)
3. Compare the results - the difference between them will be the missing number.

How do we get the sum of numbers from 0 to n? We can use a math formula to get the sum of first n natural numbers: sum = `n ( n + 1 ) / 2`

PHP Solution: O(n) runtime, O(1) extra space
```php
    function missingNumber($nums) {
        // sum from 1 (or 0) through n is n(n+1)/2
        
        // Step 1. Get size of input (n)
        $n = count($nums);
        
        // Step 2. Count sum from 0 to n
        $targetSum = $n * ($n+1) / 2;
        
        // Step 3. Count actual sum in nums
        $actualSum = array_sum($nums);
        
        // step 4 - the diff is the answer
        return $targetSum - $actualSum;
    }
```