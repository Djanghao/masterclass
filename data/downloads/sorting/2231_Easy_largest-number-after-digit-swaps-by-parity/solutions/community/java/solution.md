# Concise Java, 9 lines

**Author:** climberig
**Votes:** 48
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931147/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1931147/)

---

Look for a digit on the right that is bigger than the current digit and has the same parity, and swap them.
```(a[j] - a[i]) % 2 == 0``` parity check (true if both a[j] and a[i] are even or both are odd)
```java
 public int largestInteger(int n){
        char[] a = String.valueOf(n).toCharArray();
        for(int i = 0; i < a.length; i++)
            for(int j = i + 1; j < a.length; j++)
                if(a[j] > a[i] && (a[j] - a[i]) % 2 == 0){
                    char t = a[i];
                    a[i] = a[j];
                    a[j] = t;
                }
        return Integer.parseInt(new String(a));
    }