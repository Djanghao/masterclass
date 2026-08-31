# [2284. Sender With Largest Word Count](https://leetcode.com/problems/sender-with-largest-word-count/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 461 | 41 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`counting`](https://leetcode.com/tag/counting)

**Companies:** `google`

## Description

You have a chat log of `n` messages. You are given two string arrays `messages` and `senders` where `messages[i]` is a **message** sent by `senders[i]`.

A **message** is list of **words** that are separated by a single space with no leading or trailing spaces. The **word count** of a sender is the total number of **words** sent by the sender. Note that a sender may send more than one message.

Return *the sender with the **largest** word count*. If there is more than one sender with the largest word count, return *the one with the **lexicographically largest** name*.

**Note:**

	- Uppercase letters come before lowercase letters in lexicographical order.

	- `"Alice"` and `"alice"` are distinct.

 

**Example 1:**

```

Input: messages = [&quot;Hello userTwooo&quot;,&quot;Hi userThree&quot;,&quot;Wonderful day Alice&quot;,&quot;Nice day userThree&quot;], senders = [&quot;Alice&quot;,&quot;userTwo&quot;,&quot;userThree&quot;,&quot;Alice&quot;]
Output: &quot;Alice&quot;
Explanation: Alice sends a total of 2 + 3 = 5 words.
userTwo sends a total of 2 words.
userThree sends a total of 3 words.
Since Alice has the largest word count, we return &quot;Alice&quot;.

```

**Example 2:**

```

Input: messages = [&quot;How is leetcode for everyone&quot;,&quot;Leetcode is useful for practice&quot;], senders = [&quot;Bob&quot;,&quot;Charlie&quot;]
Output: &quot;Charlie&quot;
Explanation: Bob sends a total of 5 words.
Charlie sends a total of 5 words.
Since there is a tie for the largest word count, we return the sender with the lexicographically larger name, Charlie.
```

 

**Constraints:**

	- `n == messages.length == senders.length`

	- `1 <= n <= 10^4`

	- `1 <= messages[i].length <= 100`

	- `1 <= senders[i].length <= 10`

	- `messages[i]` consists of uppercase and lowercase English letters and `' '`.

	- All the words in `messages[i]` are separated by **a single space**.

	- `messages[i]` does not have leading or trailing spaces.

	- `senders[i]` consists of uppercase and lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/sender-with-largest-word-count/) | [Solutions](https://leetcode.com/problems/sender-with-largest-word-count/)
