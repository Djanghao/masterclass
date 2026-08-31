# [2306. Naming a Company](https://leetcode.com/problems/naming-a-company/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Hard | 1963 | 74 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`bit-manipulation`](https://leetcode.com/tag/bit-manipulation), [`enumeration`](https://leetcode.com/tag/enumeration)


## Description

You are given an array of strings `ideas` that represents a list of names to be used in the process of naming a company. The process of naming a company is as follows:

	- Choose 2 **distinct** names from `ideas`, call them `idea_A` and `idea_B`.

	- Swap the first letters of `idea_A` and `idea_B` with each other.

	- If **both** of the new names are not found in the original `ideas`, then the name `idea_A idea_B` (the **concatenation** of `idea_A` and `idea_B`, separated by a space) is a valid company name.

	- Otherwise, it is not a valid name.

Return *the number of **distinct** valid names for the company*.

 

**Example 1:**

```

Input: ideas = [&quot;coffee&quot;,&quot;donuts&quot;,&quot;time&quot;,&quot;toffee&quot;]
Output: 6
Explanation: The following selections are valid:
- (&quot;coffee&quot;, &quot;donuts&quot;): The company name created is &quot;doffee conuts&quot;.
- (&quot;donuts&quot;, &quot;coffee&quot;): The company name created is &quot;conuts doffee&quot;.
- (&quot;donuts&quot;, &quot;time&quot;): The company name created is &quot;tonuts dime&quot;.
- (&quot;donuts&quot;, &quot;toffee&quot;): The company name created is &quot;tonuts doffee&quot;.
- (&quot;time&quot;, &quot;donuts&quot;): The company name created is &quot;dime tonuts&quot;.
- (&quot;toffee&quot;, &quot;donuts&quot;): The company name created is &quot;doffee tonuts&quot;.
Therefore, there are a total of 6 distinct company names.

The following are some examples of invalid selections:
- (&quot;coffee&quot;, &quot;time&quot;): The name &quot;toffee&quot; formed after swapping already exists in the original array.
- (&quot;time&quot;, &quot;toffee&quot;): Both names are still the same after swapping and exist in the original array.
- (&quot;coffee&quot;, &quot;toffee&quot;): Both names formed after swapping already exist in the original array.

```

**Example 2:**

```

Input: ideas = [&quot;lack&quot;,&quot;back&quot;]
Output: 0
Explanation: There are no valid selections. Therefore, 0 is returned.

```

 

**Constraints:**

	- `2 <= ideas.length <= 5 * 10^4`

	- `1 <= ideas[i].length <= 10`

	- `ideas[i]` consists of lowercase English letters.

	- All the strings in `ideas` are **unique**.

---

**Links:** [Submissions](https://leetcode.com/problems/naming-a-company/) | [Solutions](https://leetcode.com/problems/naming-a-company/)
