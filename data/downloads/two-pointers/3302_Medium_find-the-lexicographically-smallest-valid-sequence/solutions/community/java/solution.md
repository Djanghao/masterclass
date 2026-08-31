# [Java/C++/Python] Find Smallest Skip Index

**Author:** lee215
**Votes:** 34
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5845083/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5845083/)

---

# **Explanation**
Find the `last` chance of `word1[i]` to match `word2[j]`.
If we miss `word1[i]`, where `i = last[j]`,
we can't find almost eqaul string.

Itearate each character in `word1`,
If it equals to `word2[j]`, we greedliy take it.
If it doesn't, we try to skip `word2[j]` by checking `i < last[j + 1]`.

These two cases will make the `res` as smallest as possible.

Finally return the `res` if we found the almoast eqaul string.

<br>

# **Complexity**
Time `O(n + m)`
Space `O(m)`
<br>

**Java**
```java
    public int[] validSequence(String word1, String word2) {
        int n = word1.length(), m = word2.length();
        int[] last = new int[m];
        Arrays.fill(last, -1);
        for (int i = n - 1, j = m - 1; i >= 0; --i)
            if (j >= 0 && word1.charAt(i) == word2.charAt(j))
                last[j--] = i;
        int j = 0, res[] = new int[m], skip = 0;
        for (int i = 0; i < n && j < m; ++i) {
            if (word1.charAt(i) == word2.charAt(j) || (skip == 0 && (j == m - 1 || i < last[j + 1]))) {
                res[j] = i;
                skip += (word1.charAt(i) != word2.charAt(j)) ? 1 : 0;
                j++;
            }
        }
        return j == m ? res : new int[0];
    }
```

**C++**
```cpp
    vector<int> validSequence(string word1, string word2) {
        int n = word1.size(), m = word2.size(), skip = 0;
        vector<int> last(m, -1);
        for (int i = n - 1, j = m - 1; i >= 0; --i)
            if (j >= 0 && word1[i] == word2[j])
                last[j--] = i;
        vector<int> res;
        for (int i = 0, j = 0; i < n && j < m; ++i) {
            if (word1[i] == word2[j] || (skip == 0 && (j == m - 1 || i < last[j + 1]))) {
                res.push_back(i);
                skip += (word1[i] != word2[j++]);
            }
        }
        return res.size() == m ? res : vector<int>();
    }
```

**Python**
```py
    def validSequence(self, word1: str, word2: str) -> List[int]:
        n, m = len(word1), len(word2)
        last = [-1] * m
        j = m - 1
        for i in range(n - 1, -1, -1):
            if j >= 0 and word1[i] == word2[j]:
                last[j] = i
                j -= 1
        res = []
        skip = j = 0
        for i, c in enumerate(word1):
            if j == m: break
            if word1[i] == word2[j] or skip == 0 and (j == m - 1 or i < last[j + 1]):
                skip += word1[i] != word2[j]
                res.append(i)
                j += 1
        return res if j == m else []
```
