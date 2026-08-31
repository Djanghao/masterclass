# JS | Map, Counter & Linked List

**Author:** davidhiggins1712
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/3783729/](https://leetcode.com/problems/design-video-sharing-platform/solutions/3783729/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use a counter to increment next video ID. If a video is deleted, add the ID of the deleted video to a sorted linked list. If the HEAD of the linked list is null, increment the counter, otherwise use the value at the HEAD.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(M) for the remove method, where M is the size of the linked list.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) size of Map and Linked List grows linearly

# Code
```
type Video = {
    content: string
    likes: number
    dislikes: number
    views: number
}

class VideoSharingPlatform {
    videos: Map<number, Video>
    nextVideoId: number
    head: ListNode

    constructor() {
        this.videos = new Map()
        this.nextVideoId = 0
        this.head = null
    }

    upload(video: string): number {
        let videoId;

        if(this.head) {
            videoId = this.head.val
            let p = this.head
            this.head = this.head.next
            p.next = null
            p = null
        } else {
            videoId = this.nextVideoId
            this.nextVideoId++
        }

        this.videos.set(videoId, {
            content: video,
            likes: 0,
            dislikes: 0,
            views: 0
        })


        return videoId
    }

    remove(videoId: number): void {
        if(this.videos.has(videoId)) {
            this.videos.delete(videoId)

            const newNode = new ListNode(videoId)
            if(!this.head) {
                this.head = newNode
            } else {
                let p = this.head
                let prev: ListNode = null
                while(p && videoId > p.val) {
                    prev = p
                    p = p.next
                }

                if(prev) {
                    prev.next = newNode
                } else {
                    this.head = newNode
                }
                
                newNode.next = p
            }
        }
    }

    watch(videoId: number, startMinute: number, endMinute: number): string {
        const video = this.videos.get(videoId)
        if(!video) return "-1"
        video.views++

        const end = Math.min(endMinute, video.content.length - 1)

        return video.content.substring(startMinute, end+1)
    }

    like(videoId: number): void {
        const video = this.videos.get(videoId)
        if(video) {
            video.likes = video.likes + 1
        }
    }

    dislike(videoId: number): void {
        const video = this.videos.get(videoId)
        if(video) {
            video.dislikes = video.dislikes + 1
        }
    }

    getLikesAndDislikes(videoId: number): number[] {
        const video = this.videos.get(videoId)
        
        if(!video) return [-1]

        return [video.likes, video.dislikes]
    }

    getViews(videoId: number): number {
        const video = this.videos.get(videoId)

        if(!video) return -1

        return video.views
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