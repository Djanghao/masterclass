# JS, Python, Java, C++ | Easy Lookup Solution w/ Explanation

**Author:** sgallivan
**Votes:** 63
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/1146651/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/1146651/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem is pretty straightforward. The first issue is being able to identify vowels. There are obviously many ways to do this, but this seems like a good place to use some kind of vowel lookup data structure (**vowels**). Depending on the language, it can be a string, a dictionary, a map, a set, etc.

Then we just need to keep a balance counter (**ans**) and iterate through both halves of the input string (**S**) and increment **ans** whenever the first half has a vowel and decrement **ans** whenever the second half has a vowel.

Once we're done, we can just **return ans == 0** to determine if the two string halves are balanced.

---

#### ***Javascript Code:***
```javascript
const vowels = "aeiouAEIOU"

var halvesAreAlike = function(S) {
    let mid = S.length / 2, ans = 0
    for (let i = 0, j = mid; i < mid; i++, j++)
        ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j))
    return ans === 0
};
```

---

#### ***Python Code:***
```python
vowels = "aeiouAEIOU"

class Solution:
    def halvesAreAlike(self, S: str) -> bool:
        mid, ans = len(S) // 2, 0
        for i in range(mid):
            if S[i] in vowels: ans += 1
            if S[mid+i] in vowels: ans -=1
        return ans == 0
```

---

#### ***Java Code:***
```java
class Solution {
    String vowels = "aeiouAEIOU";
    
    public boolean halvesAreAlike(String S) {
        int mid = S.length() / 2, ans = 0;
        for (int i = 0, j = mid; i < mid; i++, j++) {
            if (vowels.indexOf(S.charAt(i)) >= 0) ans++;
            if (vowels.indexOf(S.charAt(j)) >= 0) ans--;
        }
        return ans == 0;
    }
}
```

---

#### ***C++ Code:***
```c++
string vowels = "aeiouAEIOU";

class Solution {
public:
    bool halvesAreAlike(string S) {
        int mid = S.size() / 2, ans = 0;
        for (int i = 0, j = mid; i < mid; i++, j++) {
            if (~vowels.find(S[i])) ans++;
            if (~vowels.find(S[j])) ans--;
        }
        return ans == 0;
    }
};
```