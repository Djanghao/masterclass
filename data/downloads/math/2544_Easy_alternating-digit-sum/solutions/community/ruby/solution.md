# Sweetest code this side of the Mississippi

**Author:** VehicleOfPuzzle
**Votes:** 1
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/3083833/](https://leetcode.com/problems/alternating-digit-sum/solutions/3083833/)

---

# Java

## Using a basic loop:

```java
class Solution {
  public int alternateDigitSum(int n) {
    String[] digits = Integer.toString(n).split("");

    int res = 0;
    for (int i = 0; i < digits.length; ++i) {
      res += Integer.parseInt(digits[i]) * (i % 2 == 0 ? 1 : -1);
    }
    return res;
  }
}
```

## Using streams:

```java
class Solution {
  public int alternateDigitSum(int n) {
    String[] digits = Integer.toString(n).split("");
    return IntStream.range(0, digits.length)
      .map(i -> Integer.parseInt(digits[i]) * (i % 2 == 0 ? 1 : -1))
      .sum();
  }
}
```

# JavaScript / TypeScript

(To get the pure JavaScript version, strip out the TypeScript type annotations.)

## As one expression:

```typescript
function alternateDigitSum(n: number): string {
  return [...`${n}`]
    .map(Number)
    .map((d, i) => d * (i % 2 === 0 ? 1 : -1))
    .reduce((a, b) => a + b);
}
```

## Using a basic loop:

```typescript
function alternateDigitSum(n: number): string {
  const digits = `${n}`;

  let res = 0;
  for (let i = 0; i < digits.length; ++i) {
    res += Number(digits[i]) * (i % 2 === 0 ? 1 : -1);
  }
  return res;
}
```

# Ruby

```ruby
def alternate_digit_sum(n)
  digits = n.digits.reverse
  digits.each_with_index.map { |d, i| d * (i.even? ? 1 : -1) }.sum
end
```

# Python 3 / Python 2

(To get the Python 2 version, strip out the type annotations.)

## As one expression, using list comprehensions:

```python
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        return sum(
            int(d) * (1 if i % 2 == 0 else -1)
                for i, d in enumerate(str(n))
        )
```

## Using a basic loop:

```python
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        res = 0
        for i, d in enumerate(str(n)):
            res += int(d) * (1 if i % 2 == 0 else -1)
        return res
```

# C++

## Using a basic loop:

```c++
class Solution {
public:
  int alternateDigitSum(int n) {
    auto s = to_string(n);

    int res = 0;
    for (string::size_type i = 0; i < s.size(); ++i) {
      res += (s[i] - '0') * (i % 2 == 0 ? 1 : -1);
    }
    return res;
  }
};
```

## Using iterators:

```c++
class Solution {
public:
  int alternateDigitSum(int n) {
    auto s = to_string(n);

    int res = 0;
    int index = 0;
    for_each(s.cbegin(), s.cend(), [&index, &res](const char &d) {
      res += (d - '0') * (index++ % 2 == 0 ? 1 : -1);
    });
    return res;
  }
};
```

# C

```c
int alternateDigitSum(int n) {
  // Reserve a buffer of size one more than what's needed for the maximum input.
  char digits[11];
  sprintf(digits, "%d", n);

  int res = 0;
  for (int i = 0; digits[i]; ++i) {
    res += (digits[i] - '0') * (i % 2 == 0 ? 1 : -1);
  }
  return res;
}
```
