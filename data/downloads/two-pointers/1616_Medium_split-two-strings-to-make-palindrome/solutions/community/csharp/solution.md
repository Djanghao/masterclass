# C# Solution

**Author:** user6785Cz
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3706249/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/3706249/)

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

# Code
```
public class Solution {
public bool CheckPalindromeFormation(string a, string b)
{
  return validate(a, b) || validate(b, a);
}

 bool validate(string a, string b)
{
  int l = 0, r = a.Length - 1;
  while (l < r)
  {
    if (a[l] != b[r])
      break;
    l++;
    r--;
  }

  return isPalindrome(a, l, r) || isPalindrome(b, l, r);
}

bool isPalindrome(string a, int l, int r)
{
  while (l < r)
  {
    if (a[l] != a[r])
      return false;
    l++;
    r--;
  }
  return true;
}



}
```