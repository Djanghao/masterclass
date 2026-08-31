# 💯Faster✅💯 Easy solution to understand [python, c#, Java, Rust] 🔥🔥

**Author:** ilxamovic
**Votes:** 8
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4368185/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4368185/)

---

# Description

Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in 1 dollar on Monday, the first day. Every day from Tuesday to Sunday, he will put in 1 dollar more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday. Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

## Intuition

The problem involves a repetitive pattern where Hercy saves money with increasing amounts every day and resets to a higher amount every Monday. To solve this, we need to calculate the total amount saved by considering complete weeks and any remaining days.

## Approach

The approach is to iterate through the weeks and calculate the total amount saved for each week. The first loop handles complete weeks, adding a constant value for the week and the increasing amounts for each day within that week. The second loop deals with the remaining days, calculating the total amount for each day.

## Complexity

- Time complexity: O(n)
  - The code iterates through the days once, either in complete weeks or the remaining days, resulting in a linear time complexity.
- Space complexity: O(1)
  - The code uses a constant amount of space, independent of the input size. There are no additional data structures that depend on the input size.

## Performance
| Language | Execution Time (ms) | Memory Usage (MB) |
| :--- | :---:| :---: | 
Java | 0 | 39.6 |
Python3 | 42 | 16.3 |
C# | 27 | 26.9 |
Rust | 0 | 2 |

# Code
```python []
class Solution:
    def totalMoney(self, n: int) -> int:
        result = 0
        it = n // 7
        for i in range(it):
            result += 28 + (i * 7)
        
        mod = n - it * 7
        
        it += 1

        for i in range(mod):
            result += (i + it)
            
        return result
```
```C# []
public class Solution {
    public int TotalMoney(int n) {
        int result = 0;
        int it = n / 7;

        for (int i = 0; i < it; i++) {
            result += 28 + (i * 7);
        }

        int mod = n - it * 7;
        it += 1;

        for (int i = 0; i < mod; i++) {
            result += (i + it);
        }

        return result;
    }
}
```
```Java []
public class Solution {
    public int totalMoney(int n) {
        int result = 0;
        int it = n / 7;
        
        for (int i = 0; i < it; i++) {
            result += 28 + (i * 7);
        }
        
        int mod = n - it * 7;
        it += 1;

        for (int i = 0; i < mod; i++) {
            result += (i + it);
        }

        return result;
    }
}
```
``` Rust []
impl Solution {
    pub fn total_money(n: i32) -> i32 {
        let mut result = 0;
        let it = n / 7;

        for i in 0..it {
            result += 28 + (i * 7);
        }

        let mod_value = n - it * 7;
        let mut it = it + 1;

        for i in 0..mod_value {
            result += i + it;
        }

        result
    }
}
```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!