# [1694. Reformat Phone Number](https://leetcode.com/problems/reformat-phone-number/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 391 | 205 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `activision`

## Description

You are given a phone number as a string `number`. `number` consists of digits, spaces `' '`, and/or dashes `'-'`.

You would like to reformat the phone number in a certain manner. Firstly, **remove** all spaces and dashes. Then, **group** the digits from left to right into blocks of length 3 **until** there are 4 or fewer digits. The final digits are then grouped as follows:

	- 2 digits: A single block of length 2.

	- 3 digits: A single block of length 3.

	- 4 digits: Two blocks of length 2 each.

The blocks are then joined by dashes. Notice that the reformatting process should **never** produce any blocks of length 1 and produce **at most** two blocks of length 2.

Return *the phone number after formatting.*

 

**Example 1:**

```

Input: number = &quot;1-23-45 6&quot;
Output: &quot;123-456&quot;
Explanation: The digits are &quot;123456&quot;.
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is &quot;123&quot;.
Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is &quot;456&quot;.
Joining the blocks gives &quot;123-456&quot;.

```

**Example 2:**

```

Input: number = &quot;123 4-567&quot;
Output: &quot;123-45-67&quot;
Explanation: The digits are &quot;1234567&quot;.
Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is &quot;123&quot;.
Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are &quot;45&quot; and &quot;67&quot;.
Joining the blocks gives &quot;123-45-67&quot;.

```

**Example 3:**

```

Input: number = &quot;123 4-5678&quot;
Output: &quot;123-456-78&quot;
Explanation: The digits are &quot;12345678&quot;.
Step 1: The 1st block is &quot;123&quot;.
Step 2: The 2nd block is &quot;456&quot;.
Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is &quot;78&quot;.
Joining the blocks gives &quot;123-456-78&quot;.

```

 

**Constraints:**

	- `2 <= number.length <= 100`

	- `number` consists of digits and the characters `'-'` and `' '`.

	- There are at least **two** digits in `number`.

---

**Links:** [Submissions](https://leetcode.com/problems/reformat-phone-number/) | [Solutions](https://leetcode.com/problems/reformat-phone-number/)
