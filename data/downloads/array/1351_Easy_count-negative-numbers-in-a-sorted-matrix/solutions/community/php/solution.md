# Very fast and optimized grid search with binary search ;)

**Author:** javid99999
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/6105994/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/6105994/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I used here binary search on each row so with that way this cod will be so so fast if the grid arrays will be so long ;)

I advise you to analyze it to give concentration more to binary search :D

to be honest it took my 2-3 hours to build it correctly :D

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution
{

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function countNegatives($grid)
    {
        $neg = 0;
        foreach($grid as $row)
        {
            $l = count($row) - 1;
            $h = 0;
            while($l >= $h)
            {
                $m = floor(($l + $h) / 2);
                if($row[$m] < 0)
                {
                    $l = $m - 1;
                } else
                    {
                        $h = $m + 1;
                    }
            }
            if ($row[$h] < 0)
            {
                $neg += count($row) - $h;
            }
        }
        return $neg;
    }
}
```