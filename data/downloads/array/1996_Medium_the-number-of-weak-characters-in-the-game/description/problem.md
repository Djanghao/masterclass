# [1996. The Number of Weak Characters in the Game](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 3087 | 99 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`stack`](https://leetcode.com/tag/stack), [`greedy`](https://leetcode.com/tag/greedy), [`sorting`](https://leetcode.com/tag/sorting), [`monotonic-stack`](https://leetcode.com/tag/monotonic-stack)

**Companies:** `google`

## Description

You are playing a game that contains multiple characters, and each of the characters has **two** main properties: **attack** and **defense**. You are given a 2D integer array `properties` where `properties[i] = [attack_i, defense_i]` represents the properties of the `i^th` character in the game.

A character is said to be **weak** if any other character has **both** attack and defense levels **strictly greater** than this character's attack and defense levels. More formally, a character `i` is said to be **weak** if there exists another character `j` where `attack_j > attack_i` and `defense_j > defense_i`.

Return *the number of **weak** characters*.

 

**Example 1:**

```

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.

```

**Example 2:**

```

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.

```

**Example 3:**

```

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.

```

 

**Constraints:**

	- `2 <= properties.length <= 10^5`

	- `properties[i].length == 2`

	- `1 <= attack_i, defense_i <= 10^5`

---

**Links:** [Submissions](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/) | [Solutions](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/)
