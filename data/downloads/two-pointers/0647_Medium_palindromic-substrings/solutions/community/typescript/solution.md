# 80ms, DP Solution with TS

**Author:** kkdd0757
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/4049957/](https://leetcode.com/problems/palindromic-substrings/solutions/4049957/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. DFS (5360ms)
DFS can find all the combinations of valid palindromic substrings. But the time complexity was high, around 5360ms.

2. Hash Map + DFS (775ms)
For the second trial, I used Hash Map with DFS to memoize the values I had already reached. I used a map where the keys represented the combinations I had traversed, and the values indicated the results (valid or not) (e.g. {'ab' -> false}). The time complexity improved to 775ms, which was better than DFS but still not ideal.

3. DP (80ms)
In the final trial, I used a table for memoization. This approach eliminated the need to traverse all combinations of substrings, instead, I retrieved data from the table. This resulted in a time complexity of 80ms.

---

# Approach 
### All Cases
1. All elements are the same / Perfect Palindromic Substring : 'aaaaa'
2. Middle substring is not palindromic : 'aaxabaa'
### Explanation (Input: 'aaxaba')
##### 1. Create & Initialize a table
- Create a two-dimensional grid array with a length of s.length
Each element by itself ('a', 'b', ...) is a valid palindromic substring. So, if s[x] === s[y], set table[x][y] to 1; otherwise, set table[x][y] to 0.
- 0 means it is not valid, 1 means it is valid palindromic string.

| idx 	|         	| 0       	| 1       	| 2       	| 3       	| 4       	| 5       	|
|-----	|---------	|---------	|---------	|---------	|---------	|---------	|---------	|
|     	|         	| **_a_** 	| **_a_** 	| **_x_** 	| **_a_** 	| **_b_** 	| **_a_** 	|
| 0   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|
| 1   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|
| 2   	| **_x_** 	| 0       	| 0       	| 1       	| 0       	| 0       	| 0       	|
| 3   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|
| 4   	| **_b_** 	| 0       	| 0       	| 0       	| 0       	| 1       	| 0       	|
| 5   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|

##### 2. Set a table
- How do we determine if it's valid or not? The string needs to have the backward as forward. For example, in 'aaxaba', the first and last characters are the same, but the next characters (backward: 'a', forward: 'b') are not. How can we discern this from the table? By examining the diagonal side of the table, we can obtain this information.

- For example, table[0][5] represents the validation of 'aaxaba', and table[1][4] represents the validation of 'axab'. If s[0] and s[5] are the same (indicating a possibility that it can be a palindromic string), but table[1][4] (such as 'axab') is not valid, then table[0][5] should also not be a palindrome, and thus, table[0][5] = table[1][4].

- The key here is to traverse the table backward, like (5,5) -> (4,4) -> (4,5) -> (3,3) -> (3,4) -> (3,5) -> (2,2) -> ..., so that you can obtain all the valid information.

| idx 	|         	| 0       	| 1       	| 2       	| 3       	| 4       	| 5       	|
|-----	|---------	|---------	|---------	|---------	|---------	|---------	|---------	|
|     	|         	| **_a_** 	| **_a_** 	| **_x_** 	| **_a_** 	| **_b_** 	| **_a_** 	|
| 0   	| **_a_** 	| 1       	| 1       	| 0       	| 0       	| 0       	| 0       	|
| 1   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 0       	|
| 2   	| **_x_** 	| 0       	| 0       	| 1       	| 0       	| 0       	| 0       	|
| 3   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|
| 4   	| **_b_** 	| 0       	| 0       	| 0       	| 0       	| 1       	| 0       	|
| 5   	| **_a_** 	| 1       	| 1       	| 0       	| 1       	| 0       	| 1       	|

##### 3. Add up all valid combination of palindromic substring

---

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
function countSubstrings(s: string): number {
  let answer = 0;
  const len = s.length;
  // 1. Create a table
  const table = Array.from({length: len}, () => new Array(len).fill(0));

  // 1. Initialize a table
  for(let i = 0; i < table.length; i++) {
    for(let j = 0; j < table.length; j++) {
      if(s[i] === s[j]) table[i][j] = 1; 
    }
  }

  // 2. Set a table + 3. add up all valid combinations
  for(let i = len; i >= 0; i--) {
    for(let j = i; j < len; j++) {
      if(s[i] === s[j] && i !== j) {
        table[i][j] = table[i+1][j-1];
      }
      answer += table[i][j];
    }
  }
  return answer;
};
```