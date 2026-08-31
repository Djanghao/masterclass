# Python solution

**Author:** StefanPochmann
**Votes:** 276
**Link:** [https://leetcode.com/problems/design-twitter/solutions/82863/](https://leetcode.com/problems/design-twitter/solutions/82863/)

---

    class Twitter(object):
    
        def __init__(self):
            self.timer = itertools.count(step=-1)
            self.tweets = collections.defaultdict(collections.deque)
            self.followees = collections.defaultdict(set)
    
        def postTweet(self, userId, tweetId):
            self.tweets[userId].appendleft((next(self.timer), tweetId))
    
        def getNewsFeed(self, userId):
            tweets = heapq.merge(*(self.tweets[u] for u in self.followees[userId] | {userId}))
            return [t for _, t in itertools.islice(tweets, 10)]
    
        def follow(self, followerId, followeeId):
            self.followees[followerId].add(followeeId)
    
        def unfollow(self, followerId, followeeId):
            self.followees[followerId].discard(followeeId)