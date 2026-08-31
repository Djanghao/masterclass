# C++ O(n) one pass

**Author:** pj-jackson
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5594634/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5594634/)

---


```
class Solution {
public:
    int maximumBeauty(vector<int>& flowers) {
        vector<int> prefix;
        vector<int> negative;
        prefix.push_back(0);
        negative.push_back(0);
        for (int flower: flowers) {
            prefix.push_back(flower + prefix.back());
            if (flower < 0) {
                negative.push_back(flower + negative.back());
            } else {
                negative.push_back(negative.back());
            }
        }

        unordered_map<int, int> indices;
        // maps a number to which indices it appears
        indices[flowers[0]] = negative[1] - prefix[1];

        int answer = -1 * (INT_MAX - 100);
        for (int i = 1; i < flowers.size(); ++i) {
            int flower = flowers[i];
            // want to maximize this
            // - prefix[partner + 1] + negative[partner + 1]
            if (indices.find(flower) != indices.end()) {
                answer = max(answer, flower * 2 + prefix[i] - negative[i] + indices[flower]);
                indices[flower] = max(indices[flower], negative[i + 1] - prefix[i + 1]);
            } else {
                indices[flower] = negative[i + 1] - prefix[i + 1];
            }
        }

        return answer;
    }
};
```