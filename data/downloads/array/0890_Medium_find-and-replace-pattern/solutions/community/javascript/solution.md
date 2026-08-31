# JS, Python, Java, C++ | Easy Mask/Map Solution w/ Explanation

**Author:** sgallivan
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/1221188/](https://leetcode.com/problems/find-and-replace-pattern/solutions/1221188/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Right away, we can realize that if we can remap characters in an attempt to match the pattern, it doesn't actually matter which characters map to other characters, just that the locations are consistent.

At this point, then, the goal is to make the comparison as easy as possible. To do that, we can reimagine the words as an alphabetic sequence, where the first new character we come across is always **masked** to **"a"**, the second to **"b"**, and so on. If we apply this same process to the **pattern** first, then it should be much easier to compare the words to the **pattern**.

First, we can define a helper function to **translate** characters for us. We'll have to create a **map** or **array** structure (**codex**) to keep track of the character mapping for a given word. The **translate** function will then check to see if the character has already been mapped, and if so, **return** its mapped value. If not, it assigns it the next unused alphabetic value.

We can then easily **translate** the **pattern** into a **cipher** mask which we can then **compare** to each **word** in **words** using another helper function. The **compare** function will clear the **codex** for each **word**, then we can compare each character of **word** to the corresponding character in **cipher**. If at any time we fail to match, we can quickly **return** out of the comparison and continue with the next **word**. If the translated **word** fully matches **cipher**, it can be added to our answer array (**ans**).

Then we can **return ans** once we're done.

 - _**Time Complexity: O(N * M)** where **N** is the length of words and **M** is the length of each **word**/**pattern**_
 - _**Space Complexity: O(M)** for the **codex**_
    - _or **O(N + M)** if you count the space of the output (**ans**)_

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 38.3MB** (beats 94% / 100%).
```javascript
var findAndReplacePattern = function(words, pattern) {
    let ans = [], codex = new Map()
    const translate = char => {
        if (!codex.has(char))
            codex.set(char, String.fromCharCode(97 + codex.size))
        return codex.get(char)
    }
    const compare = word => {
        codex.clear()
        for (let i = 0; i < word.length; i++)
            if (translate(word[i]) !== cipher[i])
                return
        ans.push(word)
    }
    let cipher = new Array(pattern.length)
    for (let i = 0; i < pattern.length; i++)
        cipher[i] = translate(pattern.charAt(i))
    words.forEach(compare)
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **28ms / 14.1MB** (beats 85% / 95%).
```python
class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        ans, codex = [], defaultdict()
        def translate(c: str) -> str:
            if c not in codex:
                codex[c] = chr(97 + len(codex))
            return codex[c]
        def compare(word: str) -> None:
            codex.clear()
            for i in range(len(word)):
                if translate(word[i]) != cipher[i]:
                    return
            ans.append(word)
        cipher = [translate(c) for c in pattern]
        for word in words:
            compare(word)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 38.5MB** (beats 91% / 97%).
```java
class Solution {
    List<String> ans;
    Map<Character, Character> codex;
    char[] cipher;
    
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        ans = new ArrayList<>();
        codex = new HashMap<>();
        cipher = pattern.toCharArray();
        for (int i = 0; i < pattern.length(); i++)
            cipher[i] = translate(cipher[i]);
        for (String word : words) compare(word);
        return ans;
    }
    private char translate(char c) {
        if (!codex.containsKey(c))
            codex.put(c, (char)(97 + codex.size()));
        return codex.get(c);
    }
    private void compare(String word) {
        codex.clear();
        for (int i = 0; i < word.length(); i++)
            if (translate(word.charAt(i)) != cipher[i]) return;
        ans.add(word);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 8.0MB** (beats 100% / 88%).
```c++
class Solution {
public:
    vector<string> findAndReplacePattern(vector<string>& words, string pattern) {
        ans.resize(0);
        codex.clear();
        cipher = pattern;
        for (int i = 0; i < pattern.size(); i++)
            cipher[i] = translate(cipher[i]);
        for (auto& word : words) compare(word);
        return ans;
    }
private:
    vector<string> ans;
    unordered_map<char, char> codex;
    string cipher;
    char translate(char& c) {
        if (codex.find(c) == codex.end())
            codex[c] = (char)(97 + codex.size());
        return codex[c];
    }
    void compare(string& word) {
        codex.clear();
        for (int i = 0; i < word.length(); i++)
            if (translate(word[i]) != cipher[i]) return;
        ans.push_back(word);
    }
};