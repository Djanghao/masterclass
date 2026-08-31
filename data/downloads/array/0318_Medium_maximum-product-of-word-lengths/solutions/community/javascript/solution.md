# JS, Python, Java, C++ | Easy Bit Manipulation Solution w/ Explanation

**Author:** sgallivan
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233808/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/1233808/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The obvious first concern of this problem is evaluating if two words contain the same letters. This naturally calls for making a **character set** of each word, but comparing these sets is still not easy.

If we use **bit manipulation**, however, to create character **bitsets**, then it should be easy enough to use a **bitwise AND** (**&**) to compare the two bitset integers where any result other than **0** means overlapping characters.

This solution still calls for a **time complexity** of at least **O(N^2)**, since we'll have to compare each combination of **words** together. We can optimize this a bit more by first sorting **words** by descending length, which should result in finding the larger products earlier. In fact, as we iterate through the sorted **words**, we can isolate when it will no longer be possible for a **word** to produce a **best** result, at which point we can immediately **return best**.

Also, we don't need to convert each **word** into a **bitset** before we start our comparisons. As we finish converting each **word** into its **bitset**, we can compare it to all the previously completed results stored in **bitsets**.

After we finish comparing the current **bitset**, we can add it to the **bitsets** array for comparison with later results.

 - _**Time Complexity: O(N^2 + N*M)** where **N** is the length of **words** and **M** is the average length of the words in **words**_
 - _**Space Complexity: O(N)** for **bitsets**_

---

#### ***Implementation:***

Python is oddly faster if the **bitsets** and **word** lengths are stored together as key value pairs in a **dict** prior to comparison.

Java and C++ sorts are slow enough to make them not an effective optimizations, at least with the given test suite.

---

#### ***Javascript Code:***

The best result for the code below is **84ms / 40.6MB** (beats 100% / 100%).
```javascript
var maxProduct = function(words) {
    words.sort((a,b) => b.length - a.length)
    let best = 0, bitsets = new Uint32Array(words.length)
    for (let i = 0; i < words.length; i++) {
        let word = words[i], wlen = word.length, bitset = 0
        if (wlen * words[0].length < best)
            return best
        for (let j = 0; j < wlen; j++)
            bitset |= 1 << (word.charCodeAt(j) - 97)
        for (let j = 0; j < i; j++)
            if ((bitsets[j] & bitset) === 0)
                best = Math.max(best, wlen * words[j].length)
        bitsets[i] = bitset
    }
    return best
};
```

---

#### ***Python Code:***

The best result for the code below is **168ms / 14.3MB** (beats 100% / 99%).
```python
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        words.sort(key=len, reverse=True)
        best, bitsets = 0, {}
        for i in range(len(words)):
            wlen, bitset = len(words[i]), 0
            if wlen * len(words[0]) < best:
                return best
            for c in words[i]:
                bitset |= 1 << ord(c) - 97
            if bitset not in bitsets:
                for k,v in bitsets.items():
                    if not bitset & k:
                        best = max(best, wlen * v)
                bitsets[bitset] = wlen
        return best
```

---

#### ***Java Code:***

The best result for the code below is **6ms / 38.6MB** (beats 100% / 94%).
```java
class Solution {
    public int maxProduct(String[] words) {
        int best = 0;
        int[] bitsets = new int[words.length];
        for (int i = 0; i < words.length; i++) {
            int wlen = words[i].length(), bitset = 0;
            for (int j = 0; j < wlen; j++)
                bitset |= 1 << (words[i].charAt(j) - 'a');
            for (int j = 0; j < i; j++)
                if ((bitsets[j] & bitset) == 0)
                    best = Math.max(best, wlen * words[j].length());
            bitsets[i] = bitset;
        }
        return best;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **24ms / 15.4MB** (beats 100% / 96%).
```c++
class Solution {
public:
    int maxProduct(vector<string>& words) {
        int best = 0;
        vector<int> bitsets(words.size());
        for (int i = 0; i < words.size(); i++) {
            string& word = words[i];
            int bitset = 0;
            for (char& c : word)
                bitset |= 1 << (c - 'a');
            for (int j = 0; j < i; j++)
                if ((bitsets[j] & bitset) == 0)
                    best = max(best, int(word.length() * words[j].length()));
            bitsets[i] = bitset;
        }
        return best;
    }
};
```