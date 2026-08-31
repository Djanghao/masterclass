# Easy solution with dart

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/5539575/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/5539575/)

---



# Code
```
class LUPrefix {
  List<bool> uploaded;
  int longestPrefix;
  int n;

  LUPrefix(int n)
      : n = n,
        longestPrefix = 0,
        uploaded = List.filled(n + 1, false); // Kh\u1EDFi t\u1EA1o danh s\xE1ch v\u1EDBi n+1 ph\u1EA7n t\u1EED \u0111\u1EC1u l\xE0 false

  void upload(int video) {
    uploaded[video] = true;
    // C\u1EADp nh\u1EADt longestPrefix n\u1EBFu c\xE1c video li\xEAn ti\u1EBFp \u0111\xE3 \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn
    while (longestPrefix + 1 <= n && uploaded[longestPrefix + 1]) {
      longestPrefix++;
    }
  }

  int longest() {
    return longestPrefix;
  }
}

```