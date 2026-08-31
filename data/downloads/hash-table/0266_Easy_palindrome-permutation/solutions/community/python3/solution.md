# [Python 3] Hashmap(Dict), Sets, TC: O(n), SC: O(1)

**Author:** hueieglobal
**Votes:** 20
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/1006994/](https://leetcode.com/problems/palindrome-permutation/solutions/1006994/)

---

```
class Solution:
    # Set: Iterate over the given string
    # Add the character when it is not there, Remove it when it is.
    # At the end, the length of the sets is lesser than 2
    # TC O(n) n is the number of the character of string
    # SC O(1) the maximum size of the set would be 128 ASCII characters
    # This is bounded (constant),
    def canPermutePalindrome(self, s: str) -> bool:
        sets = set()
        for char in s:
            if char not in sets:
                sets.add(char)
            else:
                sets.remove(char)
        
        return (len(sets) <= 1)          
    
#     # Hashmap: Count the number of occurence of characters
#     # TC O(n) n is the number of the character of string
#     # SC O(1) the maximum size of the map would be 128 ASCII characters
#     # This is bounded (constant)
#     def canPermutePalindrome(self, s: str) -> bool:
#         # Iterate over a given string
#         # Count the number of occurence of characters
#         # key: Character, value: count
#         maps = collections.defaultdict(int)
#         for char in s:
#             if maps.get(char):
#                 maps[char] += 1
#             else:
#                 maps[char] = 1
        
#         # Traverse over the map to find even number
#         count = 0
#         for key in maps:
#             count += maps[key] %2
#             # if maps[key] % 2 == 1:
#             #     # Odd number of occuerence
#         # if the count is lesser than 2, it is palindrome
#         return (count <= 1)                
