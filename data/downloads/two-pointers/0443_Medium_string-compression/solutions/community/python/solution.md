# Clean Codes🔥🔥|| Full Explanation✅|| Two Pointers✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 343
**Link:** [https://leetcode.com/problems/string-compression/solutions/3245804/](https://leetcode.com/problems/string-compression/solutions/3245804/)

---

# Intuition :
- Given an array of characters, compress it in-place. The length after compression must always be smaller than or equal to the original array. Every element of the array should be a character (not int) of length 1.
- Example:
```
Input:
["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: 
["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is 
replaced by "c3".
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Detail Explanation to Approach :
- Here we are using two pointers, one for iterating through the original character array and one for keeping track of the current position in the compressed array. The two pointer variables used are `i` and `ans`.
- Now also use a variable to keep track of the count of consecutive characters.
- First set the current letter to the first character in the array and initializes the count to 0. 
- Then iterate through the array until you find a different character or reach the end of the array. 
- For each iteration, increment the count and the index i.
```
// iterate through input array using i pointer
    for (int i = 0; i < chars.length;) {
      final char letter = chars[i]; // current character being compressed
      int count = 0; // count of consecutive occurrences of letter

      // count consecutive occurrences of letter in input array
      while (i < chars.length && chars[i] == letter) {
        ++count;
        ++i;
      }


``` 
- When you find a different character or reach the end of the array, write the current letter to the compressed array and, if the count is greater than 1, write the count as a string to the compressed array. 
- Then reset the count to 0 and set the current letter to the new letter.
```
// write letter to compressed array
      chars[ans++] = letter;

      // if count is greater than 1, write count as string to compressed array
      if (count > 1) {
        // convert count to string and iterate over each character in string
        for (final char c : String.valueOf(count).toCharArray()) {
          chars[ans++] = c;
        }
      }
```
- Finally, return the length of the compressed array, which is equal to the position of the last character in the compressed array plus one.
```
return ans;//return length of compressed array

```
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```
*Let's Code it Up .
There may be minor syntax difference in C++ and Python*

# Codes [C++ |Java |Python3] : With Comments
```C++ []
class Solution {
public:
    int compress(vector<char>& chars) {
        int ans = 0;

        // iterate through input vector using i pointer
        for (int i = 0; i < chars.size();) {
            const char letter = chars[i]; // current character being compressed
            int count = 0; // count of consecutive occurrences of letter

            // count consecutive occurrences of letter in input vector
            while (i < chars.size() && chars[i] == letter) {
                ++count;
                ++i;
            }

            // write letter to compressed vector
            chars[ans++] = letter;

            // if count is greater than 1, write count as string to compressed vector
            if (count > 1) {
                // convert count to string and iterate over each character in string
                for (const char c : to_string(count)) {
                    chars[ans++] = c;
                }
            }
        }

        // return length of compressed vector
        return ans;
    }
};

```
```Java []
class Solution {
  public int compress(char[] chars) {
    int ans = 0; // keep track of current position in compressed array

    // iterate through input array using i pointer
    for (int i = 0; i < chars.length;) {
      final char letter = chars[i]; // current character being compressed
      int count = 0; // count of consecutive occurrences of letter

      // count consecutive occurrences of letter in input array
      while (i < chars.length && chars[i] == letter) {
        ++count;
        ++i;
      }

      // write letter to compressed array
      chars[ans++] = letter;

      // if count is greater than 1, write count as string to compressed array
      if (count > 1) {
        // convert count to string and iterate over each character in string
        for (final char c : String.valueOf(count).toCharArray()) {
          chars[ans++] = c;
        }
      }
    }

    // return length of compressed array
    return ans;
  }
}

```
```Python3 []
class Solution:
  def compress(self, chars: List[str]) -> int:
    ans = 0
    i = 0

    while i < len(chars):
      letter = chars[i]
      count = 0
      while i < len(chars) and chars[i] == letter:
        count += 1
        i += 1
      chars[ans] = letter
      ans += 1
      if count > 1:
        for c in str(count):
          chars[ans] = c
          ans += 1

    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
