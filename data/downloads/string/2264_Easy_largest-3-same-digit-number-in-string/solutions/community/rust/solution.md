# 🚀✅🚀 Easy solution for Beginner Friendly [Python / C# / Java / Rust] 🔥🔥

**Author:** ilxamovic
**Votes:** 14
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359771/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4359771/)

---

# Intuition
The goal of the code appears to be finding the largest three-digit substring in the given number `num` where all three digits are the same.

# Approach
The approach taken in the code is to iterate through the given number `num` and check for consecutive three-digit substrings where all three digits are the same. If such a substring is found, the code updates the `target` variable with the maximum value of these substrings. Finally, if a valid `target` is found, the code returns it as a string.

# Complexity
- **Time complexity:** O(n), where n is the length of the input number `num`. The code iterates through each digit of the number once.
- **Space complexity:** O(1), as the code uses a constant amount of extra space regardless of the input size.

# Code
```python []
class Solution:
    def largestGoodInteger(self, num: str) -> str:
        target = -1
        for i in range(len(num)-2):
            if num[i] == num[i+1] == num[i+2]:
                if int(num[i] + num[i+1] + num[i+2]) > target:
                    target = int(num[i] + num[i+1] + num[i+2])
        if target != -1:
            if target == 0:
                return str(target) + "00"
            return str(target)
        return ""
```
```C# []
public class Solution {
    public string LargestGoodInteger(string num) {
        int target = -1;
        for (int i = 0; i < num.Length - 2; i++) {
            if (num[i] == num[i + 1] && num[i] == num[i + 2]) {
                int current = int.Parse(num.Substring(i, 3));
                if (current > target) {
                    target = current;
                }
            }
        }
        if (target != -1) {
            if (target == 0) {
                return target + "00";
            }
            return target.ToString();
        }
        return "";
    }
}
```
```Java []
public class Solution {
    public String largestGoodInteger(String num) {
        int target = -1;
        for (int i = 0; i < num.length() - 2; i++) {
            if (num.charAt(i) == num.charAt(i + 1) && num.charAt(i) == num.charAt(i + 2)) {
                int current = Integer.parseInt(num.substring(i, i + 3));
                if (current > target) {
                    target = current;
                }
            }
        }
        if (target != -1) {
            if (target == 0) {
                return target + "00";
            }
            return Integer.toString(target);
        }
        return "";
    }
}
```
```Rust []
impl Solution {
    pub fn largest_good_integer(num: String) -> String {
        let mut target = -1;
        let num_chars: Vec<char> = num.chars().collect();
        for i in 0..num_chars.len() - 2 {
            if num_chars[i] == num_chars[i + 1] && num_chars[i] == num_chars[i + 2] {
                let current: i32 = num_chars[i..i + 3].iter().collect::<String>().parse().unwrap();
                if current > target {
                    target = current;
                }
            }
        }
        if target != -1 {
            if target == 0 {
                return format!("{}00", target);
            }
            return target.to_string();
        }
        "".to_string()
    }
}

```
![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!