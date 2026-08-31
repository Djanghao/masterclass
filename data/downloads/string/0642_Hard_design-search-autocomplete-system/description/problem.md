# [642. Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 2172 | 198 |

**Tags:** [`string`](https://leetcode.com/tag/string), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`design`](https://leetcode.com/tag/design), [`trie`](https://leetcode.com/tag/trie), [`sorting`](https://leetcode.com/tag/sorting), [`heap-priority-queue`](https://leetcode.com/tag/heap-priority-queue), [`data-stream`](https://leetcode.com/tag/data-stream)

**Companies:** `roblox`, `google`, `bloomberg`, `amazon`, `microsoft`, `pinterest`, `cisco`, `mongodb`, `tiktok`, `uber`, `apple`, `citadel`, `facebook`

## Description

Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character `'#'`).

You are given a string array `sentences` and an integer array `times` both of length `n` where `sentences[i]` is a previously typed sentence and `times[i]` is the corresponding number of times the sentence was typed. For each input character except `'#'`, return the top `3` historical hot sentences that have the same prefix as the part of the sentence already typed.

Here are the specific rules:

	- The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.

	- The returned top `3` hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).

	- If less than `3` hot sentences exist, return as many as you can.

	- When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.

Implement the `AutocompleteSystem` class:

	- `AutocompleteSystem(String[] sentences, int[] times)` Initializes the object with the `sentences` and `times` arrays.

	- `List input(char c)` This indicates that the user typed the character `c`.
	
		Returns an empty array `[]` if `c == '#'` and stores the inputted sentence in the system.

		- Returns the top `3` historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than `3` matches, return them all.

	
	

 

**Example 1:**

```

Input
[&quot;AutocompleteSystem&quot;, &quot;input&quot;, &quot;input&quot;, &quot;input&quot;, &quot;input&quot;]
[[[&quot;i love you&quot;, &quot;island&quot;, &quot;iroman&quot;, &quot;i love leetcode&quot;], [5, 3, 2, 2]], [&quot;i&quot;], [&quot; &quot;], [&quot;a&quot;], [&quot;#&quot;]]
Output
[null, [&quot;i love you&quot;, &quot;island&quot;, &quot;i love leetcode&quot;], [&quot;i love you&quot;, &quot;i love leetcode&quot;], [], []]

Explanation
AutocompleteSystem obj = new AutocompleteSystem([&quot;i love you&quot;, &quot;island&quot;, &quot;iroman&quot;, &quot;i love leetcode&quot;], [5, 3, 2, 2]);
obj.input(&quot;i&quot;); // return [&quot;i love you&quot;, &quot;island&quot;, &quot;i love leetcode&quot;]. There are four sentences that have prefix &quot;i&quot;. Among them, &quot;ironman&quot; and &quot;i love leetcode&quot; have same hot degree. Since &#39; &#39; has ASCII code 32 and &#39;r&#39; has ASCII code 114, &quot;i love leetcode&quot; should be in front of &quot;ironman&quot;. Also we only need to output top 3 hot sentences, so &quot;ironman&quot; will be ignored.
obj.input(&quot; &quot;); // return [&quot;i love you&quot;, &quot;i love leetcode&quot;]. There are only two sentences that have prefix &quot;i &quot;.
obj.input(&quot;a&quot;); // return []. There are no sentences that have prefix &quot;i a&quot;.
obj.input(&quot;#&quot;); // return []. The user finished the input, the sentence &quot;i a&quot; should be saved as a historical sentence in system. And the following input will be counted as a new search.

```

 

**Constraints:**

	- `n == sentences.length`

	- `n == times.length`

	- `1 <= n <= 100`

	- `1 <= sentences[i].length <= 100`

	- `1 <= times[i] <= 50`

	- `c` is a lowercase English letter, a hash `'#'`, or space `' '`.

	- Each tested sentence will be a sequence of characters `c` that end with the character `'#'`.

	- Each tested sentence will have a length in the range `[1, 200]`.

	- The words in each input sentence are separated by single spaces.

	- At most `5000` calls will be made to `input`.

---

**Links:** [Submissions](https://leetcode.com/problems/design-search-autocomplete-system/) | [Solutions](https://leetcode.com/problems/design-search-autocomplete-system/)
