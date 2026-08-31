# Straightforward

**Author:** Shishir_Sharma
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083889/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083889/)

---

```
class Solution {
public:
    bool digitCount(string nums) {
        unordered_map<int,int> umap;
        for(int i=0;i<nums.length();i++)
        {
            string temp="";
            temp+=nums[i];
            int n=stoi(temp);
            umap[n]++;
        }
        for(int i=0;i<nums.length();i++)
        {
            string temp="";
            temp+=nums[i];
            int n=stoi(temp);
            
            //Number of times expected != Number of times occured 
            if(n!=umap[i])
                return false;
                
        }
        return true;
    }
};
```
**Like it? Please Upvote ;-)**