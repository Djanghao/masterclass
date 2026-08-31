# ✅ [Java / Python / C++] 100% fast & easy solution with explanation ✅

**Author:** PhantomGhost
**Votes:** 21
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/2808834/](https://leetcode.com/problems/convert-the-temperature/solutions/2808834/)

---

# Approach
- $$Kelvin = Celsius + 273.15$$
- $$Fahrenheit = Celsius * (9/5) + 32$$
# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Java
```
class Solution {
    public double[] convertTemperature(double celsius) {
        double[] res = new double[2];
        res[0] = celsius + 273.15;
        res[1] = celsius * 1.80 + 32.00;
        
        return res;
    }
}
```

Python
```
class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        return [celsius + 273.15, celsius * 1.80 + 32.00]

```

C++
```
class Solution {
public:
    vector<double> convertTemperature(double celsius) {
        return { celsius + 273.15, celsius * 1.80 + 32.00 };
    }
};
```