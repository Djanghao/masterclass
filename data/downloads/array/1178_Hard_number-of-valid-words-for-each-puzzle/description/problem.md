# [1178. Number of Valid Words for Each Puzzle](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1294 | 89 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`trie`](https://leetcode.com/tag/trie)

**Companies:** `dropbox`

## Description

With respect to a given `puzzle` string, a `word` is *valid* if both the following conditions are satisfied:

	- `word` contains the first letter of `puzzle`.

	- For each letter in `word`, that letter is in `puzzle`.
	
		For example, if the puzzle is `"abcdefg"`, then valid words are `"faced"`, `"cabbage"`, and `"baggage"`, while

		- invalid words are `"beefed"` (does not include `'a'`) and `"based"` (includes `'s'` which is not in the puzzle).

	
	

Return *an array *`answer`*, where *`answer[i]`* is the number of words in the given word list *`words`* that is valid with respect to the puzzle *`puzzles[i]`.

 

**Example 1:**

```

Input: words = [&quot;aaaa&quot;,&quot;asas&quot;,&quot;able&quot;,&quot;ability&quot;,&quot;actt&quot;,&quot;actor&quot;,&quot;access&quot;], puzzles = [&quot;aboveyz&quot;,&quot;abrodyz&quot;,&quot;abslute&quot;,&quot;absoryz&quot;,&quot;actresz&quot;,&quot;gaswxyz&quot;]
Output: [1,1,3,2,4,0]
Explanation: 
1 valid word for &quot;aboveyz&quot; : &quot;aaaa&quot; 
1 valid word for &quot;abrodyz&quot; : &quot;aaaa&quot;
3 valid words for &quot;abslute&quot; : &quot;aaaa&quot;, &quot;asas&quot;, &quot;able&quot;
2 valid words for &quot;absoryz&quot; : &quot;aaaa&quot;, &quot;asas&quot;
4 valid words for &quot;actresz&quot; : &quot;aaaa&quot;, &quot;asas&quot;, &quot;actt&quot;, &quot;access&quot;
There are no valid words for &quot;gaswxyz&quot; cause none of the words in the list contains letter &#39;g&#39;.

```

**Example 2:**

```

Input: words = [&quot;apple&quot;,&quot;pleas&quot;,&quot;please&quot;], puzzles = [&quot;aelwxyz&quot;,&quot;aelpxyz&quot;,&quot;aelpsxy&quot;,&quot;saelpxy&quot;,&quot;xaelpsy&quot;]
Output: [0,1,3,2,0]

```

 

**Constraints:**

	- `1 <= words.length <= 10^5`

	- `4 <= words[i].length <= 50`

	- `1 <= puzzles.length <= 10^4`

	- `puzzles[i].length == 7`

	- `words[i]` and `puzzles[i]` consist of lowercase English letters.

	- Each `puzzles[i] `does not contain repeated characters.

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/) | [Solutions](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/)
