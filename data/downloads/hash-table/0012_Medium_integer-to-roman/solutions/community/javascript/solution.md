# JS, Python, Java, C++ | Simple Solution w/ Explanation

**Author:** sgallivan
**Votes:** 159
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/1102775/](https://leetcode.com/problems/integer-to-roman/solutions/1102775/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Just like Roman to Integer, this problem is most easily solved using a **lookup table** for the conversion between digit and numeral. In this case, we can easily deal with the values in descending order and insert the appropriate numeral (or numerals) as many times as we can while reducing the our target number (**N**) by the same amount.

Once **N** runs out, we can **return ans**.

---

#### ***Implementation:***

Java's **StringBuilder** can take care of repeated string concatenations without some of the overhead of making string copies.

---

#### ***Javascript Code:***

The best result for the code below is **124ms / 43.5MB** (beats 100% / 100%).
```javascript
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRoman = function(N) {
    let ans = ""
    for (let i = 0; N; i++)
        while (N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **40ms / 14.1MB** (beats 95% / 86%).
```python
val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

class Solution:
    def intToRoman(self, N: int) -> str:
        ans = ""
        for i in range(13):
            while N >= val[i]:
                ans += rom[i]
                N -= val[i]
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **3ms / 38.1MB** (beats 100% / 95%).
```java
class Solution {
    final static int[] val = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    final static String[] rom = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

    public String intToRoman(int N) {
        StringBuilder ans = new StringBuilder();
        for (int i = 0; N > 0; i++)
            while (N >= val[i]) {
                ans.append(rom[i]);
                N -= val[i];
            }
        return ans.toString();
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 5.8MB** (beats 100% / 98%).
```c++
class Solution {
public:
    const int val[13] = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    const string rom[13] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

    string intToRoman(int N) {
        string ans = "";
        for (int i = 0; N; i++)
            while (N >= val[i]) ans += rom[i], N -= val[i];
        return ans;
    }
};
```