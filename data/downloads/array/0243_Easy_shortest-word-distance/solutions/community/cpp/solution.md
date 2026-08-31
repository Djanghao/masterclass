# Simple C++ solution

**Author:** snowcat
**Votes:** 13
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/67025/](https://leetcode.com/problems/shortest-word-distance/solutions/67025/)

---

    class Solution {
    public:
        int shortestDistance(vector<string>& words, string word1, string word2) {
            int pos1 = -1, pos2 = -1, res = words.size();
            for (auto it = words.begin(); it != words.end(); ++it){
                if ((*it).compare(word1) == 0) pos1 = it - words.begin();
                else if ((*it).compare(word2) == 0) pos2 = it - words.begin();
                else continue;
                //if neither equals to word1 and 2, loop is continued and last step skipped
                if (pos1 >= 0 && pos2 >= 0 && abs(pos1 - pos2) < res) res = abs(pos1 - pos2); 
            }
            return res;
        }
    };