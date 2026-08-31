# [1927. Sum Game](https://leetcode.com/problems/sum-game/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 535 | 91 |

**Tags:** [`math`](https://leetcode.com/tag/math), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`game-theory`](https://leetcode.com/tag/game-theory)

**Companies:** `de-shaw`

## Description

Alice and Bob take turns playing a game, with **Alice**** starting first**.

You are given a string `num` of **even length** consisting of digits and `'?'` characters. On each turn, a player will do the following if there is still at least one `'?'` in `num`:

	- Choose an index `i` where `num[i] == '?'`.

	- Replace `num[i]` with any digit between `'0'` and `'9'`.

The game ends when there are no more `'?'` characters in `num`.

For Bob to win, the sum of the digits in the first half of `num` must be **equal** to the sum of the digits in the second half. For Alice to win, the sums must **not be equal**.

	- For example, if the game ended with `num = "243801"`, then Bob wins because `2+4+3 = 8+0+1`. If the game ended with `num = "243803"`, then Alice wins because `2+4+3 != 8+0+3`.

Assuming Alice and Bob play **optimally**, return `true` *if Alice will win and *`false` *if Bob will win*.

 

**Example 1:**

```

Input: num = &quot;5023&quot;
Output: false
Explanation: There are no moves to be made.
The sum of the first half is equal to the sum of the second half: 5 + 0 = 2 + 3.

```

**Example 2:**

```

Input: num = &quot;25??&quot;
Output: true
Explanation: Alice can replace one of the &#39;?&#39;s with &#39;9&#39; and it will be impossible for Bob to make the sums equal.

```

**Example 3:**

```

Input: num = &quot;?3295???&quot;
Output: false
Explanation: It can be proven that Bob will always win. One possible outcome is:
- Alice replaces the first &#39;?&#39; with &#39;9&#39;. num = &quot;93295???&quot;.
- Bob replaces one of the &#39;?&#39; in the right half with &#39;9&#39;. num = &quot;932959??&quot;.
- Alice replaces one of the &#39;?&#39; in the right half with &#39;2&#39;. num = &quot;9329592?&quot;.
- Bob replaces the last &#39;?&#39; in the right half with &#39;7&#39;. num = &quot;93295927&quot;.
Bob wins because 9 + 3 + 2 + 9 = 5 + 9 + 2 + 7.

```

 

**Constraints:**

	- `2 <= num.length <= 10^5`

	- `num.length` is **even**.

	- `num` consists of only digits and `'?'`.

---

**Links:** [Submissions](https://leetcode.com/problems/sum-game/) | [Solutions](https://leetcode.com/problems/sum-game/)
