# ✅ cpp easy || Greedy || Explained || faster than 100%

**Author:** namanvijay814
**Votes:** 7
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908920/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908920/)

---

```
1. extract the hours and minutes from both the strings
2. convert the strings to numbers
3. convert both time time to minutes.
4. calculate the minutes difference.
5. simply check minimum operations to make minutes equal to difference.
class Solution {
public:
    int convertTime(string a, string b) {
        int x=a[0]-'0',y=a[1]-'0',z=a[3]-'0',w=a[4]-'0';
        int p=b[0]-'0',q=b[1]-'0',r=b[3]-'0',s=b[4]-'0';
        int hr1 = (x)*10+(y);
        int m1 = (z)*10+(w);
        int hr2 = (p)*10+(q);
        int m2 = (r)*10+s;
        int num1 = hr1*60+m1;
        int num2 = hr2*60+m2;
        int diff = num2-num1;
        int res=0;
        int arr[4]={60,15,5,1};
        for(int i=0;i<4;i++){
            res+=diff/arr[i];
            diff = diff%arr[i];
        }
        return res;
    }
};