# PHP Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6052944/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6052944/)

---

# Intuition
The problem requires identifying elements in an array that are part of a consecutive subsequence of a given length. My initial thought was to use a dynamic programming approach to keep track of the lengths of consecutive subsequences and then filter the elements based on the required length.

# Approach
1. **Initialization**: Create an array `f` to store the lengths of consecutive subsequences ending at each index.
2. **Dynamic Programming**: Iterate through the array and update `f` such that `f[i]` is the length of the consecutive subsequence ending at index `i`.
3. **Result Construction**: Iterate through the array again to construct the result array. For each element, if the length of the consecutive subsequence ending at that element is at least `k`, include the element in the result; otherwise, include `-1`.

# Complexity
- Time complexity: 
  The algorithm involves two passes through the array, making the time complexity $$O(n)$$, where $$n$$ is the number of elements in the array.

- Space complexity:
  The space complexity is $$O(n)$$ due to the additional array `f` used to store the lengths of consecutive subsequences.

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function resultsArray($nums, $k) {
        $n = count($nums);
        $f = array_fill(0, $n, 0);
        $f[0] = 1;
        for ($i = 1; $i < $n; ++$i) {
            $f[$i] = ($nums[$i] == $nums[$i - 1] + 1) ? $f[$i - 1] + 1 : 1;
        }
        $ans = [];
        for ($i = $k - 1; $i < $n; ++$i) {
            $ans[] = ($f[$i] >= $k) ? $nums[$i] : -1;
        }
        return $ans;
    }
}

```