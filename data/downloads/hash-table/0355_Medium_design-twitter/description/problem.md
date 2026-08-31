# [355. Design Twitter](https://leetcode.com/problems/design-twitter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 4544 | 647 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue)

**Companies:** `amazon`, `google`, `microsoft`, `coupang`, `paypal`, `meesho`, `twitter`

## Description

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the `10` most recent tweets in the user's news feed.

Implement the `Twitter` class:

	- `Twitter()` Initializes your twitter object.

	- `void postTweet(int userId, int tweetId)` Composes a new tweet with ID `tweetId` by the user `userId`. Each call to this function will be made with a unique `tweetId`.

	- `List getNewsFeed(int userId)` Retrieves the `10` most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be **ordered from most recent to least recent**.

	- `void follow(int followerId, int followeeId)` The user with ID `followerId` started following the user with ID `followeeId`.

	- `void unfollow(int followerId, int followeeId)` The user with ID `followerId` started unfollowing the user with ID `followeeId`.

 

**Example 1:**

```

Input
[&quot;Twitter&quot;, &quot;postTweet&quot;, &quot;getNewsFeed&quot;, &quot;follow&quot;, &quot;postTweet&quot;, &quot;getNewsFeed&quot;, &quot;unfollow&quot;, &quot;getNewsFeed&quot;]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1&#39;s news feed should return a list with 1 tweet id -&gt; [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1&#39;s news feed should return a list with 2 tweet ids -&gt; [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1&#39;s news feed should return a list with 1 tweet id -&gt; [5], since user 1 is no longer following user 2.

```

 

**Constraints:**

	- `1 <= userId, followerId, followeeId <= 500`

	- `0 <= tweetId <= 10^4`

	- All the tweets have **unique** IDs.

	- At most `3 * 10^4` calls will be made to `postTweet`, `getNewsFeed`, `follow`, and `unfollow`.

	- A user cannot follow himself.

---

**Links:** [Submissions](https://leetcode.com/problems/design-twitter/) | [Solutions](https://leetcode.com/problems/design-twitter/)
