# [752. Open the Lock](https://leetcode.com/problems/open-the-lock/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 5060 | 232 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `amazon`, `facebook`, `microsoft`, `bloomberg`, `de-shaw`, `snapchat`, `google`, `tiktok`, `goldman-sachs`, `uber`, `ebay`

## Description

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: `'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'`. The wheels can rotate freely and wrap around: for example we can turn `'9'` to be `'0'`, or `'0'` to be `'9'`. Each move consists of turning one wheel one slot.

The lock initially starts at `'0000'`, a string representing the state of the 4 wheels.

You are given a list of `deadends` dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a `target` representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

 

**Example 1:**

```

Input: deadends = [&quot;0201&quot;,&quot;0101&quot;,&quot;0102&quot;,&quot;1212&quot;,&quot;2002&quot;], target = &quot;0202&quot;
Output: 6
Explanation: 
A sequence of valid moves would be &quot;0000&quot; -&gt; &quot;1000&quot; -&gt; &quot;1100&quot; -&gt; &quot;1200&quot; -&gt; &quot;1201&quot; -&gt; &quot;1202&quot; -&gt; &quot;0202&quot;.
Note that a sequence like &quot;0000&quot; -&gt; &quot;0001&quot; -&gt; &quot;0002&quot; -&gt; &quot;0102&quot; -&gt; &quot;0202&quot; would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end &quot;0102&quot;.

```

**Example 2:**

```

Input: deadends = [&quot;8888&quot;], target = &quot;0009&quot;
Output: 1
Explanation: We can turn the last wheel in reverse to move from &quot;0000&quot; -&gt; &quot;0009&quot;.

```

**Example 3:**

```

Input: deadends = [&quot;8887&quot;,&quot;8889&quot;,&quot;8878&quot;,&quot;8898&quot;,&quot;8788&quot;,&quot;8988&quot;,&quot;7888&quot;,&quot;9888&quot;], target = &quot;8888&quot;
Output: -1
Explanation: We cannot reach the target without getting stuck.

```

 

**Constraints:**

	- `1 <= deadends.length <= 500`

	- `deadends[i].length == 4`

	- `target.length == 4`

	- target **will not be** in the list `deadends`.

	- `target` and `deadends[i]` consist of digits only.

---

**Links:** [Submissions](https://leetcode.com/problems/open-the-lock/) | [Solutions](https://leetcode.com/problems/open-the-lock/)
