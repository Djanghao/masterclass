# Erlang solution

**Author:** ivvasyk
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/5985731/](https://leetcode.com/problems/convert-the-temperature/solutions/5985731/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Implement the given formulas.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```erlang []
% Time O(1)
% Space O(1)
-spec convert_temperature(Celsius :: float()) -> [float()].
convert_temperature(Celsius) ->
  Kelvin = Celsius + 273.15,
  Fahrenheit = Celsius * 1.80 + 32.00,
  [Kelvin, Fahrenheit].

```