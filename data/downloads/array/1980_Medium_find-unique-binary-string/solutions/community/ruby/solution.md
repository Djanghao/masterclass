# HEART BREAKiNG SOLUTiON by PRODONiK (Java, C#, Python, C++, Ruby)

**Author:** prodonik
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4293048/](https://leetcode.com/problems/find-unique-binary-string/solutions/4293048/)

---

![image.png](./images/0.png)

# Intuition
The intuition behind this solution is to construct a binary string that is different from each binary string in the given array.

# Approach
Iterate through the binary representations of the given numbers and flip the bit at the current position to construct a different binary string.

# Complexity
- Time complexity: O(n * m), where n is the number of binary strings, and m is the length of each binary string.
- Space complexity: O(m), where m is the length of each binary string.

# Code
```java []
class Solution {
    public String findDifferentBinaryString(String[] nums) {
        int length = nums.length;
        StringBuilder number = new StringBuilder();
        for (int i = 0; i < length; i ++) {
            number.append(nums[i].charAt(i) == '1' ? '0' : '1');
        }
        return number.toString();
    }
}
```
``` C# []
public class Solution {
    public string FindDifferentBinaryString(string[] nums) {
        int length = nums.Length;
        StringBuilder number = new StringBuilder();
        for (int i = 0; i < length; i++) {
            number.Append(nums[i][i] == '1' ? '0' : '1');
        }
        return number.ToString();
    }
}
```
```C++ []
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        int length = nums.size();
        string number;
        for (int i = 0; i < length; i++) {
            number.push_back(nums[i][i] == '1' ? '0' : '1');
        }
        return number;
    }
};
```
``` Python []
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        length = len(nums)
        number = []
        for i in range(length):
            number.append('0' if nums[i][i] == '1' else '1')
        return ''.join(number)
```
``` Ruby []
# @param {String[]} nums
# @return {String}
def find_different_binary_string(nums)
    length = nums.length
    number = ''
    (0...length).each do |i|
        number += (nums[i][i] == '1' ? '0' : '1')
    end
    number
end
```