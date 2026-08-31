# Easy solution using hashmap and sort. Beats 80%

**Author:** Michael_Teng6
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/3226830/](https://leetcode.com/problems/sort-features-by-popularity/solutions/3226830/)

---



# Code
```


bool mycomp(const pair<string,pair<int,int>>& left,pair<string,pair<int,int>>& right)
{
    if(left.second.first==right.second.first)
    {
        return left.second.second<right.second.second;
    }
    return left.second.first>right.second.first;
}


class Solution {
public:
    vector<string> sortFeatures(vector<string>& features, vector<string>& responses) 
    {
        unordered_map<string,int> store;
        string temp="";
        set<string> tempstore;
        for(int i=0;i<responses.size();i++)
        {
            for(int j=0;j<responses[i].size();j++)
            {   
                
                if(responses[i][j]==' '&&temp!="")
                {
                    tempstore.insert(temp);
                    temp="";
                }
                else
                {
                    temp+=responses[i][j];
                }
                if(temp!=""&&j==responses[i].size()-1)
                {
                    tempstore.insert(temp);
                    temp="";
                }
            }
            for(auto it:tempstore)
            {
                store[it]++;
            }
            tempstore.clear();
        }
        vector<pair<string,pair<int,int>>> keep;

        for(int i=0;i<features.size();i++)
        {
            auto it=store.find(features[i]);
            if(it==store.end())
            {
                keep.push_back(pair<string,pair<int,int>>(features[i],pair<int,int>(0,i)));
            }
            else
            {
                keep.push_back(pair<string,pair<int,int>>(features[i],pair<int,int>(it->second,i)));
            }
        }
        sort(keep.begin(),keep.end(),mycomp);
        vector<string> ans;
        for(auto it:keep)
        {
            ans.push_back(it.first);
        }
        return ans;

    }
};
```