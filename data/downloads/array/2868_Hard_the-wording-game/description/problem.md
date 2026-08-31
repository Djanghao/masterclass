# [2868. The Wording Game](https://leetcode.com/problems/the-wording-game/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 10 | 5 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy), [`game-theory`](https://leetcode.com/tag/game-theory)


## Description

Alice and Bob each have a **lexicographically sorted** array of strings named `a` and `b` respectively.

They are playing a wording game with the following rules:

	- On each turn, the current player should play a word from their list such that the new word is **closely greater** than the last played word; then it's the other player's turn.

	- If a player can't play a word on their turn, they lose.

Alice starts the game by playing her **lexicographically ****smallest **word.

Given `a` and `b`, return `true` *if Alice can win knowing that both players play their best, and* `false` *otherwise.*

A word `w` is **closely greater** than a word `z` if the following conditions are met:

	- `w` is **lexicographically greater** than `z`.

	- If `w_1` is the first letter of `w` and `z_1` is the first letter of `z`, `w_1` should either be **equal** to `z_1` or be the **letter after** `z_1` in the alphabet.

	- For example, the word `"care"` is closely greater than `"book"` and `"car"`, but is not closely greater than `"ant"` or `"cook"`.

A string `s` is lexicographically **greater** than a string `t` if in the first position where `s` and `t` differ, string `s` has a letter that appears later in the alphabet than the corresponding letter in `t`. If the first `min(s.length, t.length)` characters do not differ, then the longer string is the lexicographically greater one.

 

**Example 1:**

```

Input: a = [&quot;avokado&quot;,&quot;dabar&quot;], b = [&quot;brazil&quot;]
Output: false
Explanation: Alice must start the game by playing the word &quot;avokado&quot; since it&#39;s her smallest word, then Bob plays his only word, &quot;brazil&quot;, which he can play because its first letter, &#39;b&#39;, is the letter after Alice&#39;s word&#39;s first letter, &#39;a&#39;.
Alice can&#39;t play a word since the first letter of the only word left is not equal to &#39;b&#39; or the letter after &#39;b&#39;, &#39;c&#39;.
So, Alice loses, and the game ends.
```

**Example 2:**

```

Input: a = [&quot;ananas&quot;,&quot;atlas&quot;,&quot;banana&quot;], b = [&quot;albatros&quot;,&quot;cikla&quot;,&quot;nogomet&quot;]
Output: true
Explanation: Alice must start the game by playing the word &quot;ananas&quot;.
Bob can&#39;t play a word since the only word he has that starts with the letter &#39;a&#39; or &#39;b&#39; is &quot;albatros&quot;, which is smaller than Alice&#39;s word.
So Alice wins, and the game ends.
```

**Example 3:**

```

Input: a = [&quot;hrvatska&quot;,&quot;zastava&quot;], b = [&quot;bijeli&quot;,&quot;galeb&quot;]
Output: true
Explanation: Alice must start the game by playing the word &quot;hrvatska&quot;.
Bob can&#39;t play a word since the first letter of both of his words are smaller than the first letter of Alice&#39;s word, &#39;h&#39;.
So Alice wins, and the game ends.

```

 

**Constraints:**

	- `1 <= a.length, b.length <= 10^5`

	- `a[i]` and `b[i]` consist only of lowercase English letters.

	- `a` and `b` are **lexicographically sorted**.

	- All the words in `a` and `b` combined are **distinct**.

	- The sum of the lengths of all the words in `a` and `b` combined does not exceed `10^6`.

---

**Links:** [Submissions](https://leetcode.com/problems/the-wording-game/) | [Solutions](https://leetcode.com/problems/the-wording-game/)
