# C++ 6 lines 'normal' solution ( 3 lines actually...)

**Author:** zefengsong
**Votes:** 20
**Link:** [https://leetcode.com/problems/perfect-number/solutions/98600/](https://leetcode.com/problems/perfect-number/solutions/98600/)

---

```
    bool checkPerfectNumber(int num) {
        vector<int>res(1,1);
        int upper=num;
        for(int i=2;i<upper;i++) if(num%i==0) res.push_back(i), res.push_back(num/i), upper=num/i;
        int sum=0;
        for(auto i:res) sum+=i;
        return sum==num && num!=1;
    }
```
***
**Update(8/6/2017):** I just found I don't need to keep updating `upper` if I know where it will land (when i == num/i, it doesn't matter if i< or <= sqrt(num) as explained in comment), and it reduces run time from 1055ms to 3ms, well...
```
    bool checkPerfectNumber(int num) {
        vector<int>res(1,1);
        for(int i=2;i<sqrt(num);i++) if(num%i==0) res.push_back(i), res.push_back(num/i);
        int sum=0;
        for(auto i:res) sum+=i;
        return sum==num && num!=1;
    }
```
***
**Update:** Why would  I need a vector?
```
    bool checkPerfectNumber(int num) {
        int sum=1;
        for(int i=2;i<sqrt(num);i++) if(num%i==0) sum += i + num/i;
        return sum==num && num!=1;
    }
```
***
Thanks @MAPLELEAF2012 for advice. 
The comprehensive version if we take the perfect square into account, in which case sum(49) is 1+7=8, not 1+7+7=15 or 1.
```
    bool checkPerfectNumber(int num) {
        int sum=1;
        for(int i=2;i<=sqrt(num);i++) if(num%i==0) sum += i + (i==num/i ? 0 : num/i);
        return sum==num && num!=1;
    }
```