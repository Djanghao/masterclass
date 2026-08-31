# Php Backtrack

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/2940484/](https://leetcode.com/problems/subsets-ii/solutions/2940484/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function subsetsWithDup($nums) {
        $list = [];
        $tempList = [];
        sort($nums);
        $this->backtrack( $list, $tempList, $nums, 0 );

        return $list;
    }



    function backtrack( &$list, $tempList, $nums, $start )
    {
        $list[] = $tempList;

        for ( $i = $start; $i < count( $nums ); $i++ )
        {
            if($i>$start && $nums[$i] === $nums[$i-1]){
                continue;
            }

            $tempList[] = $nums[$i];
            $this->backtrack( $list, $tempList, $nums, $i + 1 );
            array_pop( $tempList );
        }
    }

}
```