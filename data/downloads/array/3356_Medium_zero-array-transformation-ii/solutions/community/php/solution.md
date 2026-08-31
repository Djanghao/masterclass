# Simple, easy too read, line sweep

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-ii/solutions/6061233/](https://leetcode.com/problems/zero-array-transformation-ii/solutions/6061233/)

---



# Code
```php []
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer[][] $queries
     * @return Boolean
     */
    function minZeroArray($nums, $queries)
    {

        $temp = array_fill(0, count($nums) + 1, 0);
        $use = 0;
        $sum = 0;
        
        foreach ($nums as $i => $num) {

            $sum += $temp[$i];

            while ($num - $sum > 0) {

                if (count($queries) == $use){
                    return -1;
                }

                $query = $queries[$use++];                

                if ($i > $query[1]) {
                    continue;
                }

                if ($i >= $query[0]) {
                    $sum += $query[2];
                }else{
                    $temp[$query[0]] += $query[2];
                }

                $temp[$query[1] + 1] -= $query[2];

            }

        }

        return $use;
    }
}
```
```Dart []
class Solution {
  /// Method to solve the minZeroArray problem.
  /// [nums] is a list of integers.
  /// [queries] is a list of lists of integers.
  /// Returns the number of queries used or -1 if it fails.
  int minZeroArray(List<int> nums, List<List<int>> queries) {
    List<int> temp = List.filled(nums.length + 1, 0);
    int use = 0;
    int sum = 0;

    for (int i = 0; i < nums.length; i++) {
      sum += temp[i];

      while (nums[i] - sum > 0) {
        if (queries.length == use) {
          return -1;
        }

        List<int> query = queries[use++];

        if (i > query[1]) {
          continue;
        }

        if (i >= query[0]) {
          sum += query[2];
        } else {
          temp[query[0]] += query[2];
        }

        temp[query[1] + 1] -= query[2];
      }
    }

    return use;
  }
}

```