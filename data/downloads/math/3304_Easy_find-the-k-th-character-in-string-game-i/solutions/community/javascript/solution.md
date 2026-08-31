# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5847337/](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/solutions/5847337/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
```javascript []
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let s = [0]
    while (s.length < k) {
        const n = s.length
        for (let i = 0; i < n; i++) {
            s[n + i] = (s[i] + 1) % 26
        }
    }
    // console.log(s)
    return String.fromCharCode(s[k - 1] + 97)
};
```
```C++ []
//C++ Code
#include <bits/stdc++.h>
using namespace std;


#define FOR(a, b, c) for (int a = b; a < c; a++)
#define FOR1(a, b, c) for (int a = b; a <= c; ++a)
#define Rep(i, n) FOR(i, 0, n)
#define Rep1(i, n) FOR1(i, 1, n)
#define RepA(ele, nums) for (auto& ele : nums)

class Solution {
public:
    char kthCharacter(int k) {
        string help = "a";

        while (help.length() < k) {
            string n_help;
            RepA (c, help) {
                n_help += (c == 'z') ? 'a' : (c + 1);
            }
            help += n_help;
        }

        return help[k - 1];
    }
};
```
```Python3 []
#Python3 Code
class Solution:
    def kthCharacter(self, k: int) -> str:
        arr = [0]
        while len(arr) < k:
            arr += [(x + 1) % 26 for x in arr]
        return chr(arr[k - 1] + 97)
```
```Java []
//Java Code
class Solution {
    public char kthCharacter(int k) {
        StringBuilder word = new StringBuilder("a");
        while (word.length() < k) {
            String str = "";
            for (char i = 0; i < word.length(); i++)
                str += ((word.charAt(i) == 'z') ? 'a' : (char) (word.charAt(i) + 1));
            word.append(str);
        }
        System.out.println(word);
        return word.charAt(k - 1);
    }
}
```
```C []
//C COde
typedef struct String{
    int size;
    char* str;
}string;

string* init(int cap) {
    string* st = (string*)malloc(sizeof(string));
    st->size = 0;
    st->str = (char*)calloc(sizeof(char), cap);
    return st;
}

void freeString(string* obj) {
    for (int i = 0; i < obj->size; i++)
        obj->str[i] = '\\0';
    free(obj->str);
    free(obj);
}

char kthCharacter(int k) {
    string* st = init(1001);
    st->str[st->size++] = 'a';
    
    while (st->size < k) {
        string* temp = init(1001);
        for (int i = 0; i < st->size; i++)
            temp->str[temp->size++] = (st->str[i] == 'z' ? 'a' : (st->str[i] + 1));
        for (int i = 0; i < temp->size; i++)
            st->str[st->size++] = temp->str[i];
        free(temp);
    }
    
    return st->str[k  - 1];
    free(st);
}
```
```Python []
#Python Code
class Solution(object):
    def kthCharacter(self, k):
        """
        :type k: int
        :rtype: str
        """
        start = "a"
        while len(start) < k:
            stack = []
            for ch in start:
                idx = ord(ch) - ord('a')
                idx = (idx + 1) % 26
                stack.append(chr(idx + 97))
            start += "".join(stack)
        return start[k - 1]
```
```C# []
//C# Code
public class Solution {
    public char KthCharacter(int k) {
        string word = "a";
        while (word.Length < k) {
            string sr = "";
            foreach (char ch in word) {
                sr += (ch == 'z') ? 'a' : (char)(ch + 1);
            }
            word += sr;
        }
        return word[k - 1];
    }
}
```
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(k) //C Solution
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(k) //C Soltion
# Code
![th.jpeg](./images/1.jpeg)
