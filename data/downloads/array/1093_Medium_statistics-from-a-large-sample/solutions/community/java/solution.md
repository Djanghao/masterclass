# Simple Solution || 1ms || Beats 100% || Java

**Author:** Vimalmr
**Votes:** 4
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/4500011/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/4500011/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
class Solution {
    public double[] sampleStats(int[] count) {
        double arr[] = new double[5];
        long sum = 0;
        int max=0, maxval=0, maxi=0, low=-1, n=0;
        for(int i=0; i<count.length; i++){
            if(count[i]!=0){
                if(count[i]>maxval){
                    max = i;
                    maxval = count[i];
                }
                if(low == -1){
                    low = i;
                }
                maxi = i;
                sum += (long)i * count[i];
                n += count[i];
            }
        }
        int far = 0;
        if(n%2!=0){
            for(int i=low; i<=maxi; i++){
                far += count[i];
                if(far >= n/2 + 1){
                    arr[3] = i;
                    break;
                }
            }
        }
        else{
            for(int i=low; i<=maxi; i++){
                far += count[i];
                if(far >= n/2 + 1){
                    arr[3] = i;
                    break;
                }
                else if(far == n/2){
                    for(int k=i+1; k<=maxi; k++){
                        if(count[k]!=0){
                            arr[3] = (i+k)/2.0;
                            break;
                        }
                    }
                    break;
                }
            }
        }
        arr[0] = low;
        arr[1] = maxi;
        arr[2] = (double)sum/n;
        arr[4] = max;
        return arr;
    }
}
```