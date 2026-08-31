# [56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 24145 | 886 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `facebook`, `google`, `bloomberg`, `microsoft`, `amazon`, `atlassian`, `ibm`, `apple`, `goldman-sachs`, `grammarly`, `adobe`, `zoho`, `tiktok`, `ixl`, `paypal`, `nutanix`, `oracle`, `tesla`, `linkedin`, `uber`, `sap`, `twitch`, `grubhub`, `patreon`, `okta`, `anduril`, `wipro`, `zeta`, `citadel`, `hubspot`, `walmart-labs`, `yandex`, `visa`, `palantir-technologies`, `netflix`, `bytedance`, `cisco`, `intuit`, `snapchat`, `ebay`, `nvidia`, `servicenow`, `capital-one`, `jpmorgan`, `accenture`, `ozon`, `turing`, `infosys`, `moveworks`, `squarespace`, `ripple`, `tesco`, `salesforce`, `morgan-stanley`, `roblox`, `disney`, `docusign`, `yahoo`, `expedia`, `nextdoor`, `siemens`, `crowdstrike`, `godaddy`, `dropbox`, `twitter`, `pinterest`, `doordash`, `tcs`, `samsung`, `razorpay`, `phonepe`, `workday`, `rivian`, `makemytrip`, `epam-systems`, `amd`, `yelp`, `wix`

## Description

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

 

**Example 1:**

```

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

```

**Example 2:**

```

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

```

**Example 3:**

```

Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.

```

 

**Constraints:**

	- `1 <= intervals.length <= 10^4`

	- `intervals[i].length == 2`

	- `0 <= start_i <= end_i <= 10^4`

---

**Links:** [Submissions](https://leetcode.com/problems/merge-intervals/) | [Solutions](https://leetcode.com/problems/merge-intervals/)
