# [Python] 12ms 99.1% better without heap and queue

**Author:** avigupta10
**Votes:** 23
**Link:** [https://leetcode.com/problems/design-twitter/solutions/1516356/](https://leetcode.com/problems/design-twitter/solutions/1516356/)

---

![image](./images/0.png)
```
class User:
    def __init__(self, userId):
        self.userId = userId
        self.tweets = {}
        self.followers = set()
        self.follows = set()


class Twitter(object):

    def __init__(self):
        self.users = {}
        self.time = 0

    def create(self, userid):
        
        if userid not in self.users:
            self.users[userid] = User(userid)

    def postTweet(self, userId, tweetId):
        """
        :type userId: int
        :type tweetId: int
        :rtype: None
        """
        self.create(userId)
        self.users[userId].tweets[tweetId] = self.time
        self.time += 1

    def getNewsFeed(self, userId):
        """
        :type userId: int
        :rtype: List[int]
        """
        feed = []
        temp = []
        self.create(userId)
        for i in self.users[userId].tweets:
            temp.append([i, self.users[userId].tweets[i]])
        for i in self.users[userId].follows:
            print(i.tweets)
            for j in i.tweets:
                temp.append([j, i.tweets[j]])
        temp.sort(key=lambda x:x[1], reverse=True)

        for i in temp:
            feed.append(i[0])
        return feed[:10]

    def follow(self, followerId, followeeId):
        """
        :type followerId: int
        :type followeeId: int
        :rtype: None
        """
        self.create(followerId)
        self.create(followeeId)
        self.users[followerId].follows.add(self.users[followeeId])
        self.users[followeeId].followers.add(self.users[followerId])

    def unfollow(self, followerId, followeeId):
        """
        :type followerId: int
        :type followeeId: int
        :rtype: None
        """
        self.create(followerId)
        self.create(followeeId)
        if self.users[followerId] in self.users[followeeId].followers:
            self.users[followeeId].followers.remove(self.users[followerId])
            self.users[followerId].follows.remove(self.users[followeeId])
