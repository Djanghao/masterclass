# [1436. Destination City](https://leetcode.com/problems/destination-city/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2297 | 107 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `yelp`, `facebook`, `amazon`, `yandex`, `google`, `apple`

## Description

You are given the array `paths`, where `paths[i] = [cityA_i, cityB_i]` means there exists a direct path going from `cityA_i` to `cityB_i`. *Return the destination city, that is, the city without any path outgoing to another city.*

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

**Example 1:**

```

Input: paths = [[&quot;London&quot;,&quot;New York&quot;],[&quot;New York&quot;,&quot;Lima&quot;],[&quot;Lima&quot;,&quot;Sao Paulo&quot;]]
Output: &quot;Sao Paulo&quot; 
Explanation: Starting at &quot;London&quot; city you will reach &quot;Sao Paulo&quot; city which is the destination city. Your trip consist of: &quot;London&quot; -&gt; &quot;New York&quot; -&gt; &quot;Lima&quot; -&gt; &quot;Sao Paulo&quot;.

```

**Example 2:**

```

Input: paths = [[&quot;B&quot;,&quot;C&quot;],[&quot;D&quot;,&quot;B&quot;],[&quot;C&quot;,&quot;A&quot;]]
Output: &quot;A&quot;
Explanation: All possible trips are:&nbsp;
&quot;D&quot; -&gt; &quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.&nbsp;
&quot;B&quot; -&gt; &quot;C&quot; -&gt; &quot;A&quot;.&nbsp;
&quot;C&quot; -&gt; &quot;A&quot;.&nbsp;
&quot;A&quot;.&nbsp;
Clearly the destination city is &quot;A&quot;.

```

**Example 3:**

```

Input: paths = [[&quot;A&quot;,&quot;Z&quot;]]
Output: &quot;Z&quot;

```

 

**Constraints:**

	- `1 <= paths.length <= 100`

	- `paths[i].length == 2`

	- `1 <= cityA_i.length, cityB_i.length <= 10`

	- `cityA_i != cityB_i`

	- All strings consist of lowercase and uppercase English letters and the space character.

---

**Links:** [Submissions](https://leetcode.com/problems/destination-city/) | [Solutions](https://leetcode.com/problems/destination-city/)
