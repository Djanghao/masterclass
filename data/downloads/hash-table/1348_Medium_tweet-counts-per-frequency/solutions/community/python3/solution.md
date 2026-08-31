# [Python3] linear scan

**Author:** ye15
**Votes:** 40
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503515/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503515/)

---

Algorithm:
Scan through the time for a given `tweetName` and add the count in the corresponding interval. 

Implementation: 
```
class TweetCounts:

    def __init__(self):
        self.tweets = dict()

    def recordTweet(self, tweetName: str, time: int) -> None:
        self.tweets.setdefault(tweetName, []).append(time)

    def getTweetCountsPerFrequency(self, freq: str, tweetName: str, startTime: int, endTime: int) -> List[int]:
        if freq == "minute": seconds = 60 
        elif freq == "hour": seconds = 3600
        else: seconds = 86400
        
        ans = [0] * ((endTime - startTime)//seconds + 1)
        for t in self.tweets[tweetName]:
            if startTime <= t <= endTime: ans[(t-startTime)//seconds] += 1
        return ans 
```
Analysis:
Time complexity `O(N)`
Space complexity `O(N)`