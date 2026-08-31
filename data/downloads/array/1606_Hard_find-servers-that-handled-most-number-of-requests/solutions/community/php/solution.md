# Solution Find Servers That Handled Most Number of Requests

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/5192718/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/5192718/)

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
    public $tree = [];

    public function construct_tree($k) {
        for ($i = 0; $i < $k; $i++) {
            $this->tree[$i + $k] = $i;
        }
        for ($i = $k - 1; $i > 0; --$i) {
            $this->tree[$i] = min($this->tree[$i * 2], $this->tree[$i * 2 + 1]);
        }
    }

    public function query($k, $l, $r) {
        $l += $k;
        $r += $k;
        $res = PHP_INT_MAX;
        while ($l < $r) {
            if ($l & 1) {
                $res = min($res, $this->tree[$l++]);
            }
            if ($r & 1) {
                $res = min($res, $this->tree[--$r]);
            }
            $l >>= 1;
            $r >>= 1;
        }
        return $res;
    }

    public function update($k, $i, $val) {
        $this->tree[$i += $k] = $val;
        for ($i >>= 1; $i > 0; $i >>= 1) {
            $this->tree[$i] = min($this->tree[$i * 2], $this->tree[$i * 2 + 1]);
        }
    }

    public function busiestServers($k, $arrival, $load) {
        $busy = array_fill(0, $k, false);
        $n = count($arrival);
        $this->tree = array_fill(0, $k * 2, PHP_INT_MAX);
        $count = [];
        $pq = new SplPriorityQueue();
        $pq->setExtractFlags(SplPriorityQueue::EXTR_BOTH);

        $this->construct_tree($k);
        for ($i = 0; $i < $n; ++$i) {
            while (!$pq->isEmpty() && -$pq->top()['priority'] <= $arrival[$i]) {
                $server_id = $pq->extract()['data'];
                $this->update($k, $server_id, $server_id); // mark as available
                $busy[$server_id] = false;
            }

            $server_id = $i % $k;
            if (!$busy[$server_id]) {
                if (!isset($count[$server_id])) {
                    $count[$server_id] = 0;
                }
                $count[$server_id]++;
                $busy[$server_id] = true;
                $pq->insert($server_id, -($arrival[$i] + $load[$i]));
                $this->update($k, $server_id, PHP_INT_MAX); // mark as unavailable
                continue;
            }

            $id = PHP_INT_MAX;
            // find next available
            if ($server_id + 1 < $k) {
                $id = $this->query($k, $server_id + 1, $k);
                if ($id == PHP_INT_MAX) {
                    $id = $this->query($k, 0, $server_id);
                }
            } else {
                $id = $this->query($k, 0, $k);
            }
        
            // there is no available server
            if ($id == PHP_INT_MAX) {
                continue;
            }

            if (!isset($count[$id])) {
                $count[$id] = 0;
            }
            $count[$id]++;
            $busy[$id] = true;
            $this->update($k, $id, PHP_INT_MAX); 
            $pq->insert($id, -($arrival[$i] + $load[$i]));
        }

        $max_freq = 0;
        foreach ($count as $v) {
            $max_freq = max($max_freq, $v);
        }

        $res = [];
        foreach ($count as $server_id => $v) {
            if ($max_freq == $v) {
                $res[] = $server_id;
            }
        }

        return $res;
    }
}

```