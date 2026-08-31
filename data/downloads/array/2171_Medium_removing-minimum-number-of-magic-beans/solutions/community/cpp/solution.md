# ✅ C++ | Easy Sorting | O(1) Space

**Author:** chandanagrawal23
**Votes:** 25
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766752/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766752/)

---

Approach would be to calculate total amount of Beans and sort bags in **descending order**
Loop from 0 to n-1, at each index do , If I make **all the values equal to current Bean** then-
1) How many Beans I saved which is **savedBeans=(a[i]*(i+1))**
2) How many Beans I have to remove which is **removedBeans= totalBeans - savedBeans;**
3) Take **minimum from all the possible removedBeans**.
```
class Solution {
public:
    long long minimumRemoval(vector<int>& a)
	{
        sort(a.begin(),a.end());
        reverse(a.begin(),a.end());
        long long mini = 99999999999999;
        long long totalBeans =0;
        for(auto bean : a)
        {
            totalBeans += (1LL)*bean;
        }
        long long n = 1LL*(int(a.size()));
        for(long long i=0;i<n;i++)
        {
            long long savedBeans = (1LL*a[i])*(1LL*(i+1));
            long long removedBeans = totalBeans - savedBeans;
            mini = min(mini , removedBeans);
        }
        return mini;
    }
};
```
Note : I changed all the values to long long otherwise it will throw runtime error , always remember if you think answer / calculation is out of range of INT then change it to long long by multiplying with **1LL**. (Due to this I got 1 penalty)