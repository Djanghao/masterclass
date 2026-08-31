# [1974. Minimum Time to Type Word Using Special Typewriter](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 769 | 37 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `jpmorgan`, `ibm`, `thomson-reuters`

## Description

There is a special typewriter with lowercase English letters `'a'` to `'z'` arranged in a **circle** with a **pointer**. A character can **only** be typed if the pointer is pointing to that character. The pointer is **initially** pointing to the character `'a'`.

![image](./images/0.jpg)

Each second, you may perform one of the following operations:

	- Move the pointer one character **counterclockwise** or **clockwise**.

	- Type the character the pointer is **currently** on.

Given a string `word`, return the** minimum** number of seconds to type out the characters in `word`.

 

**Example 1:**

```

Input: word = &quot;abc&quot;
Output: 5
Explanation: 
The characters are printed as follows:
- Type the character &#39;a&#39; in 1 second since the pointer is initially on &#39;a&#39;.
- Move the pointer clockwise to &#39;b&#39; in 1 second.
- Type the character &#39;b&#39; in 1 second.
- Move the pointer clockwise to &#39;c&#39; in 1 second.
- Type the character &#39;c&#39; in 1 second.

```

**Example 2:**

```

Input: word = &quot;bza&quot;
Output: 7
Explanation:
The characters are printed as follows:
- Move the pointer clockwise to &#39;b&#39; in 1 second.
- Type the character &#39;b&#39; in 1 second.
- Move the pointer counterclockwise to &#39;z&#39; in 2 seconds.
- Type the character &#39;z&#39; in 1 second.
- Move the pointer clockwise to &#39;a&#39; in 1 second.
- Type the character &#39;a&#39; in 1 second.

```

**Example 3:**

```

Input: word = &quot;zjpc&quot;
Output: 34
Explanation:
The characters are printed as follows:
- Move the pointer counterclockwise to &#39;z&#39; in 1 second.
- Type the character &#39;z&#39; in 1 second.
- Move the pointer clockwise to &#39;j&#39; in 10 seconds.
- Type the character &#39;j&#39; in 1 second.
- Move the pointer clockwise to &#39;p&#39; in 6 seconds.
- Type the character &#39;p&#39; in 1 second.
- Move the pointer counterclockwise to &#39;c&#39; in 13 seconds.
- Type the character &#39;c&#39; in 1 second.

```

 

**Constraints:**

	- `1 <= word.length <= 100`

	- `word` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/) | [Solutions](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/)
