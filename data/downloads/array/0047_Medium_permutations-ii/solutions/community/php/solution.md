# Php Backtrack

**Author:** mohammed_aladham
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/2936975/](https://leetcode.com/problems/permutations-ii/solutions/2936975/)

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


    private $hash = [];

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function permuteUnique($nums) {
        $res         = [];
        $used        = array_fill( 0, count( $nums ), FALSE );
        $permutation = [];
        $this->backtrack( $res, $nums, $permutation, $used );

        return $res;
    }





    function backtrack( &$res, &$nums, &$permutation, &$used )
    {
        if ( count( $permutation ) === count( $nums ) )
        {
            $key = '';
            for($i=0; $i<count($permutation); $i++){
                  $key = $key . $permutation[$i];  
            }

            if(!isset($this->hash[$key])){
                $this->hash[$key] = true;
                $res[] = $permutation;
            }

            return;
        }

        for ( $i = 0; $i < count( $nums ); $i++ )
        {
            if ( !$used[$i] )
            {
                $used[$i]      = TRUE;
                $permutation[] = $nums[$i];
                $this->backtrack( $res, $nums, $permutation, $used );
                $used[$i] = FALSE;
                array_pop( $permutation );
            }
        }
    }

}
```