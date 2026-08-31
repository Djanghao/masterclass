# 100% faster in runtime and memory usage - Logarithmic Solution

**Author:** Kab_Tak_Bhagogay
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/460342/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/460342/)

---

```
#include<math.h>
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int count=0;
        for(auto const num : nums){
            if(((int(log10(num)+1)) % 2) == 0){
            count++;
            }
        }
        return count;
    }
};
```
using logarithmic function to find the number of digits & using typecasting to convert it to integer type .