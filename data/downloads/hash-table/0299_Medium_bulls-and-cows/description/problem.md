# [299. Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 2598 | 1811 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `amazon`, `google`, `zopsmart`, `facebook`, `epic-systems`

## Description

You are playing the **Bulls and Cows** game with your friend.

You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

	- The number of "bulls", which are digits in the guess that are in the correct position.

	- The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.

Given the secret number `secret` and your friend's guess `guess`, return *the hint for your friend's guess*.

The hint should be formatted as `"xAyB"`, where `x` is the number of bulls and `y` is the number of cows. Note that both `secret` and `guess` may contain duplicate digits.

 

**Example 1:**

```

Input: secret = &quot;1807&quot;, guess = &quot;7810&quot;
Output: &quot;1A3B&quot;
Explanation: Bulls are connected with a &#39;|&#39; and cows are underlined:
&quot;1807&quot;
  |
&quot;7810&quot;
```

**Example 2:**

```

Input: secret = &quot;1123&quot;, guess = &quot;0111&quot;
Output: &quot;1A1B&quot;
Explanation: Bulls are connected with a &#39;|&#39; and cows are underlined:
&quot;1123&quot;        &quot;1123&quot;
  |      or     |
&quot;0111&quot;        &quot;0111&quot;
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.

```

 

**Constraints:**

	- `1 <= secret.length, guess.length <= 1000`

	- `secret.length == guess.length`

	- `secret` and `guess` consist of digits only.

---

**Links:** [Submissions](https://leetcode.com/problems/bulls-and-cows/) | [Solutions](https://leetcode.com/problems/bulls-and-cows/)
