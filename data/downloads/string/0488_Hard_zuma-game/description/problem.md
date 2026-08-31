# [488. Zuma Game](https://leetcode.com/problems/zuma-game/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 484 | 509 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`dynamic-programming`](https://leetcode.com/tag/dynamic-programming), [`stack`](https://leetcode.com/tag/stack), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search), [`memoization`](https://leetcode.com/tag/memoization)

**Companies:** `phonepe`, `inmobi`, `google`, `zoho`, `baidu`

## Description

You are playing a variation of the game Zuma.

In this variation of Zuma, there is a **single row** of colored balls on a board, where each ball can be colored red `'R'`, yellow `'Y'`, blue `'B'`, green `'G'`, or white `'W'`. You also have several colored balls in your hand.

Your goal is to **clear all** of the balls from the board. On each turn:

	- Pick **any** ball from your hand and insert it in between two balls in the row or on either end of the row.

	- If there is a group of **three or more consecutive balls** of the **same color**, remove the group of balls from the board.
	
		If this removal causes more groups of three or more of the same color to form, then continue removing each group until there are none left.

	
	
	- If there are no more balls on the board, then you win the game.

	- Repeat this process until you either win or do not have any more balls in your hand.

Given a string `board`, representing the row of balls on the board, and a string `hand`, representing the balls in your hand, return *the **minimum** number of balls you have to insert to clear all the balls from the board. If you cannot clear all the balls from the board using the balls in your hand, return *`-1`.

 

**Example 1:**

```

Input: board = &quot;WRRBBW&quot;, hand = &quot;RB&quot;
Output: -1
Explanation: It is impossible to clear all the balls. The best you can do is:
- Insert &#39;R&#39; so the board becomes WRRRBBW. WRRRBBW -&gt; WBBW.
- Insert &#39;B&#39; so the board becomes WBBBW. WBBBW -&gt; WW.
There are still balls remaining on the board, and you are out of balls to insert.
```

**Example 2:**

```

Input: board = &quot;WWRRBBWW&quot;, hand = &quot;WRBRW&quot;
Output: 2
Explanation: To make the board empty:
- Insert &#39;R&#39; so the board becomes WWRRRBBWW. WWRRRBBWW -&gt; WWBBWW.
- Insert &#39;B&#39; so the board becomes WWBBBWW. WWBBBWW -&gt; WWWW -&gt; empty.
2 balls from your hand were needed to clear the board.

```

**Example 3:**

```

Input: board = &quot;G&quot;, hand = &quot;GGGGG&quot;
Output: 2
Explanation: To make the board empty:
- Insert &#39;G&#39; so the board becomes GG.
- Insert &#39;G&#39; so the board becomes GGG. GGG -&gt; empty.
2 balls from your hand were needed to clear the board.

```

 

**Constraints:**

	- `1 <= board.length <= 16`

	- `1 <= hand.length <= 5`

	- `board` and `hand` consist of the characters `'R'`, `'Y'`, `'B'`, `'G'`, and `'W'`.

	- The initial row of balls on the board will **not** have any groups of three or more consecutive balls of the same color.

---

**Links:** [Submissions](https://leetcode.com/problems/zuma-game/) | [Solutions](https://leetcode.com/problems/zuma-game/)
