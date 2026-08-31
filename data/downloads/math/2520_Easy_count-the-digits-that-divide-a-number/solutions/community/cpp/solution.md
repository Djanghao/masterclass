# C++ || JAVA || Python

**Author:** khud_gye_guru
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977297/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/2977297/)

---

**Brute Force**
**Check Divisibilty from each Digit of NUM**
Time Complexity -> O(log(num))
space Complexity -> O(1)

# C++
```
class Solution {
public:
    int countDigits(int num) {
        int n = num, ans = 0;
        while(num>0){
            ans += (n%(num%10)==0);
            num /= 10;
        }
        return ans;
    }
};
```
# Python
```
class Solution:
    def countDigits(self, num: int) -> int:
        n, res = num, 0
        while n>0:
            if num%(n%10)==0:
                res += 1
            n //= 10
        return res
```
# JAVA
```
class Solution {
    public int countDigits(int num) {
        int n = num, cnt = 0;
        while ( n > 0 ){
            int rem = n%10;
            n = n/10;
            if ( num % rem == 0 ) cnt++;
        }
        return cnt;
    }
}
```