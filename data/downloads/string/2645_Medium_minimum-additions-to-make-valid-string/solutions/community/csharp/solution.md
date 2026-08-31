# ✅Step-by-step explanation | Go | C#✅

**Author:** shukhratutaboev
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422081/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3422081/)

---

1 Initialize variables: order to keep track of the current pattern order (0, 1 or 2), pattern to store the pattern "abc", i to loop through the characters in word, and n to store the minimum number of changes required to make word follow the pattern.
2 Loop through the characters in word until the end is reached.
3 Compare the current character with the character in the pattern that corresponds to the current order value (0, 1 or 2).
4 If the characters are not equal, increment n to indicate that a change is required.
5 If the characters are equal, move to the next character in word.
6 Increment order to move to the next character in the pattern.
7 After the loop, calculate the remaining number of characters required to complete the pattern (3 - order % 3) % 3.
8 Add the remaining number of characters to n and return it as the minimum number of changes required to make word follow the pattern.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Go
```
func addMinimum(word string) int {
    order, n := 0, 0
    pattern := "abc"
    
    for i := 0; i < len(word); {
        c := word[i]
        if pattern[order%3] != c {
            n++
        } else {
            i++
        }
        order++
    }
    
    n += (3 - order % 3) % 3
    
    return n
}
```
C#
```
public class Solution {
    public int AddMinimum(string word) {
        var order = 0;
        var pattern = "abc";
        var i = 0;
        var n = 0;
        while (i < word.Length) {
            var c = word[i];
            if (pattern[order % 3] != c) n++;
            else i++;
            order++;
        }

        n += (3 - order % 3) % 3;

        return n;
    }
}
```
![a6c83c54-1d1a-4f26-8273-b687d119dd5b_1679889261.1494205.png](./images/0.png)