# DP

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/5687384/](https://leetcode.com/problems/stickers-to-spell-word/solutions/5687384/)

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
```php []
class Solution {
    public function minStickers(array $stickers, string $target): int {
        $N = strlen($target);
        $dp = array_fill(0, 1 << $N, -1);
        $dp[0] = 0;

        for ($state = 0; $state < (1 << $N); $state++) {
            if ($dp[$state] == -1) continue;
            foreach ($stickers as $sticker) {
                $now = $state;
                $stickerArray = str_split($sticker);
                foreach ($stickerArray as $letter) {
                    for ($i = 0; $i < $N; $i++) {
                        if ((($now >> $i) & 1) == 1) continue;
                        if ($target[$i] == $letter) {
                            $now |= 1 << $i;
                            break;
                        }
                    }
                }
                if ($dp[$now] == -1 || $dp[$now] > $dp[$state] + 1) {
                    $dp[$now] = $dp[$state] + 1;
                }
            }
        }
        return $dp[(1 << $N) - 1];
    }
}

```