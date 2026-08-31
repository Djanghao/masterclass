# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 24526 | 600 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`union-find`](https://leetcode.com/tag/union-find), [`matrix`](https://leetcode.com/tag/matrix)

**Companies:** `amazon`, `bloomberg`, `google`, `uber`, `microsoft`, `linkedin`, `tiktok`, `anduril`, `apple`, `facebook`, `oracle`, `snapchat`, `yandex`, `samsung`, `tesla`, `expedia`, `walmart-labs`, `servicenow`, `zoho`, `capital-one`, `wells-fargo`, `nvidia`, `ibm`, `cisco`, `docusign`, `hive`, `goldman-sachs`, `qualcomm`, `paypal`, `visa`, `citadel`, `wix`, `siemens`, `ebay`, `sap`, `salesforce`, `bytedance`, `accenture`, `bitgo`, `crowdstrike`, `cloudflare`, `grammarly`, `barclays`, `waymo`, `adobe`, `huawei`, `uipath`, `tinkoff`, `doordash`, `nutanix`, `yahoo`, `twitter`, `flipkart`, `turing`, `axon`, `rivian`, `squarepoint-capital`, `urban-company`, `morgan-stanley`, `sofi`, `hashedin`, `comcast`, `zenefits`

## Description

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

**Example 1:**

```

Input: grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]
]
Output: 1

```

**Example 2:**

```

Input: grid = [
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],
  [&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]
]
Output: 3

```

 

**Constraints:**

	- `m == grid.length`

	- `n == grid[i].length`

	- `1 <= m, n <= 300`

	- `grid[i][j]` is `'0'` or `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-islands/) | [Solutions](https://leetcode.com/problems/number-of-islands/)
