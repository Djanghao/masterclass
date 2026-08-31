# O(n) || Easy || 0ms

**Author:** ZEON3099
**Votes:** 3
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4258388/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4258388/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
public:
    int movesToMakeZigzag(vector<int>& gl) {
        
        int n = gl.size();
        if(n==1)    return 0;
        int gla=0,lga=0;

        for(int i = 0 ; i < n ; ++i)
        {
            if(i&1)
            {
                if(i==n-1)
                {
                    if(gl[n-1]>=gl[n-2])
                        gla += gl[n-1] - gl[n-2] + 1;
                }
                else if(gl[i]>=min(gl[i+1],gl[i-1]))
                {
                    gla+= gl[i]-min(gl[i+1],gl[i-1])+1;
                }
            }
            else
            {
                if(i==0)
                {
                    if(gl[0]>=gl[1])
                        lga += gl[0]-gl[1]+1;
                }
                else if(i==n-1)
                {
                    if(gl[n-1]>=gl[n-2])
                        lga+= gl[n-1] - gl[n-2] + 1;
                }
                else if(gl[i]>=min(gl[i+1],gl[i-1]))
                {
                    lga += gl[i]-min(gl[i+1],gl[i-1])+1;
                }
                
            }
        }
        return min(lga,gla);
    }
};
```