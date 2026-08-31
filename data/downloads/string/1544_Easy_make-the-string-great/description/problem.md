# [1544. Make The String Great](https://leetcode.com/problems/make-the-string-great/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 3194 | 182 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`stack`](https://leetcode.com/tag/stack)

**Companies:** `google`, `amazon`, `facebook`, `accenture`

## Description

Given a string `s` of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** `s[i]` and `s[i + 1]` where:

	- `0 <= i <= s.length - 2`

	- `s[i]` is a lower-case letter and `s[i + 1]` is the same letter but in upper-case or **vice-versa**.

To make the string good, you can choose **two adjacent** characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return *the string* after making it good. The answer is guaranteed to be unique under the given constraints.

**Notice** that an empty string is also good.

 

**Example 1:**

```

Input: s = &quot;leEeetcode&quot;
Output: &quot;leetcode&quot;
Explanation: In the first step, either you choose i = 1 or i = 2, both will result &quot;leEeetcode&quot; to be reduced to &quot;leetcode&quot;.

```

**Example 2:**

```

Input: s = &quot;abBAcC&quot;
Output: &quot;&quot;
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
&quot;abBAcC&quot; --&gt; &quot;aAcC&quot; --&gt; &quot;cC&quot; --&gt; &quot;&quot;
&quot;abBAcC&quot; --&gt; &quot;abBA&quot; --&gt; &quot;aA&quot; --&gt; &quot;&quot;

```

**Example 3:**

```

Input: s = &quot;s&quot;
Output: &quot;s&quot;

```

 

**Constraints:**

	- `1 <= s.length <= 100`

	- `s` contains only lower and upper case English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/make-the-string-great/) | [Solutions](https://leetcode.com/problems/make-the-string-great/)
