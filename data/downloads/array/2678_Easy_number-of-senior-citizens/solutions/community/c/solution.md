# esay solution in three languages

**Author:** shreyash_5506
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5689954/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5689954/)

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
```javascript []

var countSeniors = function(details) {
    let count=0;
   for(let i=0;i<details.length;i++){
        if(details[i][11]>=6 && details[i][12]>=0){
            if(details[i][11]==6 && details[i][12]==0){
                continue;
            }
            count++;
        }
   }
   return count;
};
```
```python []

class Solution(object):
    def countSeniors(self, details):
        count =int(0)
        for i in range(len(details)) :
            if details[i][11]>='6' and details[i][12]>='0' :
                if details[i][11]=='6' and details[i][12]=='0' :
                    continue
                count = count+1
        return count
```
``` c []
    int countSeniors(char ** details, int detailsSize){
    int count=0;
     for(int i=0;i<detailsSize;i++){
        if(details[i][11]>='6' && details[i][12]>='0'){
            if(details[i][11]=='6' && details[i][12]=='0'){
                continue;
            }
            count++;
        }
   }
   return count;
}

```
