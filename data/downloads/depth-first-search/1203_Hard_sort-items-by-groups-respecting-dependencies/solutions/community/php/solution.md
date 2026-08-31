# Solution Sort Items by Groups Respecting Dependencies

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4898678/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4898678/)

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
     * @param Integer $n
     * @param Integer $m
     * @param Integer[] $group
     * @param Integer[][] $beforeItems
     * @return Integer[]
     */
    function sortItems($n, $m, $group, $beforeItems) {
        $map = [];
        $groupGraph = [];
        $inGroupGraph = [];
        $groupDegrees = [];
        $arrDegrees = array_fill(0, $n, 0);
        $gr = array_fill(0, $n, 0);

        for ($i = 0; $i < $n; $i++) {
            if ($group[$i] > -1)
                $gr[$i] = $group[$i];
            else
                $gr[$i] = $i + $m + 1;
            $inGroupGraph[$i] = [];
            if (!isset($groupDegrees[$gr[$i]]))
                $groupDegrees[$gr[$i]] = 0;
            if (!isset($groupGraph[$gr[$i]]))
                $groupGraph[$gr[$i]] = [];
        }

        for ($i = 0; $i < count($beforeItems); $i++) {
            $map[$gr[$i]] = isset($map[$gr[$i]]) ? $map[$gr[$i]] : [];
            array_push($map[$gr[$i]], $i);
            $list = $beforeItems[$i];
            foreach ($list as $x) {
                if ($gr[$i] == $gr[$x]) {
                    array_push($inGroupGraph[$x], $i);
                    $arrDegrees[$i]++;
                } else {
                    array_push($groupGraph[$gr[$x]], $gr[$i]);
                    $groupDegrees[$gr[$i]] = isset($groupDegrees[$gr[$i]]) ? $groupDegrees[$gr[$i]] + 1 : 1;
                }
            }
        }

        $result = [];
        $index = 0;
        $q = new SplQueue();

        foreach ($groupDegrees as $num => $degree) {
            if ($degree == 0)
                $q->enqueue($num);
        }

        while (!$q->isEmpty()) {
            $num = $q->dequeue();
            foreach ($groupGraph[$num] as $x) {
                $groupDegrees[$x]--;
                if ($groupDegrees[$x] == 0)
                    $q->enqueue($x);
            }
            $queue = new SplQueue();
            foreach ($map[$num] as $y) {
                if ($arrDegrees[$y] == 0)
                    $queue->enqueue($y);
            }
            while (!$queue->isEmpty()) {
                $temp = $queue->dequeue();
                $result[$index++] = $temp;
                foreach ($inGroupGraph[$temp] as $y) {
                    $arrDegrees[$y]--;
                    if ($arrDegrees[$y] == 0)
                        $queue->enqueue($y);
                }
            }
        }

        if ($index != count($arrDegrees))
            return [];

        return $result;
    }
}

```