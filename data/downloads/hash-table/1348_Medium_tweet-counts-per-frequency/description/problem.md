# [1348. Tweet Counts Per Frequency](https://leetcode.com/problems/tweet-counts-per-frequency/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 216 | 306 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`binary-search`](https://leetcode.com/tag/binary-search), [`design`](https://leetcode.com/tag/design), [`sorting`](https://leetcode.com/tag/sorting), [`ordered-set`](https://leetcode.com/tag/ordered-set)

**Companies:** `google`, `twitter`

## Description

A social media company is trying to monitor activity on their site by analyzing the number of tweets that occur in select periods of time. These periods can be partitioned into smaller **time chunks** based on a certain frequency (every **minute**, **hour**, or **day**).

For example, the period `[10, 10000]` (in **seconds**) would be partitioned into the following **time chunks** with these frequencies:

	- Every **minute** (60-second chunks): `[10,69]`, `[70,129]`, `[130,189]`, `...`, `[9970,10000]`

	- Every **hour** (3600-second chunks): `[10,3609]`, `[3610,7209]`, `[7210,10000]`

	- Every **day** (86400-second chunks): `[10,10000]`

Notice that the last chunk may be shorter than the specified frequency's chunk size and will always end with the end time of the period (`10000` in the above example).

Design and implement an API to help the company with their analysis.

Implement the `TweetCounts` class:

	- `TweetCounts()` Initializes the `TweetCounts` object.

	- `void recordTweet(String tweetName, int time)` Stores the `tweetName` at the recorded `time` (in **seconds**).

	- `List getTweetCountsPerFrequency(String freq, String tweetName, int startTime, int endTime)` Returns a list of integers representing the number of tweets with `tweetName` in each **time chunk** for the given period of time `[startTime, endTime]` (in **seconds**) and frequency `freq`.
	
		`freq` is one of `"minute"`, `"hour"`, or `"day"` representing a frequency of every **minute**, **hour**, or **day** respectively.

	
	

 

**Example:**

```

Input
[&quot;TweetCounts&quot;,&quot;recordTweet&quot;,&quot;recordTweet&quot;,&quot;recordTweet&quot;,&quot;getTweetCountsPerFrequency&quot;,&quot;getTweetCountsPerFrequency&quot;,&quot;recordTweet&quot;,&quot;getTweetCountsPerFrequency&quot;]
[[],[&quot;tweet3&quot;,0],[&quot;tweet3&quot;,60],[&quot;tweet3&quot;,10],[&quot;minute&quot;,&quot;tweet3&quot;,0,59],[&quot;minute&quot;,&quot;tweet3&quot;,0,60],[&quot;tweet3&quot;,120],[&quot;hour&quot;,&quot;tweet3&quot;,0,210]]

Output
[null,null,null,null,[2],[2,1],null,[4]]

Explanation
TweetCounts tweetCounts = new TweetCounts();
tweetCounts.recordTweet(&quot;tweet3&quot;, 0);                              // New tweet &quot;tweet3&quot; at time 0
tweetCounts.recordTweet(&quot;tweet3&quot;, 60);                             // New tweet &quot;tweet3&quot; at time 60
tweetCounts.recordTweet(&quot;tweet3&quot;, 10);                             // New tweet &quot;tweet3&quot; at time 10
tweetCounts.getTweetCountsPerFrequency(&quot;minute&quot;, &quot;tweet3&quot;, 0, 59); // return [2]; chunk [0,59] had 2 tweets
tweetCounts.getTweetCountsPerFrequency(&quot;minute&quot;, &quot;tweet3&quot;, 0, 60); // return [2,1]; chunk [0,59] had 2 tweets, chunk [60,60] had 1 tweet
tweetCounts.recordTweet(&quot;tweet3&quot;, 120);                            // New tweet &quot;tweet3&quot; at time 120
tweetCounts.getTweetCountsPerFrequency(&quot;hour&quot;, &quot;tweet3&quot;, 0, 210);  // return [4]; chunk [0,210] had 4 tweets

```

 

**Constraints:**

	- `0 <= time, startTime, endTime <= 10^9`

	- `0 <= endTime - startTime <= 10^4`

	- There will be at most `10^4` calls **in total** to `recordTweet` and `getTweetCountsPerFrequency`.

---

**Links:** [Submissions](https://leetcode.com/problems/tweet-counts-per-frequency/) | [Solutions](https://leetcode.com/problems/tweet-counts-per-frequency/)
