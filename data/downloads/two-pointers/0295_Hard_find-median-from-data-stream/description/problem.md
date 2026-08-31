# [295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 12983 | 279 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`design`](https://leetcode.com/tag/design), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `amazon`, `facebook`, `microsoft`, `google`, `citadel`, `ixl`, `anduril`, `apple`, `goldman-sachs`, `oracle`, `bloomberg`, `spotify`, `flipkart`, `cohesity`, `intuit`, `tiktok`, `okta`, `coupang`, `uber`, `walmart-labs`, `splunk`, `visa`, `tinder`, `kla`, `pinterest`, `nvidia`, `paypal`, `docusign`, `jpmorgan`, `meesho`, `snowflake`

## Description

The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

	- For example, for `arr = [2,3,4]`, the median is `3`.

	- For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.

Implement the MedianFinder class:

	- `MedianFinder()` initializes the `MedianFinder` object.

	- `void addNum(int num)` adds the integer `num` from the data stream to the data structure.

	- `double findMedian()` returns the median of all elements so far. Answers within `10^-5` of the actual answer will be accepted.

 

**Example 1:**

```

Input
[&quot;MedianFinder&quot;, &quot;addNum&quot;, &quot;addNum&quot;, &quot;findMedian&quot;, &quot;addNum&quot;, &quot;findMedian&quot;]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

```

 

**Constraints:**

	- `-10^5 <= num <= 10^5`

	- There will be at least one element in the data structure before calling `findMedian`.

	- At most `5 * 10^4` calls will be made to `addNum` and `findMedian`.

 

**Follow up:**

	- If all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?

	- If `99%` of all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?

---

**Links:** [Submissions](https://leetcode.com/problems/find-median-from-data-stream/) | [Solutions](https://leetcode.com/problems/find-median-from-data-stream/)
