# 🚀🚀🚀THREE LiNES OF CODE🚀🚀🚀by PRODONiK (Java, C++, Python, Go, JS, Ruby, C#)

**Author:** prodonik
**Votes:** 9
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/4410240/](https://leetcode.com/problems/valid-anagram/solutions/4410240/)

---

# Intuition
The intuition behind this solution is to determine if two strings are anagrams by comparing their sorted representations. Anagrams are words or phrases formed by rearranging the letters of another, and sorting the characters in each string allows us to easily check if they contain the same set of characters.

# Approach
The approach involves converting the input strings `s` and `t` into character arrays `ss` and `tt` using the `toCharArray()` method. These arrays are then sorted using `Arrays.sort()` to arrange the characters in ascending order. Finally, the `Arrays.equals()` method is used to check if the sorted arrays are equal, which indicates that the original strings are anagrams.

# Complexity
- Time complexity: $$O(n \\log n)$$, where $$n$$ is the length of the input strings. The dominant factor is the sorting operation.
- Space complexity: $$O(n)$$, as additional space is used to store the character arrays.

The space complexity is determined by the size of the character arrays, and the time complexity is influenced by the sorting operation.

# Code
```Java []
class Solution {
    public boolean isAnagram(String s, String t) {
        char [] ss = s.toCharArray(), tt = t.toCharArray();
        Arrays.sort(ss); Arrays.sort(tt);
        return Arrays.equals(ss, tt);
    }
}
```
```C++ []
class Solution {
public:
    bool isAnagram(std::string s, std::string t) {
        // Convert strings to char arrays
        std::sort(s.begin(), s.end());
        std::sort(t.begin(), t.end());

        // Check if the sorted char arrays are equal
        return s == t;
    }
};
```
```Python []
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Convert strings to sorted lists of characters
        ss = sorted(s)
        tt = sorted(t)

        # Check if the sorted lists are equal
        return ss == tt
```
```C# []
public class Solution {
    public bool IsAnagram(string s, string t) {
        // Convert strings to char arrays
        char[] ss = s.ToCharArray();
        char[] tt = t.ToCharArray();
        
        // Sort the char arrays
        Array.Sort(ss);
        Array.Sort(tt);
        
        // Check if the sorted char arrays are equal
        return new string(ss) == new string(tt);
    }
}
```
```Go []
func (s *Solution) IsAnagram(str1 string, str2 string) bool {
	// Convert strings to sorted slices of characters
	ss := strings.Split(str1, "")
	tt := strings.Split(str2, "")
	sort.Strings(ss)
	sort.Strings(tt)

	// Check if the sorted slices are equal
	return strings.Join(ss, "") == strings.Join(tt, "")
}
```
```Ruby []
class Solution
  def is_anagram(s, t)
    # Convert strings to arrays of characters and sort them
    ss = s.chars.sort
    tt = t.chars.sort

    # Check if the sorted arrays are equal
    ss == tt
  end
end
```
```JavaScript []
class Solution {
    isAnagram(s, t) {
        // Convert strings to arrays of characters and sort them
        const ss = s.split('').sort();
        const tt = t.split('').sort();

        // Check if the sorted arrays are equal
        return ss.join('') === tt.join('');
    }
}
