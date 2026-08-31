# [379. Design Phone Directory](https://leetcode.com/problems/design-phone-directory/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 362 | 480 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`linked-list`](https://leetcode.com/tag/linked-list), [`design`](https://leetcode.com/tag/design), [`queue`](https://leetcode.com/tag/queue)

**Companies:** `google`

## Description

Design a phone directory that initially has `maxNumbers` empty slots that can store numbers. The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the `PhoneDirectory` class:

	- `PhoneDirectory(int maxNumbers)` Initializes the phone directory with the number of available slots `maxNumbers`.

	- `int get()` Provides a number that is not assigned to anyone. Returns `-1` if no number is available.

	- `bool check(int number)` Returns `true` if the slot `number` is available and `false` otherwise.

	- `void release(int number)` Recycles or releases the slot `number`.

 

**Example 1:**

```

Input
[&quot;PhoneDirectory&quot;, &quot;get&quot;, &quot;get&quot;, &quot;check&quot;, &quot;get&quot;, &quot;check&quot;, &quot;release&quot;, &quot;check&quot;]
[[3], [], [], [2], [], [2], [2], [2]]
Output
[null, 0, 1, true, 2, false, null, true]

Explanation
PhoneDirectory phoneDirectory = new PhoneDirectory(3);
phoneDirectory.get();      // It can return any available phone number. Here we assume it returns 0.
phoneDirectory.get();      // Assume it returns 1.
phoneDirectory.check(2);   // The number 2 is available, so return true.
phoneDirectory.get();      // It returns 2, the only number that is left.
phoneDirectory.check(2);   // The number 2 is no longer available, so return false.
phoneDirectory.release(2); // Release number 2 back to the pool.
phoneDirectory.check(2);   // Number 2 is available again, return true.

```

 

**Constraints:**

	- `1 <= maxNumbers <= 10^4`

	- `0 <= number < maxNumbers`

	- At most `2 * 10^4` calls will be made to `get`, `check`, and `release`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-phone-directory/) | [Solutions](https://leetcode.com/problems/design-phone-directory/)
