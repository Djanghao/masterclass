# ✅ Detailed Explanation 🔥No Extra Space | Linear Time | 1 pass 🔥🔥Two Pointer using helper function

**Author:** Saketh3011
**Votes:** 45
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5104082/](https://leetcode.com/problems/compare-version-numbers/solutions/5104082/)

---

# \uD83C\uDFAFProblem Explaination:
We are given two version as strings and are asked to compare them both and return `1` if `version1` is greater, `-1` if `version2` is greater and `0` if both represent same version.
> I will be calling part of version as version component.
3, 12, 2 are version components of 3.12.2.

# \uD83E\uDDD0 Unique Cases to Consider
- Different length. Eg, "**1**", "**1.2.1**".
- Zero as version component. Eg "1.**0**.1".
- Zero at start of version component. Eg "1.**00**1", "1.1".

# \uD83E\uDD14 Intuition
We can use two pointer approach to compare version components seperately keeping note of next starting index.

# \uD83E\uDDE0 Approach 
1. Define a helper function to extract the next version component and its index from a given string.
    1. Helper function takes version string `s` and starting index `idx` as input parameters.
    2. Initialise `num` with 0.
    3. While `idx` is less than length of `s`. If `s[idx]` equal to `.` means version component ended so break the loop, else its integer so add it to 10*num.
    4. Return component version `num` and next starting index `idx` as array.
2. Iterate through the version _components_ of both input strings, comparing them _component_ by _component_.
3. If a component in `version1` is greater than the corresponding component in `version2`, return `1`. If it's smaller, return `-1`.
4. If all components are equal, return `0`.

Let version1 be "1.001" and version2 be "1.1.12"
| Iteration | v1 | i | v2 | j | v1 <-> v2 |
|:------:|:------:|:------:|:------:|:------:|:------:|
| 1 | **1**.001 - 1 | 1 | **1**.1.12 - 1 | 1 | v1 = v2 (continue) |
| 2 | 1.**001** - 1 | 5 | 1.**1**.12 - 1 | 3 | v1 = v2 (continue) |
| 3 | 1.001 ~~**.0**~~ - 0 | 6 | 1.1.**12** - 12 | 6 | v1 < v2 (return **-1**) |


# \uD83D\uDCD2 Complexity
- \u23F0 Time complexity: $$O(n)$$, where n is max length of version1 and version2.
- \uD83E\uDDFASpace complexity: $$O(1)$$, no extra space is used.

# \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        def helper(s: str, idx: int) -> List[int]:
            num = 0
            while idx < len(s):
                if s[idx] == '.':
                    break
                else:
                    num = num * 10 + int(s[idx])
                idx += 1
            return [num, idx+1]

        i = j = 0
        while(i < len(version1) or j < len(version2)):
            v1, i = helper(version1, i)
            v2, j = helper(version2, j)
            if v1 > v2:
                return 1
            elif v1 < v2:
                return -1

        return 0
```
``` java []
class Solution {
    public int compareVersion(String version1, String version2) {
        int i = 0, j = 0;
        int[] result1, result2;
        while (i < version1.length() || j < version2.length()) {
            result1 = helper(version1, i);
            result2 = helper(version2, j);
            int v1 = result1[0], v2 = result2[0];
            i = result1[1]; j = result2[1];
            if (v1 > v2) return 1;
            else if (v1 < v2) return -1;
        }
        return 0;
    }

    private int[] helper(String s, int idx) {
        int num = 0;
        while (idx < s.length()) {
            if (s.charAt(idx) == '.') break;
            else num = num * 10 + (s.charAt(idx) - '0');
            idx++;
        }
        return new int[]{num, idx + 1};
    }
}
```
``` cpp []
class Solution {
public:
    int compareVersion(string version1, string version2) {
        int i = 0, j = 0;
        vector<int> result1, result2;
        while (i < version1.size() || j < version2.size()) {
            result1 = helper(version1, i);
            result2 = helper(version2, j);
            int v1 = result1[0], v2 = result2[0];
            i = result1[1]; j = result2[1];
            if (v1 > v2) return 1;
            else if (v1 < v2) return -1;
        }
        return 0;
    }
    
    vector<int> helper(string s, int idx) {
        int num = 0;
        while (idx < s.size()) {
            if (s[idx] == '.') break;
            else num = num * 10 + (s[idx] - '0');
            idx++;
        }
        return {num, idx + 1};
    }
};
```
``` javascript []
var compareVersion = function(version1, version2) {
    const helper = function(s, idx) {
        let num = 0;
        while (idx < s.length) {
            if (s[idx] === '.') break;
            else num = num * 10 + parseInt(s[idx]);
            idx++;
        }
        return [num, idx + 1];
    };

    let i = 0, j = 0;
    result1 = [], result2 = [];
    while (i < version1.length || j < version2.length) {
        result1 = helper(version1, i);
        result2 = helper(version2, j);
        const v1 = result1[0], v2 = result2[0];
        i = result1[1]; j = result2[1];
        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;
    }
    return 0;
};
```
---
## \uD83D\uDD28 Futher Optimising Code without using Helper Function
##### Same logic
``` python []
class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        i = j = 0

        while(i < len(version1) or j < len(version2)):
            v1 = v2 = 0

            while (i < len(version1) and version1[i] != '.'):
                v1 = v1 * 10 + int(version1[i])
                i += 1
            while (j < len(version2) and version2[j] != '.'):
                v2 = v2 * 10 + int(version2[j])
                j += 1

            if v1 > v2:
                return 1
            elif v1 < v2:
                return -1

            i, j = i + 1, j + 1

        return 0
```
``` java []
class Solution {
    public int compareVersion(String version1, String version2) {
        int i = 0, j = 0;

        while (i < version1.length() || j < version2.length()) {
            int v1 = 0, v2 = 0;

            while (i < version1.length() && version1.charAt(i) != '.') {
                v1 = v1 * 10 + (version1.charAt(i) - '0');
                i++;
            }
            while (j < version2.length() && version2.charAt(j) != '.') {
                v2 = v2 * 10 + (version2.charAt(j) - '0');
                j++;
            }

            if (v1 > v2) return 1;
            else if (v1 < v2) return -1;

            i++; j++;
        }

        return 0;
    }
}
```
``` cpp []
class Solution {
public:
    int compareVersion(string version1, string version2) {
        int i = 0, j = 0;

        while (i < version1.size() || j < version2.size()) {
            int v1 = 0, v2 = 0;

            while (i < version1.size() && version1[i] != '.') {
                v1 = v1 * 10 + (version1[i] - '0');
                i++;
            }
            while (j < version2.size() && version2[j] != '.') {
                v2 = v2 * 10 + (version2[j] - '0');
                j++;
            }

            if (v1 > v2) return 1;
            else if (v1 < v2) return -1;

            i++; j++;
        }

        return 0;
    }
};
```
``` javascript []
var compareVersion = function(version1, version2) {
    let i = 0, j = 0;

    while (i < version1.length || j < version2.length) {
        let v1 = 0, v2 = 0;

        while (i < version1.length && version1[i] !== '.') {
            v1 = v1 * 10 + parseInt(version1[i]);
            i++;
        }
        while (j < version2.length && version2[j] !== '.') {
            v2 = v2 * 10 + parseInt(version2[j]);
            j++;
        }

        if (v1 > v2) return 1;
        else if (v1 < v2) return -1;

        i++; j++;
    }

    return 0;
};
```

---


# Please consider giving an Upvote!
![upvote.png](./images/0.png)

