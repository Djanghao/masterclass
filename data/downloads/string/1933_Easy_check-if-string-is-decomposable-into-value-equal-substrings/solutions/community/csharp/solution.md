# C# || O(n) solution using a while loop - run time 55 ms, memory 38 MB

**Author:** timmok2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3874229/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3874229/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic requirement is that the length of the string has to be a multiple of 3 + 2 (since one pair of the same char is expected and all others to be a multiple of 3).

Once the requirement is satisfied, count how many pairs exist in a given chars of two or three that are the same.  Creating a while loop to iterate through all chars and see how many two pairs exist to return the answer.

As a side note, my first attempt of solving this problem was using a Dictionary<char, int>, but I could not come up with a working solution that was concise enough with the O(n) time complexity.

# Approach
<!-- Describe your approach to solving the problem. -->
1. declare **n** - the length of the string
2. if the modulus of **n % 3** is NOT 2, return false - otherwise, continue
3. declare int variables of **pairs** and **index**
4. create a while loop that runs while **index** is less than **n - 1** - to ensure that all chars can be validated - with the logic implemented in the loop
5. the logics in the loop are:
    1) if **s[index]** is the same as **s[index+1]**,
        then if the **index** is less than **n-2** AND **s[index]** is the same as **s[index+2]**, increment the **index** by 3 (three same chars found)
        else increment the **pairs** count by one AND increment the **index** by two
    2) if the condition of 1) is not met, simply return false
6. Once all chars are checked, return the boolean value if **pairs** is 1 or not as the answer

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {
    public bool IsDecomposable(string s) {

        int n = s.Length;
        if (n % 3 != 2) return false;

        int pairs = 0;
        int index = 0;

        while (index < n -1)
        {
            if (s[index] == s[index+1])
            {
                if (index < n - 2 && s[index] == s[index+2])
                {
                    index += 3;
                } 
                else 
                {
                    pairs++;
                    index += 2;
                }
            }
            else return false;
        }
        return  pairs == 1;
    }
}

```