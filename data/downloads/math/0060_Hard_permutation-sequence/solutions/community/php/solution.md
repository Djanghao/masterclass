# 🚀 Runtime 0 ms 🚀 Beats 🔥100.00%🔥 of users with PHP - Memory 19.49 MB 😎

**Author:** ImAbuSayed
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/4876782/](https://leetcode.com/problems/permutation-sequence/solutions/4876782/)

---

# Intuition
The problem is to find the kth permutation of the numbers from 1 to n. We need to find the permutation in lexicographic order.

# Approach
We can solve this problem using a mathematical approach. The idea is to determine the digits of the kth permutation one by one.

1. We start by creating an array `vis` to keep track of the visited numbers. Initially, all elements in `vis` are set to false.
2. We precalculate the factorials of numbers from 1 to n and store them in an array `factorial`. This will help us determine the index of the current digit in each iteration.
3. We subtract 1 from k to convert it to 0-indexed, as our calculations are based on 0-indexing.
4. Starting from the last digit (n-1), we iterate backwards and determine the index of the current digit within the remaining available numbers. This index is given by `floor(k / factorial[i])`.
5. We update k by taking the remainder when divided by `factorial[i]`.
6. We iterate from 1 to n and find the first number that is not visited. When the index of the current number matches the calculated index, we add the number to the result array and mark it as visited.
7. We repeat steps 4-6 until we have determined all the digits of the permutation.
8. Finally, we convert the result array to a string and return it as the kth permutation.

# Complexity
- Time complexity: The time complexity of this approach is O(n^2), where n is the given number. This is because we iterate through the digits of the permutation and for each digit, we iterate through the available numbers to find the correct one.
- Space complexity: The space complexity is O(n), where n is the given number. This is because we use arrays to store the visited numbers, factorials, and the resulting permutation.

# Code
```
class Solution {
  public function getPermutation($n, $k) {
    $ans = [];
    $vis = array_fill(0, $n + 1, false);
    $factorial = [1];
    
    for ($i = 1; $i <= $n; $i++) {
      $factorial[$i] = $factorial[$i - 1] * $i;
    }

    $k--; // Convert k to 0-indexed
    
    for ($i = $n - 1; $i >= 0; $i--) {
      $index = floor($k / $factorial[$i]);
      $k %= $factorial[$i];
      
      for ($j = 1; $j <= $n; $j++) {
        if (!$vis[$j]) {
          if ($index == 0) {
            $ans[] = strval($j);
            $vis[$j] = true;
            break;
          }
          $index--;
        }
      }
    }

    return implode('', $ans);
  }
}
```