# Solutions in multiple languages (Java C++ Golang Python Kotlin PHP)

**Author:** poitevinpm
**Votes:** 8
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/763747/](https://leetcode.com/problems/shuffle-string/solutions/763747/)

---

Explanations in https://medium.com/@poitevinpm/leetcode-1528-shuffle-string-3365d2bd6ab4

Java
Use StringBuilder in Java to avoid a copy at each step.
```
class Solution {
    public String restoreString(String s, int[] indices) {
        StringBuilder res = new StringBuilder(s);
        int l = s.length();
        for (int i = 0; i < l; i++) {
            res.setCharAt(indices[i], s.charAt(i));
        }
        return res.toString();
    }
}
```
C++
Update characters using array style.
```
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string res = s;
        int l = s.length();
        for (int i = 0; i < l; i++) {
            res[indices[i]] = s[i];
        }
        return res;
    }
};
```
Kotlin
Similar to Java implementation. For some reasons the tests run much slower :\\
```
class Solution {
    fun restoreString(s: String, indices: IntArray): String {
        val res: StringBuilder = StringBuilder(s);
        val l: Int = s.length;
        for (i in 0 until l) {
            res.setCharAt(indices.get(i), s.get(i));
        }
        return res.toString();
    }
}
```
Go
I don\u2019t find it easy to manipulate string in Go, so I made an array and made it a string at the end.
```
func restoreString(s string, indices []int) string {
    l := len(s);
    res := make([]byte, l)
    for i := 0; i < l; i++ {
        res[indices[i]] = s[i]
    }
    return string(res)
}
```
C
```
C represents strings with char * s type, but the manipulation is very similar to the C++ string type.
char * restoreString(char * s, int* indices, int indicesSize) {
    char * res = malloc(indicesSize + 1);
    strcpy(res, s);
    for (int i = 0 ; i < indicesSize; i++) {
        res[indices[i]] = s[i];
    }
    return res;
}
```
Python
Also prefer to handle strings as a list of chars in Python.
```
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        res = list(s)
        l = len(s)
        for i in range(l):
            res[indices[i]] = s[i]
        return "".join(res)
```
PHP
```
class Solution {
/**
     * @param String $s
     * @param Integer[] $indices
     * @return String
     */
    function restoreString($s, $indices) {
        $res = $s;
        $l = strlen($s);
        for ($i = 0; $i < $l; $i++) {
            $res[$indices[$i]] = $s[$i];
        }
        return $res;
    }
}
```