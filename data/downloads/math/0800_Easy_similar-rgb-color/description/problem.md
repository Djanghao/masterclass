# [800. Similar RGB Color](https://leetcode.com/problems/similar-rgb-color/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 112 | 690 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`enumeration`](https://leetcode.com/tag/enumeration)

**Companies:** `google`

## Description

The red-green-blue color `"#AABBCC"` can be written as `"#ABC"` in shorthand.

	- For example, `"#15c"` is shorthand for the color `"#1155cc"`.

The similarity between the two colors `"#ABCDEF"` and `"#UVWXYZ"` is `-(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2`.

Given a string `color` that follows the format `"#ABCDEF"`, return a string represents the color that is most similar to the given color and has a shorthand (i.e., it can be represented as some `"#XYZ"`).

**Any answer** which has the same highest similarity as the best answer will be accepted.

 

**Example 1:**

```

Input: color = &quot;#09f166&quot;
Output: &quot;#11ee66&quot;
Explanation: 
The similarity is -(0x09 - 0x11)2 -(0xf1 - 0xee)2 - (0x66 - 0x66)2 = -64 -9 -0 = -73.
This is the highest among any shorthand color.

```

**Example 2:**

```

Input: color = &quot;#4e3fe1&quot;
Output: &quot;#5544dd&quot;

```

 

**Constraints:**

	- `color.length == 7`

	- `color[0] == '#'`

	- `color[i]` is either digit or character in the range `['a', 'f']` for `i > 0`.

---

**Links:** [Submissions](https://leetcode.com/problems/similar-rgb-color/) | [Solutions](https://leetcode.com/problems/similar-rgb-color/)
