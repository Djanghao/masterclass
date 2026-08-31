# [1257. Smallest Common Region](https://leetcode.com/problems/smallest-common-region/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 494 | 42 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `airbnb`, `tiktok`

## Description

You are given some lists of `regions` where the first region of each list **directly** contains all other regions in that list.

If a region `x` contains a region `y` *directly*, and region `y` contains region `z` *directly*, then region `x` is said to contain region `z` **indirectly**. Note that region `x` also **indirectly** contains all regions **indirectly** containd in `y`.

Naturally, if a region `x` contains (either *directly* or *indirectly*) another region `y`, then `x` is bigger than or equal to `y` in size. Also, by definition, a region `x` contains itself.

Given two regions: `region1` and `region2`, return *the smallest region that contains both of them*.

It is guaranteed the smallest region exists.

 

**Example 1:**

```

Input:
regions = [[&quot;Earth&quot;,&quot;North America&quot;,&quot;South America&quot;],
[&quot;North America&quot;,&quot;United States&quot;,&quot;Canada&quot;],
[&quot;United States&quot;,&quot;New York&quot;,&quot;Boston&quot;],
[&quot;Canada&quot;,&quot;Ontario&quot;,&quot;Quebec&quot;],
[&quot;South America&quot;,&quot;Brazil&quot;]],
region1 = &quot;Quebec&quot;,
region2 = &quot;New York&quot;
Output: &quot;North America&quot;

```

**Example 2:**

```

Input: regions = [[&quot;Earth&quot;, &quot;North America&quot;, &quot;South America&quot;],[&quot;North America&quot;, &quot;United States&quot;, &quot;Canada&quot;],[&quot;United States&quot;, &quot;New York&quot;, &quot;Boston&quot;],[&quot;Canada&quot;, &quot;Ontario&quot;, &quot;Quebec&quot;],[&quot;South America&quot;, &quot;Brazil&quot;]], region1 = &quot;Canada&quot;, region2 = &quot;South America&quot;
Output: &quot;Earth&quot;

```

 

**Constraints:**

	- `2 <= regions.length <= 10^4`

	- `2 <= regions[i].length <= 20`

	- `1 <= regions[i][j].length, region1.length, region2.length <= 20`

	- `region1 != region2`

	- `regions[i][j]`, `region1`, and `region2` consist of English letters.

	- The input is generated such that there exists a region which contains all the other regions, either directly or indirectly.

	- A region cannot be directly contained in more than one region.

---

**Links:** [Submissions](https://leetcode.com/problems/smallest-common-region/) | [Solutions](https://leetcode.com/problems/smallest-common-region/)
