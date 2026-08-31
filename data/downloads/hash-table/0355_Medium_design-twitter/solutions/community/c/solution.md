# C++ solution with explanation beats 99%, cheers! Don't rely on the runtime!

**Author:** LeetcodeKZ
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-twitter/solutions/476689/](https://leetcode.com/problems/design-twitter/solutions/476689/)

---

The great problem which is quite relevant in the industry.
The idea here is how you decide which data structure you are going to use. 
In this implementation, priority queue, deque, list have been used. 

**The first observation**
There is no need to store more than 10 (maxFeed) tweets for each user because the function getNewsFeed is already bounded with that constraint.  

**The second observation**
It's possible to implement functions "follow" and "unfollow" in **constant time** with the tradeoff between time and space complexity. 
Using the list and saving addresses of each relation all operations in these functions are constant. 


Also, there are lots of edge cases which you should clarify in an interview. The questions like:
1. Should tweets of a person be included in the getNewsFeed function?
2. Are all of the queries valid?
3. Is it possible that there is a query to unfollow without preceding follow function? The same values for followerId and followeeId etc. (see 2)

```c++
class Twitter {
public:
    Twitter() {
        time = 0;
        maxFeed = 10;     
    }

    void postTweet(int userId, int tweetId) {
        tweets[userId].push_back({time++, tweetId});
        if (tweets[userId].size() > maxFeed)  
            tweets[userId].pop_front();
    }

    vector<int> getNewsFeed(int userId) {
        priority_queue<pair<int, int> > feed;
        for (const auto& tweet : tweets[userId]) 
            feed.push(tweet);
        
        for (const auto& user : subscriptions[userId]) 
            for (const auto& tweet : tweets[user]) 
                feed.push(tweet);
            
        vector<int> result;
        while (!feed.empty()) {
            if (result.size() == maxFeed) 
                break;
            result.push_back(feed.top().second);
            feed.pop();
        }
        return result;
    }

    void follow(int followerId, int followeeId) {
        if (followerId != followeeId) {
            //if there is already such relation we do not need to do anything
            auto it = address.find(getKey(followerId, followeeId));
            if (it == end(address)) {
                subscriptions[followerId].push_front(followeeId);
                address[getKey(followerId, followeeId)] = begin(subscriptions[followerId]);    
            }
        }
    }

    void unfollow(int followerId, int followeeId) {
        auto key = getKey(followerId, followeeId);
        
        //delete only if it exists
        auto it = address.find(key);
        if (it != end(address)) 
            subscriptions[followerId].erase(address[key]);    
    }
private:
    int time, maxFeed;
    unordered_map<int, deque<pair<int, int>>> tweets;
    unordered_map<int, list<int>> subscriptions;
    unordered_map<long, list<int>::iterator> address;
    
    long getKey(int followerId, int followeeId) {
        return (long)followerId << 32 | (long)followeeId;
    }
};
```

**P.S.**
Don't rely on the runtime benchmarks. The variation with sets may give a better result however the time complexity is logarithmic O(log(n)).
Also, it depends on the testcases how diverse and how many testcases there are. If you want to make this implementation 99-100% 
please add this portion of code in the constructor.

```c++ 
        tweets.reserve(64);
        tweets.max_load_factor(0.25);
       
        subscriptions.reserve(64);
        subscriptions.max_load_factor(0.25);        
		
        address.reserve(64);
        address.max_load_factor(0.25);
```
