# 🔥🚀Beats 99.90%🚀 | 🔥🚩Optimised Code | 🧭O(n^2) Time & O(1) Space |🔥 Using Dynamic Programming🔥

**Author:** anshuP_cs24
**Votes:** 36
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/4212570/](https://leetcode.com/problems/longest-palindromic-substring/solutions/4212570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The given code is an implementation of the "Expand Around Center" approach for finding the longest palindromic substring in a given string. This approach works by iterating through each character in the string and expanding around it to check for palindromes. It takes advantage of the fact that a palindrome can be centered around a single character (in the case of odd-length palindromes) or between two characters (in the case of even-length palindromes). By expanding from each character, it identifies the longest palindrome.

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. The `expandAroundCenter` function takes a string `s` and two indices `left` and `right`. It starts from the characters at these indices and expands outwards while checking if the characters are the same. When different characters are encountered, the function returns the substring between `left` and `right`, which is a palindrome.

2. The `longestPalindrome` function initializes an empty string longest to keep track of the `longest` palindromic substring found.

3. It iterates through the characters of the input string s. For each character, it calls `expandAroundCenter` twice, once assuming an odd-length palindrome (with the character as the center) and once assuming an even-length palindrome (with the character and the next character as the center).

4. If the length of the palindrome found (either odd or even) is greater than the length of the `longest` palindrome found so far, it updates the `longest` substring.

5. After iterating through all characters, it returns the longest palindromic substring found.

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this code is O(n^2), where 'n' is the length of the input string 's'. This is because, in the worst case, for each of the 'n' characters in 's', we may expand to both the left and the right, resulting in a quadratic time complexity.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this code is O(1) because it doesn't use any additional data structures that grow with the input size. The space is primarily used for the variables and temporary substrings, which don't depend on the input size.

---

# \uD83D\uDCA1If you have come this far, then i would like to request you to please upvote this solution\u2763\uFE0F\uD83D\uDCA1So that it could reach out to another one\uD83D\uDD25\uD83D\uDD25

---

```C++ []
#include <iostream>
using namespace std;

class Solution {
public:
string expandAroundCenter(string s, int left, int right) {
    while (left >= 0 && right < s.length() && s[left] == s[right]) {
        left--;
        right++;
    }
    return s.substr(left + 1, right - left - 1);
}

string longestPalindrome(string s) {
    string longest = "";
    for (int i = 0; i < s.length(); i++) {
        string odd = expandAroundCenter(s, i, i);
        string even = expandAroundCenter(s, i, i + 1);
        if (odd.length() > longest.length()) longest = odd;
        if (even.length() > longest.length()) longest = even;
    }
    return longest;
}
};
```
```Java []
public class Solution {
    public String expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    public String longestPalindrome(String s) {
        String longest = "";
        for (int i = 0; i < s.length(); i++) {
            String odd = expandAroundCenter(s, i, i);
            String even = expandAroundCenter(s, i, i + 1);
            if (odd.length() > longest.length()) {
                longest = odd;
            }
            if (even.length() > longest.length()) {
                longest = even;
            }
        }
        return longest;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "babad";
        String result = solution.longestPalindrome(s);
        System.out.println("Longest Palindromic Substring: " + result);
    }
}

```
```Python []
class Solution:
    def expandAroundCenter(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]

    def longestPalindrome(self, s):
        longest = ""
        for i in range(len(s)):
            odd = self.expandAroundCenter(s, i, i)
            even = self.expandAroundCenter(s, i, i + 1)
            if len(odd) > len(longest):
                longest = odd
            if len(even) > len(longest):
                longest = even
        return longest

solution = Solution()
s = "babad"
result = solution.longestPalindrome(s)
print("Longest Palindromic Substring:", result)

```
```Javascript []
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

// Example usage
const s = "babad";
const result = longestPalindrome(s);
console.log("Longest Palindromic Substring: " + result);

```
```Ruby []
# @param {String} s
# @return {String}
def longest_palindrome(s)
    def expand_around_center(s, left, right)
        while left >= 0 && right < s.length && s[left] == s[right]
            left -= 1
            right += 1
        end
        s[left + 1...right]
    end

    longest = ""

    (0...s.length).each do |i|
        odd = expand_around_center(s, i, i)
        even = expand_around_center(s, i, i + 1)

        if odd.length > longest.length
            longest = odd
        end

        if even.length > longest.length
            longest = even
        end
    end

    return longest
end

# Example usage
s = "babad"
result = longest_palindrome(s)
puts "Longest Palindromic Substring: #{result}"

```
```Typescript []
function longestPalindrome(s: string): string {
    function expandAroundCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
}

// Example usage
const s = "babad";
const result = longestPalindrome(s);
console.log("Longest Palindromic Substring: " + result);

```