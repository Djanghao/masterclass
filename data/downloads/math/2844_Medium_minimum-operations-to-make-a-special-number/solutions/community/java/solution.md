# C++ & Java || Simple Brute force

**Author:** kreakEmp
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3994916/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3994916/)

---

# Approach 1 with O(N*N) complexity

- Last two digit should be divisible by 25 
- So we should check for combination of each two index to get a multiple of 25
- Once found we simply evaluate how many digits to be removed to get that combination at the end of the num.

### C++
```
int minimumOperations(string num) {
    int ans = num.size(), n = num.size();
    for(int i = n-1; i >= 0; i--){
        for(int j = i-1; j >= 0; j--){
            int t = (num[i] - '0') + (num[j] - '0')*10;
            if(t % 25 == 0) ans = min(ans, n - j - 2);  
        }
        if(num[i] == '0') ans = min(ans, n - 1); //To take the only '0' case
    }
    return ans;
}
```

### Java 
```
int minimumOperations(String num) {
    int ans = num.length(), n = num.length();
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i - 1; j >= 0; j--) {
            int t = (num.charAt(i) - '0') + (num.charAt(j) - '0') * 10;
            if (t % 25 == 0) ans = Math.min(ans, n - j - 2);
        }
        if (num.charAt(i) == '0') ans = Math.min(ans, n - 1); // To take the only '0' case
    }
    return ans;
}
```

# Approach 2 with O(N) complexity
- We need to only iterate two times, one with end char as '0' and once with end char as '5' and thats it. Take the min of each case.

### C++
```
class Solution {
public:
    int check(string &num, int i){
        for(int j = i-1; j >= 0; j--){
            int t = (num[i] - '0') + (num[j] - '0')*10;
            if(t % 25 == 0) return num.size() - j - 2;
        }
        return num.size();
    }

    int minimumOperations(string num) {
        int n = num.size(), ans = n, i;
        for(i = n-1; i >= 0 && num[i] != '0'; i--); //iterate untill '0' is found
        if(i >= 0) ans = min(n - 1, check(num, i));
        for(i = n-1; i >= 0 && num[i] != '5'; i--); //iterate untill '5' is found
        return min(ans, check(num, i));
    }
};
```
### Java
```
class Solution {
    public int check(String num, int i) {
        for (int j = i - 1; j >= 0; j--) {
            int t = (num.charAt(i) - '0') + (num.charAt(j) - '0') * 10;
            if (t % 25 == 0) return num.length() - j - 2;
        }
        return num.length();
    }

    public int minimumOperations(String num) {
        int n = num.length(), ans = n, i;
        for (i = n - 1; i >= 0 && num.charAt(i) != '0'; i--);
        if (i >= 0) ans = Math.min(n - 1, check(num, i));
        for (i = n - 1; i >= 0 && num.charAt(i) != '5'; i--);
        return Math.min(ans, check(num, i));
    }
}
```
If you find above solution difficult to understand, then check [this solution](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/3994993/try-to-turn-last-two-digits-into-00-25-50-75/) with simple code but doing the same thing what I have done here.


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---