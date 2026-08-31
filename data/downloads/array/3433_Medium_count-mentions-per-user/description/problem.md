# [3433. Count Mentions Per User](https://leetcode.com/problems/count-mentions-per-user/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 375 | 242 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`sorting`](https://leetcode.com/tag/sorting), [`simulation`](https://leetcode.com/tag/simulation)

**Companies:** `microsoft`, `visa`

## Description

You are given an integer `numberOfUsers` representing the total number of users and an array `events` of size `n x 3`.

Each events[i] can be either of the following two types:

	- **Message Event:** `["MESSAGE", "timestamp_i", "mentions_string_i"]`

	
		This event indicates that a set of users was mentioned in a message at `timestamp_i`.

		- The `mentions_string_i` string can contain one of the following tokens:
		
			`id`: where `` is an integer in range `[0,numberOfUsers - 1]`. There can be **multiple** ids separated by a single whitespace and may contain duplicates. This can mention even the offline users.

			- `ALL`: mentions **all** users.

			- `HERE`: mentions all **online** users.

		
		
	
	
	- **Offline Event:** `["OFFLINE", "timestamp_i", "id_i"]`
	
		This event indicates that the user `id_i` had become offline at `timestamp_i` for **60 time units**. The user will automatically be online again at time `timestamp_i + 60`.

	
	

Return an array `mentions` where `mentions[i]` represents the number of mentions the user with id `i` has across all `MESSAGE` events.

All users are initially online, and if a user goes offline or comes back online, their status change is processed *before* handling any message event that occurs at the same timestamp.

**Note **that a user can be mentioned **multiple** times in a **single** message event, and each mention should be counted **separately**.

 

**Example 1:**

**Input:** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]

**Output:** [2,2]

**Explanation:**

Initially, all users are online.

At timestamp 10, `id1` and `id0` are mentioned. `mentions = [1,1]`

At timestamp 11, `id0` goes **offline.**

At timestamp 71, `id0` comes back **online** and `"HERE"` is mentioned. `mentions = [2,2]`

**Example 2:**

**Input:** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]

**Output:** [2,2]

**Explanation:**

Initially, all users are online.

At timestamp 10, `id1` and `id0` are mentioned. `mentions = [1,1]`

At timestamp 11, `id0` goes **offline.**

At timestamp 12, `"ALL"` is mentioned. This includes offline users, so both `id0` and `id1` are mentioned. `mentions = [2,2]`

**Example 3:**

**Input:** numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]

**Output:** [0,1]

**Explanation:**

Initially, all users are online.

At timestamp 10, `id0` goes **offline.**

At timestamp 12, `"HERE"` is mentioned. Because `id0` is still offline, they will not be mentioned. `mentions = [0,1]`

 

**Constraints:**

	- `1 ` mentions in any `"MESSAGE"` event is between `1` and `100`.

	- `0  <= numberOfUsers - 1`

	- It is **guaranteed** that the user id referenced in the `OFFLINE` event is **online** at the time the event occurs.

---

**Links:** [Submissions](https://leetcode.com/problems/count-mentions-per-user/) | [Solutions](https://leetcode.com/problems/count-mentions-per-user/)
