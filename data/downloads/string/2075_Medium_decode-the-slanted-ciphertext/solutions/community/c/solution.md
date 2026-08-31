# Jump Columns + 1

**Author:** votrubac
**Votes:** 69
**Link:** [https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1576914/](https://leetcode.com/problems/decode-the-slanted-ciphertext/solutions/1576914/)

---

Knowing `rows`, we can find out `cols`. Knowing `cols`, we can jump to the next letter (`cols + 1`).

Example: `"ch   ie   pr"`, rows = 3, columns = 12 / 3 = 4.
0: [0, 5, 10] `"cip"`
1: [1, 6, 11] `"her"`
2: [2, 7] `"  "` <- we will trim this.
3: [3, 8] `"  "` <- we will trim this.

**Java**
```java
public String decodeCiphertext(String encodedText, int rows) {
    int sz = encodedText.length(), cols = sz / rows;
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < cols; ++i)
        for (int j = i; j < sz; j += cols + 1)
            sb.append(encodedText.charAt(j));
    return sb.toString().stripTrailing();
}
```
**Python 3**
```python
class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        cols, res = len(encodedText) // rows, ""
        for i in range(cols):
            for j in range(i, len(encodedText), cols + 1):
                res += encodedText[j]
        return res.rstrip()
```
**C++**
```cpp
string decodeCiphertext(string encodedText, int rows) {
    int sz = encodedText.size(), cols = sz / rows;
    string res;
    for (int i = 0; i < cols; ++i)
        for (int j = i; j < sz; j += cols + 1)
            res += encodedText[j];
    while (!res.empty() && isspace(res.back()))
        res.pop_back();
    return res;
}

```