# C++ hash map to map solution with some analysis

**Author:** LisongSun
**Votes:** 2
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/1117648/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/1117648/)

---

**Key points:**
* The problem is simple, it is just about using which contain is more efficient.
* I choosed hash map from name string to a map of timestamp to hit counter.
* I suppose you could also choose multiset to save multiple entries of same time stamp. But if collision does happen a lot, multiset always grow per each recordTweet yet map can just bump the counter without using more space.
* On the other hand, if collision rarely happens, map may actually use more space since there are lot of value = 1 in it. So choose wisely depend on the use case.
* It is nice that I can use map::lower_bound to do a blurry search for the right spot in sequence. Otherwise iterate through all is not fun. In theory it should be log(n) performance.
```
  TweetCounts() {
    freq_.insert({"minute", 60});
    freq_.insert({"hour", 3600});
    freq_.insert({"day", 86400});
  }
    
  void recordTweet(const string & tweetName, int time) {
    ++lut_[tweetName][time];
  }
    
  vector<int> getTweetCountsPerFrequency(const string & freq, const string & tweetName, int startTime, int endTime) {
    int interval = freq_[freq];
    vector<int> ret(1+(endTime-startTime)/interval, 0);
    auto itor = lut_.find(tweetName);
    if (itor == lut_.end())
      return ret;
    auto itor2 = itor->second.lower_bound(startTime);
    while (itor2 != itor->second.end() && itor2->first <= endTime) {
      ret[(itor2->first-startTime)/interval] += itor2->second;
      ++itor2;
    }
    return ret;
  }

private:
  unordered_map<string, map<int, int>> lut_;
  map<string, int> freq_;
```