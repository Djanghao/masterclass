# C++ solution with max heap

**Author:** fittaoee
**Votes:** 76
**Link:** [https://leetcode.com/problems/design-twitter/solutions/82916/](https://leetcode.com/problems/design-twitter/solutions/82916/)

---

Use two hash tables to keep track of the friends relationship and the tweets, respectively. For getting the news feed, first use a separate variable "time" to keep track of the time order when posting, then use a max heap to get the most recent ones, since the heap will do the sorting for us.

Any suggestion is welcome!

    class Twitter {
    private:    
       unordered_map<int, set<int>> fo;
       unordered_map<int, vector<pair<int, int>>> t;
       long long time; 

    public:
    /** Initialize your data structure here. */
    Twitter() {
        time = 0;
    }
    
    /** Compose a new tweet. */
    void postTweet(int userId, int tweetId) {
        t[userId].push_back({time++, tweetId});
    }
    
    /** Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. */
    vector<int> getNewsFeed(int userId) {
        priority_queue<pair<int, int>> maxHeap; 
        for (auto it=t[userId].begin();it!=t[userId].end();++it)
            maxHeap.push(*it);
        for (auto it1=fo[userId].begin();it1!=fo[userId].end();++it1){
            int usr = *it1; // get target user
            for (auto it2=t[usr].begin();it2!=t[usr].end();++it2)
                maxHeap.push(*it2);
        }   
        vector<int> res;
        while(maxHeap.size()>0) {
            res.push_back(maxHeap.top().second);
            if (res.size()==10) break;
            maxHeap.pop();
        }
        return res;
    }
    
    /** Follower follows a followee. If the operation is invalid, it should be a no-op. */
    void follow(int followerId, int followeeId) {
        if (followerId != followeeId)
            fo[followerId].insert(followeeId);
    }
    
    /** Follower unfollows a followee. If the operation is invalid, it should be a no-op. */
    void unfollow(int followerId, int followeeId) {
        fo[followerId].erase(followeeId);
    }
};