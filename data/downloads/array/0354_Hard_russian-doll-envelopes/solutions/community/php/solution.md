# PHP Solution

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/5536469/](https://leetcode.com/problems/russian-doll-envelopes/solutions/5536469/)

---

# Code
```
class Solution {
    function maxEnvelopes($envelopes) {
        usort($envelopes, function ($a, $b) {
            if ($a[0] == $b[0]) {
                return $b[1] - $a[1];
            }
            return $a[0] - $b[0];
        });

        $dp = [];
        foreach ($envelopes as $envelope) {
            $i = $this->binarySearch($dp, $envelope[1]); 
            if (isset($dp[$i])) {
                $dp[$i] = $envelope[1];
            } else {
                $dp[$i] = $envelope[1];
            }
        }

        return count($dp);
    }

    private function binarySearch($dp, $target) {
        $left = 0;
        $right = count($dp) - 1;
        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            if ($dp[$mid] >= $target) {
                $right = $mid - 1;
            } else {
                $left = $mid + 1;
            }
        }
        return $left;
    }
}
```