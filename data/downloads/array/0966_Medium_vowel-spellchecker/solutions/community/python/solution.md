# JS, Python, Java, C++ | Easy Mask Solution w/ Explanation

**Author:** sgallivan
**Votes:** 18
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1121848/](https://leetcode.com/problems/vowel-spellchecker/solutions/1121848/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem can be broken up into a couple steps of increasing difficulty. The first step is to check whether or not the words in the query list (**Q**) exists in the word list (**W**). For that, we can use the simplest form of value-lookup data structure, which is a **Set**.

Next, we need to check if each query has a case-insensitive match in **W**. For case-insensitive matching, the easiest thing to do is to **lowercase** (or **uppercase**) both terms before comparing. In this case, since we want to match one term, but return another, we should use a **Map** data structure, where the **key** is the lowercased term and the **value** is the matching **word**.

But here we encounter an issue, as it is possible for two words to have the same lowercase form. Per the rules we want to favor the one that appears first in **W**, so we can either iterate through **W** forwards and repeatedly check to make sure we're not overwriting an existing entry, or we can simply iterate through **W** backwards and just automatically overwrite entries. This will force the first occurance to be the one that "sticks".

For the third check, we need to match the **word** except for the vowels. Whenever you need to selectively match strings by only a portion, the easiest way to do it is with a **mask**. In this case, we can use **regex** to replace all vowel occurrances with a **character mask**, such as **"#"**. For example, we can check if **"tail"** and **"tool"** would match by applying the character masks to both terms and seeing that **"t##l" == "t##l"**.

This calls for another map structure. We could technically reuse the earlier one, as there will be no overlaps, but navigating two separate, smaller maps is generally more efficient than one large one. Since we'll also want to iterate backwards through **W** for this map, we migtht as well do it at the same time as the other one.

Then we can just iterate through **Q** and check for matches in the correct order. As is generally the case with query lists, we can replace the queries in **Q** with their result in order to save on **space complexity**.

Then, when we're done, we just **return Q**.

---

#### ***Implementation:***

Javascript can use **logical OR** chaining to shorten the assignment of the proper result in **Q**.

Regex is much slower in Java and C++, so we can use a helper function to do the same thing for us.

C++ will also need a helper to lowercase the words.

---

#### ***Javascript Code:***

The best result for the code below is **108ms / 49.7MB** (beats 100% / 97%).
```javascript
const regex = /[aeiou]/g
var spellchecker = function(W, Q) {
    let orig = new Set(W), lower = new Map(), mask = new Map()
    for (let i = W.length - 1; ~i; i--) {
        let word = W[i], wlow = word.toLowerCase()
        lower.set(wlow, word)
        mask.set(wlow.replace(regex, "*"), word)
    }
    for (let i in Q) {
        let query = Q[i], qlow = query.toLowerCase(),
            qmask = qlow.replace(regex, "*")
        if (orig.has(query)) continue
        else Q[i] = lower.get(qlow) || mask.get(qmask) || ""
    }
    return Q
};
```

---

#### ***Python Code:***

The best result for the code below is **160ms / 16.6MB** (beats 98% / 85%).
```python
class Solution:
    def spellchecker(self, W: List[str], Q: List[str]) -> List[str]:
        orig, lcase, mask = set(W), defaultdict(), defaultdict()
        regex = r'[aeiou]'
        for i in range(len(W)-1,-1,-1):
            word = W[i]
            wlow = word.lower()
            lcase[wlow] = word
            mask[re.sub(regex, '*', wlow)] = word
        for i in range(len(Q)):
            query = Q[i]
            qlow = query.lower()
            qmask = re.sub(regex, '*', qlow)
            if query in orig: continue
            elif qlow in lcase: Q[i] = lcase[qlow]
            elif qmask in mask: Q[i] = mask[qmask]
            else: Q[i] = ""
        return Q
```

---

#### ***Java Code:***

The best result for the code below is **16ms / 41.6MB** (beats 97% / 99%).
```java
class Solution {
    public String[] spellchecker(String[] W, String[] Q) {
        Set<String> orig = new HashSet<>(Arrays.asList(W));
        Map<String, String> lower = new HashMap<>(), mask = new HashMap<>();
        for (int i = W.length - 1; i >= 0; i--) {
            String word = W[i], wlow = word.toLowerCase();
            lower.put(wlow, word);
            mask.put(vmask(wlow), word);
        }
        for (int i = 0; i < Q.length; i++) {
            String query = Q[i], qlow = query.toLowerCase(),
                qmask = vmask(qlow);
            if (orig.contains(query)) continue;
            else if (lower.containsKey(qlow)) Q[i] = lower.get(qlow);
            else if (mask.containsKey(qmask)) Q[i] = mask.get(qmask);
            else Q[i] = "";
        }
        return Q;
    }
    public String vmask(String str) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') c = '*';
            sb.append(c);
        }
        return sb.toString();
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **64ms / 32.7MB** (beats 85% / 87%).
```c++
class Solution {
public:
    vector<string> spellchecker(vector<string>& W, vector<string>& Q) {
        set<string> orig (W.begin(), W.end());
        unordered_map<string, string> lower, mask;
        for (int i = W.size() - 1; ~i; i--) {
            string word = W[i], wlow = lcase(word);
            lower[wlow] = word, mask[vmask(wlow)] = word;
        }
        for (string &query : Q) {
            string qlow = lcase(query), qmask = vmask(qlow);
            if (orig.count(query)) continue;
            else if (lower.count(qlow)) query = lower[qlow];
            else if (mask.count(qmask)) query = mask[qmask];
            else query = "";
        }
        return Q;
    }
    static string vmask(string str) {
        for (char &c : str)
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                c = '*';
        return str;
    }
    static string lcase(string str) {
        for (char &c : str) c = tolower(c);
        return str;
    }
};
```