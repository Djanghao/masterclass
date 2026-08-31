# Clean Typescript code

**Author:** aayush21
**Votes:** 0
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4358105/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4358105/)

---

```
class TweetCounts {
    private tweetCounts = {};

    constructor() { }

    recordTweet(tweetName: string, time: number): void {
        this.tweetCounts[tweetName] = (this.tweetCounts[tweetName] || []).concat(time);
    }

    getTweetCountsPerFrequency(freq: string, tweetName: string, startTime: number, endTime: number): number[] {
        const cycle = { minute: 60, hour: 3600, day: 86400 };
        const c = cycle[freq];
        const tweetsInRange = (this.tweetCounts[tweetName] || []).filter((item: number) => item >= startTime && item <= endTime);

        const bucket = Array(Math.ceil((endTime - startTime + 1) / c)).fill(0);
        tweetsInRange.forEach((time: number) => bucket[Math.floor((time - startTime) / c)]++);

        return bucket;
    }
}



```