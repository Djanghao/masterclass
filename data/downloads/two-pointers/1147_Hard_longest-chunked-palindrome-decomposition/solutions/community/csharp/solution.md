# Recursion | Simple Logic

**Author:** fedmog1lnkv
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3625574/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3625574/)

---

# Intuition
It can be seen from the task that you need to split this string into the maximum number of substrings with the following list of requirements:

1. The substrings must be the same.
1. Substrings should be placed at the beginning and end of the main line.

# Approach
To solve this problem, it is necessary to use a recursive algorithm. 
We need to check whether it is possible to isolate two pieces of a string that are identical to each other (one of the pairs), then remove them from the string and repeat for the remaining parts.
The recursion ends when we can no longer get two comparable substrings.

# Complexity
- Time complexity: $$O(n^2)$$
The algorithm goes through each character of the string twice (i.e. the complexity is $$O(n))$$, but we also have another loop inside - this is from `i=1 to n/2`. The loop finds potential pairs of substrings in the main string, so the entire time of the function is $$O(n^2)$$.

- Space complexity: $$O(n)$$
In the worst case, a new variable will be created for each character of the string - the complexity of the space will be $$O(n)$$.

# Code
```
public class Solution {
    public int LongestDecomposition(string text)
    {
        string helper = text;
        int count = 0;

        void Recursive(string txt)
        {
            helper = txt;
            for (int i = 1; i <= txt.Length / 2; i++)
            {
                if (txt.Substring(0, i) == txt.Substring(txt.Length - i))
                {
                    count += 2;
                    Recursive(txt.Substring(i, txt.Length - 2 * i));
                    break;
                }
            }
        }

        Recursive(text);
        return (helper == "") ? count : count + 1;
    }
}
```

This function takes the string text as an argument and returns an integer - the maximum number of substrings into which this string can be divided according to the rules from the task.

The function starts by storing the value of the original string in the helper variable, and then recursively calls itself to search for substrings. If a pair of substrings was found, the function increments the count counter by 2 and runs recursively with the trimmed string. The recursion continues until the end of the string is reached.

The return value is determined by the value of the helper variable. If after all the actions its value is an empty string, then we can return the current count value. Otherwise, i.e. if no pair of substrings could be found, the current value `count + 1` is returned.
