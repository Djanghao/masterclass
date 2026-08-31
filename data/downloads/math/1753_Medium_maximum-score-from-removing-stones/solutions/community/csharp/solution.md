# ✅Easy Solution || ✅ Java || ✅ Python || ✅ C++ || ✅C#

**Author:** Laziz_511
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3757158/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/3757158/)

---



# Code
```java []
public class Solution {
    public int maximumScore(int a, int b, int c) {
        int maximum = Math.max(a, Math.max(b, c));
        int minimum = Math.min(a, Math.min(b, c));
        int middle = a + b + c - maximum - minimum;

        if (minimum + middle < maximum) {
            return minimum + middle;
        }

        return (a + b + c) / 2;
    }
}
```
```python []
class Solution(object):
    def maximumScore(self, a, b, c):
        maximum = max(a, b, c)
        minimum = min(a, b, c)
        middle = a + b + c - maximum - minimum

        if minimum + middle < maximum:
            return minimum + middle

        return (a + b + c) // 2
```
```C# []
public class Solution {
    public int MaximumScore(int a, int b, int c) {
        int maximum = Math.Max(a, Math.Max(b, c));
        int minimum = Math.Min(a, Math.Min(b, c));
        int middle = a + b + c - maximum - minimum;

        if (minimum + middle < maximum) {
            return minimum + middle;
        }

        return (a + b + c) / 2;
    }
}
```
```C++ []
class Solution {
public:
    int maximumScore(int a, int b, int c) {
        int maximum = std::max(a, std::max(b, c));
        int minimum = std::min(a, std::min(b, c));
        int middle = a + b + c - maximum - minimum;

        if (minimum + middle < maximum) {
            return minimum + middle;
        }

        return (a + b + c) / 2;
    }
};
```