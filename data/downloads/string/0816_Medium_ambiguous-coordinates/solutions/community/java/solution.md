# JS, Python, Java, C++ | Easy Iterative Solution w/ Explanation

**Author:** sgallivan
**Votes:** 19
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/1206218/](https://leetcode.com/problems/ambiguous-coordinates/solutions/1206218/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, we have two basic challenges. The first challenge is preventing invalid coordinates. For that, we can define a helper function (**parse**) which will take a string (**str**) and only pass on valid options for another helper (**process**) to handle.

We can break down the options into three categories:
 - _No decimal_: Any option except one with more than **1** digit and a leading **"0"**.
 - _Decimal after first digit_: Any option with more than **1** digit and no trailing **"0"**.
 - _Decimals throughout_: Any option that doesn't start and end with a **"0"**

After defining our first helper function, the next thing we should do is iterate through possible comma locations in our input string (**S**) and separate the coordinate pair strings (**xStr, yStr**).

Then we'll run into the second challenge, which is to avoid repeating the same processing. If we were to employ a simple nested loop or recursive function to solve this problem, it would end up redoing the same processes many times, since both coordinates can have a decimal.

What we actually want is the product of two loops. The basic solution would be to create two arrays and iterate through their combinations, but there's really no need to actually build the second array, since we can just as easily process the combinations while we iterate through the second coordinate naturally.

So we should first build and validate all decimal options for the **xStr** of a given comma position and store the valid possibilities in an array (**xPoss**). Once this is complete we should find each valid decimal option for **yStr**, combine it with each value in **xPoss**, and add the results to our answer array (**ans**) before moving onto the next comma position.

To aid in this, we can define **process**, which will either store the valid decimal options from **xStr** into **xPoss** or combine valid decimal options from **yStr** with the contents of **xPoss** and store the results in **ans**, depending on which coordinate string we're currently on (**xy**).

Once we finish iterating through all comma positions, we can **return ans**.

---

#### ***Javascript Code:***

The best result for the code below is **76ms / 42.3MB** (beats 100% / 100%).
```javascript
var ambiguousCoordinates = function(S) {
    let ans = [], xPoss
    const process = (str, xy) => {
        if (xy)
            for (let x of xPoss)
                ans.push(`(${x}, ${str})`)
        else xPoss.push(str)
    }
    const parse = (str, xy) => {
        if (str.length === 1 || str[0] !== "0")
            process(str, xy)
        if (str.length > 1 && str[str.length-1] !== "0")
            process(str.slice(0,1) + "." + str.slice(1), xy)
        if (str.length > 2 && str[0] !== "0" && str[str.length-1] !== "0")
            for (let i = 2; i < str.length; i++)
                process(str.slice(0,i) + "." + str.slice(i), xy)
    }
    for (let i = 2; i < S.length - 1; i++) {
        let strs = [S.slice(1,i), S.slice(i, S.length - 1)]
        xPoss = []
        for (let j = 0; j < 2; j++)
            if (xPoss.length || !j) parse(strs[j], j)
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **32ms / 14.1MB** (beats 99% / 92%).
```python
class Solution:
    def ambiguousCoordinates(self, S: str) -> List[str]:
        ans, xPoss = [], []
        def process(st: str, xy: int):
            if xy:
                for x in xPoss:
                    ans.append("(" + x + ", " + st + ")")
            else: xPoss.append(st)
        def parse(st: str, xy: int):
            if len(st) == 1 or st[0] != "0":
                process(st, xy)
            if len(st) > 1 and st[-1] != "0":
                process(st[:1] + "." + st[1:], xy)
            if len(st) > 2 and st[0] != "0" and st[-1] != "0":
                for i in range(2, len(st)):
                    process(st[:i] + "." + st[i:], xy)  
        for i in range(2, len(S)-1):
            strs, xPoss = [S[1:i], S[i:-1]], []
            for j in range(2):
                if xPoss or not j: parse(strs[j], j)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **7ms / 39.5MB** (beats 100% / 91%).
```java
class Solution {
    private List<String> xPoss, ans;
    public List<String> ambiguousCoordinates(String S) {
        ans = new ArrayList<>();
        for (int i = 2; i < S.length() - 1; i++) {
            String[] strs = {S.substring(1,i), S.substring(i, S.length() - 1)};
            xPoss = new ArrayList<>();
            for (int j = 0; j < 2; j++)
                if (xPoss.size() > 0 || j == 0) parse(strs[j], j);
        }
        return ans;
    }
    private void parse(String str, int xy) {
        if (str.length() == 1 || str.charAt(0) != '0')
            process(str, xy);
        if (str.length() > 1 && str.charAt(str.length()-1) != '0')
            process(str.substring(0,1) + "." + str.substring(1), xy);
        if (str.length() > 2 && str.charAt(0) != '0' && str.charAt(str.length()-1) != '0')
            for (int i = 2; i < str.length(); i++)
                process(str.substring(0,i) + "." + str.substring(i), xy);
    }
    private void process(String str, int xy) {
        if (xy > 0)
            for (String x : xPoss)
                ans.add("(" + x + ", " + str + ")");
        else xPoss.add(str);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 9.1MB** (beats 100% / 95%).
```c++
class Solution {
public:
    vector<string> ambiguousCoordinates(string S) {
        for (int i = 2; i < S.size() - 1; i++) {
            string strs[2] = {S.substr(1,i-1), S.substr(i,S.size()-i-1)};
            xPoss.clear();
            for (int j = 0; j < 2; j++)
                if (xPoss.size() || !j) parse(strs[j], j);
        }
        return ans;
    }
private:
    vector<string> ans, xPoss;
    void parse(string str, int xy) {
        if (str.size() == 1 || str.front() != '0')
            process(str, xy);
        if (str.size() > 1 && str.back() != '0')
            process(str.substr(0,1) + "." + str.substr(1), xy);
        if (str.size() > 2 && str.front() != '0' && str.back() != '0')
            for (int i = 2; i < str.size(); i++)
                process(str.substr(0,i) + "." + str.substr(i), xy);
    }
    void process(string str, int xy) {
        if (xy)
            for (auto x : xPoss)
                ans.push_back("(" + x + ", " + str + ")");
        else xPoss.push_back(str);
    }
};
```