# [Java] Simple O(n) using Next Greater Element III approach

**Author:** hacker001
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/1976343/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/1976343/)

---

- Concentrate on the first half of the number.
- Find the next greater element of this first half number.
- If cannot find return `""` string.
- if found, copy the first half in reverse to the second half.

Time Complexity: `O(n)`
Space Complexity: `O(n)`

```
public String nextPalindrome(String num) {
        int len = num.length();
        int n = len/2;
        char[] ans = num.toCharArray();
        
        // find first k such that it is less than  k+1
        int k = -1;
        for (int i=n-2; i >=0; i--) {
            if (num.charAt(i) < num.charAt(i+1)) {
                k = i; break;
            }
        }
        
        if (k == -1) return "";
        
        int l = -1; // find l from last until k such that it is greater than k
        for (int i=n-1; i > k; i--) {
            if (num.charAt(i) > num.charAt(k)) {
                l = i; break;
            }
        }
        
        // swap
        char temp = num.charAt(k);
        ans[k] = num.charAt(l);
        ans[l] = temp;
        
        // reverse from k+1 to n
        int left = k+1; int right = n-1;
        while (left < right) {
            temp = ans[left];
            ans[left] = ans[right];
            ans[right] = temp;
            right--; left++;
        }
        
        // copy the first half elements in reverse order to the second half of the array
        left = n-1; right = len % 2 == 0 ? n : n+1;
        while (left >=0 && right < len) {
            ans[right++] = ans[left--];
        }
        
        return new String(ans);
    }
```