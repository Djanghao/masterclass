# [1702. Maximum Binary String After Change](https://leetcode.com/problems/maximum-binary-string-after-change/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 527 | 62 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`greedy`](https://leetcode.com/tag/greedy)

**Companies:** `huawei`

## Description

You are given a binary string `binary` consisting of only `0`'s or `1`'s. You can apply each of the following operations any number of times:

	- Operation 1: If the number contains the substring `"00"`, you can replace it with `"10"`.

	
		For example, `"00010" -> "10010`"

	
	
	- Operation 2: If the number contains the substring `"10"`, you can replace it with `"01"`.
	
		For example, `"00010" -> "00001"`

	
	

*Return the **maximum binary string** you can obtain after any number of operations. Binary string `x` is greater than binary string `y` if `x`'s decimal representation is greater than `y`'s decimal representation.*

 

**Example 1:**

```

Input: binary = &quot;000110&quot;
Output: &quot;111011&quot;
Explanation: A valid transformation sequence can be:
&quot;000110&quot; -&gt; &quot;000101&quot; 
&quot;000101&quot; -&gt; &quot;100101&quot; 
&quot;100101&quot; -&gt; &quot;110101&quot; 
&quot;110101&quot; -&gt; &quot;110011&quot; 
&quot;110011&quot; -&gt; &quot;111011&quot;

```

**Example 2:**

```

Input: binary = &quot;01&quot;
Output: &quot;01&quot;
Explanation:&nbsp;&quot;01&quot; cannot be transformed any further.

```

 

**Constraints:**

	- `1 <= binary.length <= 10^5`

	- `binary` consist of `'0'` and `'1'`.

---

**Links:** [Submissions](https://leetcode.com/problems/maximum-binary-string-after-change/) | [Solutions](https://leetcode.com/problems/maximum-binary-string-after-change/)
