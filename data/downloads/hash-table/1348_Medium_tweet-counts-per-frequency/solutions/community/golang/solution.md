# Go solution beats 100%

**Author:** ExpOA3
**Votes:** 1
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503757/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/503757/)

---

Noticed of line 31 and line 37:

1. The length of result should be: result := make([]int, (endTime - startTime + interval) / interval)
2. The correct counting in the loop should be result[(time-startTime)/interval]++

That's said, the start time is not 0, result[0] should be calculated from wherever the starttime begins, instead of 0.

Time Complexity:
1. For RecordTweet, it is a hashmap insertion, which is `O(1)`;
2. For GetTweetCountsPerFrequency, it takes the array of time out from hashmap with the key tweetName, then iterate it from the beginning to the end. Therefore the time complexity is `O(n)`; 

```
type TweetCounts struct {
    Tweet map[string][]int // key: name val: []int times
}

func Constructor() TweetCounts {
    return TweetCounts{
        Tweet: map[string][]int{},
    }
}


func (this *TweetCounts) RecordTweet(tweetName string, time int)  {
    if _, ok := this.Tweet[tweetName]; !ok {
        this.Tweet[tweetName] = []int{time}
    } else {
        this.Tweet[tweetName] = append(this.Tweet[tweetName], time)
    }
}


func (this *TweetCounts) GetTweetCountsPerFrequency(freq string, tweetName string, startTime int, endTime int) []int {
    interval := GetInterval(freq)
	
    if _, ok := this.Tweet[tweetName]; !ok {
        return []int{}
    }
    
    result := make([]int, (endTime - startTime + interval) / interval)
    for _, time := range this.Tweet[tweetName] {
        if time > endTime || time < startTime {
            continue
        }
        
        thisInterval := (time-startTime)/interval
        result[thisInterval]++
    }
    
    return result
}


func GetInterval(freq string) int {
    if freq == "minute" {
        return 60
    }
    
    if freq == "hour" {
        return 3600
    }
    
    if freq == "day" {
        return 86400
    }
    
    return 0 // never reach here
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * obj := Constructor();
 * obj.RecordTweet(tweetName,time);
 * param_2 := obj.GetTweetCountsPerFrequency(freq,tweetName,startTime,endTime);
 */
 ```