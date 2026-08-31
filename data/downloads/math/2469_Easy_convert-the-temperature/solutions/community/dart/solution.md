# List of two temperature values, one in Kelvin and another in Fahrenheit

**Author:** RinatMambetov
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/3341000/](https://leetcode.com/problems/convert-the-temperature/solutions/3341000/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This code defines a class Solution with a method convertTemperature that takes a temperature value in Celsius and returns a list of two temperature values, one in Kelvin and another in Fahrenheit. The conversion formula for Kelvin is Celsius + 273.15 and for Fahrenheit is Celsius * 1.80 + 32.00.

# Approach
<!-- Describe your approach to solving the problem. -->
The code uses a simple approach to convert Celsius temperature into Kelvin and Fahrenheit. It uses the conversion formulas to calculate the corresponding temperature values and returns them as a list.

# Complexity
<!-- - Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The time complexity of this code is O(1) because the conversion formula used to calculate the temperature values is a constant time operation. The space complexity is also O(1) because the function returns a fixed size list of two elements, regardless of the input value.

# Code
```
class Solution {
  List<double> convertTemperature(double celsius) {
    return ([celsius + 273.15, celsius * 1.80 + 32.00]);
  }
}
```