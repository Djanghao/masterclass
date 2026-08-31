# Binary Solution || C++ || hashMap

**Author:** samahakal04
**Votes:** 2
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/3118943/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/3118943/)

---



# Code : 1 (Optimal)
```
class TweetCounts {
    unordered_map<string,map<int,int>>mp;
public:
    TweetCounts() {
        
    }
    
    void recordTweet(string tweetName, int time) {
        mp[tweetName][time]++;
    }
    
    vector<int> getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime) {
        int interval = freq[0] == 'm' ? 60 : (freq[0] == 'h' ? 60*60 : 60*60*24);

        vector<int>ans((endTime-startTime)/interval + 1,0);
        const auto &end = mp[tweetName].upper_bound(endTime);
        for(auto it = mp[tweetName].lower_bound(startTime);it != end;it++){
            ans[(it->first-startTime)/interval] += it->second;
        }
        return ans;
    }
};

```

# Code : 2
```
class TweetCounts {
public:
    unordered_map<string,vector<int>>mp;
    TweetCounts() {
        
    }
    
    void recordTweet(string tweetName, int time) {
        mp[tweetName].push_back(time);
    }
    
    vector<int> getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime) {
        int interval = 60;
        if(freq == "hour") interval *= 60;
        if(freq == "day") interval *= 60*24;
        vector<int>ans((endTime-startTime)/interval + 1,0);
        for(auto ti : mp[tweetName]){
            if(ti>= startTime and ti<=endTime)
                ans[(ti-startTime)/interval]++;
        }
        return ans;
    }
};


```