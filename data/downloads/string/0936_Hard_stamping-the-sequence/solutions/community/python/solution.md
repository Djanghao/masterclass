# JS, Python, Java, C++ | Easy Reverse Matching Solution w/ Explanation

**Author:** sgallivan
**Votes:** 92
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/1135739/](https://leetcode.com/problems/stamping-the-sequence/solutions/1135739/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, it's easier to think of the target array (**T**) as being composed of layers of stamps (**S**). Since **T** represents the finished product of all the stamps, we'll need to reverse the process and peel off one layer at a time.
```js
 target:  a b a b a b c b c b a b a b c b c


layer 1:          a b c           a b c    
layer 2:      a b c   a b c   a b c   a b c
layer 3:  a b c           a b c
```
So we'll need to iterate through **T** a number of times, finding and removing any full instances of **S**. Once we're past the initial pass, we can use **character masks** to find partial matches for **S** on each remaining pass.
```
 pass 1:  a b a b a b c b c b a b a b c b c
                  ^ ^ ^           ^ ^ ^

 pass 2:  a b a b * * * b c b a b * * * b c
              ^ ^ ^   ^ ^ ^   ^ ^ ^   ^ ^ ^

 pass 3:  a b * * * * * * * b * * * * * * *
          ^ ^ ^           ^ ^ ^

 pass 4:  * * * * * * * * * * * * * * * * *
```
To speed things up, we should avoid a replacement if the partial match is actually the complete mask (ie, **" * * * "**), as nothing actually changed (**sdiff = false**). Then we should continue until we finish a pass without making any changes (**tdiff = false**).

At that point, if the remaining **T** is all masked, we can return our answer array (**ans**), otherwise we should return an empty array. Since we're locating the stamp indexes in reverse order, we should either insert each newly-found index at the beginning of **ans**, or we should push them to the end and then reverse **ans** before we **return** it.

---

#### ***Implementation:***

Since we need to modify **T**, we should convert it to an array for all except C++, which has mutable strings.

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 40.5MB** (beats 100% / 100%).
```javascript
var movesToStamp = function(S, T) {
    if (S === T) return [0]
    let slen = S.length, tlen = T.length - slen + 1,
        ans = [], tdiff = true, sdiff, i, j
    S = S.split(""), T = T.split("")
    while (tdiff)
        for (i = 0, tdiff = false; i < tlen; i++) {
            for (j = 0, sdiff = false; j < slen; j++)
                if (T[i+j] === "*") continue
                else if (T[i+j] !== S[j]) break
                else sdiff = true
            if (j === slen && sdiff) {
                for (j = i, tdiff = true; j < slen + i; j++)
                    T[j] = "*"
                ans.unshift(i)
            }
        }
    for (i = 0; i < T.length; i++) if (T[i] !== "*") return []
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **168ms / 14.3MB** (beats 86% / 99%).
```python
class Solution:
    def movesToStamp(self, S: str, T: str) -> List[int]:
        if S == T: return [0]
        S, T = list(S), list(T)
        slen, tlen = len(S), len(T) - len(S) + 1
        ans, tdiff, sdiff = [], True, True
        while tdiff:
            tdiff = False
            for i in range(tlen):
                sdiff = False
                for j in range(slen):
                    if T[i+j] == "*": continue
                    if T[i+j] != S[j]: break
                    sdiff = True
                else: 
                    if sdiff:
                        tdiff = True
                        for j in range(i, i + slen): T[j] = "*"
                        ans.append(i)
        for i in range(len(T)):
            if T[i] != "*": return []
        return reversed(ans)
```

---

#### ***Java Code:***

The best result for the code below is **4ms / 38.6MB** (beats 67% / 100%).
```java
class Solution {
    public int[] movesToStamp(String S, String T) {
        if (S == T) return new int[]{0};
        char[] SC = S.toCharArray(), TC = T.toCharArray();
        int slen = SC.length, tlen = TC.length - slen + 1, i, j;
        List<Integer> lans = new ArrayList<>();
        Boolean tdiff = true, sdiff;
        while (tdiff)
            for (i = 0, tdiff = false; i < tlen; i++) {
                for (j = 0, sdiff = false; j < slen; j++)
                    if (TC[i+j] == '*') continue;
                    else if (TC[i+j] != SC[j]) break;
                    else sdiff = true;
                if (j == slen && sdiff) {
                    for (j = i, tdiff = true; j < slen + i; j++)
                        TC[j] = '*';
                    lans.add(0, i);
                }
            }
        for (i = 0; i < TC.length; i++) if (TC[i] != '*') return new int[]{};
        int[] ans = new int[lans.size()];
        for (i = 0; i < lans.size(); i++) ans[i] = lans.get(i);
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **4ms / 7.2MB** (beats 99% / 95%).
```c++
class Solution {
public:
    vector<int> movesToStamp(string S, string T) {
        if (S == T) return {0};
        int slen = S.size(), tlen = T.size() - slen + 1, i, j;
        vector<int> ans;
        bool tdiff = true, sdiff;
        while (tdiff)
            for (i = 0, tdiff = false; i < tlen; i++) {
                for (j = 0, sdiff = false; j < slen; j++)
                    if (T[i+j] == '*') continue;
                    else if (T[i+j] != S[j]) break;
                    else sdiff = true;
                if (j == slen && sdiff) {
                    for (j = i, tdiff = true; j < slen + i; j++)
                        T[j] = '*';
                    ans.push_back(i);
                }
            }
        for (i = 0; i < T.size(); i++) if (T[i] != '*') return {};
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```