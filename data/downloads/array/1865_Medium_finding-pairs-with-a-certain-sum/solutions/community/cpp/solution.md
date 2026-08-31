# [C++] | Using Unordered Map | Easy Solution

**Author:** 007_abhishek
**Votes:** 12
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/2028224/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/2028224/)

---

**Easy C++ Solution Using Unordered Map**
```
class FindSumPairs {
public:
    vector<int> v1,v2;
    unordered_map<int,int> m;
    
    FindSumPairs(vector<int>& nums1, vector<int>& nums2) {
        v1=nums1,v2=nums2;  // Copying array nums1 and nums;
        sort(v1.begin(),v1.end());  // sorting array v1 for finding count it will be useful
        
        int n=nums2.size();
        
        //Pushing elements in Map and increasing their frequency
        for(int i=0;i<n;i++)
            m[nums2[i]]++;
    }
    
    void add(int index, int val) {
        m[v2[index]]--; // Decreasing frequency from map by 1 of given index element
        v2[index]+=val; // Change and add this val to given index of v2
        m[v2[index]]++; // Increasing frequency in map by 2 of new index element after increasing val.
    }
    
    int count(int tot) {
        
        int ans=0;
        int n1=v1.size();
        
        for(int i=0;i<n1;i++)
        {
            // If v[i]>=tot then we will break this loop as lowest element in v2 is 1.
            // So v[i] will be greater after this.
            if(v1[i]>=tot)  
                break;
            ans+=m[tot-v1[i]];  // We will directly add frequency to ans;
        }
        return ans;
    }
};
```
**If You Find it Helpful Kindly UPVOTE**