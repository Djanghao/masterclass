# PHP O(n) / O(1) and XOR swaps

**Author:** yieldtoben
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-permutation/solutions/5137132/](https://leetcode.com/problems/next-permutation/solutions/5137132/)

---

# Approach
https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

# Complexity 
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function nextPermutation(&$nums) 
    {
	  for ($k = count($nums) - 2; $k > -1; $k--) if ($nums[$k] < $nums[$k + 1])
	  {
        for ($l = count($nums) - 1; $l > $k; $l--) if ($nums[$k] < $nums[$l])
        {
          $nums[$k] = $nums[$l] ^ $nums[$k];
          $nums[$l] = $nums[$k] ^ $nums[$l];
          $nums[$k] = $nums[$l] ^ $nums[$k];
          array_splice($nums, $k + 1, null, array_reverse(array_slice($nums, $k + 1)));
          return;
        }
        break;
      }
      $nums = array_reverse($nums);
    }
  }
```