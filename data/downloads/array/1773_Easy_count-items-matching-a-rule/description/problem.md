# [1773. Count Items Matching a Rule](https://leetcode.com/problems/count-items-matching-a-rule/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 2013 | 282 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)

**Companies:** `facebook`

## Description

You are given an array `items`, where each `items[i] = [type_i, color_i, name_i]` describes the type, color, and name of the `i^th` item. You are also given a rule represented by two strings, `ruleKey` and `ruleValue`.

The `i^th` item is said to match the rule if **one** of the following is true:

	- `ruleKey == "type"` and `ruleValue == type_i`.

	- `ruleKey == "color"` and `ruleValue == color_i`.

	- `ruleKey == "name"` and `ruleValue == name_i`.

Return *the number of items that match the given rule*.

 

**Example 1:**

```

Input: items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;color&quot;, ruleValue = &quot;silver&quot;
Output: 1
Explanation: There is only one item matching the given rule, which is [&quot;computer&quot;,&quot;silver&quot;,&quot;lenovo&quot;].

```

**Example 2:**

```

Input: items = [[&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;],[&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;],[&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]], ruleKey = &quot;type&quot;, ruleValue = &quot;phone&quot;
Output: 2
Explanation: There are only two items matching the given rule, which are [&quot;phone&quot;,&quot;blue&quot;,&quot;pixel&quot;] and [&quot;phone&quot;,&quot;gold&quot;,&quot;iphone&quot;]. Note that the item [&quot;computer&quot;,&quot;silver&quot;,&quot;phone&quot;] does not match.
```

 

**Constraints:**

	- `1 <= items.length <= 10^4`

	- `1 <= type_i.length, color_i.length, name_i.length, ruleValue.length <= 10`

	- `ruleKey` is equal to either `"type"`, `"color"`, or `"name"`.

	- All strings consist only of lowercase letters.

---

**Links:** [Submissions](https://leetcode.com/problems/count-items-matching-a-rule/) | [Solutions](https://leetcode.com/problems/count-items-matching-a-rule/)
