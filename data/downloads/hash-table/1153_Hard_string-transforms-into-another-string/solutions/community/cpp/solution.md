# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/3567382/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/3567382/)

---

```C++ []
class Solution {
public:
    bool canConvert(string str1, string str2) {
        if(str1 == str2)    return true;
        unordered_map<char, vector<int>> m;
        vector<bool> visited(26, false), converted(26, false);
        for(int i = 0; i < str1.length(); i++)  m[str1[i]].push_back(i);
        
        for(int i = 0; i < str1.length(); i++){
            if(visited[str1[i] - 'a'])  continue;
            char ch = str1[i];
            vector<int> index = m[ch];
            visited[ch - 'a'] = true;
            for(int &idx: index)    if(str2[idx] != str2[i]) return false;
            converted[str2[i] - 'a'] = true;
        }
        return set(str2.begin(), str2.end()).size() < 26;
    }
};
```

```Python3 []
class Solution:
    def canConvert(self, str1: str, str2: str) -> bool:
        mp = {}
        loop = False
        for i in range(len(str1)):
            c1, c2 = str1[i], str2[i]
            if c1 in mp:
                if mp[c1] != c2:
                    return False
            else:
                mp[c1] = c2
            if c1 != c2 and c2 in mp:
                loop = True
        lenStr2 = len(set(str2))
        
        if lenStr2 == 26 and loop:
            return False
         
        return True
```

```Java []
class Solution {
    public boolean canConvert(String str1, String str2) {
        if (str1.equals(str2)) {
            return true;
        }
        Map<Character, Character> conversionMappings = new HashMap<>();
        Set<Character> uniqueCharactersInStr2 = new HashSet<>();
        
        for (int i = 0; i < str1.length(); i++) {
           if (!conversionMappings.containsKey(str1.charAt(i))) {
                conversionMappings.put(str1.charAt(i), str2.charAt(i));
                uniqueCharactersInStr2.add(str2.charAt(i));
            } else if (conversionMappings.get(str1.charAt(i)) != str2.charAt(i)) {
                return false;
            }
        }
        if (uniqueCharactersInStr2.size() < 26) {
            return true;
        }
        return false;
    }
}
```