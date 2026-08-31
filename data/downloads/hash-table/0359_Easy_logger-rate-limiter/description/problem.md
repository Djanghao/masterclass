# [359. Logger Rate Limiter](https://leetcode.com/problems/logger-rate-limiter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 1797 | 197 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`design`](https://leetcode.com/tag/design), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `google`, `oracle`, `amazon`, `grammarly`, `microsoft`, `netflix`, `apple`, `atlassian`, `reddit`, `docusign`, `waymo`, `cloudflare`, `intuit`, `patreon`, `appfolio`

## Description

Design a logger system that receives a stream of messages along with their timestamps. Each **unique** message should only be printed **at most every 10 seconds** (i.e. a message printed at timestamp `t` will prevent other identical messages from being printed until timestamp `t + 10`).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the `Logger` class:

	- `Logger()` Initializes the `logger` object.

	- `bool shouldPrintMessage(int timestamp, string message)` Returns `true` if the `message` should be printed in the given `timestamp`, otherwise returns `false`.

 

**Example 1:**

```

Input
[&quot;Logger&quot;, &quot;shouldPrintMessage&quot;, &quot;shouldPrintMessage&quot;, &quot;shouldPrintMessage&quot;, &quot;shouldPrintMessage&quot;, &quot;shouldPrintMessage&quot;, &quot;shouldPrintMessage&quot;]
[[], [1, &quot;foo&quot;], [2, &quot;bar&quot;], [3, &quot;foo&quot;], [8, &quot;bar&quot;], [10, &quot;foo&quot;], [11, &quot;foo&quot;]]
Output
[null, true, true, false, false, false, true]

Explanation
Logger logger = new Logger();
logger.shouldPrintMessage(1, &quot;foo&quot;);  // return true, next allowed timestamp for &quot;foo&quot; is 1 + 10 = 11
logger.shouldPrintMessage(2, &quot;bar&quot;);  // return true, next allowed timestamp for &quot;bar&quot; is 2 + 10 = 12
logger.shouldPrintMessage(3, &quot;foo&quot;);  // 3 &lt; 11, return false
logger.shouldPrintMessage(8, &quot;bar&quot;);  // 8 &lt; 12, return false
logger.shouldPrintMessage(10, &quot;foo&quot;); // 10 &lt; 11, return false
logger.shouldPrintMessage(11, &quot;foo&quot;); // 11 &gt;= 11, return true, next allowed timestamp for &quot;foo&quot; is 11 + 10 = 21

```

 

**Constraints:**

	- `0 <= timestamp <= 10^9`

	- Every `timestamp` will be passed in non-decreasing order (chronological order).

	- `1 <= message.length <= 30`

	- At most `10^4` calls will be made to `shouldPrintMessage`.

---

**Links:** [Submissions](https://leetcode.com/problems/logger-rate-limiter/) | [Solutions](https://leetcode.com/problems/logger-rate-limiter/)
