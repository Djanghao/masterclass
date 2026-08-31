# Find max digit & create new number

**Author:** kreakEmp
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884350/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/4884350/)

---


# Approach
- Find the max digit in each number and count the number of digits
- Then create a new number consisting of only max digit with digit count equal to count
- Take sum of each new number formed

# Code
```
int sumOfEncryptedInt(vector<int>& nums) {
    int sum = 0;
    for(auto n: nums){
        int count = 0, mx = 0, t = 0;
        while(n){
            mx = max(mx, n%10);
            n = n/10;
            count++;
        }
        while(count){
            t = t*10 + mx;
            count--;
        }
        sum += t;
    }
    return sum;
}
```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---