# [831. Masking Personal Information](https://leetcode.com/problems/masking-personal-information/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 189 | 463 |

**Tags:** [`string`](https://leetcode.com/tag/string)

**Companies:** `salesforce`, `twitter`

## Description

You are given a personal information string `s`, representing either an **email address** or a **phone number**. Return *the **masked** personal information using the below rules*.

**Email address:**

An email address is:

	- A **name** consisting of uppercase and lowercase English letters, followed by

	- The `'@'` symbol, followed by

	- The **domain** consisting of uppercase and lowercase English letters with a dot `'.'` somewhere in the middle (not the first or last character).

To mask an email:

	- The uppercase letters in the **name** and **domain** must be converted to lowercase letters.

	- The middle letters of the **name** (i.e., all but the first and last letters) must be replaced by 5 asterisks `"*****"`.

**Phone number:**

A phone number is formatted as follows:

	- The phone number contains 10-13 digits.

	- The last 10 digits make up the **local number**.

	- The remaining 0-3 digits, in the beginning, make up the **country code**.

	- **Separation characters** from the set `{'+', '-', '(', ')', ' '}` separate the above digits in some way.

To mask a phone number:

	- Remove all **separation characters**.

	- The masked phone number should have the form:
	
		`"***-***-XXXX"` if the country code has 0 digits.

		- `"+*-***-***-XXXX"` if the country code has 1 digit.

		- `"+**-***-***-XXXX"` if the country code has 2 digits.

		- `"+***-***-***-XXXX"` if the country code has 3 digits.

	
	
	- `"XXXX"` is the last 4 digits of the **local number**.

 

**Example 1:**

```

Input: s = &quot;LeetCode@LeetCode.com&quot;
Output: &quot;l*****e@leetcode.com&quot;
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.

```

**Example 2:**

```

Input: s = &quot;AB@qq.com&quot;
Output: &quot;a*****b@qq.com&quot;
Explanation: s is an email address.
The name and domain are converted to lowercase, and the middle of the name is replaced by 5 asterisks.
Note that even though &quot;ab&quot; is 2 characters, it still must have 5 asterisks in the middle.

```

**Example 3:**

```

Input: s = &quot;1(234)567-890&quot;
Output: &quot;***-***-7890&quot;
Explanation: s is a phone number.
There are 10 digits, so the local number is 10 digits and the country code is 0 digits.
Thus, the resulting masked number is &quot;***-***-7890&quot;.

```

 

**Constraints:**

	- `s` is either a **valid** email or a phone number.

	- If `s` is an email:
	
		`8 
	- If `s` is a phone number:
	
		`10

---

**Links:** [Submissions](https://leetcode.com/problems/masking-personal-information/) | [Solutions](https://leetcode.com/problems/masking-personal-information/)
