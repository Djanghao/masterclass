# Easy understanding C++ code with comments | Without Tries

**Author:** venkatasaitanish
**Votes:** 70
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1908722/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1908722/)

---

```
class Encrypter {
public:
    unordered_map<char,string> m;
    unordered_map<string,int> dict;
    // vector k is keys, vector v is values and vector d is dictionary
    Encrypter(vector<char>& k, vector<string>& v, vector<string>& d) {
        int n = k.size();
        // we store the key value pairs in an unordered_map m, so that encryption of a char takes O(1).
        for(int i=0;i<n;i++){
            m[k[i]] = v[i];
        }
        
        // we encrypt the strings in the vector d and store it's count in an unordered_map dict.
        // so that we can directly say the count of decryptions for a string in O(1).
        n = d.size();
        for(int i=0;i<n;i++){
            dict[encrypt(d[i])]++;
        }
    }
    
    string encrypt(string s) {
        // encrypt the string using key value pairs in unordered_map m
        int n = s.length();
        string ans = "";
        for(int i=0;i<n;i++){
            if(m.find(s[i])==m.end()) return "";
            ans += m[s[i]];
        }
        return ans;
    }
    
    int decrypt(string s) {
        if(dict.find(s)==dict.end()) return 0; // if not present in dict, return 0
        return dict[s]; // else return count.
    }
};
```
**Upvote if it helps!\uD83D\uDE4C**