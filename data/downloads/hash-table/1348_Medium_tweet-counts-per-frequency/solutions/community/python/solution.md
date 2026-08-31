# Easy to Read Python Solution

**Author:** r2rogator
**Votes:** 21
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503752/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503752/)

---

```
class TweetCounts:

    def __init__(self):
        self.dict = {}
        

    def recordTweet(self, tweetName: str, time: int) -> None:
        if(tweetName not in self.dict):
            self.dict[tweetName] = [time]
        else:
            self.dict[tweetName].append(time)
        

    def getTweetCountsPerFrequency(self, freq: str, tweetName: str, startTime: int, endTime: int) -> List[int]:
        times = self.dict[tweetName]
        
        size = 0 
        secs = 0
        
        if(freq == 'minute'):
            secs = 60
            size = (endTime - startTime) / 60 + 1
        if(freq == 'hour'):
            secs = 3600
            size = (endTime - startTime) / 3600 + 1
        if(freq == 'day'):
            secs = 86400
            size = (endTime - startTime) / 86400 + 1
                
        r = [0] * int(size)
        
        for i in times:
            if(startTime <= i and i <= endTime):
                index = int((i-startTime)/secs)
                r[index] += 1

        return r
```