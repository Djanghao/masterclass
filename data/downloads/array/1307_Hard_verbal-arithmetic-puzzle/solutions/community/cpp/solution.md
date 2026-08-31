# 8ms backtracking solution

**Author:** zhengpenghu
**Votes:** 2
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/3777056/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/3777056/)

---

# Intuition
Example\uFF1A`"SEND"+"MORE"= "MONEY"`

1000S + 101 E + 100O+ 10N + 10 R + D = 10000M + 1000 O + 100N + 10 E + Y

- 10000M + 1000 S - 900 O+ 91 E - 90 N + 10 R + D - 10 E - Y = 0


# Approach

put these (count, char) pair in a sorted vector. 

Backtracking with some early pruning.
1. if char count > 10, is not solvable. 
2. In backtracing, if abs(current sum) > the most possible sum of remaining elements, then we are not able to set current sum to 0 again. Return false early. This reduces latency from 200ms to 8ms.

# Code
```
class Solution {
public:
    bool isSolvable(vector<string>& words, string result) {
        // check total char count <=10, otherwise return false;
        unordered_map<char,int> char_count;
        unordered_set<char> lead_char;
        for(auto& word: words){
            for(int i = word.size()-1;i>=0;i--){
                char_count[word[i]]+= pow(10,word.size()-1-i);
            }
            if(word.size()>1) lead_char.insert(word[0]);
        }
        for(int i = result.size()-1;i>=0;i--){
            char_count[result[i]]-= pow(10,result.size()-1-i);
        }
        if(result.size()>1) lead_char.insert(result[0]);

        // 10+ chars
        if(char_count.size() >10) {return false;}
        vector<char> digit_map(10,' '); 
        vector<std::pair<int,char>> candidates;
        for(auto p:char_count){
            candidates.push_back(make_pair(p.second,p.first));
        }
        sort(candidates.begin(),candidates.end(),[](std::pair<int,char>a, std::pair<int,char> b) {
            return abs(a.first) > abs(b.first);
        });
        return BackTrace(lead_char,/*cur_sum=*/0,candidates,/*candidate_idx=*/0,digit_map);
    }

    bool BackTrace(unordered_set<char>& lead_char,int cur_sum, const vector<std::pair<int,char>>& candidates, int candidate_idx,  vector<char>& digit_map) {
        if (candidate_idx == candidates.size()){
            return cur_sum == 0;
        }
        // Early prune when cur_sum has 0 chance to get back to 0.
        if(abs(cur_sum)>abs(9*candidates[candidate_idx].first)*(candidates.size()-candidate_idx)){return false;}
            // pick a digit for candidates[candidate_idx]
        for (int i = 0;i<10;i++){
            if(digit_map[i] != ' ') continue;
            if(i==0 && lead_char.count(candidates[candidate_idx].second)==1) continue; // lead char != 0
            digit_map[i] = candidates[candidate_idx].second;
            if(BackTrace(lead_char,cur_sum+i*candidates[candidate_idx].first,candidates, candidate_idx+1, digit_map)) {return true;}
            digit_map[i] = ' ';
        }
        return false;
    }
};
```