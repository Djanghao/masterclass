# [C++] Unordered_map, unordered_set and stable_sort | bucket sort

**Author:** gagan3
**Votes:** 6
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/1197755/](https://leetcode.com/problems/sort-features-by-popularity/solutions/1197755/)

---

**Using Stable sort**

```

class Solution {
public:
    vector<string> sortFeatures(vector<string>& features, vector<string>& responses) {
        unordered_map<string, int> popularity;
        for(const string &f : features)
            popularity[f] = 0;
        
        unordered_set<string> uniqFeats;
        
        for(const auto &r : responses)
        {
            istringstream ss(r);
            string word;
            while(ss >> word)
            {
                if(uniqFeats.insert(word).second)
                    ++popularity[word];
            }
            
            uniqFeats.clear();
        }
        
        stable_sort(features.begin(), features.end(), [&](const string &str1, const string &str2)
                    {
                        return popularity[str1] > popularity[str2];
                    });
        
        return features;
        
    }
};
```

**Using Bucket Sort**
```
class Solution {
public:
    vector<string> sortFeatures(vector<string>& features, vector<string>& responses) {
        unordered_map<string, int> popularity;
        for(const string &f : features)
            popularity[f] = 0;
        
        unordered_set<string> uniqFeats;
        
        for(const auto &r : responses)
        {
            istringstream ss(r);
            string word;
            while(ss >> word)
            {
                if(uniqFeats.insert(word).second)
                    ++popularity[word];
            }
            
            uniqFeats.clear();
        }
        
        vector<vector<string>> buckets(101);
        for(const string &f : features)
            buckets[popularity[f]].push_back(f);
        
        vector<string> res;
        
        for(int i = 100; i >= 0; --i)
        {
            for(const auto &f : buckets[i])
                res.push_back(f);
        }
        
        return res;
        
    }
};
```