# Easy to Understand Java Code || Beats 100%

**Author:** Saurabh_Mishra06
**Votes:** 5
**Link:** [https://leetcode.com/problems/di-string-match/solutions/4729875/](https://leetcode.com/problems/di-string-match/solutions/4729875/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution {
    public int[] diStringMatch(String s) {
        int n = s.length();
        int low = 0;
        int high = n;

        int[] arr = new int[n+1];

        for(int i=0; i<n; i++){
            if(s.charAt(i) == 'I'){
                arr[i] = low++;
            }else {
                arr[i] = high--;
            }
        }
        arr[n] = high;
        return arr;
    }
}
```