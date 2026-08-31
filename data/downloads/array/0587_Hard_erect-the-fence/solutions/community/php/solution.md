# PHP: Top & Bottom Solution

**Author:** chymcakmilan
**Votes:** 1
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2830884/](https://leetcode.com/problems/erect-the-fence/solutions/2830884/)

---

# Code
```
class Solution 
{   

        /**
        * Get Angle 
        *
        * @param array $x
        * @param array $y
        * @param array $z
        * @return integer|null
        */
        protected function getAngle(array $x, array $y, array $z):?int {
            return ($y[0] - $x[0]) * ($z[1] - $x[1]) - ($y[1] - $x[1]) * ($z[0] - $x[0]);
        }

        /**
        * @param Integer[][] $trees
        * @return Integer[][]
        */
        function outerTrees($trees) 
        {
            // If we have 3 or less trees, then all the x,y points will be results
            $len = count($trees);
            if($len <= 3) return $trees;

            // Sort by the lowest tree points to the highest
            sort($trees);
            
            // Go From The Top To The Bottom
            $top = [];
            for($i = 0; $i < $len; $i++) {
                $topLen = count($top);
                // Valid Triangle
                while($topLen >= 2 && $this->getAngle($top[$topLen - 2], $top[$topLen - 1], $trees[$i]) > 0) {
                    array_pop($top);
                    $topLen--;
                }
                $top[] = $trees[$i];
            }

            // Go From Bottom To The Top
            $bottom = [];
            for($i = $len - 1; $i >= 0; $i--) {
                $bottomLen = count($bottom);
                // Valid Triangle
                while($bottomLen >= 2 && $this->getAngle($bottom[$bottomLen - 2], $bottom[$bottomLen - 1], $trees[$i]) > 0) {
                    array_pop($bottom);
                    $bottomLen--;
                }
                $bottom[] = $trees[$i];
            }


            // Merge & Remove Duplicates
            return array_unique(array_merge($top, $bottom), SORT_REGULAR);

        }
}
```