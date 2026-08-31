# [1452. People Whose List of Favorite Companies Is Not a Subset of Another List](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 381 | 230 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string)

**Companies:** `datadog`, `google`

## Description

Given the array `favoriteCompanies` where `favoriteCompanies[i]` is the list of favorites companies for the `ith` person (**indexed from 0**).

*Return the indices of people whose list of favorite companies is not a **subset** of any other list of favorites companies*. You must return the indices in increasing order.

 

**Example 1:**

```

Input: favoriteCompanies = [[&quot;leetcode&quot;,&quot;google&quot;,&quot;facebook&quot;],[&quot;google&quot;,&quot;microsoft&quot;],[&quot;google&quot;,&quot;facebook&quot;],[&quot;google&quot;],[&quot;amazon&quot;]]
Output: [0,1,4] 
Explanation: 
Person with index=2 has favoriteCompanies[2]=[&quot;google&quot;,&quot;facebook&quot;] which is a subset of favoriteCompanies[0]=[&quot;leetcode&quot;,&quot;google&quot;,&quot;facebook&quot;] corresponding to the person with index 0. 
Person with index=3 has favoriteCompanies[3]=[&quot;google&quot;] which is a subset of favoriteCompanies[0]=[&quot;leetcode&quot;,&quot;google&quot;,&quot;facebook&quot;] and favoriteCompanies[1]=[&quot;google&quot;,&quot;microsoft&quot;]. 
Other lists of favorite companies are not a subset of another list, therefore, the answer is [0,1,4].

```

**Example 2:**

```

Input: favoriteCompanies = [[&quot;leetcode&quot;,&quot;google&quot;,&quot;facebook&quot;],[&quot;leetcode&quot;,&quot;amazon&quot;],[&quot;facebook&quot;,&quot;google&quot;]]
Output: [0,1] 
Explanation: In this case favoriteCompanies[2]=[&quot;facebook&quot;,&quot;google&quot;] is a subset of favoriteCompanies[0]=[&quot;leetcode&quot;,&quot;google&quot;,&quot;facebook&quot;], therefore, the answer is [0,1].

```

**Example 3:**

```

Input: favoriteCompanies = [[&quot;leetcode&quot;],[&quot;google&quot;],[&quot;facebook&quot;],[&quot;amazon&quot;]]
Output: [0,1,2,3]

```

 

**Constraints:**

	- `1 <= favoriteCompanies.length <= 100`

	- `1 <= favoriteCompanies[i].length <= 500`

	- `1 <= favoriteCompanies[i][j].length <= 20`

	- All strings in `favoriteCompanies[i]` are **distinct**.

	- All lists of favorite companies are **distinct**, that is, If we sort alphabetically each list then `favoriteCompanies[i] != favoriteCompanies[j].`

	- All strings consist of lowercase English letters only.

---

**Links:** [Submissions](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/) | [Solutions](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/)
