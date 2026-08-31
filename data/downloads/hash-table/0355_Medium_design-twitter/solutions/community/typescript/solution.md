# A Unique approach 🔥

**Author:** aayush21
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-twitter/solutions/4346854/](https://leetcode.com/problems/design-twitter/solutions/4346854/)

---

![image.png](./images/0.png) 

# Approach : 
### 1. Follow
   - To implement follow we can create a graph like data structure or simply a hash-map.
   - The hashmap in which we can store user -> Set of persons whom he follows i.e user -> set of followees.
   - Using a set data-structure so that duplicates can be avoided and also insertion and removal is faster
   - TC: O(1) 

### 2. Unfollow
- We can just remove the followee from set of user's followees.
- TC is O(1) 

### 3. Post Tweet 
- We can maintain a hashmap to store user and his tweets with time stamps, user -> List of [tweets, timestamp]. The timestamp is the time the tweet was posted, you can just increement a counter on each posted tweet.
- TC is O(1)
### 4. Get news feed 
- Basically we can go greedy here,
- We can just take 10 most recent tweets of each followee as well as user, sort them and return 10 most recent entries.
- If a user follows M users, or user has M followees the time complexity would be O(10Mlog10M) 
- O(MlogM), M is no of followees. 
- Ideally on a social media platform , a user will follow atmost 2000-3000 persons, so that would be taking at most 30, 000 twwets or records in consideration and just sorting them.
- I think this approach is suitable because here we just have to return 10most recent tweets, if the number would have been generic then the HEAP approach would be a better one

# Code
```
class Twitter {
    private createdAt: number = 0;
    private userFollows: { [key: number]: Set<number> } = {};
    private userTweets: { [key: number]: number[][] } = {};

    constructor() {
        this.userFollows = {}
        this.userTweets = {}
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.userTweets[userId]) {
            this.userTweets[userId] = [];
        }
        this.userTweets[userId].push([tweetId, this.createdAt]);
        this.createdAt++;
    }

    getNewsFeed(userId: number): number[] {
        const allFollowers = this.userFollows[userId] || new Set();
        allFollowers.add(userId);
        const tenMostRecentTweetsOfAllUsers: number[][] = [];
        for (const follower of Array.from(allFollowers)) {
            const tweets = this.userTweets[follower]?.slice(-10) || [];
            tenMostRecentTweetsOfAllUsers.push(...tweets);
        }

        tenMostRecentTweetsOfAllUsers.sort(
            (a: number[], b: number[]) => b[1] - a[1]
        );
        return tenMostRecentTweetsOfAllUsers.slice(0, 10).map((item) => item[0]);
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.userFollows[followerId]) {
            this.userFollows[followerId] = new Set();
        }
        this.userFollows[followerId].add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void { 
        if(!this.userFollows[followerId]) { 
            return 
        } 
        if(!this.userFollows[followerId].has(followeeId)) { 
            return
        }
        this.userFollows[followerId].delete(followeeId);
    }
}


/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
```