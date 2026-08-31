# ✅ C++ | Prefix-Suffix | Easy and concise

**Author:** chandanagrawal23
**Votes:** 122
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748436/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/1748436/)

---

Intution-
For each 'i' (if the s[i] == '1') from the left side we have to options -
>Remove all the digits till index "i" with total cost = i+1
>Remove that index with 2 cost and add the previously calculated cost.

Similarly for right side .

Now after making left and right we have to find minimum for each "i" two possibility remove some from left (which is already stored in left array) , and remove from right to "i+1" (which is already calculated in right array).
```
class Solution {
public:
    int minimumTime(string s) {
        int n = s.size();
        vector<int>left(n,0) , right(n,0);
        if(s[0]=='1')
            left[0] = 1;
        for(int i=1;i<n;i++)
        {
            if(s[i]=='1')
			               //remove from middile with cost 2 OR remove till "i"
                left[i] = min(left[i-1]+2 , i+1);
            else
                left[i] = left[i-1];
        }
        
        if(s[n-1]=='1')
            right[n-1]=1;
        for(int i=n-2;i>=0;i--)
        {
            if(s[i]=='1')
                right[i] = min(right[i+1]+2,n-i);
            else
                right[i] = right[i+1];
        }
        int ansMIN = INT_MAX;
        ansMIN = min(left[n-1],right[0]);
        for(int i=0;i<=n-2;i++)
        {
            ansMIN = min(ansMIN , left[i] + right[i+1]);
        }
        return ansMIN;
    }
};
```