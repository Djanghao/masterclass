# JS, Python, Java, C++ | Easy Merge and Frequency Map Solution w/ Explanation

**Author:** sgallivan
**Votes:** 17
**Link:** [https://leetcode.com/problems/word-subsets/solutions/1128048/](https://leetcode.com/problems/word-subsets/solutions/1128048/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The first major shortcut we can recognize is that if a word in **A** has to match *all* entries in **B**, then we shouldn't have to think of all the entries of **B** as separate. Our first step should then be to merge all words in **B** into one master word for which all words in **B** are subsets of it. In **Example 5**, for instance, when **B = ["ec","oc","ceo"]**, the master word would be **"ceo"**.

To accomplish this, we'll need to use some kind of **frequency map**. Since we're dealing with characters, we can use an **arraymap** of length **26** which should be faster than using a regular map structure. We'll need to have two such arraymaps: one will hold the accumulated data (**Bfreq**) and the other (**check**) will be used to temporarily store each word in **B** before checking it against **Bfreq**.

Rather than creating a new array for each word, we just need to make sure to reset **check** to all **0**'s before the next word.

While we check through the words in **B**, we should also keep track of how many characters are currently stored in **Bfreq** (**cmax**). If **cmax** goes above **10**, then it won't be possible for any word in **A** to match it due to the constraints upon **A.length**, so we should **return** an empty array.

Once we have our master word information stored in **Bfreq**, we can iterate through the words in **A** and compare them to **Bfreq** in a similar manner. First, however, we can easily skip any word that isn't as long as **cmax**. If we get through the entire word without triggering an early **break**, we can add the word to our answer array (**ans**).

Once we're all done iterating through **A**, we can **return ans**.

---

#### ***Implementation:***

Python here is generally much slower with an **arraymap**, but can use a normal **dict** and **count()** to speed things up a bit.

There's also an example of Python using Counter() and its easy comparisons for some short code.

Java should convert the **Strings** to **char[]** before iterating through.

---

#### ***Javascript Code:***

The best result for the code below is **132ms / 54.4MB** (beats 100% / 100%).
```javascript
var wordSubsets = function(A, B) {
    let Bfreq = new Int8Array(26), cmax = 0,
        check = new Int8Array(26), ans = []
    for (let i = 0; i < B.length; i++, check.fill()) {
        let word = B[i]
        for (let j = 0; j < word.length; j++)
            check[word.charCodeAt(j) - 97]++
        for (let j = 0; j < 26; j++) {
            let diff = check[j] - Bfreq[j]
            if (diff > 0) cmax += diff, Bfreq[j] += diff
            if (cmax > 10) return []
        }
    }
    for (let i = 0; i < A.length; i++, check.fill()) {
        let word = A[i], j
        if (word.length < cmax) continue
        for (j = 0; j < word.length; j++)
            check[word.charCodeAt(j) - 97]++
        for (j = 0; j < 26; j++)
            if (check[j] < Bfreq[j]) break
        if (j === 26) ans.push(word)
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **464ms / 17.7MB** (beats 99% / 99%).
```python
class Solution:
    def wordSubsets(self, A: List[str], B: List[str]) -> List[str]:
        Bfreq, ans, cmax = {}, [], 0
        for word in B:
            for char in word:
                count = word.count(char)
                if char in Bfreq:
                    diff = count - Bfreq[char]
                    if diff > 0: 
                        Bfreq[char] = count
                        cmax += diff
                else: 
                    Bfreq[char] = count
                    cmax += count
            if cmax > 10: return ans
        print(Bfreq)
        for word in A:
            if len(word) < cmax: continue
            for char in Bfreq:
                if word.count(char) < Bfreq[char]: break
            else: ans.append(word)
        return ans
```

---

#### ***Python Code w/ Counter:***

The best result for the code below is **1160ms / 17.8MB** (beats 34% / 92%).
```python
class Solution:
    def wordSubsets(self, A: List[str], B: List[str]) -> List[str]:
        Bfreq = Counter()
        for word in B: Bfreq |= Counter(word)
        if sum(Bfreq.values()) > 10: return []
        return [word for word in A if not Bfreq - Counter(word)]
```

---

#### ***Java Code:***

The best result for the code below is **15ms / 46.8MB** (beats 95% / 90%).
```java
class Solution {
    public List<String> wordSubsets(String[] A, String[] B) {
        int[] Bfreq = new int[26], check = new int[26];
        int cmax = 0;
        List<String> ans = new ArrayList<>();
        for (int i = 0; i < B.length; i++, Arrays.fill(check, 0)) {
            char[] word = B[i].toCharArray();
            for (int j = 0; j < word.length; j++)
                check[word[j] - 'a']++;
            for (int j = 0; j < 26; j++) {
                int diff = check[j] - Bfreq[j];
                if (diff > 0) {
                    cmax += diff;
                    Bfreq[j] += diff;
                }
                if (cmax > 10) return ans;
            }
        }
        for (int i = 0; i < A.length; i++, Arrays.fill(check, 0)) {
            char[] word = A[i].toCharArray();
            int j;
            if (word.length < cmax) continue;
            for (j = 0; j < word.length; j++)
                check[word[j] - 'a']++;
            for (j = 0; j < 26; j++)
                if (check[j] < Bfreq[j]) break;
            if (j == 26) ans.add(A[i]);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **96ms / 57.1MB** (beats 98% / 99%).
```c++
class Solution {
public:
    vector<string> wordSubsets(vector<string>& A, vector<string>& B) {
        int Bfreq[26] = {0}, check[26] = {0};
        int cmax = 0;
        vector<string> ans;
        for (string word : B) {
            for (char c : word) check[c - 'a']++;
            for (int j = 0; j < 26; j++) {
                int diff = check[j] - Bfreq[j];
                if (diff > 0) cmax += diff, Bfreq[j] += diff;
            }
            if (cmax > 10) return ans;
            fill(check, check+26, 0);
        }
        for (string word : A) {
            int j;
            for (char c : word) check[c - 'a']++;
            for (j = 0; j < 26; j++)
                if (check[j] < Bfreq[j]) break;
            if (j == 26) ans.push_back(word);
            fill(check, check+26, 0);
        }
        return ans;
    }
};
```