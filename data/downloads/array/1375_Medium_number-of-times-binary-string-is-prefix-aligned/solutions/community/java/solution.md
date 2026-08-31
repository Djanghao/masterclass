# Java: Time - O(n) Space - O(1) with simple explanation

**Author:** chamolamanas19
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/900538/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/900538/)

---

Since all numbers are distinct and none can be repeated, for any index i, if the max till that is equal to i+1 then only all the switches are lit up. Because all the elements from 1 to i+1 are covered. We can simply prove this by taking contradiction. If we assume that one of the bulbs from 1 to i+1 is not on to complete the network, then we will obviously have another value greater than i+1 at a ceratin index which will be greater than our maximum(i+1) and hence we will have all the bulbs turned on at that new max index since all the bulbs from 1 to new max must be on to complete the network. 

```
    public int numTimesAllBlue(int[] light) {
        int max=light[0];
        int ans=0;
        for(int i=0;i<light.length; i++){
            if(light[i]>max)
                max=light[i];
            
            if(max==i+1)
                ans++;
        }
        return ans;
    }
```