# Easiest Solution ✅✅| Beats 100 % | C++ | Java | Python3 | Javascript

**Author:** jay_singla
**Votes:** 144
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004177/](https://leetcode.com/problems/string-compression-iii/solutions/6004177/)

---

# Intuition
The goal is to compress a given string word such that each sequence of consecutive, identical characters is replaced by the count of that character (up to 9) followed by the character itself.
So we will just follow the steps given in the question.

# Approach
1) Initialize Variables:
- Start with an empty string comp to hold the result.
- Set cnt (count) to 1, which will keep track of the current sequence of identical characters.
- ch is set to the first character in word to start tracking the first character sequence.

2) Loop Through the String:

- Traverse each character in the string word, starting from the second character.
- If the current character matches ch (indicating it is part of the current sequence of identical characters), increment cnt.
- If cnt reaches 9, reset it back to 1 for the next sequence, as we are limiting the maximum count per character to 9.
3)Update comp on Character Change:

- When the current character is different from ch, append the count cnt and the character ch to comp.
- Reset ch to the current character and cnt to 1 to start tracking the new sequence of characters.
4) Finalize the Result:

- After the loop, append the last sequence count and character to comp to capture the final sequence.

# Complexity
- Time complexity:
O(n) -> for traversing the string 

- Space complexity:
O(n) -> to store the "comp" string  

# Code
``` c++ []
class Solution {
public:
    string compressedString(string word) {
        string comp = "";
        int cnt = 1, n = word.size();
        char ch = word[0];
        for(int i=1;i<n;i++){
            if(word[i] == ch && cnt < 9)cnt++;
            else{
                comp.push_back(cnt+'0');
                comp.push_back(ch);
                ch = word[i];
                cnt = 1;
            }
        }
        comp.push_back(cnt+'0');
        comp.push_back(ch);
        return comp;
    }
};
```
``` java []
class Solution {
    public String compressedString(String word) {
        StringBuilder comp = new StringBuilder();
        int cnt = 1, n = word.length();
        char ch = word.charAt(0);
        for (int i = 1; i < n; i++) {
            if (word.charAt(i) == ch && cnt < 9) {
                cnt++;
            } else {
                comp.append(cnt).append(ch);
                ch = word.charAt(i);
                cnt = 1;
            }
        }
        comp.append(cnt).append(ch);
        return comp.toString();
    }
}

```
``` Python3 []
class Solution:
    def compressedString(self, word: str) -> str:
        comp = ""
        cnt, n = 1, len(word)
        ch = word[0]
        for i in range(1, n):
            if word[i] == ch and cnt < 9:
                cnt += 1
            else:
                comp += str(cnt) + ch
                ch = word[i]
                cnt = 1
        comp += str(cnt) + ch
        return comp

```
```javascript []
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let comp = "";
        let cnt = 1, n = word.length;
        let ch = word[0];
        for (let i = 1; i < n; i++) {
            if (word[i] === ch && cnt < 9) {
                cnt++;
            } else {
                comp += cnt + ch;
                ch = word[i];
                cnt = 1;
            }
        }
        comp += cnt + ch;
        return comp;
};

```
![LC.png](./images/0.png)
