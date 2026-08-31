# Java |  Easy To Understand | TreeSet and arrays

**Author:** kumar15
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/2347320/](https://leetcode.com/problems/design-video-sharing-platform/solutions/2347320/)

---

```
class VideoSharingPlatform {
    int curr;
    HashMap<Integer, String> names;
    int[] likes;
    int[] dislikes;
    int[] views;
    TreeSet<Integer> pool;
    public VideoSharingPlatform() {
        pool = new TreeSet<>();
        curr=0;
        names = new HashMap<>();
        likes = new int[100001];
        dislikes = new int[100001];
        views = new int[100001];
    }
    
    public int upload(String video) {
        int ret = -1;
        if(!pool.isEmpty()){
            ret = pool.first();
            pool.remove(ret);
        }
        else{
            ret = curr;
            curr++;
            
        }
        names.put(ret, video);
        return ret;
        
    }
    
    public void remove(int videoId) {
        if(!names.containsKey(videoId)) return;
        names.remove(videoId);
        likes[videoId] = 0;
        dislikes[videoId] = 0;
        views[videoId] = 0;
        pool.add(videoId);
        
        
    }
    
    public String watch(int videoId, int startMinute, int endMinute) {
        if(!names.containsKey(videoId)) return "-1";
        views[videoId]++;
        String name  = names.get(videoId);
        return name.substring(startMinute, Math.min(endMinute, name.length()-1)+1);
        
    }
    
    public void like(int videoId) {
        if(!names.containsKey(videoId)) return;
         likes[videoId]++;
    }
    
    public void dislike(int videoId) {
         if(!names.containsKey(videoId)) return;
        dislikes[videoId]++;
    }
    
    public int[] getLikesAndDislikes(int videoId) {
        if(!names.containsKey(videoId)) return new int[]{-1};
        return new int[]{likes[videoId], dislikes[videoId]};
        
    }
    
    public int getViews(int videoId) {
        if(!names.containsKey(videoId)) return -1;
        return views[videoId];
    }
}
```