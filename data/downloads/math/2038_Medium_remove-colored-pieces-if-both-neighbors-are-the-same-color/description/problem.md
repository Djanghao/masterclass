# [2038. Remove Colored Pieces if Both Neighbors are the Same Color](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 1630 | 127 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`game-theory`](https://leetcode.com/tag/game-theory)

**Companies:** `mathworks`

## Description

There are `n` pieces arranged in a line, and each piece is colored either by `'A'` or by `'B'`. You are given a string `colors` of length `n` where `colors[i]` is the color of the `i^th` piece.

Alice and Bob are playing a game where they take **alternating turns** removing pieces from the line. In this game, Alice moves** first**.

	- Alice is only allowed to remove a piece colored `'A'` if **both its neighbors** are also colored `'A'`. She is **not allowed** to remove pieces that are colored `'B'`.

	- Bob is only allowed to remove a piece colored `'B'` if **both its neighbors** are also colored `'B'`. He is **not allowed** to remove pieces that are colored `'A'`.

	- Alice and Bob **cannot** remove pieces from the edge of the line.

	- If a player cannot make a move on their turn, that player **loses** and the other player **wins**.

Assuming Alice and Bob play optimally, return `true`* if Alice wins, or return *`false`* if Bob wins*.

 

**Example 1:**

```

Input: colors = &quot;AAABABB&quot;
Output: true
Explanation:
AAABABB -&gt; AABABB
Alice moves first.
She removes the second &#39;A&#39; from the left since that is the only &#39;A&#39; whose neighbors are both &#39;A&#39;.

Now it&#39;s Bob&#39;s turn.
Bob cannot make a move on his turn since there are no &#39;B&#39;s whose neighbors are both &#39;B&#39;.
Thus, Alice wins, so return true.

```

**Example 2:**

```

Input: colors = &quot;AA&quot;
Output: false
Explanation:
Alice has her turn first.
There are only two &#39;A&#39;s and both are on the edge of the line, so she cannot move on her turn.
Thus, Bob wins, so return false.

```

**Example 3:**

```

Input: colors = &quot;ABBBBBBBAAA&quot;
Output: false
Explanation:
ABBBBBBBAAA -&gt; ABBBBBBBAA
Alice moves first.
Her only option is to remove the second to last &#39;A&#39; from the right.

ABBBBBBBAA -&gt; ABBBBBBAA
Next is Bob&#39;s turn.
He has many options for which &#39;B&#39; piece to remove. He can pick any.

On Alice&#39;s second turn, she has no more pieces that she can remove.
Thus, Bob wins, so return false.

```

 

**Constraints:**

	- `1 <= colors.length <= 10^5`

	- `colors` consists of only the letters `'A'` and `'B'`

---

**Links:** [Submissions](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) | [Solutions](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/)
