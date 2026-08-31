# [288. Unique Word Abbreviation](https://leetcode.com/problems/unique-word-abbreviation/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 216 | 1855 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`design`](https://leetcode.com/tag/design)

**Companies:** `google`

## Description

The **abbreviation** of a word is a concatenation of its first letter, the number of characters between the first and last letter, and its last letter. If a word has only two characters, then it is an **abbreviation** of itself.

For example:

	- `dog --> d1g` because there is one letter between the first letter `'d'` and the last letter `'g'`.

	- `internationalization --> i18n` because there are 18 letters between the first letter `'i'` and the last letter `'n'`.

	- `it --> it` because any word with only two characters is an **abbreviation** of itself.

Implement the `ValidWordAbbr` class:

	- `ValidWordAbbr(String[] dictionary)` Initializes the object with a `dictionary` of words.

	- `boolean isUnique(string word)` Returns `true` if **either** of the following conditions are met (otherwise returns `false`):
	
		There is no word in `dictionary` whose **abbreviation** is equal to `word`'s **abbreviation**.

		- For any word in `dictionary` whose **abbreviation** is equal to `word`'s **abbreviation**, that word and `word` are **the same**.

	
	

 

**Example 1:**

```

Input
[&quot;ValidWordAbbr&quot;, &quot;isUnique&quot;, &quot;isUnique&quot;, &quot;isUnique&quot;, &quot;isUnique&quot;, &quot;isUnique&quot;]
[[[&quot;deer&quot;, &quot;door&quot;, &quot;cake&quot;, &quot;card&quot;]], [&quot;dear&quot;], [&quot;cart&quot;], [&quot;cane&quot;], [&quot;make&quot;], [&quot;cake&quot;]]
Output
[null, false, true, false, true, true]

Explanation
ValidWordAbbr validWordAbbr = new ValidWordAbbr([&quot;deer&quot;, &quot;door&quot;, &quot;cake&quot;, &quot;card&quot;]);
validWordAbbr.isUnique(&quot;dear&quot;); // return false, dictionary word &quot;deer&quot; and word &quot;dear&quot; have the same abbreviation &quot;d2r&quot; but are not the same.
validWordAbbr.isUnique(&quot;cart&quot;); // return true, no words in the dictionary have the abbreviation &quot;c2t&quot;.
validWordAbbr.isUnique(&quot;cane&quot;); // return false, dictionary word &quot;cake&quot; and word &quot;cane&quot; have the same abbreviation  &quot;c2e&quot; but are not the same.
validWordAbbr.isUnique(&quot;make&quot;); // return true, no words in the dictionary have the abbreviation &quot;m2e&quot;.
validWordAbbr.isUnique(&quot;cake&quot;); // return true, because &quot;cake&quot; is already in the dictionary and no other word in the dictionary has &quot;c2e&quot; abbreviation.

```

 

**Constraints:**

	- `1 <= dictionary.length <= 3 * 10^4`

	- `1 <= dictionary[i].length <= 20`

	- `dictionary[i]` consists of lowercase English letters.

	- `1 <= word.length <= 20`

	- `word` consists of lowercase English letters.

	- At most `5000` calls will be made to `isUnique`.

---

**Links:** [Submissions](https://leetcode.com/problems/unique-word-abbreviation/) | [Solutions](https://leetcode.com/problems/unique-word-abbreviation/)
