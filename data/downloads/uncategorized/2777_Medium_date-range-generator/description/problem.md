# [2777. Date Range Generator](https://leetcode.com/problems/date-range-generator/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| JavaScript | Medium | 11 | 2 |




## Description

Given a start date `start`, an end date `end`, and a positive integer `step`, return a generator object that yields dates in the range from `start` to `end` inclusive.

The value of `step` indicates the number of days between consecutive yielded values.

All yielded dates must be in the string format `YYYY-MM-DD`.

 

**Example 1:**

```

Input: start = &quot;2023-04-01&quot;, end = &quot;2023-04-04&quot;, step = 1
Output: [&quot;2023-04-01&quot;,&quot;2023-04-02&quot;,&quot;2023-04-03&quot;,&quot;2023-04-04&quot;]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // &#39;2023-04-01&#39;
g.next().value // &#39;2023-04-02&#39;
g.next().value // &#39;2023-04-03&#39;
g.next().value // &#39;2023-04-04&#39;
```

**Example 2:**

```

Input: start = &quot;2023-04-10&quot;, end = &quot;2023-04-20&quot;, step = 3
Output: [&quot;2023-04-10&quot;,&quot;2023-04-13&quot;,&quot;2023-04-16&quot;,&quot;2023-04-19&quot;]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // &#39;2023-04-10&#39;
g.next().value // &#39;2023-04-13&#39;
g.next().value // &#39;2023-04-16&#39;
g.next().value // &#39;2023-04-19&#39;
```

**Example 3:**

```

Input: start = &quot;2023-04-10&quot;, end = &quot;2023-04-10&quot;, step = 1
Output: [&quot;2023-04-10&quot;]
Explanation: 
const g = dateRangeGenerator(start, end, step);
g.next().value // &#39;2023-04-10&#39;

```

 

**Constraints:**

	- `new Date(start) <= new Date(end)`

	- `start` and `end` dates are in the string format `YYYY-MM-DD`

	- `0 <= The difference in days between the start date and the end date <= 1500`

	- `1 <= step <= 1000`

---

**Links:** [Submissions](https://leetcode.com/problems/date-range-generator/) | [Solutions](https://leetcode.com/problems/date-range-generator/)
