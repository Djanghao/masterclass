# O(N) Two-pointers and improved Two-pass solution

**Author:** whoawhoawhoa
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844273/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844273/)

---

# Intuition
Took me a while to figure out the naive approach. Tried DP / backtracking initially with no luck and TLE.
The idea is to check only for the matches w/o the different char. 

# Approach #1 - Two-pointers
## Warn - this gives TLE now as Leetcode updated the TCs
On each step we skip all the matching chars so far, then try to find the remaining part of word2 starting with current index $$i$$ in word1. If we can - we consider $$word1.charAt(i)$$ to be a different char, memorize the index i to the array and it is always the lixocographically smallest array.
If we can't - we go and find the j'th word2 letter in word1, skip it and try again.

# Complexity
- Time complexity:
Min - $$O(N + M)$$
Max - $$O(N * M)$$

- Space complexity:
$$O(1)$$

# Code

```java []
class Solution {
    public int[] validSequence(String word1, String word2) {
        int i = 0, j = 0;
        int[] res = new int[word2.length()];
        while (i < word1.length() && j < word2.length() && word1.charAt(i) == word2.charAt(j)) {
            res[j++] = i++;
        }
        while (i < word1.length() && j < word2.length()) {
            if (find(word1, word2, i + 1, j + 1, res)) {
                res[j] = i;
                return res;
            }
            while (i < word1.length() && j < word2.length()) {
                if (word1.charAt(i) == word2.charAt(j)) {
                    while (i < word1.length() && j < word2.length() && word1.charAt(i) == word2.charAt(j)) {
                        res[j++] = i++;
                    }
                    break;
                } else {
                    i++;
                }
            }
        }
        if (j < word2.length()) {
            return new int[]{};
        }
        return res;
    }

    static boolean find(String w1, String w2, int i, int j, int[] res) {
        while (i < w1.length() && j < w2.length()) {
            if (w1.charAt(i) == w2.charAt(j)) {
                res[j++] = i++;
            } else {
                i++;
            }
        }
        return j == w2.length();
    }

}
```
```C++ []
class Solution {
public:
    vector<int> validSequence(string word1, string word2) {
        int i = 0, j = 0;
        vector<int> res(word2.length());

        while (i < word1.length() && j < word2.length() &&
               word1[i] == word2[j]) {
            res[j++] = i++;
        }

        while (i < word1.length() && j < word2.length()) {
            if (find(word1, word2, i + 1, j + 1, res)) {
                res[j] = i;
                return res;
            }
            while (i < word1.length() && j < word2.length()) {
                if (word1[i] == word2[j]) {
                    while (i < word1.length() && j < word2.length() &&
                           word1[i] == word2[j]) {
                        res[j++] = i++;
                    }
                    break;
                } else {
                    i++;
                }
            }
        }

        if (j < word2.length()) {
            return {};
        }
        return res;
    }

private:
    bool find(const string& w1, const string& w2, int i, int j,
              vector<int>& res) {
        while (i < w1.length() && j < w2.length()) {
            if (w1[i] == w2[j]) {
                res[j++] = i++;
            } else {
                i++;
            }
        }
        return j == w2.length();
    }
};
```
```C []
#include <stdlib.h>
#include <string.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* validSequence(char* word1, char* word2, int* returnSize) {
    int len1 = strlen(word1), len2 = strlen(word2);
    int i = 0, j = 0;
    int* res = (int*)malloc(len2 * sizeof(int));
    
    *returnSize = 0;
    
    while (i < len1 && j < len2 && word1[i] == word2[j]) {
        res[j++] = i++;
    }
    
    while (i < len1 && j < len2) {
        if (find(word1, word2, i + 1, j + 1, res, len1, len2)) {
            res[j] = i;
            *returnSize = len2; // Update returnSize to the size of res
            return res;
        }
        while (i < len1 && j < len2) {
            if (word1[i] == word2[j]) {
                while (i < len1 && j < len2 && word1[i] == word2[j]) {
                    res[j++] = i++;
                }
                break;
            } else {
                i++;
            }
        }
    }
    
    if (j < len2) {
        free(res);
        *returnSize = 0;
        return NULL;
    }
    
    *returnSize = len2;
    return res;
}

int find(char* w1, char* w2, int i, int j, int* res, int len1, int len2) {
    while (i < len1 && j < len2) {
        if (w1[i] == w2[j]) {
            res[j++] = i++;
        } else {
            i++;
        }
    }
    return j == len2;
}
```
```python []
class Solution:
    def validSequence(self, word1: str, word2: str) -> List[int]:
        def find(w1: str, w2: str, i: int, j: int, res: List[int]) -> bool:
            while i < len(w1) and j < len(w2):
                if w1[i] == w2[j]:
                    res[j] = i
                    j += 1
                    i += 1
                else:
                    i += 1
            return j == len(w2)

        i, j = 0, 0
        res = [-1] * len(word2)

        while i < len(word1) and j < len(word2) and word1[i] == word2[j]:
            res[j] = i
            i += 1
            j += 1

        while i < len(word1) and j < len(word2):
            if find(word1, word2, i + 1, j + 1, res):
                res[j] = i
                return res
            while i < len(word1) and j < len(word2):
                if word1[i] == word2[j]:
                    while i < len(word1) and j < len(word2) and word1[i] == word2[j]:
                        res[j] = i
                        i += 1
                        j += 1
                    break
                else:
                    i += 1

        if j < len(word2):
            return []

        return res
```
``` javascript []
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function (word1, word2) {
    var find = function (w1, w2, i, j, res) {
        while (i < w1.length && j < w2.length) {
            if (w1.charAt(i) === w2.charAt(j)) {
                res[j++] = i++;
            } else {
                i++;
            }
        }
        return j === w2.length;
    };

    let i = 0, j = 0;
    let res = new Array(word2.length).fill(-1);

    while (i < word1.length && j < word2.length && word1.charAt(i) === word2.charAt(j)) {
        res[j++] = i++;
    }

    while (i < word1.length && j < word2.length) {
        if (find(word1, word2, i + 1, j + 1, res)) {
            res[j] = i;
            return res;
        }
        while (i < word1.length && j < word2.length) {
            if (word1.charAt(i) === word2.charAt(j)) {
                while (i < word1.length && j < word2.length && word1.charAt(i) === word2.charAt(j)) {
                    res[j++] = i++;
                }
                break;
            } else {
                i++;
            }
        }
    }

    if (j < word2.length) {
        return [];
    }

    return res;
};
```
```Go []
func validSequence(word1 string, word2 string) []int {
	find := func(w1, w2 string, i, j int, res []int) bool {
		for i < len(w1) && j < len(w2) {
			if w1[i] == w2[j] {
				res[j] = i
				j++
				i++
			} else {
				i++
			}
		}
		return j == len(w2)
	}

	i, j := 0, 0
	res := make([]int, len(word2))
	for index := range res {
		res[index] = -1
	}

	for i < len(word1) && j < len(word2) && word1[i] == word2[j] {
		res[j] = i
		i++
		j++
	}

	for i < len(word1) && j < len(word2) {
		if find(word1, word2, i+1, j+1, res) {
			res[j] = i
			return res
		}
		for i < len(word1) && j < len(word2) {
			if word1[i] == word2[j] {
				for i < len(word1) && j < len(word2) && word1[i] == word2[j] {
					res[j] = i
					i++
					j++
				}
				break
			} else {
				i++
			}
		}
	}

	if j < len(word2) {
		return []int{}
	}

	return res
}
```
# Approach #2 - Two pass
After Leetcode updated the TCs the approach above started to get TLE for some languages (still worked in Go the last time I checked), I had to reconsider it.

I took the same initial idea but improved it with the prefix array. Suppose we're at an index $$i$$ in the first word and at an index $$j$$ in second. Now the question we want to answer is - do we have the remaining parts of word1 in the remaining suffix of word2? If we can - we can greedily fill our result, if not - fast skip to the next iteration. To facilitate it let's first walk ***right to left*** in both words and fill the prefix array which says 'at the index $$i$$ I have $$prefix[i]$$ matching characters to the end of word1'. Then we can get rid of `find()` function in the approach above altogether!

# Complexity
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$ - Note we traded time for space in the second approach

```java []
class Solution {
    public int[] validSequence(String word1, String word2) {
        byte[] b1 = word1.getBytes(), b2 = word2.getBytes();
        int n1 = b1.length, n2 = b2.length;
        int[] pref = new int[n1];
        // right to left
        for (int i = n1 - 1, j = n2 - 1; i >= 0; i--) {
            if (i < n1 - 1) {
                pref[i] = pref[i + 1];
            }
            if (j >= 0 && b1[i] == b2[j]) {
                pref[i]++;
                j--;
            }
        }
        // left to right
        int[] res = new int[n2];
        int match = 0;
        for (int i = 0, j = 0; i < n1 && j < n2; i++) {
            if (b1[i] == b2[j]) {
                res[j++] = i;
                match++;
            } else if (i < n1 - 1 && pref[i + 1] >= n2 - match - 1) {
                // greedy fill remaining
                res[j++] = i++;
                while (j < n2) {
                    if (b1[i] == b2[j]) {
                        res[j++] = i;
                    }
                    i++;
                }
                return res;
            }
        }
        // if we matched everything w/o greedy fill
        if (match == n2) {
            return res;
        }
        return new int[] {};
    }
}
```
```C++ []
class Solution {
public:
    vector<int> validSequence(string word1, string word2) {
        int n1 = word1.length(), n2 = word2.length();
        vector<int> pref(n1, 0);

        // right to left
        for (int i = n1 - 1, j = n2 - 1; i >= 0; i--) {
            if (i < n1 - 1) {
                pref[i] = pref[i + 1];
            }
            if (j >= 0 && word1[i] == word2[j]) {
                pref[i]++;
                j--;
            }
        }

        // left to right
        vector<int> res(n2, -1);
        int match = 0;
        for (int i = 0, j = 0; i < n1 && j < n2; i++) {
            if (word1[i] == word2[j]) {
                res[j++] = i;
                match++;
            } else if (i < n1 - 1 && pref[i + 1] >= n2 - match - 1) {
                // Greedy fill remaining
                res[j++] = i++;
                while (j < n2) {
                    if (word1[i] == word2[j]) {
                        res[j++] = i;
                    }
                    i++;
                }
                return res;
            }
        }

        if (match == n2) {
            return res;
        }
        return vector<int>();
    }
};
```
```C []
#include <stdlib.h>
#include <string.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* validSequence(char* word1, char* word2, int* returnSize) {
    int n1 = strlen(word1), n2 = strlen(word2);
    int* pref = (int*)malloc(n1 * sizeof(int));
    memset(pref, 0, n1 * sizeof(int));

    // right to left
    for (int i = n1 - 1, j = n2 - 1; i >= 0; i--) {
        if (i < n1 - 1) {
            pref[i] = pref[i + 1];
        }
        if (j >= 0 && word1[i] == word2[j]) {
            pref[i]++;
            j--;
        }
    }

    // left to right
    int* res = (int*)malloc(n2 * sizeof(int));
    int match = 0;
    *returnSize = 0;

    for (int i = 0, j = 0; i < n1 && j < n2; i++) {
        if (word1[i] == word2[j]) {
            res[j++] = i;
            match++;
        } else if (i < n1 - 1 && pref[i + 1] >= n2 - match - 1) {
            // Greedy fill remaining
            res[j++] = i++;
            while (j < n2) {
                if (word1[i] == word2[j]) {
                    res[j++] = i;
                }
                i++;
            }
            *returnSize = n2;
            free(pref);
            return res;
        }
    }

    if (match == n2) {
        *returnSize = n2;
        free(pref);
        return res;
    }

    free(pref);
    free(res);
    *returnSize = 0;
    return NULL;
}
```
```python []
from typing import List

class Solution:
    def validSequence(self, word1: str, word2: str) -> List[int]:
        n1, n2 = len(word1), len(word2)
        pref = [0] * n1

        # right to left
        j = n2 - 1
        for i in range(n1 - 1, -1, -1):
            if i < n1 - 1:
                pref[i] = pref[i + 1]
            if j >= 0 and word1[i] == word2[j]:
                pref[i] += 1
                j -= 1

        # left to right
        res = [-1] * n2
        match = 0
        i, j = 0, 0
        while i < n1 and j < n2:
            if word1[i] == word2[j]:
                res[j] = i
                j += 1
                match += 1
            elif i < n1 - 1 and pref[i + 1] >= n2 - match - 1:
                res[j] = i
                j += 1
                i += 1
                while j < n2 and i < n1:
                    if word1[i] == word2[j]:
                        res[j] = i
                        j += 1
                    i += 1
                return res

            i += 1

        if match == n2:
            return res
        return []
```
``` javascript []
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function (word1, word2) {
    const n1 = word1.length, n2 = word2.length;
    const pref = new Array(n1).fill(0);

    // right to left
    let j = n2 - 1;
    for (let i = n1 - 1; i >= 0; i--) {
        if (i < n1 - 1) {
            pref[i] = pref[i + 1];
        }
        if (j >= 0 && word1[i] === word2[j]) {
            pref[i]++;
            j--;
        }
    }

    // left to right
    const res = new Array(n2).fill(-1);
    let match = 0;
    let i = 0;
    j = 0;

    while (i < n1 && j < n2) {
        if (word1[i] === word2[j]) {
            res[j] = i;
            j++;
            match++;
        } else if (i < n1 - 1 && pref[i + 1] >= n2 - match - 1) {
            res[j] = i;
            j++;
            i++;
            while (j < n2 && i < n1) {
                if (word1[i] === word2[j]) {
                    res[j] = i;
                    j++;
                }
                i++;
            }
            return res;
        }
        i++;
    }

    if (match === n2) {
        return res;
    }

    return [];
};
```
```Go []
func validSequence(word1 string, word2 string) []int {
	n1, n2 := len(word1), len(word2)
	pref := make([]int, n1)

	// right to left
	j := n2 - 1
	for i := n1 - 1; i >= 0; i-- {
		if i < n1-1 {
			pref[i] = pref[i+1]
		}
		if j >= 0 && word1[i] == word2[j] {
			pref[i]++
			j--
		}
	}

	// left to right
	res := make([]int, n2)
	match := 0
	i, j := 0, 0
	for i < n1 && j < n2 {
		if word1[i] == word2[j] {
			res[j] = i
			j++
			match++
		} else if i < n1-1 && pref[i+1] >= n2-match-1 {
			res[j] = i
			j++
			i++
			for j < n2 && i < n1 {
				if word1[i] == word2[j] {
					res[j] = i
					j++
				}
				i++
			}
			return res
		}
		i++
	}

	if match == n2 {
		return res
	}

	return []int{}
}
```