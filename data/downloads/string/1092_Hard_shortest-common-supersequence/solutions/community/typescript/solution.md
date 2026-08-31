# Typescript beats 70%. Get longest common subsequence first

**Author:** user8363Lt
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/4723898/](https://leetcode.com/problems/shortest-common-supersequence/solutions/4723898/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```


function shortestCommonSupersequence(str1: string, str2: string): string {
	//the approach is to find the longest common subsequence and then add the remaining characters
	//to the LCS to get the shortest common supersequence
	const lcs = longestCommonSubsequenceStrBu(str1, str2);

    console.info(`LCS: ${lcs}`)

	let result = '';
	let i = 0;
	let j = 0;

	for (const chr of lcs) {
		while (str1[i] !== chr) {
			result += str1[i++];
		}

		while (str2[j] !== chr) {
			result += str2[j++];
		}

		result +=chr;
		i++;
		j++;
	}

    console.info(`common result: ${result}`)

	// Add the remaining characters from str1 and str2
	result += str1.slice(i) + str2.slice(j);

	return result;
}

function longestCommonSubsequenceStrBu(text1: string, text2: string): string {
	const memo = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(''));
	let max = 0;

	for (let i = 1; i <= text1.length; i++) {
		for (let j = 1; j <= text2.length; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				memo[i][j] = memo[i - 1][j - 1] + text1[i - 1];
			} else {
				memo[i][j] = memo[i - 1][j].length > memo[i][j - 1].length ? memo[i - 1][j] : memo[i][j - 1];
			}
		}
	}

	return memo[text1.length][text2.length];
}
```