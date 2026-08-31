# C# with 93.55% (157ms)

**Author:** pixelkris
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-twitter/solutions/3696273/](https://leetcode.com/problems/design-twitter/solutions/3696273/)

---

# Intuition
We want to map tweets for each user. We also want to map each user with their followees. Keep track of tweet order using a property (I called it 'date') that depends on a global counter. Use a priority queue to order them based on that 'date' property per tweet. Limiting the query to just getting at most 10 tweets per follower (and the user) can help with performance.

# Approach
Start by storing all user mappings and data when we call PostTweet, Follow, and Unfollow.

I used a LinkedList since I felt like using AddFirst, and using the Linq call to take the first 10 items. You can also approach this with any other collection like a List, and get the 10 last things added.

GetNewsFeed is the more complex call here:
    - First, get all the followee of that user (if any). 
    - Get at most 10 tweets from each followee (if any), and pool them
    - After pooling all tweets from the followees, place them in the pq based on the 'date'. which is just based on a simple global counter. Multiply the priority by -1 if you want the most recent to show up at the top of the pq.
    - Now, add the user's 10 most recent tweets (if any) to the priority queue.
    - Now, iterate over the priority queue at most 10 times.
    - At each iteration, dequeue and add the item to the list.

# Code
```
using System.Linq;

public class Twitter {

    internal class Tweet {
        public int id {get;set;}
        public int date {get;set;}
    }

    private Dictionary<int, LinkedList<Tweet>> UserTweets {get;set;}
    private Dictionary<int, HashSet<int>> UserFollowees {get;set;}
    private int GlobalTweetOrder {get;set;}

    private const int TWEET_COUNT_PER_USER = 10;

    public Twitter() {
        UserTweets = new Dictionary<int, LinkedList<Tweet>>();
        UserFollowees = new Dictionary<int, HashSet<int>>();
        GlobalTweetOrder = 0;
    }
    
    public void PostTweet(int userId, int tweetId) {
        if (!UserTweets.ContainsKey(userId)) {
            var list = new LinkedList<Tweet>();
            var tweet = new Tweet() {
                id = tweetId,
                date = GlobalTweetOrder
            };
            list.AddFirst(tweet);
            UserTweets.Add(userId, list);
        } else {
            UserTweets[userId].AddFirst(new Tweet() {
                id = tweetId,
                date = GlobalTweetOrder
            });
            
        }
        GlobalTweetOrder++;
    }
    
    public IList<int> GetNewsFeed(int userId) {

        var pq = new PriorityQueue<int, int>();

        if (UserFollowees.ContainsKey(userId)) {
            var followees = UserFollowees[userId];
            var tweetPool = new List<Tweet>();

            foreach (var followee in followees) {
                if (UserTweets.ContainsKey(followee)) {
                    var followeeTweets = UserTweets[followee].Take(TWEET_COUNT_PER_USER);
                    tweetPool.AddRange(followeeTweets);     
                }               
            } 

            foreach (var followeeTweet in tweetPool) {
                pq.Enqueue(followeeTweet.id, followeeTweet.date * -1);
            }
        }

        if (UserTweets.ContainsKey(userId)) {
            var userTweets = UserTweets[userId].Take(TWEET_COUNT_PER_USER);
            foreach (var tweet in userTweets) {
                pq.Enqueue(tweet.id, tweet.date * -1);
            }
        }
        var finalList = new List<int>();

        while (pq.Count > 0 && finalList.Count < 10) {
            finalList.Add(pq.Dequeue());
        }

        return finalList;
    }
    
    public void Follow(int followerId, int followeeId) {
        if (!UserFollowees.ContainsKey(followerId)) {
            UserFollowees.Add(followerId, new HashSet<int>() {followeeId});
        } else {
            UserFollowees[followerId].Add(followeeId);
        }
    }
    
    public void Unfollow(int followerId, int followeeId) {
        if (UserFollowees.ContainsKey(followerId)) {
            UserFollowees[followerId].Remove(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.PostTweet(userId,tweetId);
 * IList<int> param_2 = obj.GetNewsFeed(userId);
 * obj.Follow(followerId,followeeId);
 * obj.Unfollow(followerId,followeeId);
 */

```