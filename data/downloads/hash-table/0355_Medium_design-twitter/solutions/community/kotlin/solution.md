# Easy solution | Kotlin | Sequences

**Author:** Atrilos
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-twitter/solutions/5051150/](https://leetcode.com/problems/design-twitter/solutions/5051150/)

---

# Code
```
class Twitter {

    private val usersToTweets = mutableMapOf<Int, MutableList<Tweet>>()
    private var currentTime = 0
    private val graph = mutableMapOf<Int, MutableSet<Int>>()

    fun postTweet(userId: Int, tweetId: Int) {
        usersToTweets.getOrPut(userId) { mutableListOf() }.add(Tweet(tweetId, currentTime++))
    }

    fun getNewsFeed(userId: Int): List<Int> =
        ((graph[userId] ?: mutableListOf()) + userId).asSequence()
            .map { usersToTweets[it] ?: emptyList() }
            .flatten()
            .sortedWith(compareByDescending { it.time })
            .take(10)
            .map { it.id }
            .toList()

    fun follow(followerId: Int, followeeId: Int) {
        graph.getOrPut(followerId) { mutableSetOf() }.add(followeeId)
    }

    fun unfollow(followerId: Int, followeeId: Int) {
        graph.getOrPut(followerId) { mutableSetOf() }.remove(followeeId)
    }

    data class Tweet(val id: Int, val time: Int)
}
```