# [1807. Evaluate the Bracket Pairs of a String](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 513 | 43 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`

## Description

You are given a string `s` that contains some bracket pairs, with each pair containing a **non-empty** key.

	- For example, in the string `"(name)is(age)yearsold"`, there are **two** bracket pairs that contain the keys `"name"` and `"age"`.

You know the values of a wide range of keys. This is represented by a 2D string array `knowledge` where each `knowledge[i] = [key_i, value_i]` indicates that key `key_i` has a value of `value_i`.

You are tasked to evaluate **all** of the bracket pairs. When you evaluate a bracket pair that contains some key `key_i`, you will:

	- Replace `key_i` and the bracket pair with the key's corresponding `value_i`.

	- If you do not know the value of the key, you will replace `key_i` and the bracket pair with a question mark `"?"` (without the quotation marks).

Each key will appear at most once in your `knowledge`. There will not be any nested brackets in `s`.

Return *the resulting string after evaluating **all** of the bracket pairs.*

 

**Example 1:**

```

Input: s = &quot;(name)is(age)yearsold&quot;, knowledge = [[&quot;name&quot;,&quot;bob&quot;],[&quot;age&quot;,&quot;two&quot;]]
Output: &quot;bobistwoyearsold&quot;
Explanation:
The key &quot;name&quot; has a value of &quot;bob&quot;, so replace &quot;(name)&quot; with &quot;bob&quot;.
The key &quot;age&quot; has a value of &quot;two&quot;, so replace &quot;(age)&quot; with &quot;two&quot;.

```

**Example 2:**

```

Input: s = &quot;hi(name)&quot;, knowledge = [[&quot;a&quot;,&quot;b&quot;]]
Output: &quot;hi?&quot;
Explanation: As you do not know the value of the key &quot;name&quot;, replace &quot;(name)&quot; with &quot;?&quot;.

```

**Example 3:**

```

Input: s = &quot;(a)(a)(a)aaa&quot;, knowledge = [[&quot;a&quot;,&quot;yes&quot;]]
Output: &quot;yesyesyesaaa&quot;
Explanation: The same key can appear multiple times.
The key &quot;a&quot; has a value of &quot;yes&quot;, so replace all occurrences of &quot;(a)&quot; with &quot;yes&quot;.
Notice that the &quot;a&quot;s not in a bracket pair are not evaluated.

```

 

**Constraints:**

	- `1 <= s.length <= 10^5`

	- `0 <= knowledge.length <= 10^5`

	- `knowledge[i].length == 2`

	- `1 <= key_i.length, value_i.length <= 10`

	- `s` consists of lowercase English letters and round brackets `'('` and `')'`.

	- Every open bracket `'('` in `s` will have a corresponding close bracket `')'`.

	- The key in each bracket pair of `s` will be non-empty.

	- There will not be any nested bracket pairs in `s`.

	- `key_i` and `value_i` consist of lowercase English letters.

	- Each `key_i` in `knowledge` is unique.

---

**Links:** [Submissions](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/) | [Solutions](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/)
