# Dynamic Programming Solution, With Explanation Steps.

**Author:** devsimsek
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5349111/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5349111/)

---

# Intuition
I wonder that can I use array_filter to filter the elements that are not in the fibonacci sequence.
This approach works under some cases, but it's not efficient nor correct, but it's a good start.
So, I used dynamic programming to solve this problem with a little bit of help from the hashmap.

# Approach
- Dynamic programming is the key to solve this problem.
- A 2d array should be sufficient enough to store the calculated fibonacci sequence.
- A hashmap can be used to store the index of the elements in the array.
- We can iterate over the array and calculate the length of the fibonacci sequence.
And update the max length if necessary.

# Complexity
- Time complexity:
$$O(n^2)$$

# Code
```php
/**
 * Class Solution
 * @question 873. Length of Longest Fibonacci Subsequence
 * <p>
 * A sequence X_1, X_2, ..., X_n is fibonacci-like if:
 * - n >= 3
 * - X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
 * Given a strictly increasing array arr of positive integers forming a sequence,
 * return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.
 *
 * A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr,
 * without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].
 * </p>
 * @intuition <p>
 * I wonder that can I use array_filter to filter the elements that are not in the fibonacci sequence.
 * This approach works under some cases, but it's not efficient nor correct, but it's a good start.
 * So, I used dynamic programming to solve this problem with a little bit of help from the hashmap.
 * </p>
 * @approach <p>
 *  - Dynamic programming is the key to solve this problem.
 *  - A 2d array should be sufficient enough to store the calculated fibonacci sequence.
 *  - A hashmap can be used to store the index of the elements in the array.
 *  - We can iterate over the array and calculate the length of the fibonacci sequence.
 *  And update the max length if necessary.
 * </p>
 * @note <p>
 * It's late, and I'm tired. I'll upload the detailed explanation to my blog soon.
 * </p>
 * @complexity O(n^2)
 * @license MIT
 * @author devsimsek <github.com/devsimsek>
 * @link https://leetcode.com/problems/length-of-longest-fibonacci-subsequence
 */
class Solution
{
    /**
     * @param int[] $arr
     * @return int
     */
    function lenLongestFibSubseq($arr)
    {
        // count the elements in the array
        $n = count($arr);

        $index = array_flip($arr); // value to index mapping
        $dp = array_fill(0, $n, array_fill(0, $n, 2)); // dp array to store the length of the fibonacci sequence with a size of n x n. All values are initialized to 2 due to the minimum length of the fibonacci sequence is 3.
        $maxLen = 0; // the maximum length of the fibonacci sequence

        for ($k = 0; $k < $n; ++$k) {
            for ($j = 0; $j < $k; ++$j) {
                $ival = $arr[$k] - $arr[$j]; // calculate the i'th value
                if ($ival < $arr[$j] && isset($index[$ival])) {
                    // if the i'th value is less than the j'th value and exists in the array
                    $i = $index[$ival]; // get the index of the i'th value
                    $dp[$j][$k] = $dp[$i][$j] + 1; // calculate the length of the fibonacci sequence
                    $maxLen = max($maxLen, $dp[$j][$k]); // update the max length if necessary
                }
            }
        }

        return $maxLen >= 3 ? $maxLen : 0; // return the max length if it's greater than or equal to 3, otherwise return 0
    }
}
```

## First Approach

<p>

**This approach works under some cases, but it's not efficient nor correct, but it's a good start.**

</p>

```php
class Solution1
{
    // suggestion: apply dynamic programming to avoid recalculating the same fibonacci number multiple times
    protected function isFib($n)
    {
        // fib(0) = 0
        // fib(1) = 1
        $a = 0;
        $b = 1;
        // calculate the fibonacci sequence until we reach n
        while ($b < $n) {
            $c = $a + $b;
            $a = $b;
            $b = $c;
        }
        return $b == $n;
    }

    /**
     * @param int[] $arr
     * @return int
     */
    function lenLongestFibSubseq($arr)
    {
        $n = count($arr);

        // check n >= 3
        if ($n < 3) {
            return 0;
        }

        // sort arr to avoid unnecessary calculations, this is probably not necessary and remove if you want to gain some performance
        sort($arr);

        // trying array_filter (it worked :D try other approaches, this is just a fun experiment)
        return count(
            array_filter($arr, function ($x) {
                $dbg = $this->isFib($x);
                print_r("DBG: $x => " . ($dbg ? "TRUE" : "FALSE") . "\
");
                return $dbg;
            })
        );
    }
}
```