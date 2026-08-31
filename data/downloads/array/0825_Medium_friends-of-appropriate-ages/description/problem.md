# [825. Friends Of Appropriate Ages](https://leetcode.com/problems/friends-of-appropriate-ages/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 866 | 1273 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`two-pointers`](https://leetcode.com/tag/two-pointers), [`binary-search`](https://leetcode.com/tag/binary-search), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `facebook`

## Description

There are `n` persons on a social media website. You are given an integer array `ages` where `ages[i]` is the age of the `i^th` person.

A Person `x` will not send a friend request to a person `y` (`x != y`) if any of the following conditions is true:

	- `age[y]  age[x]`

	- `age[y] > 100 && age[x] < 100`

Otherwise, `x` will send a friend request to `y`.

Note that if `x` sends a request to `y`, `y` will not necessarily send a request to `x`. Also, a person will not send a friend request to themself.

Return *the total number of friend requests made*.

 

**Example 1:**

```

Input: ages = [16,16]
Output: 2
Explanation: 2 people friend request each other.

```

**Example 2:**

```

Input: ages = [16,17,18]
Output: 2
Explanation: Friend requests are made 17 -&gt; 16, 18 -&gt; 17.

```

**Example 3:**

```

Input: ages = [20,30,100,110,120]
Output: 3
Explanation: Friend requests are made 110 -&gt; 100, 120 -&gt; 110, 120 -&gt; 100.

```

 

**Constraints:**

	- `n == ages.length`

	- `1 <= n <= 2 * 10^4`

	- `1 <= ages[i] <= 120`

---

**Links:** [Submissions](https://leetcode.com/problems/friends-of-appropriate-ages/) | [Solutions](https://leetcode.com/problems/friends-of-appropriate-ages/)
