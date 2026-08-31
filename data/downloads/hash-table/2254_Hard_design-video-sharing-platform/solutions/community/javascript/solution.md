# Simple and elegant solutions using JS Class

**Author:** importerror
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/5338377/](https://leetcode.com/problems/design-video-sharing-platform/solutions/5338377/)

---



# Code
```
class VideoObject {
    constructor(video, id) {
        this.content = video;
        this.id = id;
        this.like = 0
        this.dislike = 0
        this.views = 0
    }
}


class VideoSharingPlatform {
    constructor() {
        this.db = new Map()
        this.deleted = new Set()
    }

    /** 
     * @param {string} video
     * @return {number}
     */
    upload(video) {
        let newId;

        if (this.deleted.size > 0) {
            newId = Math.min.apply(this, [...this.deleted])
            this.deleted.delete(newId)
        } else { newId = this.db.size }

        let newvideo = new VideoObject(video, newId)
        this.db.set(newvideo.id, newvideo)
        return newvideo.id
    }

    /** 
    * @param {number} videoId
    * @return {void}
    */
    remove = function (videoId) {
        let video = this.db.get(videoId)
        if (video) {
            this.deleted.add(videoId)
        }
        return this.db.delete(videoId)
    };

    /** 
    * @param {number} videoId 
    * @param {number} startMinute 
    * @param {number} endMinute
    * @return {string}
    */
    watch = function (videoId, startMinute, endMinute) {
        let video = this.db.get(videoId)

        if (video) {
            video.views++;
            let content = video.content.substr(
                startMinute, Math.min(endMinute, video.content.length) + 1)
            return content;
        } else {
            return "-1"
        }
    };

    /** 
     * @param {number} videoId
     * @return {void}
     */
    like = function (videoId) {
        let video = this.db.get(videoId)
        if (video) video.like++
    };

    /** 
     * @param {number} videoId
     * @return {void}
     */
    dislike = function (videoId) {
        let video = this.db.get(videoId);
        if (video) video.dislike++
    };

    /** 
     * @param {number} videoId
     * @return {number[]}
     */
    getLikesAndDislikes = function (videoId) {
        let video = this.db.get(videoId);
        if (video) { return [video.like, video.dislike] }
        return [-1]
    };

    /** 
     * @param {number} videoId
     * @return {number}
     */
    getViews = function (videoId) {
        let video = this.db.get(videoId)
        if (video) { return video.views }
        return -1
    };
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