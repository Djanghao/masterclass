# 🔥HEART BREAKiNG SOLUTiON EVER 🔥 ✅✅✅ by PRODONIK (Java, C#, C++, Python, Ruby) 🔥

**Author:** prodonik
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311960/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4311960/)

---

![image.png](./images/0.png)

# Intuition
The problem involves counting the number of "nice pairs" in an array, where a "nice pair" is defined as a pair of elements whose difference is equal to the difference between the reverse of the two elements. The intuition is to iterate through the array, calculate the temporary number (the difference between the element and its reverse), and maintain a count of occurrences for each temporary number.

# Approach
| Index | Element | Reversed | Modified Element |
|-------|---------|----------|-------------------|
| 0     | 42      | 24       | 18                |
| 1     | 11      | 11       | 0                 |
| 2     | 1       | 1        | 0                 |
| 3     | 97      | 79       | 18                |
- Create a HashMap to store the occurrences of temporary numbers.
- Iterate through the array, calculate the temporary number for each element, and update the count in the HashMap.
- Iterate through the counts in the HashMap and calculate the total number of nice pairs using the formula \\(\\frac{n \\cdot (n - 1)}{2}\\), where \\(n\\) is the count of occurrences for each temporary number.
- Use modular arithmetic to handle large numbers.

# Complexity
- Time complexity: \\(O(n)\\), where \\(n\\) is the length of the input array. The algorithm iterates through the array once.
- Space complexity: \\(O(n)\\), where \\(n\\) is the number of unique temporary numbers. The HashMap stores the occurrences of temporary numbers.

# Code
```java []
import java.util.HashMap;
import java.util.Collection;
import java.util.Map;

class Solution {
    public int countNicePairs(int[] nums) {
        /// Create a HashMap to store occurrences of temporary numbers
        Map<Integer, Integer> numbers = new HashMap<>();

        /// Iterate through the array
        for (int num : nums) {
            /// Calculate the temporary number
            int temporary_number = num - reverse(num);

            /// Update the count in the HashMap
            if (numbers.containsKey(temporary_number)) {
                numbers.put(temporary_number, numbers.get(temporary_number) + 1);
            } else {
                numbers.put(temporary_number, 1);
            }
        }

        /// Calculate the total number of nice pairs
        long result = 0;
        Collection<Integer> values = numbers.values();
        int mod = 1000000007;
        for (int value : values) {
            result = (result % mod + ((long) value * ((long) value - 1) / 2)) % mod;
        }

        // Return the result as an integer
        return (int) result;
    }

    /// Helper function to reverse a number
    private int reverse(int number) {
        int reversed_number = 0;
        while (number > 0) {
            reversed_number = reversed_number * 10 + number % 10;
            number /= 10;
        }
        return reversed_number;
    }
}
```
```C# []
using System;
using System.Collections.Generic;

public class Solution {
    public int CountNicePairs(int[] nums) {
        Dictionary<int, int> numbers = new Dictionary<int, int>();

        foreach (int num in nums) {
            int temporaryNumber = num - Reverse(num);

            if (numbers.ContainsKey(temporaryNumber)) {
                numbers[temporaryNumber]++;
            } else {
                numbers[temporaryNumber] = 1;
            }
        }

        long result = 0;
        int mod = 1000000007;
        foreach (int value in numbers.Values) {
            result = (result % mod + ((long)value * ((long)value - 1) / 2)) % mod;
        }

        return (int)result;
    }

    private int Reverse(int number) {
        int reversedNumber = 0;
        while (number > 0) {
            reversedNumber = reversedNumber * 10 + number % 10;
            number /= 10;
        }
        return reversedNumber;
    }
}
```
``` C++ []
#include <unordered_map>
#include <vector>

class Solution {
public:
    int countNicePairs(std::vector<int>& nums) {
        std::unordered_map<int, int> numbers;

        for (int num : nums) {
            int temporaryNumber = num - reverse(num);

            if (numbers.find(temporaryNumber) != numbers.end()) {
                numbers[temporaryNumber]++;
            } else {
                numbers[temporaryNumber] = 1;
            }
        }

        long result = 0;
        int mod = 1000000007;
        for (const auto& entry : numbers) {
            result = (result % mod + ((long)entry.second * ((long)entry.second - 1) / 2)) % mod;
        }

        return static_cast<int>(result);
    }

private:
    int reverse(int number) {
        int reversedNumber = 0;
        while (number > 0) {
            reversedNumber = reversedNumber * 10 + number % 10;
            number /= 10;
        }
        return reversedNumber;
    }
};
```
``` Python []
class Solution:
    def countNicePairs(self, nums):
        numbers = {}

        for num in nums:
            temporary_number = num - self.reverse(num)

            if temporary_number in numbers:
                numbers[temporary_number] += 1
            else:
                numbers[temporary_number] = 1

        result = 0
        mod = 1000000007
        for value in numbers.values():
            result = (result % mod + (value * (value - 1) // 2)) % mod

        return int(result)

    def reverse(self, number):
        reversed_number = 0
        while number > 0:
            reversed_number = reversed_number * 10 + number % 10
            number //= 10
        return reversed_number
```
``` Ruby []
class Solution
  def count_nice_pairs(nums)
    numbers = {}

    nums.each do |num|
      temporary_number = num - reverse(num)

      if numbers.key?(temporary_number)
        numbers[temporary_number] += 1
      else
        numbers[temporary_number] = 1
      end
    end

    result = 0
    numbers.values.each do |value|
      result = (result % 1_000_000_007 + (value * (value - 1) / 2) % 1_000_000_007) % 1_000_000_007
    end

    result.to_i
  end

  private

  def reverse(number)
    reversed_number = 0
    while number > 0
      reversed_number = reversed_number * 10 + number % 10
      number /= 10
    end
    reversed_number
  end
end
```