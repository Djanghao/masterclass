# Go solution using a heap: by someone who writes Go for work

**Author:** tulumvibes
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-twitter/solutions/2694978/](https://leetcode.com/problems/design-twitter/solutions/2694978/)

---

```
type Twitter struct {
    // Following is a map of (followerId -> set of followeeId)
    following map[int]map[int]struct{}
    
    // Tweets is a map of (authorId -> list of tweets)
    tweets map[int][]tweet
    
    // latestTimestamp tracks the time so that tweets can be 
    // ordered across authors, given that we do not store
    // all tweets in a single list.
    latestTimestamp int
}

type tweet struct {
    tweetId int
    timestamp int
}

type TweetMaxHeap struct {
    items []heapTweet
}

func (h *TweetMaxHeap) Push(value interface{}) {
    h.items = append(h.items, value.(heapTweet))
}

func (h *TweetMaxHeap) Pop() interface{} {
    last := h.items[len(h.items)-1]
    h.items = h.items[:len(h.items)-1]
    
    return last
}

func (h *TweetMaxHeap) Swap(i, j int) {
    h.items[i], h.items[j] = h.items[j], h.items[i]
}

func (h *TweetMaxHeap) Less(i, j int) bool {
    // Returning time[i] > time[j] makes it a max heap based on time.
    // This allows us to pop the latest tweets.
    return h.items[i].tweet.timestamp > h.items[j].tweet.timestamp
}

func (h *TweetMaxHeap) Len() int {
    return len(h.items)
}

type heapTweet struct {
    // idx tracks the index of the tweet in the author's tweet list.
    idx int
    
    // userId tracks the user the tweet came from, so that it can be
    // backfilled when added to the response.
    userId int
    
    // The tweet containing the timestamp to sort by and the tweetId
    // to return.
    tweet tweet
}

func Constructor() Twitter {
    return Twitter{
        following: make(map[int]map[int]struct{}),
        tweets: make(map[int][]tweet),
    }
}


func (this *Twitter) PostTweet(userId int, tweetId int)  {
    userTweets, ok := this.tweets[userId]
    if !ok {
        userTweets = make([]tweet, 0)
        
    }
    
    // Track a timestamp across tweets so that the heap
    // in the user news feed can sort.
    this.latestTimestamp++
    
    userTweets = append(userTweets, tweet{
        tweetId: tweetId, 
        timestamp: this.latestTimestamp,
    })
    this.tweets[userId] = userTweets
}


func (this *Twitter) GetNewsFeed(userId int) []int {
    followees, ok := this.following[userId] 
    if !ok {
        followees = make(map[int]struct{})
    }
    
    // Ensure users follow themselves since users can see their
    // own tweets in their feed.
    if _, ok := followees[userId]; !ok {
        followees[userId] = struct{}{}
    }
    this.following[userId] = followees
    
    // The tweetHeap will contain O(len(followees)) elements.
    // For each followee who has tweeted, it will contain the latest
    // tweet from that followee, and the index of the tweet in the
    // followees tweet list.
    tweetHeap := &TweetMaxHeap{items: make([]heapTweet, 0)}
    
    for followee := range followees {
        tweets := this.tweets[followee]
        
        if len(tweets) == 0 {
            // This followee has not tweeted yet.
            continue
        }
        
        // The heap can bubble up tweets based on latest timestamp.
        // We keep the index of the current element in the tweet list
        // so that we can know which is the next item to grab from this
        // user when backfilling the heap after this tweet is used.
        heap.Push(tweetHeap, heapTweet{
            tweet: tweets[len(tweets)-1],
            idx: len(tweets)-1,
            userId: followee,
        })
    }
    
    var result []int
    for tweetHeap.Len() > 0 && len(result) < 10 {
        
        // Pop the most recent tweet from the heap,
        // since we need to return the result in order.
        popped := heap.Pop(tweetHeap).(heapTweet)
        result = append(result, popped.tweet.tweetId)
        
        // We then need to push a new tweet to the heap
        // from the user who tweeted the tweet we just added.
        // This allows for a case where the author had multiple
        // of the most recent tweets.
        //
        // The nextIdx is going to be popped.idx-1 because the list of
        // tweets appends the latest on the right, so we traverse
        // backwards when we need to add the next most-recent tweet.
        nextIdx := popped.idx - 1
        
        if nextIdx >= 0 {
            tweets := this.tweets[popped.userId]
            
            heap.Push(tweetHeap, heapTweet{
                tweet: tweets[nextIdx],
                idx: nextIdx,
                userId: popped.userId,
            })
        }
       
    }
    return result
}


func (this *Twitter) Follow(followerId int, followeeId int)  {
    // Initialize map of followees for the given follower if needed.
    followees, ok := this.following[followerId] 
    if !ok {
        followees = make(map[int]struct{})
        this.following[followerId] = followees
    }
    
    // Track the follow in a set.
    followees[followeeId] = struct{}{}
}


func (this *Twitter) Unfollow(followerId int, followeeId int)  {
    followees, ok := this.following[followerId] 
    if !ok {
        // If there are no followees tracked for the follower
        // then there's nothing to do.
        return
    }
    delete(followees, followeeId)
}
```