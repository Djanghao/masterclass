# [2227. Encrypt and Decrypt Strings](https://leetcode.com/problems/encrypt-and-decrypt-strings/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 351 | 80 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `duolingo`, `amazon`

## Description

You are given a character array `keys` containing **unique** characters and a string array `values` containing strings of length 2. You are also given another string array `dictionary` that contains all permitted original strings after decryption. You should implement a data structure that can encrypt or decrypt a **0-indexed** string.

A string is **encrypted** with the following process:

	- For each character `c` in the string, we find the index `i` satisfying `keys[i] == c` in `keys`.

	- Replace `c` with `values[i]` in the string.

Note that in case a character of the string is **not present** in `keys`, the encryption process cannot be carried out, and an empty string `""` is returned.

A string is **decrypted** with the following process:

	- For each substring `s` of length 2 occurring at an even index in the string, we find an `i` such that `values[i] == s`. If there are multiple valid `i`, we choose **any** one of them. This means a string could have multiple possible strings it can decrypt to.

	- Replace `s` with `keys[i]` in the string.

Implement the `Encrypter` class:

	- `Encrypter(char[] keys, String[] values, String[] dictionary)` Initializes the `Encrypter` class with `keys, values`, and `dictionary`.

	- `String encrypt(String word1)` Encrypts `word1` with the encryption process described above and returns the encrypted string.

	- `int decrypt(String word2)` Returns the number of possible strings `word2` could decrypt to that also appear in `dictionary`.

 

**Example 1:**

```

Input
[&quot;Encrypter&quot;, &quot;encrypt&quot;, &quot;decrypt&quot;]
[[[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], [&quot;ei&quot;, &quot;zf&quot;, &quot;ei&quot;, &quot;am&quot;], [&quot;abcd&quot;, &quot;acbd&quot;, &quot;adbc&quot;, &quot;badc&quot;, &quot;dacb&quot;, &quot;cadb&quot;, &quot;cbda&quot;, &quot;abad&quot;]], [&quot;abcd&quot;], [&quot;eizfeiam&quot;]]
Output
[null, &quot;eizfeiam&quot;, 2]

Explanation
Encrypter encrypter = new Encrypter([[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;], [&quot;ei&quot;, &quot;zf&quot;, &quot;ei&quot;, &quot;am&quot;], [&quot;abcd&quot;, &quot;acbd&quot;, &quot;adbc&quot;, &quot;badc&quot;, &quot;dacb&quot;, &quot;cadb&quot;, &quot;cbda&quot;, &quot;abad&quot;]);
encrypter.encrypt(&quot;abcd&quot;); // return &quot;eizfeiam&quot;. 
&nbsp;                          // &#39;a&#39; maps to &quot;ei&quot;, &#39;b&#39; maps to &quot;zf&quot;, &#39;c&#39; maps to &quot;ei&quot;, and &#39;d&#39; maps to &quot;am&quot;.
encrypter.decrypt(&quot;eizfeiam&quot;); // return 2. 
                              // &quot;ei&quot; can map to &#39;a&#39; or &#39;c&#39;, &quot;zf&quot; maps to &#39;b&#39;, and &quot;am&quot; maps to &#39;d&#39;. 
                              // Thus, the possible strings after decryption are &quot;abad&quot;, &quot;cbad&quot;, &quot;abcd&quot;, and &quot;cbcd&quot;. 
                              // 2 of those strings, &quot;abad&quot; and &quot;abcd&quot;, appear in dictionary, so the answer is 2.

```

 

**Constraints:**

	- `1 <= keys.length == values.length <= 26`

	- `values[i].length == 2`

	- `1 <= dictionary.length <= 100`

	- `1 <= dictionary[i].length <= 100`

	- All `keys[i]` and `dictionary[i]` are **unique**.

	- `1 <= word1.length <= 2000`

	- `2 <= word2.length <= 200`

	- All `word1[i]` appear in `keys`.

	- `word2.length` is even.

	- `keys`, `values[i]`, `dictionary[i]`, `word1`, and `word2` only contain lowercase English letters.

	- At most `200` calls will be made to `encrypt` and `decrypt` **in total**.

---

**Links:** [Submissions](https://leetcode.com/problems/encrypt-and-decrypt-strings/) | [Solutions](https://leetcode.com/problems/encrypt-and-decrypt-strings/)
