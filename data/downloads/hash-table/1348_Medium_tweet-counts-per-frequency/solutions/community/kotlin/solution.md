# Kotlin, HashMap + List

**Author:** decsent
**Votes:** 0
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/2945784/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/2945784/)

---

```
class TweetCounts() {
 
    // tweet name | tweets
    private val storage = hashMapOf<String, MutableList<Int>>()

    fun recordTweet(tweetName: String, time: Int) {
        val timeline = storage.getOrDefault(tweetName, mutableListOf())
        timeline.add(time)
        storage[tweetName] = timeline
    }

    fun getTweetCountsPerFrequency(freq: String, tweetName: String, startTime: Int, endTime: Int): List<Int> {
        if (storage.isEmpty()) return emptyList()

        val tweets = storage[tweetName]
        if (tweets.isNullOrEmpty()) return emptyList()

        val chunkType = getChunkType(freq)

        val intervalSize = chunkType.intervalSize

        val result = mutableListOf<Int>()

        for (chunkIntervalStart in startTime .. endTime step intervalSize) {
            val chunkIntervalEnd = Math.min(chunkIntervalStart + intervalSize - 1, endTime)
            val tweetsInInterval = tweets.filter { time -> time in chunkIntervalStart..chunkIntervalEnd }
                .size
            result.add(tweetsInInterval)
        }

        return result
    }

    enum class ChunkType(val chunkName: String, val intervalSize: Int) {
        MIN("minute", 60),
        HOUR("hour", 3600),
        DAY("day", 86400)
    }

    private fun getChunkType(freq: String): ChunkType {
        return when (freq) {
            ChunkType.MIN.chunkName -> ChunkType.MIN
            ChunkType.HOUR.chunkName -> ChunkType.HOUR
            else -> ChunkType.DAY
        }
    }

}