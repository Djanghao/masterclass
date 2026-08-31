# Solution Tuple with Same Product

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/5386155/](https://leetcode.com/problems/tuple-with-same-product/solutions/5386155/)

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
    public function tupleSameProduct($nums) {
        $n = count($nums);
        $count = 0;
        $prodFreq = [];

        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = $i + 1; $j < $n; $j++) {
                $product = $nums[$i] * $nums[$j];
                if (!isset($prodFreq[$product])) {
                    $prodFreq[$product] = 0;
                }
                $prodFreq[$product]++;
            }
        }

        foreach ($prodFreq as $key => $value) {
            if ($value > 1) {
                $count += 4 * $value * ($value - 1);
            }
        }

        return $count;
    }
}

```