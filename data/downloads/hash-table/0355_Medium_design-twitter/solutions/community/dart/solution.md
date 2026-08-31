# Dart 2 maps and 1 list

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-twitter/solutions/5137502/](https://leetcode.com/problems/design-twitter/solutions/5137502/)

---

# Approach
I'm using 3 data structures:
- A map where the key is the user and the value is a set of tweets id
- A map where the key is the user and the value is a set of followees
- A list to contains the history of tweets in order they were emitted

Adding and removing from these data structures is rather straightforward.

To get the newsfeed, we take all tweets emitted by the user and then add the tweets emitted by the followees. The resulting set is used to filter the history of tweets and we take only the remaining 10.

# Code
```
class Twitter {
  Map<int, Set<int>> userTweets = {};
  Map<int, Set<int>> followers = {};
  List<int> tweetHistory = [];

  void postTweet(int userId, int tweetId) {
    if (!userTweets.containsKey(userId)) userTweets[userId] = {};
    userTweets[userId]!.add(tweetId);
    tweetHistory.add(tweetId);
  }

  List<int> getNewsFeed(int userId) {
    final newsTweets = {...?userTweets[userId]};

    followers[userId]
        ?.forEach((followee) => newsTweets.addAll(userTweets[followee] ?? {}));

    return tweetHistory.reversed
        .where((tweet) => newsTweets.contains(tweet))
        .take(10)
        .toList();
  }

  void follow(int followerId, int followeeId) {
    if (!followers.containsKey(followerId)) followers[followerId] = {};
    followers[followerId]!.add(followeeId);
  }

  void unfollow(int followerId, int followeeId) {
    if (followers.containsKey(followerId)) {
      followers[followerId]!.remove(followeeId);
    }
  }
}
```