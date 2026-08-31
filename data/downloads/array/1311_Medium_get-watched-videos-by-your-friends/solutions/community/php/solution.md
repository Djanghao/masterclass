# Solution Get Watched Videos by Your Friends

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4914681/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/4914681/)

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
     * @param String[][] $watchedVideos
     * @param Integer[][] $friends
     * @param Integer $id
     * @param Integer $level
     * @return String[]
     */
    function watchedVideosByFriends($watchedVideos, $friends, $id, $level) {
        $queue = new SplQueue();
        $queue->enqueue($id);
        $layer = -1;
        $levels = array_fill(0, count($friends), -1);

        while (!$queue->isEmpty()) {
            $layer++;
            $size = $queue->count();
            for ($i = 0; $i < $size; $i++) {
                $person = $queue->dequeue();
                $levels[$person] = $layer;
                $queue->enqueue($person);
            }
            for ($i = 0; $i < $size; $i++) {
                $person = $queue->dequeue();
                foreach ($friends[$person] as $friend) {
                    if ($levels[$friend] == -1) {
                        $queue->enqueue($friend);
                    }
                }
            }
            if ($layer == $level) {
                break;
            }
        }

        $personList = [];
        for ($i = 0; $i < count($levels); $i++) {
            if ($levels[$i] == $level) {
                $personList[] = $i;
            }
        }

        if (count($personList) == 0) {
            return [];
        }

        $frequencyMap = [];
        foreach ($personList as $person) {
            foreach ($watchedVideos[$person] as $video) {
                if (!isset($frequencyMap[$video])) {
                    $frequencyMap[$video] = 0;
                }
                $frequencyMap[$video]++;
            }
        }

        $reverseMap = [];
        foreach ($frequencyMap as $video => $frequency) {
            if (!isset($reverseMap[$frequency])) {
                $reverseMap[$frequency] = [];
            }
            $reverseMap[$frequency][] = $video;
        }

        ksort($reverseMap);

        $resultList = [];
        foreach ($reverseMap as $frequency => $videos) {
            sort($videos);
            foreach ($videos as $video) {
                $resultList[] = $video;
            }
        }

        return $resultList;
    }
}

```