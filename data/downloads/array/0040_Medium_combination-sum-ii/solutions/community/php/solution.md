# Php Backtrack

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/2943205/](https://leetcode.com/problems/combination-sum-ii/solutions/2943205/)

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

class Solution
{

    private $candidates;
    private $target;


    /**
     * @param Integer[] $candidates
     * @param Integer $target
     * @return Integer[][]
     */
    function combinationSum2( $candidates, $target )
    {
        $list             = [];
        sort($candidates);
        $this->candidates = $candidates;
        $this->target     = $target;
        $this->backtrack( $list, [], 0 );

        return $list;
    }


    function backtrack( &$list, $try, $start )
    {
        $sum = 0;
        foreach ( $try as $t )
        {
            $sum += $t;
        }

        if ( $sum === $this->target )
        {
            $list[] = $try;

            return;
        }

        if ( $sum > $this->target )
        {
            return;
        }

        for ( $i = $start; $i < count( $this->candidates ); $i++ )
        {
            if ( $i > $start && $this->candidates[$i] == $this->candidates[$i-1] )
            {
                continue;
            }

            $try[] = $this->candidates[$i];
            $this->backtrack( $list, $try, $i + 1 );
            array_pop( $try );
        }
    }
}
```