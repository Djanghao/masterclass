# by PRODONiK (C++, Java, C#, Python, Ruby)

**Author:** prodonik
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/4134060/](https://leetcode.com/problems/four-divisors/solutions/4134060/)

---

# Intuition
 The problem requires finding the sum of four-divisor integers in an array. A four-divisor integer is an integer with exactly four divisors. Our intuition is to iterate through the array, count divisors for each number, and calculate the sum of divisors if the count is exactly 4.

# Approach
 Our approach involves two functions:
   - The `sumFourDivisors` function iterates through the input array `nums` and accumulates the results of the `countDivisors` function for each number in the array. It returns the final result.
   - The `countDivisors` function takes an integer `n`, counts its divisors, and calculates their sum. It returns this sum if the count is exactly 4, otherwise, it returns 0. We use a for loop to check divisors up to the square root of `n`, as divisors occur in pairs.

# Complexity
- Time complexity:
 The time complexity of this solution is O(n * sqrt(max_value)), where `n` is the number of elements in the array and `max_value` is the maximum value in the array.

- Space complexity:
 The space complexity is O(1) as we only use a constant amount of additional memory for variables. 

# Code
``` Java []
class Solution {
    public int sumFourDivisors(int[] nums) {
        int result = 0;
        for (int number : nums) {
            result += countDivisors(number, 0, 0);
        }
        return result;
    }
    public static int countDivisors(int n, int count, int sum) {
        for (int i = 1; i * i < n + 1; i++) {
            if (n % i == 0) {
                count += 2;
                sum += ((n / i) + i);
                if (count > 4) {
                    return 0;
                }
            }
        }
        if (n % Math.sqrt(n) == 0) {
            count--;
        }
        if (count == 4) {
            return sum;
        }
        return 0;
    }
}
```
``` C++ []
class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int result = 0;

        int countDivisors(int n, int count, int sum) {
            for (int i = 1; i * i <= n; i++) {
                if (n % i == 0) {
                    count += 2;
                    sum += ((n / i) + i);
                    if (count > 4) {
                        return 0;
                    }
                }
            }
            if (n % sqrt(n) == 0) {
                count--;
            }
            if (count == 4) {
                return sum;
            }
            return 0;
        }

        for (int number : nums) {
            result += countDivisors(number, 0, 0);
        }
        
        return result;
    }
};

```
``` Python []
class Solution:
    def sumFourDivisors(self, nums):
        result = 0

        def countDivisors(n, count, _sum):
            for i in range(1, int(n**0.5) + 1):
                if n % i == 0:
                    count += 2
                    _sum += (n // i + i)
                    if count > 4:
                        return 0
            if n % (n**0.5) == 0:
                count -= 1
            if count == 4:
                return _sum
            return 0

        for number in nums:
            result += countDivisors(number, 0, 0)
        
        return result
```
``` C# []
public class Solution {
    public int SumFourDivisors(int[] nums) {
        int result = 0;

        int CountDivisors(int n, int count, int sum) {
            for (int i = 1; i * i <= n; i++) {
                if (n % i == 0) {
                    count += 2;
                    sum += ((n / i) + i);
                    if (count > 4) {
                        return 0;
                    }
                }
            }
            if (n % Math.Sqrt(n) == 0) {
                count--;
            }
            if (count == 4) {
                return sum;
            }
            return 0;
        }

        foreach (int number in nums) {
            result += CountDivisors(number, 0, 0);
        }
        
        return result;
    }
}
```
``` Ruby []
class Solution
  def sum_four_divisors(nums)
    result = 0

    def count_divisors(n, count, sum)
      (1..Math.sqrt(n).to_i).each do |i|
        if n % i == 0
          count += 2
          sum += (n / i + i)
          return 0 if count > 4
        end
      end
      count -= 1 if n % Math.sqrt(n).to_i == 0
      return sum if count == 4
      0
    end

    nums.each do |number|
      result += count_divisors(number, 0, 0)
    end

    result
  end
end

```