# [2347. Best Poker Hand](https://leetcode.com/problems/best-poker-hand/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 400 | 43 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `apple`

## Description

You are given an integer array `ranks` and a character array `suits`. You have `5` cards where the `i^th` card has a rank of `ranks[i]` and a suit of `suits[i]`.

The following are the types of **poker hands** you can make from best to worst:

	- `"Flush"`: Five cards of the same suit.

	- `"Three of a Kind"`: Three cards of the same rank.

	- `"Pair"`: Two cards of the same rank.

	- `"High Card"`: Any single card.

Return *a string representing the **best** type of **poker hand** you can make with the given cards.*

**Note** that the return values are **case-sensitive**.

 

**Example 1:**

```

Input: ranks = [13,2,3,1,9], suits = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;a&quot;]
Output: &quot;Flush&quot;
Explanation: The hand with all the cards consists of 5 cards with the same suit, so we have a &quot;Flush&quot;.

```

**Example 2:**

```

Input: ranks = [4,4,2,4,4], suits = [&quot;d&quot;,&quot;a&quot;,&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
Output: &quot;Three of a Kind&quot;
Explanation: The hand with the first, second, and fourth card consists of 3 cards with the same rank, so we have a &quot;Three of a Kind&quot;.
Note that we could also make a &quot;Pair&quot; hand but &quot;Three of a Kind&quot; is a better hand.
Also note that other cards could be used to make the &quot;Three of a Kind&quot; hand.
```

**Example 3:**

```

Input: ranks = [10,10,2,12,9], suits = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;a&quot;,&quot;d&quot;]
Output: &quot;Pair&quot;
Explanation: The hand with the first and second card consists of 2 cards with the same rank, so we have a &quot;Pair&quot;.
Note that we cannot make a &quot;Flush&quot; or a &quot;Three of a Kind&quot;.

```

 

**Constraints:**

	- `ranks.length == suits.length == 5`

	- `1 <= ranks[i] <= 13`

	- `'a' <= suits[i] <= 'd'`

	- No two cards have the same rank and suit.

---

**Links:** [Submissions](https://leetcode.com/problems/best-poker-hand/) | [Solutions](https://leetcode.com/problems/best-poker-hand/)
