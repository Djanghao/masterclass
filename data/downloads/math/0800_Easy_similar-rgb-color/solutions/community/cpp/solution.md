# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/3471327/](https://leetcode.com/problems/similar-rgb-color/solutions/3471327/)

---

```C++ []
class Solution {
public:
    string similarRGB(string color) {
                for (int i = 1; i < 7; i += 2) {
            int value = stoi(color.substr(i,2), nullptr, 16);
            int index = value/17 < 15 && value%17 > 8? value/17+1:value/17; 
            color[i] = color[i+1] = (index > 9? index-10+'a':index+'0');
        }        
        return color;
    }
};
```

```Python3 []
class Solution:
    def similarRGB(self, color: str) -> str:
        RGB = [int(color[1:3], 16), int(color[3:5], 16), int(color[5:], 16)]
        similar_rgb = '#'
        for c in RGB:
            similar_max = float('inf')
            simialr_c = None
            for i in range(16):
                m = i*16 + i - c
                m *= m
                if m < similar_max:
                    similar_c = i
                    similar_max = m
            similar_rgb += hex(similar_c)[2:] * 2
        return similar_rgb
```

```Java []
class Solution {
    public String findTarget(String colorSection) {
        int num = Integer.parseInt(colorSection, 16);
        int x = Math.round((float)num / 17);
        return Integer.toHexString(x).repeat(2);
    }
    public String similarRGB(String color) {
        StringBuilder targetColor = new StringBuilder();
        targetColor.append("#");
        for (int i = 1; i < 6; i += 2) {
            targetColor.append(findTarget(color.substring(i, i + 2)));
        }
        return targetColor.toString();
    }
}
```
