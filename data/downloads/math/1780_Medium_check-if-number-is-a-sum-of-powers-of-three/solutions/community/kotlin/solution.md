# One line solution for languages with built-in base conversion

**Author:** VehicleOfPuzzle
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/3318736/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/3318736/)

---

For a number to be a sum of distinct powers of X, its representation in base X may only contain the digits 0 and 1. For example, 11010 is the sum of distinct powers of 10 (namely 10000, 1000, and 10) whereas 120 is not: we'd need to use 10 twice (or a bunch of 1s).

In base 3 specifically, the 3 possible digits we can use to represent a number are 0, 1, and 2. So requiring that a number's representation only contains the digits 0 and 1 is equivalent to requiring that it doesn't contain any 2s. This lends itself to a one line solution in languages with built-in functions for stringifying a number into a custom base.

# Java

```java
class Solution {
  public boolean checkPowersOfThree(int n) {
    return !Integer.toString(n, 3).contains("2");
  }
}
```

# Kotlin

```kotlin
class Solution {
  fun checkPowersOfThree(n: Int): Boolean = !n.toString(3).contains('2')
}
```

# JavaScript / TypeScript

```ts
function checkPowersOfThree(n: number): boolean {
  return !n.toString(3).includes('2');
}
```

# Ruby

```ruby
def check_powers_of_three(n)
  !n.to_s(3).include?('2')
end
```