# 🌟 Beats 100.00% 👏 || Count Sub strings With K-Frequency Characters I

**Author:** phoenix_sr
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5941320/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5941320/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem revolves around counting substrings of a string s where a specific character appears exactly k times. 

Iterate through the string: For every starting point i in the string, consider every possible substring starting at i and ending at j (i.e., s[i:j]).

Track character frequency: Use an array freqArr of size 26 (for lowercase English letters) to keep track of how many times each character appears in the substring s[i:j].

Condition to stop: For each character at index j, increment its frequency in freqArr. If at any point, the frequency of the current character matches k, then every substring that starts at i and ends from j to the end of the string will meet the condition.

Counting valid substrings: Once a valid substring is found (i.e., a character appears exactly k times), you can add all substrings starting at i and ending from j to the end of the string to the answer, because adding more characters beyond j will still have that character appear at least k times.

Efficiency consideration: Even though this is a brute-force approach, the inner loop breaks as soon as the condition is met to avoid unnecessary further checks.
# Approach
<!-- Describe your approach to solving the problem. -->
Let's walk through an example where s = "abcabc" and k = 2.

Iteration with i = 0:

Start with the substring beginning at index 0.
Initialize freqArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
Inner Loop with j = 0:

The character is 'a'. Increment freqArr[0].
Now freqArr = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
'a' has not appeared k=2 times yet, so continue to the next j.
Inner Loop with j = 1:

The character is 'b'. Increment freqArr[1].
Now freqArr = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
Neither 'a' nor 'b' has appeared k=2 times yet, so continue to the next j.
Inner Loop with j = 2:

The character is 'c'. Increment freqArr[2].
Now freqArr = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
Still no character appears k=2 times yet. Continue to j = 3.
Inner Loop with j = 3:

The character is 'a'. Increment freqArr[0].
Now freqArr = [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].
Now 'a' appears exactly k=2 times.
Add s.length() - j = 6 - 3 = 3 to ans, and break the inner loop.
The total count is now ans = 3.

We continue this process for i = 1, i = 2, and so on, updating freqArr for each new starting point.
# Complexity
- Time complexity:O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![upvote.jpeg](./images/0.jpeg)

# Code
```javascript []
var numberOfSubstrings = function (s, k) {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let freqArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let j = i; j < s.length; j++) {
            freqArr[s.charCodeAt(j) - 97]++;
            
            if (freqArr[s.charCodeAt(j) - 97] == k) {
                ans += s.length - j
                break
            }
        }
    }

    return ans;
};
```
```python []
def numberOfSubstrings(s, k):
    ans = 0

    for i in range(len(s)):
        freqArr = [0] * 26

        for j in range(i, len(s)):
            freqArr[ord(s[j]) - ord('a')] += 1
            
            if freqArr[ord(s[j]) - ord('a')] == k:
                ans += len(s) - j
                break
    
    return ans

```
```java []
public class Solution {
    public int numberOfSubstrings(String s, int k) {
        int ans = 0;

        for (int i = 0; i < s.length(); i++) {
            int[] freqArr = new int[26];

            for (int j = i; j < s.length(); j++) {
                freqArr[s.charAt(j) - 'a']++;

                if (freqArr[s.charAt(j) - 'a'] == k) {
                    ans += s.length() - j;
                    break;
                }
            }
        }

        return ans;
    }
}

```
```c []
#include <stdio.h>
#include <string.h>

int numberOfSubstrings(char* s, int k) {
    int ans = 0;
    int n = strlen(s);

    for (int i = 0; i < n; i++) {
        int freqArr[26] = {0};

        for (int j = i; j < n; j++) {
            freqArr[s[j] - 'a']++;

            if (freqArr[s[j] - 'a'] == k) {
                ans += n - j;
                break;
            }
        }
    }

    return ans;
}
```
```c++ []
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int numberOfSubstrings(string s, int k) {
    int ans = 0;

    for (int i = 0; i < s.length(); i++) {
        vector<int> freqArr(26, 0);

        for (int j = i; j < s.length(); j++) {
            freqArr[s[j] - 'a']++;

            if (freqArr[s[j] - 'a'] == k) {
                ans += s.length() - j;
                break;
            }
        }
    }

    return ans;
}
```
