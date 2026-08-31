# Simple implementation in Golang

**Author:** vovanec
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-video-sharing-platform/solutions/4037866/](https://leetcode.com/problems/design-video-sharing-platform/solutions/4037866/)

---



# Code
```

type Video struct {
    Likes int
    Dislikes int
    Views int
    Content string
}

type VideoSharingPlatform struct {
    videos map[int]*Video
    lastId int
    freeIds []int
}


func Constructor() VideoSharingPlatform {
    return VideoSharingPlatform{
        videos: make(map[int]*Video),
    }
}


func (p *VideoSharingPlatform) Upload(video string) int {
    var videoId int

    if videoId = p.popFreeId(); videoId < 0 {
        videoId = p.lastId
        p.lastId++
    }

    p.videos[videoId] = &Video{
        Content: video,
    }

    return videoId
}

func (p *VideoSharingPlatform) popFreeId() int {

    if len(p.freeIds) < 1 {
        return -1
    }

    var (
        smallest = -1
        smallestIdx int
    )

    for idx, id := range p.freeIds {
        if smallest == -1 || id < smallest {
            smallest = id
            smallestIdx = idx
        }
    }

    p.freeIds = append(p.freeIds[:smallestIdx], p.freeIds[smallestIdx+1:]...)

    return smallest

}


func (p *VideoSharingPlatform) Remove(videoId int)  {
    if _, present := p.videos[videoId]; present {
        delete(p.videos, videoId)
        p.freeIds = append(p.freeIds, videoId)
    }
}


func (p *VideoSharingPlatform) Watch(videoId int, startMinute int, endMinute int) string {
    if _, present := p.videos[videoId]; present {
        video := p.videos[videoId]
        video.Views++
        return video.Content[startMinute: min(len(video.Content), endMinute+1)]
    }
    return "-1"
}


func (p *VideoSharingPlatform) Like(videoId int)  {
    if _, present := p.videos[videoId]; present {   
        p.videos[videoId].Likes++
    }
}


func (p *VideoSharingPlatform) Dislike(videoId int)  {
    if _, present := p.videos[videoId]; present {   
        p.videos[videoId].Dislikes++
    }
}


func (p *VideoSharingPlatform) GetLikesAndDislikes(videoId int) []int {
    if _, present := p.videos[videoId]; present {   
        return []int{
            p.videos[videoId].Likes,
            p.videos[videoId].Dislikes,
        }
    }
    return []int{-1}
}


func (p *VideoSharingPlatform) GetViews(videoId int) int {
    if _, present := p.videos[videoId]; present {   
        return p.videos[videoId].Views
    }
    return -1
}


func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

/**
 * Your VideoSharingPlatform object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Upload(video);
 * obj.Remove(videoId);
 * param_3 := obj.Watch(videoId,startMinute,endMinute);
 * obj.Like(videoId);
 * obj.Dislike(videoId);
 * param_6 := obj.GetLikesAndDislikes(videoId);
 * param_7 := obj.GetViews(videoId);
 */
```