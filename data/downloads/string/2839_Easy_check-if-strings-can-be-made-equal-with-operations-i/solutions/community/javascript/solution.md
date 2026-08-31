# BEST EXPANATION✅ || 💯 % RUNTIME🔥 || IN 3 LANGUAGE 🧑‍💻|| BEGINEER FRIENDLY🍵 || 2 POINTER🅿️🅿️

**Author:** IamHazra
**Votes:** 8
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4875265/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/4875265/)

---

# Intuition \uD83D\uDCA1
My initial thoughts were to compare characters from both strings and swap if necessary to make them equal.

# Approach \uD83D\uDEE0\uFE0F
I utilized a while loop to iterate through both strings, comparing characters. If characters didn't match, I swapped them (if possible) in `ch1`. After the loop, I checked if both arrays were equal.

# Complexity \uD83D\uDCCA
- Time complexity: 
  - $$O(n)$$ where $$n$$ is the length of the strings `s1` and `s2`.
- Space complexity:
  - $$O(1)$$ as no extra space is used besides the input arrays.

# Code
```java []
class Solution {
    public boolean canBeEqual(String s1, String s2) {
        char[] ch1 = s1.toCharArray();
        char[] ch2 = s2.toCharArray();
        int i = 0;
        while(i < ch1.length){
            if(ch1[i] == ch2[i]){
                i++;
            }
            else{
                if(i+2 < ch1.length){
                    char temp = ch1[i];
                    ch1[i] = ch1[i+2];
                    ch1[i+2] = temp;
                }
                i++;
            }
        }
        for(int k=0;k<ch1.length;k++){
            if(ch1[k] != ch2[k]) return false;
        }
        return true;
    }
}
```
```javascript []
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let ch1 = [...s1];
    let ch2 = [...s2];
    let i=0;
    while(i < s1.length){
        if(ch1[i] === ch2[i]){
            i++;
        }
        else{
            if(i+2 < s1.length){
                let temp = ch1[i];
                ch1[i] = ch1[i+2];
                ch1[i+2] = temp;
            }
            i++;
        }
    }
    for(let j=0;j<s1.length;j++){
        if(ch1[j] !== ch2[j]) return false;
    }
    return true;
};
```
```C++ []
class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        vector<char> ch1(s1.begin(), s1.end());
        vector<char> ch2(s2.begin(), s2.end());
        int i = 0;
        while (i < ch1.size()) {
            if (ch1[i] == ch2[i]) {
                i++;
            } else {
                if (i + 2 < ch1.size()) {
                    char temp = ch1[i];
                    ch1[i] = ch1[i + 2];
                    ch1[i + 2] = temp;
                }
                i++;
            }
        }
        for (int k = 0; k < ch1.size(); k++) {
            if (ch1[k] != ch2[k])
                return false;
        }
        return true;
    }
};
```
![image.png](./images/0.png)


          -------------------------HAPPY CODING -------------------
