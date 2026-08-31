# ✅96.53%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 96
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555349/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555349/)

---

# Intuition
#### The idea is to compare the character counts in both strings to determine the number of steps required to make them anagrams. We can achieve this by counting the occurrences of each character in both strings and then calculating the absolute differences in counts.

---
# Approach
#### 1. Initialize two arrays `count_s` and `count_t` of size 26 to represent the count of each character in the alphabet for both strings `s` and `t`.
#### 2. Iterate through each character in string `s` and increment the corresponding count in `count_s`.
#### 3. Iterate through each character in string `t` and increment the corresponding count in `count_t`.
#### 4. Calculate the absolute differences in counts for each character and sum them up to get the total number of steps.
#### 5. Return the total number of steps divided by 2 since each step involves changing one character, and we count each change twice.
---


# Complexity
- ## Time complexity:
#### $$O(n)$$, where `n` is the length of the input strings `s` and `t`. We iterate through each character in both strings once.

- ## Space complexity:
#### $$O(1)$$, since the size of the arrays `count_s` and `count_t` is constant (26 characters).
---
# Code
```python []
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        count_s = [0] * 26
        count_t = [0] * 26

        for char in s:
            count_s[ord(char) - ord('a')] += 1

        for char in t:
            count_t[ord(char) - ord('a')] += 1

        steps = 0
        for i in range(26):
            steps += abs(count_s[i] - count_t[i])

        return steps // 2
```
```C++ []
class Solution {
public:
    int minSteps(std::string s, std::string t) {
        std::vector<int> count_s(26, 0);
        std::vector<int> count_t(26, 0);

        for (char ch : s) {
            count_s[ch - 'a']++;
        }

        for (char ch : t) {
            count_t[ch - 'a']++;
        }

        int steps = 0;
        for (int i = 0; i < 26; i++) {
            steps += std::abs(count_s[i] - count_t[i]);
        }

        return steps / 2;  
    }
};
```
```java []
public class Solution {
    public int minSteps(String s, String t) {
        int[] countS = new int[26];
        int[] countT = new int[26];

        for (char ch : s.toCharArray()) {
            countS[ch - 'a']++;
        }

        for (char ch : t.toCharArray()) {
            countT[ch - 'a']++;
        }

        int steps = 0;
        for (int i = 0; i < 26; i++) {
            steps += Math.abs(countS[i] - countT[i]);
        }

        return steps / 2;  
    }
}
```
```javascript []
var minSteps = function(s, t) {
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(countS[i] - countT[i]);
    }

    return Math.floor(steps / 2);  
};
```
```C# []
public class Solution {
    public int MinSteps(string s, string t) {
        int[] countS = new int[26];
        int[] countT = new int[26];

        for (int i = 0; i < s.Length; i++) {
            countS[s[i] - 'a']++;
            countT[t[i] - 'a']++;
        }

        int steps = 0;
        for (int i = 0; i < 26; i++) {
            steps += Math.Abs(countS[i] - countT[i]);
        }

        return steps / 2;  
    }
}
```
```PHP []
class Solution {
    function minSteps($s, $t) {
        $countS = array_fill(0, 26, 0);
        $countT = array_fill(0, 26, 0);

        for ($i = 0; $i < strlen($s); $i++) {
            $countS[ord($s[$i]) - ord('a')]++;
            $countT[ord($t[$i]) - ord('a')]++;
        }

        $steps = 0;
        for ($i = 0; $i < 26; $i++) {
            $steps += abs($countS[$i] - $countT[$i]);
        }

        return floor($steps / 2);  
        }
}
```
```Go []
func minSteps(s string, t string) int {
    countS := make([]int, 26)
    countT := make([]int, 26)

    for i := 0; i < len(s); i++ {
        countS[s[i]-'a']++
        countT[t[i]-'a']++
    }

    steps := 0
    for i := 0; i < 26; i++ {
        steps += abs(countS[i] - countT[i])
    }

    return steps / 2 
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
---
![Screenshot 2023-08-20 065922.png](./images/0.png)
