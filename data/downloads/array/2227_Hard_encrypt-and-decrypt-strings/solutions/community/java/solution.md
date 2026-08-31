# [Java/C++/Python] Two Hashmaps with Explanation

**Author:** lee215
**Votes:** 155
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1909025/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1909025/)

---

# **Explanation**
The hashmap `enc` help binding each paire of `keys[i]` and `values[i]`,
so that we can encrypt a char to the string in `O(1)`

`count` counts the frequency of words in `dictionary` after `encrypt`,
then we can used in `decrypt` in `O(1)`.
<br>

# **Complexity**
`Encrypter`  Time `O(n)`      Space `O(n)`
`encrypt`    Time `O(word1)`  Space `O(word1)`
`decrypt`    Time `O(1)`      Space `O(1)`
<br>

# **Note**
Not all word can be "encrypt", 
For character `c`, if we can't find the index `i` satisfying `keys[i] == c` in keys.
The behavior are **NOT** clearly defined.

In my opinion we should do nothing but keep the original character, 
(the standard solution of OJ doesn't work as I suggest)

These kind of test cases are not present in the original test cases set,
but recedntly blindly added to the test cases.

The descrption of probelm should be fixed, not blindly add an appropriat test cases.

It's like, a bug is reported and not guarded by tests, 
then LC adds a test but not fix anything at all.


**Java**
```java
    Map<Character, String> enc;
    Map<String, Integer> count;
    
    public Encrypter(char[] keys, String[] values, String[] dictionary) {
        enc = new HashMap<>();
        for (int i = 0; i < keys.length; ++i)
            enc.put(keys[i], values[i]);
        
        count = new HashMap<>();
        for (String w : dictionary) {
            String e = encrypt(w);
            count.put(e, count.getOrDefault(e, 0) + 1);
        }
    }
    
    public String encrypt(String word1) {
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < word1.length(); ++i)
            res.append(enc.getOrDefault(word1.charAt(i), "#"));
        return res.toString();
    }
    
    public int decrypt(String word2) {
        return count.getOrDefault(word2, 0);
    }
```

**C++**
```cpp
    unordered_map<char, string> enc;
    unordered_map<string, int> count;
    Encrypter(vector<char>& keys, vector<string>& values, vector<string>& dictionary) {
        for (int i = 0; i < keys.size(); ++i)
            enc[keys[i]] = values[i];
        for (string& w: dictionary)
            count[encrypt(w)]++;
    }
    
    string encrypt(string word1) {
        string res = "";
        for (char c: word1) {
        	if (!enc.count(c)) return "";
            res += enc[c];
        }
        return res;
    }
    
    int decrypt(string word2) {
        return count[word2];
    }
```

**Python**
3-lines Python.
`decrypt` method is not missing, `defined` in `init`
I remoded unnecessay code from default template.
```py
class Encrypter(object):

    def __init__(self, keys, values, dictionary):
        self.enc = {k: v for k,v in zip(keys, values)}
        self.decrypt = collections.Counter(self.encrypt(w) for w in dictionary).__getitem__

    def encrypt(self, word1):
        return ''.join(self.enc.get(c, '#') for c in word1)
```
