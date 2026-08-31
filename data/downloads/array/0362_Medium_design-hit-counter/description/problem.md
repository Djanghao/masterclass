# [362. Design Hit Counter](https://leetcode.com/problems/design-hit-counter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2121 | 252 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`binary-search`](https://leetcode.com/tag/binary-search), [`design`](https://leetcode.com/tag/design), [`queue`](https://leetcode.com/tag/queue), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `databricks`, `apple`, `uber`, `microsoft`, `google`, `amazon`, `roblox`, `bloomberg`, `yandex`, `coupang`, `snowflake`, `affirm`, `cloudflare`, `reddit`, `facebook`, `walmart-labs`, `dropbox`

## Description

Design a hit counter which counts the number of hits received in the past `5` minutes (i.e., the past `300` seconds).

Your system should accept a `timestamp` parameter (**in seconds** granularity), and you may assume that calls are being made to the system in chronological order (i.e., `timestamp` is monotonically increasing). Several hits may arrive roughly at the same time.

Implement the `HitCounter` class:

	- `HitCounter()` Initializes the object of the hit counter system.

	- `void hit(int timestamp)` Records a hit that happened at `timestamp` (**in seconds**). Several hits may happen at the same `timestamp`.

	- `int getHits(int timestamp)` Returns the number of hits in the past 5 minutes from `timestamp` (i.e., the past `300` seconds).

 

**Example 1:**

```

Input
[&quot;HitCounter&quot;, &quot;hit&quot;, &quot;hit&quot;, &quot;hit&quot;, &quot;getHits&quot;, &quot;hit&quot;, &quot;getHits&quot;, &quot;getHits&quot;]
[[], [1], [2], [3], [4], [300], [300], [301]]
Output
[null, null, null, null, 3, null, 4, 3]

Explanation
HitCounter hitCounter = new HitCounter();
hitCounter.hit(1);       // hit at timestamp 1.
hitCounter.hit(2);       // hit at timestamp 2.
hitCounter.hit(3);       // hit at timestamp 3.
hitCounter.getHits(4);   // get hits at timestamp 4, return 3.
hitCounter.hit(300);     // hit at timestamp 300.
hitCounter.getHits(300); // get hits at timestamp 300, return 4.
hitCounter.getHits(301); // get hits at timestamp 301, return 3.

```

 

**Constraints:**

	- `1 <= timestamp <= 2 * 10^9`

	- All the calls are being made to the system in chronological order (i.e., `timestamp` is monotonically increasing).

	- At most `300` calls will be made to `hit` and `getHits`.

 

**Follow up:** What if the number of hits per second could be huge? Does your design scale?

---

**Links:** [Submissions](https://leetcode.com/problems/design-hit-counter/) | [Solutions](https://leetcode.com/problems/design-hit-counter/)
