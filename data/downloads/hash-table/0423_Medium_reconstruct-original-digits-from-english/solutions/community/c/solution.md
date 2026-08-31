# JS, Python, Java, C++ | Simple Solution w/ Explanation

**Author:** sgallivan
**Votes:** 24
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131064/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131064/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The most important thing we have to realize here is that some of the characters that make up the input string (**S**) can only belong to one possible word. This will immediately tell us how many of that digit should belong in our answer (**ans**).

The first thing we should do, then, is to create a **frequency map** (**fmap**) of all the characters in **S**. Since we're dealing with characters here, we have the option to use an **arraymap** with **26** elements corresponding to the **0-index** code of each character rather than using a normal map object, which should speed up the processing.

Some of the words, however, use only characters that can be found in more than one word, so we'll have to carefully pick the order in which we figure out the frequency of each word, so that we can simplify later checks.

For example, the digits in the word forms of the digits **0**, **2**, **4**, **6**, and **8** all contain a character unique to that word, so we could iterate through those words and update the **fmap** entries for each of their characters to represent the removal of those words.

But we don't really need to update the frequency of every character, only the ones that will be useful for isolating the remaining five words.

To keep track of the proper word order, the special character for each word, and the required characters to remove, we can declare a constant lookup array (**DIGITS**).

In order to keep **ans** in the proper order, we should initially put the individual digit strings in a temporary array and then **join ans** before we **return** it.

---

#### ***Implementation:***

For Python, using **count()** is actually faster than using a **frequency map**, so we can reverse a bit of the process and remove the common letter results at the later word, rather than the earlier one.

Java should split **S** into a **charArray** before iteration, and should use a **StringBuilder()** to concatenate **ans** before **return**ing it.

---

#### ***Javascript Code:***

The best result for the code below is **84ms / 41.4MB** (beats 100% / 100%).
```javascript
const DIGITS = [
    ["0",25,[14]],
    ["2",22,[14]],
    ["4",20,[5,14]],
    ["6",23,[18,8]],
    ["8",6,[8,7]],
    ["5",5,[8]],
    ["7",18,[]],
    ["3",7,[]],
    ["9",8,[]],
    ["1",14,[]]
]
var originalDigits = function(S) {
    let fmap = new Uint16Array(26),
        ans = new Array(10), len = S.length
    for (let i = 0; i < len; i++)
        fmap[S.charCodeAt(i) - 97]++
    for (let i = 0; i < 10; i++) {
        let [dig, char, rems] = DIGITS[i],
            count = fmap[char]
        for (let j = 0; j < rems.length; j++)
            fmap[rems[j]] -= count
        ans[dig] = dig.repeat(count)
    }
    return ans.join("")
};
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.8MB** (beats 100% / 27%).
```python
DIGITS = [
    [0,'z',[]],
    [2,'w',[]],
    [4,'u',[]],
    [6,'x',[]],
    [8,'g',[]],
    [5,'f',[4]],
    [7,'s',[6]],
    [3,'h',[8]],
    [9,'i',[6,8,5]],
    [1,'o',[0,2,4]]
]
class Solution:
    def originalDigits(self, S: str) -> str:
        fmap, ans, n = [0] * 26, [0] * 10, len(S)
        for i in range(10):
            dig, char, rems = DIGITS[i]
            count = S.count(char)
            for rem in rems: count -= ans[rem]
            ans[dig] += count
        return "".join([str(i) * ans[i] for i in range(10)])
```

---

#### ***Java Code:***

The best result for the code below is **3ms / 39.3MB** (beats 100% / 90%).
```java
class Solution {
    static final int[] DIGS = {0,2,4,6,8,5,7,3,9,1}, CHARS = {25,22,20,23,6,5,18,7,8,14};
    static final int[][] REMS = {{14},{14},{5,14},{18,8},{8,7},{8},{},{},{},{}};
    public String originalDigits(String S) {
        int[] fmap = new int[26], ans = new int[10];
        char[] SCA = S.toCharArray();
        for (char c : SCA) fmap[c - 97]++;
        for (int i = 0; i < 10; i++) {
            int count = fmap[CHARS[i]];
            for (int rem : REMS[i]) fmap[rem] -= count;
            ans[DIGS[i]] = count;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            char c = (char)(i + 48);
            for (int j = 0; j < ans[i]; j++)
                sb.append(c);
        }
        return sb.toString();
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **8ms / 8.8MB** (beats 100% / 70%).
```c++
class Solution {
const int DIGS[10] = {0,2,4,6,8,5,7,3,9,1}, CHARS[10] = {25,22,20,23,6,5,18,7,8,14};
const vector<vector<int>> REMS = {{14},{14},{5,14},{18,8},{8,7},{8},{},{},{},{}};
public:
    string originalDigits(string S) {
        int fmap[26] = {0}, ans[10] = {0};
        for (char c : S) fmap[c - 97]++;
        for (int i = 0; i < 10; i++) {
            int count = fmap[CHARS[i]];
            for (int rem : REMS[i]) fmap[rem] -= count;
            ans[DIGS[i]] = count;
        }
        string ansstr;
        for (int i = 0; i < 10; i++) {
            char c = (char)(i + 48);
            for (int j = ans[i]; j; j--)
                ansstr += c;
        }
        return ansstr;
    }
};
```