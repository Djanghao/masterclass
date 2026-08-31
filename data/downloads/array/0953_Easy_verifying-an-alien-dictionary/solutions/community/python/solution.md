# JS, Python, Java, C++ | Easy Map Lookup Solution w/ Explanation

**Author:** sgallivan
**Votes:** 24
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149850/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/1149850/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to iterate through pairs of consecutive words in our input array (**W**) and compare the position of each letter in the input alphabet (**O**), moving letter by letter until we find a discrepancy and can determine which word comes first lexicographically.

As this is an Easy question, this method works, but with a **time complexity** of **O(N * M * P)** where **N** is the length of **W**, **M** is the average length of each word in **W**, and **P** is the length of **O**.

Rather than repetitively finding the position of a character in **O**, however, we can create a lookup table of indexes from **O** (**alpha**) at a time complexity of **O(P)** and turn every position lookup into a simple **O(1)** operation. That changes the overall time complexity to **O(N * M + P)**.

Then, as noted before, we can just iterate through word pairs (**a, b**) in **W**, then iterate through comparative characters (**achar, bchar**) in those two words and evaluate them based on their lexicographical indexes (**aix, bix**).

If **aix < bix** or if we reach the end of **a**, then the two words are in correct lexicographical order and we should move to the next pair of words. If **aix > bix** or if we reach the end of **b**, the two words are *not* in correct lexicographical order and we should **return false**.

If we reach the end without exiting, we should **return true**.

---

#### ***Implementation:***

There are only minor differences in the code for all four languages.

---

#### ***Javascript Code:***
```javascript
var isAlienSorted = function(W, O) {
    let alpha = new Map([["",-1]])
    for (let i = 0; i < O.length; i++)
        alpha.set(O.charAt(i), i)
    for (let i = 1; i < W.length; i++) {
        let a = W[i-1], b = W[i]
        for (let j = 0; j < a.length; j++) {
            let achar = a.charAt(j), bchar = b.charAt(j),
                aix = alpha.get(achar), bix = alpha.get(bchar)
            if (aix < bix) break
            if (aix > bix) return false
        }
    }
    return true
};
```

---

#### ***Python Code:***
```python
class Solution:
    def isAlienSorted(self, W: List[str], O: str) -> bool:
        alpha = {O[i]: i for i in range(len(O))}
        for i in range(1,len(W)):
            a, b = W[i-1], W[i]
            for j in range(len(a)):
                if j == len(b): return False
                achar, bchar = a[j], b[j]
                aix, bix = alpha[achar], alpha[bchar]
                if aix < bix: break
                if aix > bix: return False
        return True
```

---

#### ***Java Code:***
```java
class Solution {
    public boolean isAlienSorted(String[] W, String O) {
        Map<Character,Integer> alpha = new HashMap<>();
        for (int i = 0; i < O.length(); i++)
            alpha.put(O.charAt(i), i);
        for (int i = 1; i < W.length; i++) {
            String a = W[i-1], b = W[i];
            for (int j = 0; j < a.length(); j++) {
                if (j == b.length()) return false;
                char achar = a.charAt(j), bchar = b.charAt(j);
                if (alpha.get(achar) < alpha.get(bchar)) break;
                if (alpha.get(achar) > alpha.get(bchar)) return false;
            }
        }
        return true;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    bool isAlienSorted(vector<string>& W, string O) {
        unordered_map<char,int> alpha;
        for (int i = 0; i < O.size(); i++)
            alpha[O[i]] = i;
        for (int i = 1; i < W.size(); i++) {
            string a = W[i-1], b = W[i];
            for (int j = 0; j < a.size(); j++) {
                if (j == b.size()) return false;
                char achar = a[j], bchar = b[j];
                if (alpha[achar] < alpha[bchar]) break;
                if (alpha[achar] > alpha[bchar]) return false;
            }
        }
        return true;
    }
};
```