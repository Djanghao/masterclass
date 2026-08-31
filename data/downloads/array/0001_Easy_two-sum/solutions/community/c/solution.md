# Easy C++ solution||Using Three Different Appraoches

**Author:** anubhavbaner7
**Votes:** 293
**Link:** [https://leetcode.com/problems/two-sum/solutions/1374512/](https://leetcode.com/problems/two-sum/solutions/1374512/)

---

**If you really found my solution helpful please upvote it, as it motivates me to post such kind of codes and help the coding community, if you have some queries or some improvements please feel free to comment and share your views.**
```
//Ist Approach
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<pair<int,int>> v;
        for(int i=0;i<nums.size();i++)
            v.push_back({nums[i],i});
        sort(v.begin(),v.end());
        int i=0;
        int j=v.size()-1;
        int idx1=0;
        int idx2=0;
        while(i<j)
        {
            if(v[i].first+v[j].first==target)
            {
                idx1=v[i].second;
                idx2=v[j].second;
                break;
                
            }
            if(v[i].first+v[j].first<target)
                i++;
            if(v[i].first+v[j].first>target)
                j--;
    }
        return {idx1,idx2};
    }
//Time Complexity:O(nlogn)
//Time Complexity:O(n)

//Second Approach

   vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> v;
        unordered_map<int,int> m;
        for(int i=0;i<nums.size();i++)
        {
            if(m.find(target-nums[i])!=m.end())
            {
                v.push_back(m[target-nums[i]]);
                v.push_back(i);
                return v;
            }
            else
                m[nums[i]]=i;
        }
       return v;
    }

//Time Complexity:O(n)
//Space Complexity:O(n)

//Third Approach
vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> index;
        int size=nums.size();
        for(int i=0;i<size;i++)
        {
            int k=target-nums[i];
            for(int j=i+1;j<size;j++)
            {
                if(nums[j]==k)
                {
                    index.push_back(i);
                    index.push_back(j);
                    break;
                }
            }
            if(index.size()==2)
                break;
        }
        return index;
    }
	//Time Complexity: O(n^2)
```