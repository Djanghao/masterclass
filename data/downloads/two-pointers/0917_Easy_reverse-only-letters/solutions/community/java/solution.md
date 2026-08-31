# ✅Java Simple Solution || ✅Runtime 0ms || ✅ Beats100%

**Author:** ahmedna126
**Votes:** 10
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/4219822/](https://leetcode.com/problems/reverse-only-letters/solutions/4219822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code1
```
class Solution {
    public String reverseOnlyLetters(String s) {
        char[] arr = s.toCharArray();
        int i = 0 , j = s.length()-1;

        while (i < j)
        {
            char c1 = arr[i];
            char c2 = arr[j];
            if (Character.isLetter(c1) && Character.isLetter(c2)) {
                arr[i++] = c2;
                arr[j--] = c1;
            }
            if(!Character.isLetter(c2)){
                j--;
            }
            if (!Character.isLetter(c1)){
                i++;
            }
        }

        return new String(arr);

    }
}
```

# Code2
```
class Solution {
    public String reverseOnlyLetters(String s) {
        StringBuilder str = new StringBuilder();
        for (int i = s.length()-1 ; i >= 0 ; i--) {
            char c1 = s.charAt(i);
            if (Character.isLetter(c1)) str.append(c1);
        }

        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            if (!Character.isLetter(c1)) str.insert( i , c1);
        }
        return str.toString();
    }
}
```
## For additional problem-solving solutions, you can explore my repository on GitHub: [GitHub Repository](https://github.com/ahmedna126/java_leetcode_challenges)


![abcd1.jpeg](./images/0.jpeg)
