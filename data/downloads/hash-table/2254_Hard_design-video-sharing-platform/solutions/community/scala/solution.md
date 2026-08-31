# Priority Queue and Map (Scala)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/3303534/](https://leetcode.com/problems/design-video-sharing-platform/solutions/3303534/)

---

# Intuition
This is not a hard problem, imho.
The only vaguely intricated bit is the reusage of removed video ids.
It can be solved with a PriorityQueue (min heap) that stores recyclable ids: when a new video is uploaded and an id is needed, we can first check if a recyclable id is available (the min heap will have it at the top) and reuse that, otherwise increase an internal sequential counter


# Complexity
- Time complexity:
O(log n) to generate a new id in the worst case (i.e.: when there are recyclable ids to be used)
O(log n) to upload a video
O(1) to fetch any data other than content about the videos
O(n) to fetch the video content where n is the video length

- Space complexity:
O(n) videos are stored in a map and ids are stored in a priority queue. For both the space complexity is linear

# Code
```
class VideoSharingPlatform() {
    import collection.mutable
    
    case class Video(content: String, var views: Int = 0, var likes: Int = 0, var dislikes: Int = 0)

    var nextVideoId = -1

    val videos = mutable.Map.empty[Int, Video]
    val videoIds = mutable.PriorityQueue.empty[Int](Ordering.by(-_))

    private def makeVideoId: Int = {
        if (videoIds.isEmpty) {
            nextVideoId += 1
            nextVideoId
        } else {
            videoIds.dequeue
        }
    }

    def upload(video: String): Int = {
        val id = makeVideoId
        videos.put(id, Video(video))
        id
    }

    def remove(videoId: Int) {
        if (videos.isDefinedAt(videoId)) {
            videos.remove(videoId)
            videoIds.enqueue(videoId)
        }
    }

    def watch(videoId: Int, startMinute: Int, endMinute: Int): String = {
        videos.get(videoId).map { video =>
            video.views += 1
            video.content.substring(startMinute, Math.min(video.content.length, endMinute + 1))
        }.getOrElse("-1")
    }

    def like(videoId: Int) {
        videos.get(videoId).foreach(v => v.likes += 1)
    }

    def dislike(videoId: Int) {
        videos.get(videoId).foreach(v => v.dislikes += 1)
    }

    def getLikesAndDislikes(videoId: Int): Array[Int] = {
        videos.get(videoId).map(v => Array(v.likes, v.dislikes)).getOrElse(Array(-1))
    }

    def getViews(videoId: Int): Int = {
        videos.get(videoId).map(_.views).getOrElse(-1)        
    }

}

/**
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * var obj = new VideoSharingPlatform()
 * var param_1 = obj.upload(video)
 * obj.remove(videoId)
 * var param_3 = obj.watch(videoId,startMinute,endMinute)
 * obj.like(videoId)
 * obj.dislike(videoId)
 * var param_6 = obj.getLikesAndDislikes(videoId)
 * var param_7 = obj.getViews(videoId)
 */
```