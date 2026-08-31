# [3577. Count the Number of Computer Unlocking Permutations](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 341 | 124 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`math`](https://leetcode.com/tag/math), [`brainteaser`](https://leetcode.com/tag/brainteaser), [`combinatorics`](https://leetcode.com/tag/combinatorics)

**Companies:** `google`, `facebook`

## Description

You are given an array `complexity` of length `n`.

There are `n` **locked** computers in a room with labels from 0 to `n - 1`, each with its own **unique** password. The password of the computer `i` has a complexity `complexity[i]`.

The password for the computer labeled 0 is **already** decrypted and serves as the root. All other computers must be unlocked using it or another previously unlocked computer, following this information:

	- You can decrypt the password for the computer `i` using the password for computer `j`, where `j` is **any** integer less than `i` with a lower complexity. (i.e. `j 9 + 7.

**Note** that the password for the computer **with label** 0 is decrypted, and *not* the computer with the first position in the permutation.

 

**Example 1:**

**Input:** complexity = [1,2,3]

**Output:** 2

**Explanation:**

The valid permutations are:

	- [0, 1, 2]
	
		Unlock computer 0 first with root password.

		- Unlock computer 1 with password of computer 0 since `complexity[0] 
	- [0, 2, 1]
	
		Unlock computer 0 first with root password.

		- Unlock computer 2 with password of computer 0 since `complexity[0] 

**Example 2:**

**Input:** complexity = [3,3,3,4,4,4]

**Output:** 0

**Explanation:**

There are no possible permutations which can unlock all computers.

 

**Constraints:**

	- `2 <= complexity.length <= 10^5`

	- `1 <= complexity[i] <= 10^9`

---

**Links:** [Submissions](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/) | [Solutions](https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/)
