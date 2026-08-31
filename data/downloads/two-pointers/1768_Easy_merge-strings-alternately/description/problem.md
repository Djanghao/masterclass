# [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Easy | 4791 | 139 |

**Tags:** [`two-pointers`](https://leetcode.com/tag/two-pointers), [`string`](https://leetcode.com/tag/string)

**Companies:** `google`, `bloomberg`, `amazon`, `facebook`, `microsoft`, `ibm`, `oracle`, `adobe`, `apple`, `tcs`, `uber`

## Description

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.



Return *the merged string.*



 


**Example 1:**


```

Input: word1 = &quot;abc&quot;, word2 = &quot;pqr&quot;
Output: &quot;apbqcr&quot;
Explanation:&nbsp;The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

```


**Example 2:**


```

Input: word1 = &quot;ab&quot;, word2 = &quot;pqrs&quot;
Output: &quot;apbqrs&quot;
Explanation:&nbsp;Notice that as word2 is longer, &quot;rs&quot; is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

```


**Example 3:**


```

Input: word1 = &quot;abcd&quot;, word2 = &quot;pq&quot;
Output: &quot;apbqcd&quot;
Explanation:&nbsp;Notice that as word1 is longer, &quot;cd&quot; is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

```


 


**Constraints:**



	- `1 <= word1.length, word2.length <= 100`

	- `word1` and `word2` consist of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/merge-strings-alternately/) | [Solutions](https://leetcode.com/problems/merge-strings-alternately/)
