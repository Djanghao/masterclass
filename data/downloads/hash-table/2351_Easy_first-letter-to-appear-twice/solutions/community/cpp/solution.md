# CPP | Easy | O(1) Time | O(26) Space

**Author:** amirkpatna
**Votes:** 28
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2324809/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/2324809/)

---

```
class Solution {
public:
    char repeatedCharacter(string s) {
        vector<int> v(26);
        for(char c:s){
            v[c-'a']++;
            if(v[c-'a']>1)return c;
        }
        return 'a';
    }
};
```

**Update** :
```
class Solution {
public:
    char repeatedCharacter(string s) {
        vector<bool> v(26);
        for(char c:s){
            if(v[c-'a'])return c;
			v[c-'a']=true;
        }
        return 'a';
    }
};
```