# C# - [Made Simple] Double Reversal

**Author:** TheSnappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/3842946/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/3842946/)

---

# Intuition and Approach
- Reverse the entire string
- Reverse the individual words in the string

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution {

    public void Reverse(char[] s, int start, int end){
        while (start < end){
            var temp = s[end];
            s[end] = s[start];
            s[start] = temp;
            start++;
            end--;
        }
    }

    public void ReverseWords(char[] s) {

        Reverse(s, 0, s.Length - 1);

        int start = 0;

        while (start < s.Length){

            if (s[start] != ' '){
                int temp = start;
                while (temp < s.Length && s[temp] != ' '){
                    temp++;
                }
                Reverse(s, start, temp - 1);
                start = temp;
            }

            start++;
        }


    }
}
```