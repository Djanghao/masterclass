# Thoughts, Approach, Simple PHP Code [runtime: 1ms (100%), memory: 19.7mb (100%)]

**Author:** Dkallan
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5953642/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5953642/)

---

# Intuition
At first I thought I would have to do something with all three given numbers separately in order to finish the question. When looking at the examples, it talked about a 'bag' which had all available numbers and at that point I realised we could construct a bag with all 'options' then keep picking items until we are done.

# Approach
Construct a bag with all possible numbers in order `{ 1, 1, 1, 0, 0, 0, -1, -1, -1 }`
After creating this bag, we simply need to pop the first element of the array (taking it out of our bag) for as many as we need (k).

# Comments
- in PHP, `array_fill($pos, $amount, $value)` will create an array filled with `amount` times `value`, e.g. `array_fill(0, 4, 1)` returns `{ 1, 1, 1, 1 }` which we can use to create 3 arrays of numbers and then use `array_merge()` to combine everything into 1 big array.
- `array_shift($array)` removes the 1st item of the given array and returns it, hence we can simply add the value directly to `sum`

# Code
```php []
class Solution {

    /**
     * @param Integer $numOnes
     * @param Integer $numZeros
     * @param Integer $numNegOnes
     * @param Integer $k
     * @return Integer
     */
    function kItemsWithMaximumSum($numOnes, $numZeros, $numNegOnes, $k) {
        $numbers = array_merge(
            array_fill(0, $numOnes, 1),   // Fill the array with 1's
            array_fill(0, $numZeros, 0),  // Fill the array with 0's
            array_fill(0, $numNegOnes, -1) // Fill the array with -1's
        );

        $sum = 0;
        for ($i = 0; $i < $k; $i++)
        {
            $sum += array_shift($numbers);
        }

        return $sum;
    }
}
```