# ✅ Solutions Across All Programming Languages with ✅100% Accuracy

**Author:** ataboyevich
**Votes:** 10
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4976694/](https://leetcode.com/problems/harshad-number/solutions/4976694/)

---

# Intuition
When faced with the problem of identifying whether a number is a Harshad number (also known as a Niven number), the initial thought is to break down the number into its individual digits, sum those digits, and then check if the original number is divisible by the sum of its digits without a remainder. This process involves basic arithmetic operations and iterating over each digit of the number.

# Approach
1. Summing the Digits: First, we need a method to sum the digits of the given number. This can be done by repeatedly dividing the number by 10 and adding the remainder to a sum variable until the number becomes 0.
2. Checking Divisibility: Once we have the sum of the digits, we check if the original number is divisible by this sum. If the modulus (%) operation of the number divided by the sum of its digits equals 0, it is a Harshad number; otherwise, it is not.
3. Returning the Result: If the number is a Harshad number, we return the sum of its digits as specified in the problem statement. If it's not, we return -1 (or an appropriate value indicating it's not a Harshad number).

# Complexity
- Time complexity:
The time complexity is O(k), where k is the number of digits in the number. This is because we need to iterate over each digit to sum them, and the number of iterations is proportional to the number of digits in the number.

- Space complexity:
The space complexity is O(1), as the space required does not grow with the input size. We only need a fixed amount of variables to store the sum of the digits, the temporary value of the number as we reduce it, and possibly the original number if we need to return the sum of its digits.

```java []
class Solution {
     public int sumOfTheDigitsOfHarshadNumber(int x) {
        int sum = 0;
        int a = x;
        while (a > 0) {
            sum += a % 10;
            a /= 10;
        }
        if (x % sum == 0)
            return sum;
        return -1;
    }
}
```
```python []
class Solution(object):
    def sumOfTheDigitsOfHarshadNumber(self, x):
        sum_number = 0
        temp = x
        while temp > 0:
            sum_number += temp % 10
            temp //= 10
        if x % sum_number == 0:
            return sum_number
        return -1
        
```
```C++ []
class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int sumNumber = 0;
        int temp = x;
        while (temp > 0) {
            sumNumber += temp % 10;
            temp /= 10;
        }
        if (x % sumNumber == 0)
            return sumNumber;
        return -1;
    }
};
```
```C []
int sumOfTheDigitsOfHarshadNumber(int x) {
    int sumNumber = 0;
    int temp = x;
    while (temp) {
        sumNumber += temp % 10;
        temp /= 10;
    }
    if (x % sumNumber == 0)
        return sumNumber;
    return -1;
}
```
```C# []
public class Solution {
    public int SumOfTheDigitsOfHarshadNumber(int x) {
        int sumNumber = 0;
        int temp = x;
        while (temp > 0) {
            sumNumber += temp % 10;
            temp /= 10;
        }
        if (x % sumNumber == 0)
            return sumNumber;
        return -1; 
    }
}
```
```JavaScript []
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sumNumber = 0;
    let temp = x;
    while (temp > 0) {
        sumNumber += temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x % sumNumber === 0)
        return sumNumber;
    return -1;
};
```
```TypeScript []
function sumOfTheDigitsOfHarshadNumber(x: number): number {
    let sumNumber = 0;
    let temp = x;
    while (temp > 0) {
        sumNumber += temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x % sumNumber === 0)
        return sumNumber;
    return -1;
};
```
```PHP []
class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function sumOfTheDigitsOfHarshadNumber($x) {
        $sumNumber = 0;
        $temp = $x;
        while ($temp > 0) {
            $sumNumber += $temp % 10;
            $temp = floor($temp / 10);
        }
        if ($x % $sumNumber == 0)
            return $sumNumber;
        return -1;
    }
}
```
Page-2
```Swift []
class Solution {
    func sumOfTheDigitsOfHarshadNumber(_ x: Int) -> Int {
        var sumNumber = 0
        var temp = x
        while temp > 0 {
            sumNumber += temp % 10
            temp /= 10
        }
        if x % sumNumber == 0 {
            return sumNumber
        }
        return -1   
    }
}
```
```Kotlin []
class Solution {
    fun sumOfTheDigitsOfHarshadNumber(x: Int): Int {
        var sumNumber = 0
        var temp = x
        while (temp > 0) {
            sumNumber += temp % 10
            temp /= 10
        }
        if (x % sumNumber == 0) return sumNumber
        return -1 
    }
}
```
```Dart []
class Solution {
  int sumOfTheDigitsOfHarshadNumber(int x) {
    int sumNumber = 0;
    int temp = x;
    while (temp > 0) {
        sumNumber += temp % 10;
        temp ~/= 10;
    }
    if (x % sumNumber == 0) {
        return sumNumber;
    }
    return -1;
  }
}
```
```Go []
func sumOfTheDigitsOfHarshadNumber(x int) int {
	sumNumber := 0
	temp := x
	for temp > 0 {
		sumNumber += temp % 10
		temp /= 10
	}
	if x%sumNumber == 0 {
		return sumNumber
	}
	return -1
}
```
```Ruby []
# @param {Integer} x
# @return {Integer}
def sum_of_the_digits_of_harshad_number(x)
    sum_number = 0
    temp = x
    while temp > 0
        sum_number += temp % 10
        temp /= 10
    end
    if x % sum_number == 0
        return sum_number
    end
    -1
end
```
```Scala []
object Solution {
    def sumOfTheDigitsOfHarshadNumber(x: Int): Int = {
        var sumNumber = 0
        var temp = x
        while (temp > 0) {
        sumNumber += temp % 10
        temp /= 10
        }
        if (x % sumNumber == 0) sumNumber else -1  
    }
}
```
```Rust []
impl Solution {
    pub fn sum_of_the_digits_of_harshad_number(x: i32) -> i32 {
        let mut sum_number = 0;
        let mut temp = x;
        while temp > 0 {
            sum_number += temp % 10;
            temp /= 10;
        }
        if x % sum_number == 0 {
            sum_number
        } else {
            -1
        }  
    }
}
```
```Racket []
(define/contract (sum-of-the-digits-of-harshad-number x)
  (-> exact-integer? exact-integer?)
  (let loop ((temp x) (sum-number 0))
    (if (> temp 0)
        (loop (quotient temp 10) (+ sum-number (remainder temp 10)))
        (if (= 0 (remainder x sum-number)) sum-number -1))))
```
```Erlang []
-spec sum_of_the_digits_of_harshad_number(X :: integer()) -> integer().
sum_of_the_digits_of_harshad_number(X) ->
  SumNumber = sum_digits(X),
    case X rem SumNumber of
        0 -> SumNumber;
        _ -> -1
    end.

sum_digits(0) -> 0;
sum_digits(X) -> 
    X rem 10 + sum_digits(X div 10).
```
```Elixir []
defmodule Solution do
  @spec sum_of_the_digits_of_harshad_number(x :: integer) :: integer
  def sum_of_the_digits_of_harshad_number(x) do
    sum_number = sum_digits(x)
    if rem(x, sum_number) == 0 do
      sum_number
    else
      -1
    end
  end
  defp sum_digits(0), do: 0
  defp sum_digits(x), do: rem(x, 10) + sum_digits(div(x, 10))
end
```

![image.png](./images/0.png)
