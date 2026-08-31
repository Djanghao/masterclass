# [1320. Minimum Distance to Type a Word Using Two Fingers](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1041 | 39 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming)

**Companies:** `google`

## Description

![image](./images/0.png)

You have a keyboard layout as shown above in the **X-Y** plane, where each English uppercase letter is located at some coordinate.

	- For example, the letter `'A'` is located at coordinate `(0, 0)`, the letter `'B'` is located at coordinate `(0, 1)`, the letter `'P'` is located at coordinate `(2, 3)` and the letter `'Z'` is located at coordinate `(4, 1)`.

Given the string `word`, return *the minimum total **distance** to type such string using only two fingers*.

The **distance** between coordinates `(x_1, y_1)` and `(x_2, y_2)` is `|x_1 - x_2| + |y_1 - y_2|`.

**Note** that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

 

**Example 1:**

```

Input: word = &quot;CAKE&quot;
Output: 3
Explanation: Using two fingers, one optimal way to type &quot;CAKE&quot; is: 
Finger 1 on letter &#39;C&#39; -&gt; cost = 0 
Finger 1 on letter &#39;A&#39; -&gt; cost = Distance from letter &#39;C&#39; to letter &#39;A&#39; = 2 
Finger 2 on letter &#39;K&#39; -&gt; cost = 0 
Finger 2 on letter &#39;E&#39; -&gt; cost = Distance from letter &#39;K&#39; to letter &#39;E&#39; = 1 
Total distance = 3

```

**Example 2:**

```

Input: word = &quot;HAPPY&quot;
Output: 6
Explanation: Using two fingers, one optimal way to type &quot;HAPPY&quot; is:
Finger 1 on letter &#39;H&#39; -&gt; cost = 0
Finger 1 on letter &#39;A&#39; -&gt; cost = Distance from letter &#39;H&#39; to letter &#39;A&#39; = 2
Finger 2 on letter &#39;P&#39; -&gt; cost = 0
Finger 2 on letter &#39;P&#39; -&gt; cost = Distance from letter &#39;P&#39; to letter &#39;P&#39; = 0
Finger 1 on letter &#39;Y&#39; -&gt; cost = Distance from letter &#39;A&#39; to letter &#39;Y&#39; = 4
Total distance = 6

```

 

**Constraints:**

	- `2 <= word.length <= 300`

	- `word` consists of uppercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/) | [Solutions](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/)
