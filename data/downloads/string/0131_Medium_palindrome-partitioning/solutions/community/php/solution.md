# Beats 93.70% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5193901/](https://leetcode.com/problems/palindrome-partitioning/solutions/5193901/)

---

# Approach
This solution uses a depth-first search (DFS) approach to find all possible palindrome partitions of a given string s.

The dfs function checks if the current index i is beyond the length of s. If it is, it means all palindrome partitions have been found, so it appends the current path to the res list.

If the current index i is within the length of s, the function iterates over the remaining indices from i to the end of s. For each index j, it checks if the substring from i to j is a palindrome using the isPali function. If it is, it recursively calls dfs with the index j + 1 and the updated path by appending the palindrome substring s[i:j + 1].

# Complexity
- Time complexity:
$$O(n*2^n)$$, where n is the length of the input string s. 

To understand why, let's consider the worst-case scenario where s is a palindrome of length n. In this case, there will be exactly 2^n possible palindrome partitions, each consisting of a single palindrome substring of length n.

At each depth of the recursive calls, the function needs to check if each substring from the current index to the end of s is a palindrome. This check takes O(n) time, as it involves comparing the characters from the left and right ends of the substring.

- Space complexity:
$$O(n)$$, where n is the length of the input string s. 

In each recursive call, the path list grows by 1 element as a new palindrome substring is added. However, the maximum length of the path list at any given time is n, which is the length of the input string s.

# Code
``` python3 []
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res = []

        def isPali(s, l, r):
            """
            Check if the substring of s from l to r is a palindrome.

            Args:
            s (str): The input string.
            l (int): The starting index of the substring.
            r (int): The ending index of the substring.

            Returns:
            bool: True if the substring is a palindrome, False otherwise.
            """
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True

        def dfs(i, path):
            """
            Perform depth-first search to find all possible palindrome partitions of s.

            Args:
            i (int): The current index of the string s.
            path (List[str]): The current partition of s.
            """
            if i >= len(s):
                res.append(path)
                return
            for j in range(i, len(s)):
                if isPali(s, i, j):
                    dfs(j + 1, path + [s[i:j + 1]])

        dfs(0, [])
        return res
        
```
``` javascript []
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
     const res = [];

    // Check if the substring of s from l to r is a palindrome
    function isPali(s, l, r) {
        while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
            l++;
            r--;
        }
        return true;
    }

    // Perform depth-first search to find all possible palindrome partitions of s
    function dfs(i, path) {
        // If the current index i is beyond the length of s,
        // append the current path to the res list
        if (i >= s.length) {
            res.push([...path]);
            return;
        }
        // Iterate over the remaining indices from i to the end of s
        for (let j = i; j < s.length; j++) {
            // Check if the substring from i to j is a palindrome
            if (isPali(s, i, j)) {
                // Recursively call dfs with the index j + 1 and the updated path
                dfs(j + 1, [...path, s.slice(i, j + 1)]);
        }
        }
    }

    dfs(0, []);
    return res;
};
```
``` php []
class Solution {
    function isPali($s, $l, $r) {
        // Check if the substring of s from l to r is a palindrome
        while ($l < $r) {
            if ($s[$l] !== $s[$r]) {
                return false;
            }
            $l++;
            $r--;
        }
        return true;
    }

    function dfs($i, $path, $s, &$res) {
        // Base case: if the current index i is beyond the length of s,
        // append the current path to the res array
        if ($i >= strlen($s)) {
            $res[] = $path;
            return;
        }

        // Iterate over the remaining indices from i to the end of s
        for ($j = $i; $j < strlen($s); $j++) {
            // Check if the substring from i to j is a palindrome
            if ($this->isPali($s, $i, $j)) {
                // Recursively call dfs with the index j + 1 and the updated path
                $this->dfs($j + 1, array_merge($path, [substr($s, $i, $j - $i + 1)]), $s, $res);
            }
        }
    }

    /**
     * @param String $s
     * @return String[][]
     */
    function partition($s) {
        $res = [];

        // Perform depth-first search to find all possible palindrome partitions of s
        $this->dfs(0, [], $s, $res);

        return $res;
    }
}
```