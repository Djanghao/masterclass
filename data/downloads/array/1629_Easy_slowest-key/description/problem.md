# [1629. Slowest Key](https://leetcode.com/problems/slowest-key/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 794 | 113 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`string`](https://leetcode.com/tag/string)


## Description

A newly designed keypad was tested, where a tester pressed a sequence of `n` keys, one at a time.

You are given a string `keysPressed` of length `n`, where `keysPressed[i]` was the `i^th` key pressed in the testing sequence, and a sorted list `releaseTimes`, where `releaseTimes[i]` was the time the `i^th` key was released. Both arrays are **0-indexed**. The `0^th` key was pressed at the time `0`, and every subsequent key was pressed at the **exact** time the previous key was released.

The tester wants to know the key of the keypress that had the **longest duration**. The `i^th` keypress had a **duration** of `releaseTimes[i] - releaseTimes[i - 1]`, and the `0^th` keypress had a duration of `releaseTimes[0]`.

Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key **may not** have had the same **duration**.

*Return the key of the keypress that had the **longest duration**. If there are multiple such keypresses, return the lexicographically largest key of the keypresses.*

 

**Example 1:**

```

Input: releaseTimes = [9,29,49,50], keysPressed = &quot;cbcd&quot;
Output: &quot;c&quot;
Explanation: The keypresses were as follows:
Keypress for &#39;c&#39; had a duration of 9 (pressed at time 0 and released at time 9).
Keypress for &#39;b&#39; had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
Keypress for &#39;c&#39; had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
Keypress for &#39;d&#39; had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
The longest of these was the keypress for &#39;b&#39; and the second keypress for &#39;c&#39;, both with duration 20.
&#39;c&#39; is lexicographically larger than &#39;b&#39;, so the answer is &#39;c&#39;.

```

**Example 2:**

```

Input: releaseTimes = [12,23,36,46,62], keysPressed = &quot;spuda&quot;
Output: &quot;a&quot;
Explanation: The keypresses were as follows:
Keypress for &#39;s&#39; had a duration of 12.
Keypress for &#39;p&#39; had a duration of 23 - 12 = 11.
Keypress for &#39;u&#39; had a duration of 36 - 23 = 13.
Keypress for &#39;d&#39; had a duration of 46 - 36 = 10.
Keypress for &#39;a&#39; had a duration of 62 - 46 = 16.
The longest of these was the keypress for &#39;a&#39; with duration 16.
```

 

**Constraints:**

	- `releaseTimes.length == n`

	- `keysPressed.length == n`

	- `2 <= n <= 1000`

	- `1 <= releaseTimes[i] <= 10^9`

	- `releaseTimes[i] < releaseTimes[i+1]`

	- `keysPressed` contains only lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/slowest-key/) | [Solutions](https://leetcode.com/problems/slowest-key/)
