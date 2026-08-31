# Simple JavaScript solution using Map and Array.

**Author:** dmtrmrtnv
**Votes:** 6
**Link:** [https://leetcode.com/problems/design-twitter/solutions/3594479/](https://leetcode.com/problems/design-twitter/solutions/3594479/)

---

# Approach
Users are stored in a Map, each key is a userId and the value is a Set of followees. Tweets are stored in an array, so when a user post a new tweet it will be placed at the end as a recent one, so we can filter tweets from the end and return a subset with 10 recent tweets.


# Code
```
var Twitter = function () {
    this.users = new Map();
    this.tweets = [];
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.users.has(userId)) this.users.set(userId, new Set());
    this.tweets.push({userId, tweetId});
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const user = this.users.get(userId);
    const recentTweets = [];
    for (let i = this.tweets.length - 1; i >= 0 && recentTweets.length < 10; i--) {
        if (user.has(this.tweets[i].userId) || this.tweets[i].userId === userId) {
            recentTweets.push(this.tweets[i].tweetId);
        }
    }
    return recentTweets;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    const user = this.users.get(followerId) || new Set();
    user.add(followeeId);
    this.users.set(followerId, user);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    this.users.get(followerId)?.delete(followeeId);
};
```