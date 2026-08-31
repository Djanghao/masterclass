# Using Custom Data Structure

**Author:** parthhbti
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-twitter/solutions/4664500/](https://leetcode.com/problems/design-twitter/solutions/4664500/)

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

struct TwitterUser {
    var userId: Int
    var tweets: [Tweet]
    var followees: Set<Int>
}

struct Tweet {
    var tweetId: Int
    var timeStamp: Int
}

class Twitter {
    static var counter = 0
    var users: [TwitterUser] = []
    init() {

    }

    private func getFollowees(userId: Int) -> [Int] {
        Array(users.filter { $0.userId == userId}.last?.followees ?? [])
    }

    private func getTweets(userId: Int) -> [Tweet] {
        users.filter { $0.userId == userId}.last?.tweets ?? []
    }

    func postTweet(_ userId: Int, _ tweetId: Int) {
        let followees = getFollowees(userId: userId)
        Twitter.counter += 1
        var tweets = getTweets(userId: userId)
        tweets.append(Tweet(tweetId: tweetId, timeStamp: Twitter.counter))
        users.append(TwitterUser(userId: userId, tweets: tweets, followees: Set(followees)))
    }

    func getNewsFeed(_ userId: Int) -> [Int] {
        let myTweets = users.filter { $0.userId == userId}.last?.tweets ?? []
        let followees = users.filter {$0.userId == userId}.last?.followees
        var followeesTweets: [Tweet] = []
        if let followees = followees {
            for id in followees {
                followeesTweets += getTweets(userId: id)
            }
        }
        var filnalTweets = (myTweets + followeesTweets).compactMap { $0}
        let newsFeeds = filnalTweets.sorted { $0.timeStamp > $1.timeStamp }
        return newsFeeds.prefix(10).map {$0.tweetId}
    }

   func follow(_ followerId: Int, _ followeeId: Int) {
        var followees = getFollowees(userId: followerId)
        let tweets = getTweets(userId: followerId)
        followees.append(followeeId)
        users = users.filter { $0.userId != followerId }
        users.append(TwitterUser(userId: followerId, tweets: tweets, followees: Set(followees)))
    }

    func unfollow(_ followerId: Int, _ followeeId: Int) {
       var followees = getFollowees(userId: followerId)
       let tweets = getTweets(userId: followerId)
        followees = followees.filter {$0 != followeeId}
        users = users.filter { $0.userId != followerId }
        users.append(TwitterUser(userId: followerId, tweets: tweets, followees: Set(followees)))
    }
}

```