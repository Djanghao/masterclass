# Effortless Bitmasking Solution || O(N) || O(1)

**Author:** hemanth00405
**Votes:** 268
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5784707/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5784707/)

---

Imagine you have a string and you want to find the longest chunk where every vowel (`a`, `e`, `i`, `o`, `u`) appears an even number of times. Let's break it down step by step with a simple approach:

### What We Do

1. **Track Vowel Counts**: We\u2019ll keep a bitmask to track the even or odd count of each vowel. Think of this as a way to remember which vowels have been seen an odd number of times and which have been seen an even number of times. 

2. **Use an Array ( Map ) for Tracking**: We\u2019ll use an array to store the first time we see each possible bitmask. This way, we can easily find the longest substring by comparing the current position with where we first saw the same bitmask before.

### How It Works

1. **Bitmask Basics**: 
   - We use a bitmask where each bit represents whether a vowel has been seen an odd number of times. For example, if the bit for `a` is set, it means `a` has been seen an odd number of times.

2. **Array Initialization**: 
   - We start with an array that has 32 slots (because we have 5 vowels and we need to represent all combinations of odd/even counts for these vowels).
   - Initially, set all values to `-2` which means we haven\u2019t seen that bitmask before. Set `mapy[0]` to `-1` to handle the case where the whole substring from the start is valid.

3. **Processing the String**:
   - Loop through each character in the string.
   - Update the bitmask based on the character (toggle the corresponding bit if it\u2019s a vowel).
   - Check if we\u2019ve seen this bitmask before. If yes, calculate the length of the substring between the previous and current indices. If not, store the current index as the first occurrence of this bitmask.

4. **Finding the Longest Substring**:
   - Track the maximum length of valid substrings where all vowels appear an even number of times by comparing the lengths of valid substrings found.

#### **Time Complexity (TC)**

The overall time complexity of the solution is `O(n)`, where `n` is the length of the string `s`.

- **Processing Each Character**: The loop processes each character in the string exactly once, updating the bitmask and checking the array. This takes `O(n)` time.

- **Array Operations**: Accessing and updating the array `mapy` is done in constant time `O(1)` for each character.

#### **Space Complexity (SC)**

The space complexity is `O(1)`, which is constant space complexity.

- **Array Size**: The array `mapy` has a fixed size of 32, regardless of the input size. This size is constant and does not depend on the length of the string.

- **Other Variables**: The variables `max`, `mask`, and `prev` use constant space.
```python []
class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        mapy = [-2] * 32
        mapy[0] = -1

        max_len = 0
        mask = 0

        for i, char in enumerate(s):
            if char == 'a':
                mask ^= 1
            elif char == 'e':
                mask ^= 2
            elif char == 'i':
                mask ^= 4
            elif char == 'o':
                mask ^= 8
            elif char == 'u':
                mask ^= 16

            prev = mapy[mask]
            if prev == -2:
                mapy[mask] = i
            else:
                max_len = max(max_len, i - prev)

        return max_len
```
```java []
class Solution {
    public int findTheLongestSubstring(String s) {
        int[] mapy = new int[32];
        Arrays.fill(mapy, -2);
        mapy[0] = -1;

        int maxLen = 0;
        int mask = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            switch (ch) {
                case 'a':
                    mask ^= 1;
                    break;
                case 'e':
                    mask ^= 2;
                    break;
                case 'i':
                    mask ^= 4;
                    break;
                case 'o':
                    mask ^= 8;
                    break;
                case 'u':
                    mask ^= 16;
                    break;
            }

            int prev = mapy[mask];
            if (prev == -2) {
                mapy[mask] = i;
            } else {
                maxLen = Math.max(maxLen, i - prev);
            }
        }

        return maxLen;
    }
}
```
```cpp []
class Solution {
public:
    int findTheLongestSubstring(string s) {
        vector<int> mapy(32, -2);
        mapy[0] = -1;

        int maxLen = 0;
        int mask = 0;

        for (int i = 0; i < s.size(); ++i) {
            char ch = s[i];

            switch (ch) {
                case 'a':
                    mask ^= 1;
                    break;
                case 'e':
                    mask ^= 2;
                    break;
                case 'i':
                    mask ^= 4;
                    break;
                case 'o':
                    mask ^= 8;
                    break;
                case 'u':
                    mask ^= 16;
                    break;
            }

            int prev = mapy[mask];
            if (prev == -2) {
                mapy[mask] = i;
            } else {
                maxLen = max(maxLen, i - prev);
            }
        }

        return maxLen;
    }
};
```
```golang []
func findTheLongestSubstring(s string) int {
    mapy := [32]int{}
    for i := range mapy {
        mapy[i] = -2
    }
    mapy[0] = -1

    maxLen := 0
    mask := 0

    for i, char := range s {
        switch char {
        case 'a':
            mask ^= 1
        case 'e':
            mask ^= 2
        case 'i':
            mask ^= 4
        case 'o':
            mask ^= 8
        case 'u':
            mask ^= 16
        }

        if mapy[mask] == -2 {
            mapy[mask] = i
        } else {
            length := i - mapy[mask]
            if length > maxLen {
                maxLen = length
            }
        }
    }

    return maxLen
}
```
![image.png](./images/0.png)

