# ✅☑Beats 99% || [C++/Java/Python/JavaScript] || 2 Line Code || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 91
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4678579/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4678579/)

---

# PLEASE UPVOTE IF IT HELPED

---

![Screenshot 2024-02-03 053220.png](./images/0.png)

---

# Approaches
(Also explained in the code)

1. Initialize an unordered map (mp) to store character counts.
1. Iterate through the string to update character counts in the map.
1. Iterate through the string again, return the index of the first character with a count of 1.




# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(U)$$
*(U is the number of unique characters in the string.)*
    


# Code
```C++ []

class Solution {
public:
    int firstUniqChar(string s) {
       unordered_map<char, int> mp;

        for (auto a : s) mp[a]++;
        for (int i = 0; i < s.size(); i++)if(mp[s[i]] == 1)return i;

        return -1;
    }
}; 


```
```Java []


class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> mp = new HashMap<>();

        for (char a : s.toCharArray()) {
            mp.put(a, mp.getOrDefault(a, 0) + 1);
        }

        for (int i = 0; i < s.length(); i++) {
            if (mp.get(s.charAt(i)) == 1) {
                return i;
            }
        }

        return -1;
    }
}



```
```python3 []
class Solution:
    def firstUniqChar(self, s: str) -> int:
        mp = {}

        for a in s:
            mp[a] = mp.get(a, 0) + 1

        for i in range(len(s)):
            if mp[s[i]] == 1:
                return i

        return -1



```
```javascript []

var firstUniqChar = function(s) {
    let mp = {};

    for (let a of s) {
        mp[a] = (mp[a] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};


```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---