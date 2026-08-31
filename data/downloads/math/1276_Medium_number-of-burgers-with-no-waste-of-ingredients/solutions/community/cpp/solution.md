# Fast, Accepted O(1) || C/JAVA Code || BEATS 100%

**Author:** thilaknv
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4011164/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4011164/)

---

# Complexity
- Time complexity : **O(1)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# JAVA
 -- | Details | --
 -- | -- | --:
**Runtime** | **1** *ms* | *Beats* **100%**
**Memory** | **40** *MB* | *Beats* **70%**
```
class Solution {
    public List<Integer> numOfBurgers(int tSlices, int cSlices) {
        List<Integer> result = new ArrayList<Integer>();
        int x = tSlices - 2*cSlices;
        int y = cSlices - x/2;
        if(x<0 || x%2!=0 || y<1 )
            if(tSlices!=0 || cSlices!=0)
                return result;
        result.add(x/2); result.add(y);
        return result;
    }
}
```
# C
 -- | Details | --
--- | --- | ---:
**Runtime** | **3** *ms* | *Beats* **100%**
**Memory** | **5** *MB* | *Beats* **100%**
```
int* numOfBurgers(int tSlices, int cSlices, int* returnSize){
    *returnSize = 0;
    int *result;
    int x = tSlices-2*cSlices;
    int y = cSlices-x/2;
    if(x<0 || x%2 || y<1 )
        if(tSlices || cSlices)
            return result;
    *returnSize = 2;
    result = (int *)malloc(sizeof(int)*2);
    result[0] = x/2; result[1] = y;
    return result;    
}
```
## Tom need a UPVOTE : |
![waiting-tom-and-jerry.gif](./images/0.gif)