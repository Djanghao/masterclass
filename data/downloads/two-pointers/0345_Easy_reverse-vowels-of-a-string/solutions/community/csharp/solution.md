# Easy solution with stack

**Author:** Pashkevich
**Votes:** 20
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3669092/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3669092/)

---


# Complexity

- Time complexity: O(n)

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string ReverseVowels(string s) {
        var str = new StringBuilder();
        var l = new Stack<char>();

        foreach(var i in s){
            if("aeiouAEIOU".Contains(i))
                l.Push(i);
        }

        foreach(var i in s){
            if("aeiouAEIOU".Contains(i))
                str.Append(l.Pop());
            else
                str.Append(i);
        }
        
        return str.ToString();
    }
}
```