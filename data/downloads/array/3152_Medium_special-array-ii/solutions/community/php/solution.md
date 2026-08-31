# Fast and simple O(n) solution

**Author:** maxzuber
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/6130486/](https://leetcode.com/problems/special-array-ii/solutions/6130486/)

---

# Intuition
Let's count undesired *odd-odd* or *even-even* adjacent items of $$nums$$ array and build up an array $$sameCount$$. Successive query $$[from, to]$$ does not have same parity values in subarray of $$nums$$ on respective indices $$from..to$$, so $$sameCount[from]$$ and $$sameCount[to]$$ must be equal.

# Approach
Compare the $$parity$$ of each array item with previous one, counting same parity values from the beginning of array. These countings build up an array $$sameCount$$. Iterate over the $$queries$$ array and populate the result array by equality of $$sameCount[from]$$ and $$sameCount[to]$$ values.
<!-- Describe your approach to solving the problem. -->

# Complexity. 
- Time complexity: $$O(n)$$ to build up a $$sameCount$$ array and iterating over the queries. Querying $$sameCount$$ array is an $$O(1)$$ operation.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ additional space for $$sameCount$$ array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[][] $queries
     * @return Boolean[]
     */
    function isArraySpecial($nums, $queries) {
        $sameCount = [];
        $prevParity = null;
        $same = 0;
        foreach ($nums as $val) {
            $parity = $val % 2;
            if ($parity === $prevParity) {
                $same++;
            }
            $sameCount[] = $same;
            $prevParity = $parity;
        }

        $result = [];
        foreach ($queries as [$from, $to]) {
            $result[] = $sameCount[$from] === $sameCount[$to]; 
        }

        return $result;
    }
}
```