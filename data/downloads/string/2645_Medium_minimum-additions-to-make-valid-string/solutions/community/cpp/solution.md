# C++ | Java | Python | O(N) | Greedy Solution | Easy to understand

**Author:** Rishabhsinghal12
**Votes:** 103
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421709/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3421709/)

---

**C++ Code**
```
class Solution {
public:
    int addMinimum(string word) {
        
        int n = word.size(), i = 0, res = 0;
        
        while(i < n) {
            int count = 0;
            
            if(word[i] == 'a') {
                count++;i++;
            }
             
            if(i < n and word[i] == 'b') {
                count++;i++;
            }
            
            if(i < n and word[i] == 'c') {
                count++;i++;
            }
            
            res += 3 - count;
        }
        
        return res;
    }
};
```

**Java Code**
```
public class Solution {
    public int addMinimum(String word) {
        int n = word.length(), i = 0, res = 0;
        
        while(i < n) {
            int count = 0;
            
            if(word.charAt(i) == 'a') {
                count++;
                i++;
            }
             
            if(i < n && word.charAt(i) == 'b') {
                count++;
                i++;
            }
            
            if(i < n && word.charAt(i) == 'c') {
                count++;
                i++;
            }
            
            res += 3 - count;
        }
        
        return res;
    }
}
```

**Python Code**

```
class Solution:
    def addMinimum(self, word: str) -> int:
        n = len(word)
        i = 0
        res = 0
        
        while i < n:
            count = 0
            
            if word[i] == 'a':
                count += 1
                i += 1
             
            if i < n and word[i] == 'b':
                count += 1
                i += 1
            
            if i < n and word[i] == 'c':
                count += 1
                i += 1
            
            res += 3 - count
        
        return res
```

**Thanks. Please do upvote**