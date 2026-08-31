# [Dynamic Size Sliding Window Tutorial] Longest Substring Without Repeating Characters

**Author:** never_get_piped
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5344838/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5344838/)

---

**Topic** :  Sliding Window
Sliding Window problems are problems in which a fixed or variable-size window is moved through a data structure, typically an array or string, to solve problems efficiently based on continuous subsets of elements. This technique is used when we need to find subarrays or substrings according to a given set of conditions. (GFG Reference)

There are two types of sliding window:
- Fixed Size Sliding Window
- Dynamic Size Sliding Window

___

## Dynamic Size Sliding Window
A **Dynamic Size Sliding Window** refers to a window or subarray whose size is not fixed; instead, it dynamically expands or shrinks based on whether it meets specified conditions.

## Intuition Behind Dynamic Size Sliding Window
Generally, questions involving sliding window techniques often inquire about the number of subarrays or substrings that satisfy specific conditions.

By using brute force, we enumerate all subarrays or substrings and check whether each satisfies the condition. This enumeration typically results in at least `O(n^2)` time complexity.

For a fixed variable `L`, we check all subarrays `[L : R]` where `L \u2264 R`. The sliding window technique can be applied when all subarrays `[L : M]` satisfy the condition, and all subarrays with a left bound 'L' and any right bound `[M + 1 : R]` fail the condition.

Let's assume our current window has the range `[L : R]`. If the subarray `[L : R + 1]` satisfies the condition, we can continue expanding the right pointer `R` to find the maximum `M` for the current fixed `L`. If `[L : R + 1]` fails the condition, there is no need to check `[L : R + n]` because all subsequent subarrays will also fail the condition. Now it is time to expand the left pointer.

## Solution
First, it's essential to determine whether the sliding window technique is applicable. This method is suitable when:
```
The sliding window technique can be applied when all subarrays `[L : M]` satisfy the condition, and all subarrays with a left bound 'L' and any right bound `[M + 1 : R]` fail the condition.
```
This question satisfies these criteria, making it suitable for applying the sliding window technique.

We initialize a variable `count` to keep track of the frequency of each character within our window. We use a for-loop to expand the index `i` as the right pointer while it satisfies the condition. If `count[s[i]] > 1`, it indicates that the current window fails the condition, and we need to expand the left pointer. While moving the pointers, we continuously update the frequency of each character and our answer as necessary.



<br/><br/>


```c++ []
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int ans = 0;
        vector<int> count(256);
        for(int i = 0, j = 0; i < s.size(); i++) {
            count[s[i]]++;
            while(count[s[i]] > 1) {
                count[s[j++]]--;
            }
            ans = max(ans, i - j + 1);
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int ans = 0;
        int[] count = new int[256];
        for (int i = 0, j = 0; i < s.length(); i++) {
            count[s.charAt(i)]++;
            while (count[s.charAt(i)] > 1) {
                count[s.charAt(j++)]--;
            }
            ans = Math.max(ans, i - j + 1);
        }
        return ans;
    }
}
```
```python []
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        count = [0] * 256
        j = 0
        for i in range(len(s)):
            count[ord(s[i])] += 1
            while count[ord(s[i])] > 1:
                count[ord(s[j])] -= 1
                j += 1
            ans = max(ans, i - j + 1)
        return ans
```
```Go []
func lengthOfLongestSubstring(s string) int {
    ans := 0
    count := make([]int, 256)
    for i, j := 0, 0; i < len(s); i++ {
        count[s[i]]++
        for count[s[i]] > 1 {
            count[s[j]]--
            j++
        }
        if i-j+1 > ans {
            ans = i - j + 1
        }
    }
    return ans
}
```
```PHP []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s) {
        $ans = 0;
        $count = array_fill(0, 256, 0);
        $j = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            $count[ord($s[$i])]++;
            while ($count[ord($s[$i])] > 1) {
                $count[ord($s[$j++])]--;
            }
            $ans = max($ans, $i - $j + 1);
        }
        return $ans;
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let count = new Array(256).fill(0);
    for (let i = 0, j = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
        while (count[s.charCodeAt(i)] > 1) {
            count[s.charCodeAt(j++)]--;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;
};
```


**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**