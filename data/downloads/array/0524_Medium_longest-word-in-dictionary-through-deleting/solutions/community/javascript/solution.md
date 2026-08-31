# JS, Python, Java, C++ | Easy Solution w/ Explanation | beats 100%

**Author:** sgallivan
**Votes:** 17
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1077841/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1077841/)

---

*(Note: This is part of a series of Leetcode solution explanations ([**index**](https://dev.to/seanpgallivan/leetcode-solutions-index-57fl)). If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

To avoid having to sort the dictionary (**D**), we can just keep track of our best answer (**ans**), and skip any words that would be a worse answer than the current one.

Then, we can simply check each **word** to see if we can find the **char**'s in **S** in order to make the **word**. We can use a string indexing function to good effect here, making sure to start each new **char** search from just after the position (**pos**) of the last **char** found.

If we fail to find a **char**, **break** to the next **word**. If we successfully reach the end of a **word**, we can **return** it. If we never find a valid **word** match, **return** an empty string.

---

#### ***Implementation:***

The code for all four languages is almost identical.

Java won't let you directly compare two strings with a greater/less than, so we can use **.compareTo()**.

Python can take advantage of the **for... else** syntax to streamline this process a bit (thanks, @[joseville](https://leetcode.com/joseville)).

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 43.3MB** (beats 100% / 95%).
```javascript
var findLongestWord = function(S, D) {
    let ans = ""
    for (let word of D) {
        let a = word.length, b = ans.length
        if (a < b || (a === b && word > ans)) continue
        let pos = -1
        for (let char of word) {
            pos = S.indexOf(char, pos + 1)
            if (pos === -1) break
        }
        if (pos !== -1) ans = word
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **52ms / 16.6MB** (beats 100% / 96%).
```python
class Solution:
    def findLongestWord(self, S: str, D: List[str]) -> str:
        ans = ""
        for word in D:
            a, b = len(word), len(ans)
            if a < b or (a == b and word > ans): continue
            pos = -1
            for char in word:
                pos = S.find(char, pos + 1)
                if pos == -1: break
            else: ans = word
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **6ms / 39.6MB** (beats 99% / 93%).
```java
class Solution {
    public String findLongestWord(String S, List<String> D) {
        String ans = "";
        for (String word : D) {
            int a = word.length(), b = ans.length();
            if (a < b || (a == b && word.compareTo(ans) > 0)) continue;
            int pos = -1;
            for (int i = 0; i < a; i++) {
                pos = S.indexOf(word.charAt(i), pos + 1);
                if (pos == -1) break;
            }
            if (pos != -1) ans = word;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **44ms / 17.5MB** (beats 100% / 54%).
```c++
class Solution {
public:
    string findLongestWord(string S, vector<string>& D) {
        string ans = "";
        for (string word : D) {
            int a = word.length(), b = ans.length();
            if (a < b || (a == b && word > ans)) continue;
            int pos = -1;
            for (int i = 0; i < a; i++) {
                pos = S.find(word[i], pos + 1);
                if (pos == -1) break;
            }
            if (pos != -1) ans = word;
        }
        return ans;
    }
};