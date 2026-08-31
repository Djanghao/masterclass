# Solution Video Stitching

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/4863382/](https://leetcode.com/problems/video-stitching/solutions/4863382/)

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
     * @param Integer[][] $clips
     * @param Integer $time
     * @return Integer
     */
    function videoStitching($clips, $time) {
        usort($clips, function($a, $b) {
            return $a[0] - $b[0];
        });
        
        $clipsCount = count($clips);
        $segments = 0;
        $end = 0;
        $maxEnd = 0;
        
        for ($i = 0; $i < $clipsCount && $end < $time; $segments++) {
            while ($i < $clipsCount && $clips[$i][0] <= $end) {
                $maxEnd = max($maxEnd, $clips[$i][1]);
                $i++;
            }
            if ($maxEnd == $end) return -1;
            $end = $maxEnd;
        }
        
        return $end >= $time ? $segments : -1;
    }
}

```