# Beating 100% users in Runtime & Memory using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/5485914/](https://leetcode.com/problems/find-all-people-with-secret/solutions/5485914/)

---

# Code
```
class Solution {
    function findAllPeople($n, $meetings, $firstPerson) {
        $graph = []; 
        for ($i = 0; $i < $n; $i++) {
            $graph[$i] = [];
        }

        foreach ($meetings as $meeting) {
            $person1 = $meeting[0];
            $person2 = $meeting[1];
            $time = $meeting[2];
            $graph[$person1][] = [$person2, $time];
            $graph[$person2][] = [$person1, $time];
        }

        $earliestSecretTime = array_fill(0, $n, PHP_INT_MAX); 
        $earliestSecretTime[0] = 0;
        $earliestSecretTime[$firstPerson] = 0;

        $queue = new SplQueue();
        $queue->enqueue(0);
        $queue->enqueue($firstPerson);

        while (!$queue->isEmpty()) {
            $person = $queue->dequeue();
            $currentTime = $earliestSecretTime[$person];

            foreach ($graph[$person] as $meeting) {
                $neighbor = $meeting[0];
                $meetingTime = $meeting[1];

                if ($meetingTime >= $currentTime && $meetingTime < $earliestSecretTime[$neighbor]) {
                    $earliestSecretTime[$neighbor] = $meetingTime;
                    $queue->enqueue($neighbor);
                }
            }
        }

        $peopleWithSecret = [];
        for ($i = 0; $i < $n; $i++) {
            if ($earliestSecretTime[$i] !== PHP_INT_MAX) {
                $peopleWithSecret[] = $i;
            }
        }

        return $peopleWithSecret;
    }
}
```