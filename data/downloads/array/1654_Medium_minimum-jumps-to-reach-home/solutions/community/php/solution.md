# Solution Minimum Jumps to Reach Home

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/5229914/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/5229914/)

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
    public function minimumJumps($forbidden, $a, $b, $x) {
        $dp = array_fill(0, 6002, array_fill(0, 2, 0));
        if ($x == 0) return 0;
        foreach ($forbidden as $num) {
            if ($num == $x) return -1;
            $dp[$num][0]++;
            $dp[$num][1]++;
        }
        $dp[0][0] = 1;
        $dp[0][1] = 1;
        $q = new SplQueue();
        $q->enqueue([0, 1]);
        if ($dp[$x][1]) return -1;
        $ans = 0;
        while (!$q->isEmpty()) {
            $s = $q->count();
            while ($s--) {
                $tp = $q->dequeue();
                $val = $tp[0];
                $ab = $tp[1];
                if ($val == $x) return $ans;
                if ($ab) {
                    $tmp = $val + $a;
                    if ($tmp <= 6001 && !$dp[$tmp][1]) {
                        $q->enqueue([$tmp, 1]);
                        $dp[$tmp][1] = 1;
                    }
                    $tmp = $val - $b;
                    if ($tmp >= 0 && !$dp[$tmp][0]) {
                        $q->enqueue([$tmp, 0]);
                        $dp[$tmp][0] = 1;
                    }
                } else {
                    $tmp = $val + $a;
                    if ($tmp <= 6001 && !$dp[$tmp][1]) {
                        $q->enqueue([$tmp, 1]);
                        $dp[$tmp][1] = 1;
                    }
                }
            }
            $ans++;
        }
        
        return -1;
    }
}

```