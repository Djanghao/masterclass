# ✅☑Beats 99.60% Users || [C++/Java/Python/JavaScript] || Brute->Optimal || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 43
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555373/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555373/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-13 053957.png](./images/0.png)

---

# Approaches
(Also explained in the code)

#### ***Approach 1(Brute Force)***

1. Two unordered maps (`smp` and `tmp`) are used to store the frequency of each character in strings `s` and `t`.
1. The frequency of each character in both strings is counted using two `for` loops.


1. A `for` loop iterates through each character and its frequency in the `smp` map.
1. For each character, it checks if the character is present in the `tmp` map.
    - If present, it adds the minimum of frequencies of that character in both maps to the `cnt`.
    - If not present, it continues to the next character.


1. The final result is obtained by subtracting the count (`cnt`) from the total length of string `s`.


# Complexity
- Time complexity:
   $$O(n)$$


- Space complexity:
   $$O(1)$$
   


# Code
```C++ []
class Solution {
public:
    int minSteps(string s, string t) {
        unordered_map<char,int>smp;
        unordered_map<char,int>tmp;
        int cnt=0;
        for(auto a:s)smp[a]++;
        for(auto a:t)tmp[a]++;

        for (auto a : smp) {
    if (tmp.find(a.first) != tmp.end()) {
        if (smp[a.first] == tmp[a.first]) {
            cnt += smp[a.first];
        } else {
            cnt += min(smp[a.first], tmp[a.first]);
        }
    }
}

        return s.size()-cnt;
    }
};



```
```Java []
class Solution {
    public int minSteps(String s, String t) {
        Map<Character, Integer> smp = new HashMap<>();
        Map<Character, Integer> tmp = new HashMap<>();
        int cnt = 0;

        for (char a : s.toCharArray()) {
            smp.put(a, smp.getOrDefault(a, 0) + 1);
        }

        for (char a : t.toCharArray()) {
            tmp.put(a, tmp.getOrDefault(a, 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : smp.entrySet()) {
            char key = entry.getKey();
            if (tmp.containsKey(key)) {
                if (entry.getValue().equals(tmp.get(key))) {
                    cnt += entry.getValue();
                } else {
                    cnt += Math.min(entry.getValue(), tmp.get(key));
                }
            }
        }

        return s.length() - cnt;
    }
}


```
```python3 []
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        smp = {}
        tmp = {}
        cnt = 0

        for a in s:
            smp[a] = smp.get(a, 0) + 1

        for a in t:
            tmp[a] = tmp.get(a, 0) + 1

        for key, value in smp.items():
            if key in tmp:
                if value == tmp[key]:
                    cnt += value
                else:
                    cnt += min(value, tmp[key])

        return len(s) - cnt




```
```javascript []
var minSteps = function(s, t) {
    let smp = new Map();
    let tmp = new Map();
    let cnt = 0;

    for (let a of s) {
        smp.set(a, (smp.get(a) || 0) + 1);
    }

    for (let a of t) {
        tmp.set(a, (tmp.get(a) || 0) + 1);
    }

    for (let [key, value] of smp) {
        if (tmp.has(key)) {
            if (value === tmp.get(key)) {
                cnt += value;
            } else {
                cnt += Math.min(value, tmp.get(key));
            }
        }
    }

    return s.length - cnt;
};



```
---

#### ***Approach 2(Optimized)***

1. **Array Initialization:** Declare an array `count` of size 26 (representing the 26 lowercase English letters) and initialize all elements to 0.

1. **Loop through Strings:** Use a `while` loop to iterate through the characters of strings `s` and `t` simultaneously.

    - Increment the count for the corresponding character in string `t`.
    - Decrement the count for the corresponding character in string `s`.
    - Move to the next character in both strings.
1. **Calculate Differences:** After the loop, the count array represents the difference in frequencies between the characters of strings t and s.

1. **Count Positive Differences:** Use another `while` loop to iterate through the count array.

    - For each element in `count`, add the positive value (or 0 if negative) to the variable `ans`.
1. **Return Result:** The final value of `ans` represents the minimum number of steps needed to make the strings anagrams.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    int minSteps(string s, string t) {
        int count[26] = {0};
        int i = 0;

        
        while (i < s.size()) {
            count[t[i] - 'a']++;
            count[s[i] - 'a']--;
            i++;
        }

        int ans = 0;
        i = 0;

        while (i < 26) {
            ans += max(0, count[i]);
            i++;
        }

        return ans;
    }
}; 




```
```Java []
class Solution {
    public int minSteps(String s, String t) {
        int[] count = new int[26];
        int i = 0;

        // Storing the difference of frequencies of characters in t and s.
        while (i < s.length()) {
            count[t.charAt(i) - 'a']++;
            count[s.charAt(i) - 'a']--;
            i++;
        }

        int ans = 0;
        i = 0;

        while (i < 26) {
            ans += Math.max(0, count[i]);
            i++;
        }

        return ans;
    }
}



```
```python3 []
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        count = [0] * 26
        i = 0

        # Storing the difference of frequencies of characters in t and s.
        while i < len(s):
            count[ord(t[i]) - ord('a')] += 1
            count[ord(s[i]) - ord('a')] -= 1
            i += 1

        ans = 0
        i = 0

        while i < 26:
            ans += max(0, count[i])
            i += 1

        return ans



```
```javascript []
var minSteps = function(s, t) {
    let count = Array(26).fill(0);
    let i = 0;

    // Storing the difference of frequencies of characters in t and s.
    while (i < s.length) {
        count[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        i++;
    }

    let ans = 0;
    i = 0;

    while (i < 26) {
        ans += Math.max(0, count[i]);
        i++;
    }

    return ans;
};



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---