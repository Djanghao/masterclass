# PHP. BFS

**Author:** CEERG
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3593276/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3593276/)

---

# Code
```
class Solution {
    public function numOfMinutes(int $n, int $headID, array $manager, array $informTime): int {
        $adj = [];

        for ($i = 0; $i < $n; $i++)
            $adj[$manager[$i]][] = $i;

        $maxTime = 0;

        $q = new SplQueue();
        $q->enqueue([$headID, 0]);

        while (!$q->isEmpty()) {
            [$id, $time] = $q->dequeue();

            $maxTime = max($maxTime, $time);

            if (array_key_exists($id, $adj))
                foreach ($adj[$id] as $emp)
                    $q->enqueue([$emp, $time + $informTime[$id]]);
        }

        return $maxTime;
    }
}
```