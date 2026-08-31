# [Python] with explanation

**Author:** l3arner
**Votes:** 3
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1032544/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1032544/)

---

Key idea here for satisfying condition 1 and 2 is to try out all the lowercase letters.
For example, let's choose "b" as the boundary letter. Then cost of converting1st word to consists of letters less than and equal to "b" would be
`cost_a = len(a) - counter_a["b"]`
Note counter here is acting like a prefix sum of frequencies. and cost of converting word b to consists of characters only gt than b would be to convert all characters less than equal to "b"
`cost_b = counter_b["b"]`
so total cost for using b as the boundary letter and making a less than b would be:
` a_less_than_b = len(a) - counter_a["b"] + counter_b["b"]`
similar argument applies for `b_less_than_a`
`b_less_than_a = len(b) - counter_b["b"] + counter_a["b"]`


Unique is relatively easier.
`unique_a = len(a) - max(counter_a.values())`
`unique_b = len(b) - max(counter_b.values())`

```
class Solution:
    def minCharacters(self, a: str, b: str) -> int:
        counter_a = Counter(ord(ch) - ord('a') for ch in a)
        counter_b = Counter(ord(ch) - ord('a') for ch in b)
        # keys will go from 0 to 25
        
        # condition 3
        # min cost to turn a consisting of single character only is len(a) - max_freq_of_character
        unique = len(a) - max(counter_a.values()) + len(b) - max(counter_b.values())
        
        a_less_than_b = b_less_than_a = len(a) + len(b)
        
        # counter maintains a prefix sum and it adds up the frequency of all previous letters upto the letter being tried as boundary letter.
        for i in range(1,26):
            counter_a[i] += counter_a[i-1]
            counter_b[i] += counter_b[i-1]
            # cost to turn a less than b
            a_less_than_b = min(a_less_than_b, len(a) - counter_a[i] + counter_b[i])
            b_less_than_a = min(b_less_than_a, len(b) - counter_b[i] + counter_a[i])
        
        

        return min(a_less_than_b, b_less_than_a, unique)
            
        ```