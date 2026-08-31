# [C++/Java/Python] Sliding Window w/ Detailed Explanation

**Author:** Xiangcan
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3670652/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3670652/)

---

#### Intuition

As we iterate through the string from left to right, we incrementally build substrings and use a frequency counter array to keep track of each character's occurrences in the current substring. If we find a character that appears more than once (thus making the substring not special), we start sliding the window from the left until the substring becomes special again. For each valid window (special substring), we calculate the number of special substrings ending at the current position by subtracting the left pointer from the right and adding one.

#### Algorithm

The algorithm is based on a two-pointer technique, specifically known as the sliding window approach. Here is the step-by-step approach:

1. **Initialization**: The code initializes two pointers, `left` and `right`, both set to start at the `0`th index of the string. An integer array `count` of size 26 is also initialized to keep track of the frequency of each character in the current window (substring). `res` is the variable used to store the result, initialized to 0.

2. **Sliding the Window**: The algorithm then starts a loop where the `right` pointer moves one step at a time towards the end of the string. For each new character added to the right of the window, it updates the `count` array and checks if the current window is still `special`.

3. **Checking the Window**: The function `check` is used to verify if the current window (substring) is special. This is done by checking that no character within the window has occurred more than once. If any character occurs more than once, it indicates the current window is not special and the function returns false. Otherwise, it returns true.

4. **Adjusting the Window**: If `check` returns false, the 'left' pointer is moved to the right until the substring is special again, each time decreasing the count of the character that `left` pointer was on.

5. **Counting Special Substrings**: If the current substring (window) is special, the number of special substrings ending at `right` is `right - left + 1`. This value is added to `res`, which is keeping track of the total number of special substrings.

6. **Result**: The process continues until the `right` pointer has traversed the entire string. The final value of `res` gives the total number of special substrings in the string.

This approach ensures that every possible substring is checked in a time-efficient manner by cleverly expanding and contracting the window based on whether the substring is `special` or not.

#### Complexity Analysis

Time Complexity: `O(n)`, where `n` is the length of the string. This is because each character in the string is visited once by the `right` pointer and at most once by the `left` pointer. So, the operations inside the loop are executed at most `2n` times, which gives a linear time complexity. The `check` function is also executed in constant time because the size of the `count` array is fixed at 26, regardless of the size of the input string.

Space Complexity:  `O(1)`. This is because the space used does not increase with the size of the input string. The `count` array always has a size of 26, representing the 26 lowercase letters in the English alphabet. The rest of the variables (`left`, `right`, and `res`) also use a constant amount of space. Hence, the space complexity is constant.

C++;
```
class Solution {
public:
    int numberOfSpecialSubstrings(string s) {
        int count[26] = {0};
        int left = 0, res = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s[right] - 'a']++;
            while (!check(count)) {
                count[s[left] - 'a']--;
                left++;
            }
            res += right - left + 1;
        }
        return res;
    }
    bool check(int count[26]) {
        for (int i = 0; i < 26; i++) 
            if (count[i] > 1) 
                return false;
        return true;
    }
};
```

Java:

```
class Solution {
    public int numberOfSpecialSubstrings(String s) {
        int[] count = new int[26];
        int left = 0, res = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'a']++;
            while (!check(count)) {
                count[s.charAt(left) - 'a']--;
                left++;
            }
            res += right - left + 1;
        }
        return res;
    }
    public boolean check(int[] count) {
        for (int c : count) 
			if (c > 1) 
				return false;
        return true;
    }
}
```

Python:
```
class Solution:
    def numberOfSpecialSubstrings(self, s: str) -> int:
        def check(count):
            for c in count:
                if c > 1:
                    return False
            return True
        
        count = [0] * 26
        left = 0
        res = 0
        for right in range(len(s)):
            count[ord(s[right]) - ord('a')] += 1
            while check(count) == False:
                count[ord(s[left]) - ord('a')] -= 1
                left += 1
            res += right - left + 1
        return res;
```