# JS, Python, Java, C++ | Optimized Mathematical Solution w/ Explanation

**Author:** sgallivan
**Votes:** 185
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/1129426/](https://leetcode.com/problems/palindromic-substrings/solutions/1129426/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem, like many, is all about optimization. The naive solution would be to check if each and every substring is a palindrome, but that would easily achieve a **TLE** result.

Instead, the first realization that we can make is that each larger palindrome is built upon many layers of smaller palindromes, going back to its center. So we could optimize our solution by iterating through **S** and considering the index **i** to be the center of a series of potential palindromes.

Then, for each **i** we could use two more pointers (**j & k**) which would spread out in both directions from **i**. As long as **S[j] == S[k]**, we'd know we had found a new palindrome and could continue spreading outward.

We would have to duplicate this process for even-length palindromes, as their center would be two characters intead of one.

But we can optimize more than that.

If we instead think of the center of the palindrome not as just one or two characters, but as *any* length of repeated characters, then we can break each iteration down into two steps.

First, we identify how long the "center" is by moving our right-size pointer (**k**) forwards while checking for duplicate characters. Now, instead of our center just being a single palindrome, it will be the **Nth triangular number** (defined as **N * (N + 1) / 2**) to account for all the smaller palindromes of which it's made.

After that, we can spread out with **j** and **k** just as before. Since we've dealt with the entire center's worth of palindromes, we can move **i** forward to start up again after the end of the center, regardless of its length.

---

#### ***Implementation:***

The code for all four languages is very similar.

---

#### ***Javascript Code:***

The best result for the code below is **72ms / 39.2MB** (beats 100% / 91%).
```javascript
var countSubstrings = function(S) {
    let len = S.length, ans = 0
    for (let i = 0; i < len; i++) {
        let j = i - 1, k = i
        while (k < len - 1 && S[k] === S[k+1]) k++
        ans += (k - j) * (k - j + 1) / 2, i = k++
        while (~j && k < len && S[k] === S[j]) j--, k++, ans++
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **16ms / 14.2MB** (beats 100% / 88%).
```python
class Solution:
    def countSubstrings(self, S: str) -> int:
        ans, n, i = 0, len(S), 0
        while (i < n):
            j, k = i - 1, i
            while k < n - 1 and S[k] == S[k+1]: k += 1                
            ans += (k - j) * (k - j + 1) // 2
            i, k = k + 1, k + 1
            while ~j and k < n and S[k] == S[j]:
                j, k, ans = j - 1, k + 1, ans + 1
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 36.6MB** (beats 100% / 99%).
```java
class Solution {
    public int countSubstrings(String S) {
        int len = S.length(), ans = 0;
        for (int i = 0; i < len; i++) {
            int j = i - 1, k = i;
            while (k < len - 1 && S.charAt(k) == S.charAt(k+1)) k++;
            ans += (k - j) * (k - j + 1) / 2;
            i = k++;
            while (j >= 0 && k < len && S.charAt(k++) == S.charAt(j--)) ans++;
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 6.0MB** (beats 100% / 99%).
```c++
class Solution {
public:
    int countSubstrings(string S) {
        int len = S.length(), ans = 0;
        for (int i = 0; i < len; i++) {
            int j = i - 1, k = i;
            while (k < len - 1 && S[k] == S[k+1]) k++;
            ans += (k - j) * (k - j + 1) / 2, i = k++;
            while (~j && k < len && S[k++] == S[j--]) ans++;
        }
        return ans;
    }
};
```