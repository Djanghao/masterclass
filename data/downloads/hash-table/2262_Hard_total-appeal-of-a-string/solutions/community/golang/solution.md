# O(n) Time and O(1) space solution with explanation.

**Author:** doppler
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996230/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/1996230/)

---

The key thing here is to understand that in each interval only the first occurrence of a unique character will have contribution to the final result. 
So to get to the answer we just need to find all the interval in which the current character is occured for the first time. To do this we just need to maintain the previous occurence of all possible characters(i.e. lowercase alphabets in this case). All interval starting after the prev occurrence and before and at the current index will have contribution from current character

<b> Java </b>
```
class Solution {
    public long appealSum(String s) {
      int[] pos = new int[26];
      long res = 0;
      int n = s.length();
      for (int i = 0;i<n;i++) {
        int c = (int)(s.charAt(i) -'a');
        res += ((i+1)-pos[c])*(n-i);
        pos[c] = i+1;
      }
      return res;
    }
}
```

<b> Go</b>
```
func appealSum(s string) int64 {
  pos := make([]int, 26)
  res := 0
  n:= len(s)
  for i:= 0;i<n;i++{
    c := s[i]-'a'
    res += ((i+1)-pos[c])*(n-i)
    pos[c] = i+1
  }
  return int64(res)
}
```