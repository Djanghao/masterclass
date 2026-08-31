# [JAVA] Generate k-based palindromes with comments

**Author:** Ironpotato
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/1590615/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/1590615/)

---

##### Solution 1 - Brute force (TLE)
* Check each number from 1 to Long.MAX_VALUE
* TLE

```
class Solution {
    public long kMirror(int k, int n) {
        long res = 0;
        long cnt = 0;
        for (long i = 1; i < Long.MAX_VALUE; i++) {
            if (iskmirror(k,i) && iskmirror(10,i)) {
                res += i;
                cnt++;
                if (cnt == n) {
                    return res;
                }
            }
        }
        return res;
    }
    
    boolean iskmirror(long k, long n) {
        long num = 0;
        long tmp = n;
        while (n != 0) {
            num = num * k + n % k;
            n = n / k;
        }
        return tmp == num;
    }
}
```

##### Solution 2 - Generate all k-based palindromes (Accepted)
* Backtrack to generate all k-based palindromes and check if it's 10-based mirror number
* Using String to check if a number is a palindrome will be faster than using long
* Store the generated numbers in each level including numbers with prevaling 0s (i.e. storing "00" to be used to generate "1001"). When you include the number as a result, exclude thoses numbers with prevaling 0s.


```
class Solution {
    public long kMirror(int k, int n) {
        long res = 0;
        // Maintain 2 lists for odd-lenth numbers & even-length numbers
        List<String> list1 = new ArrayList<>(), list2 = new ArrayList<>();
        
        list1.add("");
        list2.add("0");
        for (int i = 1; i < k && n > 0; i++){
            list2.add(Integer.toString(i));
            res += i;
            n--;
        }     
        
        return res + constructMirrorNumbers(2, k, n, list1, list2);
    }
    
    long constructMirrorNumbers(int len, int k, int n, List<String> list1, List<String> list2) { 
        // Found n smallest numbers
        if (n == 0)
            return 0;
        
        long res = 0;
        List<String> cur = new ArrayList<>();
        for (int i = 0; i < k && n > 0; i++) {
            // To construct numbers of length len, use list1 if len is even and list2 if len is odd
            List<String> list = len % 2 == 0 ? list1 : list2;
            for (int j = 0; j < list.size() && n > 0 ; j++) {
                String s = i + list.get(j) + i;
                cur.add(s);
                long num = Long.parseLong(s, k);
                // Not consider numbers with leading zeros
                if (i != 0 && isMirror(Long.toString(num))) {
                    n--;
                    res += num;
                }
            }
        }
        
        //replace the list with the current list
        if (len % 2 == 0) {
            list1 = cur;
        } else {
            list2 = cur;
        }
        
        return res + constructMirrorNumbers(len+1, k, n, list1, list2);
    }
    
    boolean isMirror(String s) {
        int len = s.length();
        int middle = len / 2 - 1;
        for (int i = 0; i <= middle; i++) {
            if (s.charAt(i) != s.charAt(len-1-i)) {
                return false;
            }
        }
        return true;
    }
}
```