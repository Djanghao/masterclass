# [ Go Solution ]Great explanation and Full Description

**Author:** sansaian
**Votes:** 2
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3822936/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/3822936/)

---

# Intuition
This problem asks to find the first repeated character in a given string. We can solve this problem by scanning the string from left to right and keeping track of the characters we have seen before. As soon as we encounter a character that is already in our record, we return it as the first repeating character.

# Approach
The approach in this implementation involves creating a map (set) to store characters in the string as we encounter them. We iterate over each character in the string, checking if the character is already in the set. If it is, we return it as the first repeated character. If it's not, we add it to the set. If we go through the entire string without finding a repeated character, we return a space character (' ').

# Complexity
- Time complexity: The time complexity is O(n), where n is the length of the string. This is because we are iterating through each character in the string once.
- Space complexity: The space complexity is also O(n), where n is the length of the string. This is because in the worst-case scenario, all characters in the string are unique, and we would need to store each of them in the set. However, since the set size won't exceed the unique characters in the ASCII table, we can also argue that the space complexity is O(1), or constant.

# Code
```
func repeatedCharacter(s string) byte {
    set:=make(map[byte]struct{})
    for i:=0;i<len(s);i++{
      if _,ok:=set[s[i]];ok{
        return s[i]
      }
		set[s[i]]=struct{}{}
    }
    return ' '
}
```