# Swift solution using Hash Map and Heap

**Author:** keitaito
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/5595418/](https://leetcode.com/problems/design-video-sharing-platform/solutions/5595418/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Used a Heap to get the earliest id, smallest value, from `idsForReuse` when there is any.

<!-- # Complexity -->
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import HeapModule

class VideoSharingPlatform {

    class Video: Hashable, Equatable {
        var id: Int = 0
        var video: String = ""
        var views: Int = 0
        var likes: Int = 0
        var dislikes: Int = 0

        static func == (lhs: Video, rhs: Video) -> Bool {
            lhs.id == rhs.id
        }

        func hash(into hasher: inout Hasher) {
            hasher.combine(id)
        }
    }

    var hashMap = [Int: Video]()
    var idsForReuse = Heap<Int>()
    var latestId = 0


    init() {
        
    }
    
    func upload(_ video: String) -> Int {
        var videoObject = Video()
        videoObject.video = video
        
        if !idsForReuse.isEmpty {
            let id = idsForReuse.popMin()!
            videoObject.id = id
        } else {
            videoObject.id = latestId
            latestId += 1
        }

        hashMap[videoObject.id] = videoObject
        return videoObject.id
    }
    
    func remove(_ videoId: Int) {
        if hashMap[videoId] != nil {
            hashMap[videoId] = nil
            idsForReuse.insert(videoId)
        }
    }
    
    func watch(_ videoId: Int, _ startMinute: Int, _ endMinute: Int) -> String {
        guard let object = hashMap[videoId] else { return "-1" }
        object.views += 1
        let charArray = Array(object.video)
        return String(sa[startMinute...min(endMinute, charArray.count - 1)])
    }
    
    func like(_ videoId: Int) {
        guard let object = hashMap[videoId] else { return }
        object.likes += 1
    }
    
    func dislike(_ videoId: Int) {
        guard let object = hashMap[videoId] else { return }
        object.dislikes += 1
    }
    
    func getLikesAndDislikes(_ videoId: Int) -> [Int] {
        guard let object = hashMap[videoId] else { return [-1] }
        return [object.likes, object.dislikes]
    }
    
    func getViews(_ videoId: Int) -> Int {
        guard let object = hashMap[videoId] else { return -1 }
        return object.views
    }
}

/**
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * let obj = VideoSharingPlatform()
 * let ret_1: Int = obj.upload(video)
 * obj.remove(videoId)
 * let ret_3: String = obj.watch(videoId, startMinute, endMinute)
 * obj.like(videoId)
 * obj.dislike(videoId)
 * let ret_6: [Int] = obj.getLikesAndDislikes(videoId)
 * let ret_7: Int = obj.getViews(videoId)
 */
```