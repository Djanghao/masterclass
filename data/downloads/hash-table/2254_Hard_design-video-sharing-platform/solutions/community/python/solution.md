# Python Solution Using Heap Beats 99%

**Author:** Jothanoth
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/5380326/](https://leetcode.com/problems/design-video-sharing-platform/solutions/5380326/)

---

```
class VideoSharingPlatform:

    def __init__(self):
        self.freed_id = []
        self.video = {}
        self.video_views = {}
        self.video_info = {}

    def upload(self, vid: str) -> int:
        videoId = len(self.video)
        if self.freed_id:
            videoId = heapq.heappop(self.freed_id)
        self.video[videoId] = vid
        self.video_info[videoId]= [0,0]
        self.video_views[videoId]=0
        return videoId

    def remove(self, videoId: int) -> None:
        if videoId not in self.video: 
            return
        heapq.heappush(self.freed_id, videoId)
        del self.video[videoId]
        del self.video_views[videoId]
        del self.video_info[videoId]

    def watch(self, videoId: int, startMinute: int, endMinute: int) -> str:
        if videoId not in self.video:
            return "-1"
        self.video_views[videoId]+=1
        v = self.video[videoId]
        return v[startMinute: min(endMinute, len(v)) +1]  #####

    def like(self, videoId: int) -> None:
        if videoId not in self.video:
            return
        self.video_info[videoId][0] += 1

    def dislike(self, videoId: int) -> None:
        if videoId not in self.video:
            return
        self.video_info[videoId][1] += 1

    def getLikesAndDislikes(self, videoId: int) -> List[int]:
        if videoId not in self.video:
            return [-1]
        return self.video_info[videoId]

    def getViews(self, videoId: int) -> int:
        if videoId not in self.video:
            return -1
        return self.video_views[videoId]
```
