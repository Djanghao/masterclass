# Scala solution

**Author:** dustin10
**Votes:** 6
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/350257/](https://leetcode.com/problems/fizz-buzz/solutions/350257/)

---

```
  object Solution {
    def fizzBuzz(n: Int): List[String] = {
      Range(1, n + 1)
        .map(number => {
          (number % 3 == 0, number % 5 == 0) match {
            case (true, true) => "FizzBuzz"
            case (true, _) => "Fizz"
            case (_, true) => "Buzz"
            case _ => number.toString
          }
        })
        .toList
    }
  }
```