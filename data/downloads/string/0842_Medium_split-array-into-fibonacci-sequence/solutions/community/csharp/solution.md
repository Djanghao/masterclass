# c#, My Solution

**Author:** Thanhdat312
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5253899/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5253899/)

---



# Complexity
- Time complexity:
**O(2^n)**

- Space complexity:
**O(n)**
# Code
```
public class Solution {
   public IList<int> SplitIntoFibonacci(string num) {
        List<int> result = new List<int>();
        if (Backtrack(num, result, 0)) {
            return result;
        }
        return new List<int>();
    }

    private bool Backtrack(string num, List<int> result, int index) {
        if (index == num.Length && result.Count >= 3) {
            return true;
        }

        for (int i = index; i < num.Length; i++) {
            if (num[index] == '0' && i > index) {
                break; // Skip numbers with leading zero
            }

            long number = LongParse(num, index, i);
            if (number > int.MaxValue) {
                break; // If number exceeds 32-bit integer range
            }

            int size = result.Count;
            if (size >= 2 && number > (long)result[size - 1] + result[size - 2]) {
                break; // No valid sequence if the current number is too large
            }

            if (size <= 1 || number == (long)result[size - 1] + result[size - 2]) {
                result.Add((int)number);
                if (Backtrack(num, result, i + 1)) {
                    return true;
                }
                result.RemoveAt(result.Count - 1);
            }
        }
        return false;
    }

    private long LongParse(string num, int start, int end) {
        long number = 0;
        for (int i = start; i <= end; i++) {
            number = number * 10 + (num[i] - '0');
        }
        return number;
    }
}
```