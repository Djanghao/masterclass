# Solution

**Author:** deleted_user
**Votes:** 478
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/3540699/](https://leetcode.com/problems/find-common-characters/solutions/3540699/)

---

```C++ []
class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        vector<string> res;
        
        sort(words.begin(), words.end());
        
        for (char c : words[0]) {
            bool common = true;
            
            for (int i = 1; i < words.size(); i++) {
                if (words[i].find(c) == string::npos) {
                    common = false;
                    break;
                } else {
                    words[i].erase(words[i].find(c), 1);
                }
            }
            if (common) {
                res.push_back(string(1, c));
            }
        }
        return res;
    }
};
```

```Python3 []
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        if len(words) < 2:
            return words
        res = []
        word1 = set(words[0])
        for char in word1:
            frequency = min([word.count(char) for word in words])
            res += [char] * frequency
        return res
```

```Java []
class Solution {
   public List<String> commonChars(String[] A) {
        int[] last = count(A[0]);
        for (int i = 1; i < A.length; i++) {
            last = intersection(last, count(A[i]));
        }
        List<String> arr = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            if (last[i] != 0) {
                char a = 'a';
                a += i;
                String s = String.valueOf(a);
                while (last[i] > 0) {
                    arr.add(s);
                    last[i]--;
                }
            }
        }
        return arr;
    }
    int[] intersection(int[] a, int[] b) {
        int[] t = new int[26];
        for (int i = 0; i < 26; i++) {
            t[i] = Math.min(a[i], b[i]);
        }
        return t;
    }
    int[] count(String str) {
        int[] t = new int[26];
        for (char c : str.toCharArray()) t[c - 'a']++;
        return t;
    }
}
```