# C++ simple with explanations, without GCD, faster than 95%

**Author:** YehudisK
**Votes:** 27
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/776795/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/776795/)

---

```
class Solution {
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        std::unordered_map<int, int> map;
        for (int i=0; i<deck.size(); i++) // store in unordered_map the amount of cards with each number
            map[deck[i]]++;
        
        int x = INT_MAX;
        for (std::pair<int, int> num : map) // find minimum
        {
            if (num.second < x)
                x = num.second;
        }
        if (x < 2) return false;
        
        for(int i=2; i<=x;i++) // loop through all numbers smaller than minimum
        {
            bool good = true;
            for (std::pair<int, int> num : map) // if all groups of cards divide by i - flag stays true
            {
                if (num.second % i != 0)
                {
                    good = false;
                    break;
                }
                    
            }
            if (good) return true;
        }
            
        return false;
    }
};
```