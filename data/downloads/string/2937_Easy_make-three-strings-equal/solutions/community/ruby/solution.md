# BEATS 100% USERS BY SPEED AND MEMORY by PRODONiK (Java, C#, C++, Python, Ruby)

**Author:** prodonik
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4305578/](https://leetcode.com/problems/make-three-strings-equal/solutions/4305578/)

---

![image.png](./images/0.png)

# Intuition
The problem involves finding the minimum number of operations to make three strings equal by removing common prefixes.

# Approach
The algorithm calculates the length of the common prefix among the three strings. It then calculates the minimum length among the three strings and iterates through the common prefix. For each character in the common prefix, it checks if the corresponding characters in all three strings are equal. If they are, it increments a counter. The algorithm then calculates the result by subtracting the count from the total length of each string.

# Complexity
- Time complexity: O(min(n1, n2, n3)), where n1, n2, and n3 are the lengths of the three strings.
- Space complexity: O(1)


# Code
```Java []
class Solution {
    public int findMinimumOperations(String s1, String s2, String s3) {
        int [] lengths = new int[3];
        lengths[0] = s1.length();
        lengths[1] = s2.length();
        lengths[2] = s3.length();
        int minimum_length = Math.min(lengths[0], Math.min(lengths[1], lengths[2]));
        int count = 0;
        for (int i = 0; i < minimum_length; i ++) {
            if (s1.charAt(i) == s2.charAt(i) && s1.charAt(i) == s3.charAt(i)) {
                count ++;
            }
            else {
                break;
            }
        }
        if (count == 0) {
            return -1;
        }
        int result = 0;
        for (int length : lengths) {
            result += length - count;
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    int findMinimumOperations(std::string s1, std::string s2, std::string s3) {
        int lengths[] = {s1.length(), s2.length(), s3.length()};
        int minimum_length = std::min({lengths[0], lengths[1], lengths[2]});
        int count = 0;
        for (int i = 0; i < minimum_length; ++i) {
            if (s1[i] == s2[i] && s1[i] == s3[i]) {
                count++;
            } else {
                break;
            }
        }
        if (count == 0) {
            return -1;
        }
        int result = 0;
        for (int length : lengths) {
            result += length - count;
        }
        return result;
    }
};
```
``` C# []
public class Solution {
    public int FindMinimumOperations(string s1, string s2, string s3) {
        int[] lengths = { s1.Length, s2.Length, s3.Length };
        int minimumLength = Math.Min(Math.Min(lengths[0], lengths[1]), lengths[2]);
        int count = 0;
        for (int i = 0; i < minimumLength; i++) {
            if (s1[i] == s2[i] && s1[i] == s3[i]) {
                count++;
            } else {
                break;
            }
        }
        if (count == 0) {
            return -1;
        }
        int result = 0;
        foreach (int length in lengths) {
            result += length - count;
        }
        return result;
    }
}
```
```Python []
class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        lengths = [len(s1), len(s2), len(s3)]
        minimum_length = min(lengths)
        count = 0
        for i in range(minimum_length):
            if s1[i] == s2[i] == s3[i]:
                count += 1
            else:
                break
        if count == 0:
            return -1
        result = sum(length - count for length in lengths)
        return result
```
```Ruby []
class Solution
  def find_minimum_operations(s1, s2, s3)
    lengths = [s1.length, s2.length, s3.length]
    minimum_length = lengths.min
    count = 0
    (0...minimum_length).each do |i|
      if s1[i] == s2[i] && s1[i] == s3[i]
        count += 1
      else
        break
      end
    end
    return -1 if count.zero?

    result = lengths.sum - count
    result
  end
end
```