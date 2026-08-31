# C# Hashmap-based Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/5569232/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/5569232/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to implement the TweetCounts class with methods to record tweets and to get the counts of tweets per specified frequency. The frequencies can be "minute", "hour", or "day", corresponding to 60, 3600, and 86400 seconds respectively.
___

# Approach
<!-- Describe your approach to solving the problem. -->// Initialization: A dictionary tweetRecords is used to store lists of tweet times keyed by tweet names.
//  RecordTweet Method:
//  *If the tweet name is not already in the dictionary, we initialize a new list for it.
//  *We then add the tweet time to the list for the given tweet name.
//  GetTweetCountsPerFrequency Method:
//  *Calculate the interval in seconds based on the given frequency using the helper method 
//  GetIntervalInSeconds.
//  *Calculate the number of chunks required to cover the period from startTime to endTime.
//  *Initialize an array result to store the count of tweets for each chunk.
//  *Iterate over the tweet times for the given tweet name, and for each time that falls within the given 
//  period, calculate the corresponding chunk index and increment the count for that chunk in the result 
//  array.
//  *Convert the result array to a list and return it.
//  GetIntervalInSeconds Method: Converts the frequency string to the corresponding interval in seconds.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N), where N is the number of tweets for the specified tweet name.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(N), where N is the total number of tweets recorded.
___

# Code
```
using System;
using System.Collections.Generic;

public class TweetCounts {

    private Dictionary<string, List<int>> tweetRecords;

    public TweetCounts() {
        tweetRecords = new Dictionary<string, List<int>>();
    }
    
    public void RecordTweet(string tweetName, int time) {
        if (!tweetRecords.ContainsKey(tweetName)) {
            tweetRecords[tweetName] = new List<int>();
        }
        tweetRecords[tweetName].Add(time);
    }
    
    public IList<int> GetTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime) {
        int interval = GetIntervalInSeconds(freq);
        int size = (endTime - startTime) / interval + 1;
        int[] result = new int[size];
        
        if (tweetRecords.ContainsKey(tweetName)) {
            foreach (var time in tweetRecords[tweetName]) {
                if (time >= startTime && time <= endTime) {
                    int index = (time - startTime) / interval;
                    result[index]++;
                }
            }
        }

        return result;
    }

    private int GetIntervalInSeconds(string freq) {
        switch (freq) {
            case "minute":
                return 60;
            case "hour":
                return 3600;
            case "day":
                return 86400;
            default:
                throw new ArgumentException("Invalid frequency");
        }
    }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * TweetCounts obj = new TweetCounts();
 * obj.RecordTweet(tweetName,time);
 * IList<int> param_2 = obj.GetTweetCountsPerFrequency(freq,tweetName,startTime,endTime);
 */
```