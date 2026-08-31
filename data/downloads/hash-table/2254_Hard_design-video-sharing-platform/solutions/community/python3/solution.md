# [Python] Use min heap to store deleted video IDs for reuse

**Author:** alvinc21
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/4577300/](https://leetcode.com/problems/design-video-sharing-platform/solutions/4577300/)

---

# Intuition
The trickiest part to the problem is to find a way to reuse the ids associated with deleted videos. Since the question requires the smallest available ID to be used at each time, a min heap is perfect for the job. This min heap will store the ids from deleted videos, and video uploads will attempt to use any ids from this heap if the heap is not empty, otherwise it will use the global id.

# Approach
Use a min heap to store ids associated with deleted videos so that they can be reused for new video uploads. Videos should be stored in a dictionary with the videoId as the key and a Video class as the value. 

# Complexity
- Time complexity:
The functions are bounded by the O(log N) time needed in Python to push or pop from a heap.

- Space complexity:
O(n * (max video size)) where n is the number of videos.

# Code
```
class Video:
    id: int
    data: str
    likes: int
    dislikes: int
    views: int

    def __init__(self, id, data):
        self.id = id 
        self.data = data
        self.likes = 0
        self.dislikes = 0
        self.views = 0

class VideoSharingPlatform:

    def __init__(self):
        self.index = 0
        self.indexes_heap = []
        self.videos = {}


    def upload(self, video: str) -> int:
        id = self.index
        if len(self.indexes_heap) > 0:
            id = heapq.heappop(self.indexes_heap)
        else:
            self.index += 1
        
        self.videos[id] = Video(id, video)
        return id
        

    def remove(self, videoId: int) -> None:
        if videoId in self.videos:
            del self.videos[videoId]
            heapq.heappush(self.indexes_heap, videoId)

    def watch(self, videoId: int, startMinute: int, endMinute: int) -> str:
        if videoId in self.videos:
            video = self.videos[videoId]
            video.views += 1
            return video.data[startMinute:min(endMinute + 1, len(video.data))]
        else:
            return "-1"

    def like(self, videoId: int) -> None:
        if videoId in self.videos:
            self.videos[videoId].likes += 1

    def dislike(self, videoId: int) -> None:
        if videoId in self.videos:
            self.videos[videoId].dislikes += 1

    def getLikesAndDislikes(self, videoId: int) -> List[int]:
        if videoId in self.videos:
            video = self.videos[videoId]
            return [video.likes, video.dislikes]
        else:
            return[-1]

    def getViews(self, videoId: int) -> int:
        if videoId in self.videos:
            return self.videos[videoId].views
        else:
            return -1


# Your VideoSharingPlatform object will be instantiated and called as such:
# obj = VideoSharingPlatform()
# param_1 = obj.upload(video)
# obj.remove(videoId)
# param_3 = obj.watch(videoId,startMinute,endMinute)
# obj.like(videoId)
# obj.dislike(videoId)
# param_6 = obj.getLikesAndDislikes(videoId)
# param_7 = obj.getViews(videoId)
```