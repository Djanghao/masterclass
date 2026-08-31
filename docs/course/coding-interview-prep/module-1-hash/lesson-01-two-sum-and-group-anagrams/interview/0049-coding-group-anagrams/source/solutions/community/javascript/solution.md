# ✅☑Beats 99% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 190
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/4683832/](https://leetcode.com/problems/group-anagrams/solutions/4683832/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-25 053401.png](./images/0.png)

---

# Approaches
(Also explained in the code)

#### ***Approach 1***

1. The function `getSignature` creates a unique signature for each string by counting the occurrences of each character. This signature helps identify anagrams as they have the same character frequencies.

1. The `groupAnagrams` function uses an unordered map (`groups`) to group strings with the same signature (anagrams) together. It iterates through each string, calculates its signature, and adds the string to the corresponding group in the map.

1. The `result` vector stores the final grouped anagrams. It is initially empty and gets populated by iterating through the groups map. Each entry in the map corresponds to a unique signature, and the associated vector contains strings that are anagrams.



# Complexity
- Time complexity:
   $$O(n*k)$$
*(K is the length of the longest string)*
    

- Space complexity:
   $$O(n*k)$$
*(K is the length of the longest string)*
    


# Code
```C++ []

class Solution {
public:
    string getSignature(const string& s) {
        vector<int> count(26, 0);
        for (char c : s) {
            count[c - 'a']++;
        }

        stringstream ss;
        for (int i = 0; i < 26; i++) {
            if (count[i] != 0) {
                ss << (char)('a' + i) << count[i];
            }
        }
        return ss.str();
    }

    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> result;
        unordered_map<string, vector<string>> groups;

        for (const string& s : strs) {
            groups[getSignature(s)].push_back(s);
        }

        for (const auto& entry : groups) {
            result.push_back(entry.second);
        }

        return result;
    }
};


```
```Java []


class Solution {
    public String getSignature(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 26; i++) {
            if (count[i] != 0) {
                sb.append((char) ('a' + i)).append(count[i]);
            }
        }
        return sb.toString();
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> result = new ArrayList<>();
        Map<String, List<String>> groups = new HashMap<>();

        for (String s : strs) {
            groups.computeIfAbsent(getSignature(s), k -> new ArrayList<>()).add(s);
        }

        result.addAll(groups.values());

        return result;
    }
}



```
```python3 []
from typing import List
from collections import defaultdict

class Solution:
    def getSignature(self, s: str) -> str:
        count = [0] * 26
        for c in s:
            count[ord(c) - ord('a')] += 1

        result = []
        for i in range(26):
            if count[i] != 0:
                result.extend([chr(i + ord('a')), str(count[i])])

        return ''.join(result)

    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []
        groups = defaultdict(list)

        for s in strs:
            groups[self.getSignature(s)].append(s)

        result.extend(groups.values())

        return result



```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var getSignature = function(s) {
    const count = Array(26).fill(0);
    for (const c of s) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
        }
    }

    return result.join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const groups = new Map();

    for (const s of strs) {
        const signature = getSignature(s);
        if (!groups.has(signature)) {
            groups.set(signature, []);
        }
        groups.get(signature).push(s);
    }

    groups.forEach(value => result.push(value));

    return result;
};


```

---


#### ***Approach 2***

1. **Using an Unordered Map:** We utilize an unordered map to store the sorted version of each string (anagram) as the key and the index of the corresponding group in the answer vector as the value. This allows us to quickly check if an anagram group already exists.

1. **Iterating Through the Input Strings:** We iterate through each string in the input vector 'strs'.

1. **Sorting Strings:** For each string, we sort its characters alphabetically. This ensures that anagrams will have the same sorted representation.

1. **Grouping Anagrams:** We check if the sorted string exists in the unordered map. If it does, we add the current string to the corresponding group in the answer vector. If not, we create a new group and store its index in the unordered map.

1. **Returning the Answer:** Once all strings have been processed, we return the answer vector containing the grouped anagrams.



# Complexity
- Time complexity:
   $$O(n * k * log k)$$
*(K is the length of the longest string)*
    

- Space complexity:
   $$O(n*k)$$
*(K is the length of the longest string)*
    


# Code
```C++ []
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, int> mp;
        vector<vector<string>> ans; 

        for (int i = 0; i < strs.size(); i++) {
            string temp = strs[i];
            sort(temp.begin(), temp.end());
            if (mp.find(temp) != mp.end()) {
                ans[mp[temp]].push_back(strs[i]);
            } else {
                mp[temp] = ans.size();
                ans.push_back({strs[i]});
                
            }
        }

        return ans;
    }
};



```
```Java []


class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, Integer> mp = new HashMap<>();
        List<List<String>> ans = new ArrayList<>();

        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sortedStr = new String(chars);
            
            if (mp.containsKey(sortedStr)) {
                ans.get(mp.get(sortedStr)).add(str);
            } else {
                mp.put(sortedStr, ans.size());
                ans.add(new ArrayList<>(Arrays.asList(str)));
            }
        }

        return ans;
    }
}



```
```python3 []
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mp = {}
        ans = []

        for s in strs:
            sorted_str = ''.join(sorted(s))
            if sorted_str in mp:
                ans[mp[sorted_str]].append(s)
            else:
                mp[sorted_str] = len(ans)
                ans.append([s])
                
        return ans



```
```javascript []
var groupAnagrams = function(strs) {
    const mp = new Map();
    const ans = [];

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (mp.has(sortedStr)) {
            ans[mp.get(sortedStr)].push(str);
        } else {
            mp.set(sortedStr, ans.length);
            ans.push([str]);
        }
    }

    return ans;
};





```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---