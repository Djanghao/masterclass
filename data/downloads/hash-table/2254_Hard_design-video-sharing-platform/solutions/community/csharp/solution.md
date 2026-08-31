# Easy implementation - just follow the instructions / contraints in the question.

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/4343592/](https://leetcode.com/problems/design-video-sharing-platform/solutions/4343592/)

---

# Intuition
Followed the instructions. Try on your own to implement with HashMap before viweing the solution. Its worth it.. Happy coding!

# Approach
Use PriorityQueue for freed up video ids. Using hashMap for constant time complexity.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(n), where n = no. of active videos (correct me if I'm wrong :) )

# Code
```
public class VideoSharingPlatform {
    int index = 0;
    Dictionary<int,string> videoStore;
    Dictionary<int, int[]> likesAndDislikes;
    Dictionary<int, int> views;
    PriorityQueue<int,int> freeVideoId;


    public VideoSharingPlatform() {
        videoStore = new();
        likesAndDislikes = new();
        views = new();
        freeVideoId = new();
    }
    
    public int Upload(string video) {
        int id = -1;
        if(freeVideoId.Count>0)
            id = freeVideoId.Dequeue();
        else
            id = index++;
        videoStore.Add(id, video);
        likesAndDislikes.Add(id, new int[2]);
        views.Add(id, 0);
        return id;
    }
    
    public void Remove(int videoId) {
        if(!videoStore.ContainsKey(videoId))
            return;
        videoStore.Remove(videoId);
        likesAndDislikes.Remove(videoId);
        views.Remove(videoId);
        freeVideoId.Enqueue(videoId,videoId);
    }
    
    public string Watch(int videoId, int startMinute, int endMinute) {
        if(!videoStore.ContainsKey(videoId))
            return "-1";
        string video = videoStore[videoId];
        views[videoId]++;
        int startIndex = Math.Max(startMinute, 0);
        startIndex = Math.Min(video.Length-1, startIndex);
        int endIndex = Math.Min(endMinute, video.Length-1);
        endIndex = Math.Max(0, endIndex);
        return video.Substring(startIndex, endIndex-startIndex+1);
    }
    
    public void Like(int videoId) {
        if(!likesAndDislikes.ContainsKey(videoId))
            return;
        likesAndDislikes[videoId][0]++;
    }
    
    public void Dislike(int videoId) {
        if(!likesAndDislikes.ContainsKey(videoId))
            return;
        likesAndDislikes[videoId][1]++;
    }
    
    public int[] GetLikesAndDislikes(int videoId) {
        if(!likesAndDislikes.ContainsKey(videoId))
            return new int[1]{-1};
        return likesAndDislikes[videoId];
    }
    
    public int GetViews(int videoId) {
        if(!views.ContainsKey(videoId))
            return -1;
        return views[videoId];
    }
}

/**
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * VideoSharingPlatform obj = new VideoSharingPlatform();
 * int param_1 = obj.Upload(video);
 * obj.Remove(videoId);
 * string param_3 = obj.Watch(videoId,startMinute,endMinute);
 * obj.Like(videoId);
 * obj.Dislike(videoId);
 * int[] param_6 = obj.GetLikesAndDislikes(videoId);
 * int param_7 = obj.GetViews(videoId);
 */
```