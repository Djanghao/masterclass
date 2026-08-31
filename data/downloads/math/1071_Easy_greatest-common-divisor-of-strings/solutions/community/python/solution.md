# Python Solution Using Recursion || Easy to Understand

**Author:** Relgorn
**Votes:** 166
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3977616/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3977616/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a **recursive** approach to find the **greatest common divisor of two strings**. 

---


# Approach
<!-- Describe your approach to solving the problem. -->
This is the idea behind the solution in simple points :

- If concatenating **str1** and **str2** is **not equal** to concatenating **str2** and **str1**, then there's no common divisor possible. So, we return an empty string **""**.

- If the lengths of **str1** and **str2** are **equal**, and the concatenated strings are **equal**, then **str1** (or **str2**) itself is the greatest common divisor, and we return **str1** (or **str2**).

- If the length of **str1** is greater than the length of **str2**, it means that **str1** contains **str2** as a prefix. In this case, we **recurse** with the substring of **str1** after removing (slicing) the prefix that matches **str2**.

- If the length of **str2** is greater than the length of **str1**, it means that **str2** contains **str1** as a prefix. In this case, we **recurse** with the substring of **str2** after removing (slicing) the prefix that matches **str1**.

---

![Screenshot 2023-08-29 231552.png](./images/0.png)

![Screenshot 2023-08-29 231620.png](./images/1.png)



---


# Complexity
- Time complexity: **O(n)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---



# Code
```
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        if str1 + str2 != str2 + str1:
            return ""
        if len(str1) == len(str2):
            return str1
        if len(str1) > len(str2):
            return self.gcdOfStrings(str1[len(str2):], str2)
        return self.gcdOfStrings(str1, str2[len(str1):])

```