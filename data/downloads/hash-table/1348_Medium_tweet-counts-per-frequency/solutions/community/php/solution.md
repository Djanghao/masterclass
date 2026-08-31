# Solution Tweet Counts Per Frequency

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4931913/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4931913/)

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
class TweetCounts {
    private $tweets;
    
    function __construct() {
        $this->tweets = [];
    }
  
    function recordTweet($tweetName, $time) {
        if (!isset($this->tweets[$tweetName])) {
            $this->tweets[$tweetName] = [];
        }
        $this->tweets[$tweetName][] = $time;
    }
  
    function getTweetCountsPerFrequency($freq, $tweetName, $startTime, $endTime) {
        $frequencyMap = [
            "minute" => 60,
            "hour" => 3600,
            "day" => 86400
        ];
        
        $frequency = $frequencyMap[$freq];
        $result = [];
        
        $numChunks = ceil(($endTime - $startTime + 1) / $frequency);
        for ($i = 0; $i < $numChunks; $i++) {
            $result[] = 0;
        }
        
        foreach ($this->tweets[$tweetName] as $tweetTime) {
            if ($tweetTime >= $startTime && $tweetTime <= $endTime) {
                $index = floor(($tweetTime - $startTime) / $frequency);
                $result[$index]++;
            }
        }
        
        return $result;
    }
}


```