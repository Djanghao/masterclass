# C++ Simple solution using built-in conversions

**Author:** andrew911120
**Votes:** 2
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/1759991/](https://leetcode.com/problems/similar-rgb-color/solutions/1759991/)

---

```
class Solution {
public:
    string similarRGB(string color) {
        char buf[8] = "#";
        for (int i = 1; i < color.length(); i+=2) {
            int v = stoi(color.substr(i, 2), nullptr, 16);
            int closest = int(round(v / 17.0)) * 17;
            snprintf(&buf[i], 3, "%02x", closest);
        }
        return buf;
    }
};
```