# easy  c++ solution ,O(n),faster than 99.44%

**Author:** vinarmrajput
**Votes:** 61
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/799052/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/799052/)

---

'''class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        
        int n=arr.size(),temp,mx=-1;
        for(int i=n-1;i>=0;i--)
        {
            temp=arr[i];
            arr[i]=mx;
            mx=max(mx,temp);
        }
     return arr;
    }
};