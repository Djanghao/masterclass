# ✅3 Method's 🤯 || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 2102
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/3687854/](https://leetcode.com/problems/valid-anagram/solutions/3687854/)

---


# Intuition:

The Intuition is to determine if two strings are anagrams, compare the characters in both strings and check if they have the same characters but in a different order. By tracking the count of each character, if the counts match for all characters, the strings are anagrams; otherwise, they are not.

# Approach 1: Sorting
# Explanation:

1. `sort(s.begin(), s.end());` sorts the characters in string `s` in ascending order. This rearranges the characters in `s` so that they are in alphabetical order.
2. `sort(t.begin(), t.end());` sorts the characters in string `t` in ascending order. Similarly, this rearranges the characters in `t` to be in alphabetical order.
3. `return s == t;` compares the sorted strings `s` and `t` using the equality operator (`==`). If the sorted strings are equal, it means that the original strings `s` and `t` have the same characters in the same order, indicating that they are anagrams. In this case, the function returns `true`. Otherwise, if the sorted strings are not equal, the function returns `false`, indicating that the strings are not anagrams.

This code takes advantage of the fact that anagrams have the same characters, but in different orders. By sorting the characters, the code transforms the problem into a comparison of the sorted strings, simplifying the anagram check.

However, it's worth noting that this approach has a time complexity of O(n log n) due to the sorting operation, where n is the length of the strings.

# Code
```C++ []
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        return s == t;
    }
};
```
```Java []
import java.util.Arrays;

class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        
        return Arrays.equals(sChars, tChars);
    }
}
```
```Python3 []
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        return sorted_s == sorted_t
```

# Approach 2: Hash Table
# Explanation:
1. Create an unordered map `count` to store the character frequencies. The key of the map represents a character, and the value represents its frequency.
2. Iterate over each character `x` in string `s`. For each character, increment its frequency in the `count` map by using the `count[x]++` expression.
3. Iterate over each character `x` in string `t`. For each character, decrement its frequency in the `count` map by using the `count[x]--` expression.
4. Iterate over each pair `x` in the `count` map. Each pair consists of a character and its corresponding frequency. Check if any frequency (`x.second`) is non-zero. If any frequency is non-zero, it means there is a character that appears more times in one string than the other, indicating that the strings are not anagrams. In that case, return `false`.
5. If all frequencies in the `count` map are zero, it means the strings `s` and `t` have the same characters in the same frequencies, making them anagrams. In this case, the function returns `true`.

This approach counts the frequency of characters in one string and then adjusts the count by decrementing for the other string. If the strings are anagrams, the frequency of each character will cancel out, resulting in a map with all zero frequencies.

The time complexity of this solution is O(n), where n is the total number of characters in both strings. It iterates over each character once to count the frequencies and then compares the frequencies in the map, making it an efficient solution for the problem.

# Code
```C++ []
class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> count;
        
        // Count the frequency of characters in string s
        for (auto x : s) {
            count[x]++;
        }
        
        // Decrement the frequency of characters in string t
        for (auto x : t) {
            count[x]--;
        }
        
        // Check if any character has non-zero frequency
        for (auto x : count) {
            if (x.second != 0) {
                return false;
            }
        }
        
        return true;
    }
};
```
```Java []
class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> count = new HashMap<>();
        
        // Count the frequency of characters in string s
        for (char x : s.toCharArray()) {
            count.put(x, count.getOrDefault(x, 0) + 1);
        }
        
        // Decrement the frequency of characters in string t
        for (char x : t.toCharArray()) {
            count.put(x, count.getOrDefault(x, 0) - 1);
        }
        
        // Check if any character has non-zero frequency
        for (int val : count.values()) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```
```Python3 []
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = defaultdict(int)
        
        # Count the frequency of characters in string s
        for x in s:
            count[x] += 1
        
        # Decrement the frequency of characters in string t
        for x in t:
            count[x] -= 1
        
        # Check if any character has non-zero frequency
        for val in count.values():
            if val != 0:
                return False
        
        return True
```

# Approach 3: Hash Table (Using Array)
# Code
```C++ []
class Solution {
public:
    bool isAnagram(string s, string t) {
        int count[26] = {0};
        
        // Count the frequency of characters in string s
        for (char x : s) {
            count[x - 'a']++;
        }
        
        // Decrement the frequency of characters in string t
        for (char x : t) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero frequency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
};
```
```Java []
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        
        // Count the frequency of characters in string s
        for (char x : s.toCharArray()) {
            count[x - 'a']++;
        }
        
        // Decrement the frequency of characters in string t
        for (char x : t.toCharArray()) {
            count[x - 'a']--;
        }
        
        // Check if any character has non-zero frequency
        for (int val : count) {
            if (val != 0) {
                return false;
            }
        }
        
        return true;
    }
}
```
```Python3 []
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = [0] * 26
        
        # Count the frequency of characters in string s
        for x in s:
            count[ord(x) - ord('a')] += 1
        
        # Decrement the frequency of characters in string t
        for x in t:
            count[ord(x) - ord('a')] -= 1
        
        # Check if any character has non-zero frequency
        for val in count:
            if val != 0:
                return False
        
        return True
```

![CUTE_CAT.png](./images/0.png)

**If you are a beginner solve these problems which makes concepts clear for future coding:**
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)
10. [Valid Anagram](https://leetcode.com/problems/valid-anagram/solutions/3687854/3-methods-c-java-python-beginner-friendly/)
11. [Group Anagrams](https://leetcode.com/problems/group-anagrams/solutions/3687735/beats-100-c-java-python-beginner-friendly/)
12. **Practice them in a row for better understanding and please Upvote for more questions.**


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**