# Simple C++ Counting Sort solution

**Author:** Hongsun
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4739372/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4739372/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maxNumberOfApples(vector<int>& weight) {
        int apples[1001] = {};
        for(const auto  & w: weight){
            apples[w]++;
        }
        int nApples = 0;
        int total = 5000;
        for(int i = 0; i < 1001; i++){
            while(apples[i] > 0 && total >= 0){
                apples[i]--;
                nApples++;
                total -= i;
            }
            if(total < 0){
                nApples -= 1;
                break;
            }
        }

        return nApples;
    }
};
```