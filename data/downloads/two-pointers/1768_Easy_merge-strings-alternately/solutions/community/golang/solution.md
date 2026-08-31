# ✅Simple Solution in C# and Go✅

**Author:** shukhratutaboev
**Votes:** 61
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3428713/](https://leetcode.com/problems/merge-strings-alternately/solutions/3428713/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Two pointers
# Complexity
- Time complexity: $$O(n + m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n + m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
C#
```
public class Solution {
    public string MergeAlternately(string word1, string word2) {
        StringBuilder res = new StringBuilder();
        int i = 0, j = 0;
        while (i < word1.Length && j < word2.Length) {
            res.Append(word1[i]).Append(word2[j]);
            i++;
            j++;
        }

        while (i < word1.Length) {
            res.Append(word1[i]);
            i++;
        }

        while (j < word2.Length) {
            res.Append(word2[j]);
            j++;
        }

        return res.ToString();
    }
}
```
Go
```
func mergeAlternately(word1 string, word2 string) string {
	res := ""
	i, j := 0, 0
	for i < len(word1) && j < len(word2) {
		res += string(word1[i]) + string(word2[j])
		i++
		j++
	}

	for i < len(word1) {
		res += string(word1[i])
		i++
	}

	for j < len(word2) {
		res += string(word2[j])
		j++
	}

	return res
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)