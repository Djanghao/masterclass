# Simple C++ Solution

**Author:** itzritz
**Votes:** 3
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2046994/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2046994/)

---

```
class Solution {
public:
    vector<string> mostVisitedPattern(vector<string>& username, vector<int>& timestamp, vector<string>& website) {
        unordered_map<string, map<int, string>> mapp; // mapp[username][timestamp] = website;
        map<string, int> freq; // freq["w1 w2 w3"] = count
        int maxFreq = 0;
        for(int i=0; i<username.size(); i++){
            mapp[username[i]][timestamp[i]] = website[i];
        }
        
        for(auto [username, timeWebsiteMap] : mapp){
            unordered_set<string> ss;
            
            for(auto it1 = timeWebsiteMap.begin(); it1 != timeWebsiteMap.end(); it1++){
                for(auto it2 = next(it1); it2 != timeWebsiteMap.end(); it2++){
                    for(auto it3 = next(it2); it3 != timeWebsiteMap.end(); it3++){
                        ss.insert(it1->second + " " + it2->second + " " + it3->second); // all triplets of -> "w1 w2 w3"
                    }
                }
            }
            for(auto s : ss){
                freq[s]++;
                maxFreq = max(maxFreq, freq[s]);
            }
        }
        
        string res = "";
        for(auto [websiteTriplets, _freq] : freq){
            if(_freq == maxFreq){
                res = websiteTriplets;
                break;
            }
        }
        vector<string> resVec(3);
        istringstream ss(res);
        ss >> resVec[0] >> resVec[1] >> resVec[2];
        return resVec;
    }
};


```