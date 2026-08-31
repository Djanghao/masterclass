# Solution Create Maximum Number

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-maximum-number/solutions/4703735/](https://leetcode.com/problems/create-maximum-number/solutions/4703735/)

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
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer[]
     */
    function maxNumber($nums1, $nums2, $k) {
        $m = count($nums1);
        $n = count($nums2);
        $result = [];

        for ($i = max(0, $k - $n); $i <= min($k, $m); $i++) {
            $candidate = $this->merge($this->maxArray($nums1, $i), $this->maxArray($nums2, $k - $i));
            $result = $this->greater($candidate, 0, $result, 0) ? $candidate : $result;
        }

        return $result;
    }

    function merge($nums1, $nums2) {
        $result = [];
        $i = $j = 0;
        $m = count($nums1);
        $n = count($nums2);
        
        while ($i < $m || $j < $n) {
            if ($i < $m && $j < $n) {
                if ($this->greater($nums1, $i, $nums2, $j)) {
                    $result[] = $nums1[$i++];
                } else {
                    $result[] = $nums2[$j++];
                }
            } elseif ($i < $m) {
                $result[] = $nums1[$i++];
            } else {
                $result[] = $nums2[$j++];
            }
        }
        
        return $result;
    }

    function greater($nums1, $start1, $nums2, $start2) {
        while ($start1 < count($nums1) && $start2 < count($nums2) && $nums1[$start1] == $nums2[$start2]) {
            $start1++;
            $start2++;
        }
        if ($start2 == count($nums2)) return true;
        if ($start1 == count($nums1)) return false;
        return $nums1[$start1] > $nums2[$start2];
    }

    function maxArray($nums, $k) {
        $result = [];
        $toRemove = count($nums) - $k;
        foreach ($nums as $num) {
            while ($toRemove > 0 && $result && end($result) < $num) {
                array_pop($result);
                $toRemove--;
            }
            $result[] = $num;
        }
        return array_slice($result, 0, $k);
    }
}

```