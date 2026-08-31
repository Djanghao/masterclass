# [Python3] freq table

**Author:** ye15
**Votes:** 7
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/1411958/](https://leetcode.com/problems/sort-features-by-popularity/solutions/1411958/)

---


```
class Solution:
    def sortFeatures(self, features: List[str], responses: List[str]) -> List[str]:
        freq = defaultdict(int)
        for response in responses: 
            words = set(response.split())
            for feature in features: 
                if feature in words: freq[feature] += 1
        return sorted(features, key=lambda x: freq.get(x, 0), reverse=True)
```


```
class Solution {
public:
    vector<string> sortFeatures(vector<string>& features, vector<string>& responses) {
        unordered_map<string, int> freq; 
        
        for (auto& response : responses) {
            istringstream iss(response); 
            string buf; 
            unordered_set<string> words; 
            while (iss >> buf) words.insert(buf); 
            
            for (auto& feature : features) 
                if (words.count(feature)) freq[feature]++; 
        }
        
        stable_sort(features.begin(), features.end(), [&](auto& lhs, auto& rhs) { return freq[lhs] > freq[rhs]; } ); 
        return features; 
    }
};
```