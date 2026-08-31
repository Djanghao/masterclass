# [C++ solution]easy explanation using map

**Author:** sahityan11
**Votes:** 43
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/2388803/](https://leetcode.com/problems/merge-similar-items/solutions/2388803/)

---

Yr humain kya krna h jo bhi value 1st list main h or 2nd list main unko add krna h or jo kisi ek main  h unko as it is daal dena h 
toh hum kya karenge map banayenge value->weight ka jo humain yeh krke de dega 
toh phle list ke iteams map main daal do phir items2 se check krlo agar value present h toh uska weight add krdo nai toh as it is map main daal do or end main map se value vector main daalke return  krdo

**please do upvote**

```
vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) 
    {
        map<int,int> m;
        for(int i=0;i<items1.size();i++)
        {
            m[items1[i][0]]=items1[i][1];
        }
        for(int i=0;i<items2.size();i++)
        {
            if(m.find(items2[i][0])!=m.end())
            {
                m[items2[i][0]]+=items2[i][1];
            }
            else
            {
                m[items2[i][0]]=items2[i][1];
            }
        }
        vector<vector<int>> ans;
        for(auto it : m)
        {
            ans.push_back({it.first,it.second});
        }
        return ans;
        
    }
	```