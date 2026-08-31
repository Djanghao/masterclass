# C++ solution || Simple and easy approach

**Author:** prathams29
**Votes:** 2
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3713204/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/3713204/)

---

# Code
```
class Solution {
public:
    vector<double> sampleStats(vector<int>& count) {
        int max_val = INT_MIN, min_val = INT_MAX, sampleCount = 0;
        double totalValue = 0;
        int maxSampleValue = 0, mode_val;
        for(int i=0; i<256; i++){
            if(count[i] > 0){
                totalValue += (i * 1.0) * (count[i]  * 1.0);
                sampleCount += count[i];
                max_val = max(max_val, i);
                min_val = min(min_val, i);
                if(maxSampleValue < count[i]){
                    maxSampleValue = count[i];
                    mode_val = i;
                }
            }
        }
        double mean_val = totalValue / (sampleCount * 1.0);
        int last = 0, to_limit = 0;
        double median_val;
        for(int i=0; i<256; i++){
            if(count[i] > 0){
                if(to_limit + count[i] > (sampleCount /2 )){
                    int remain = (sampleCount /2) - to_limit;
                    if(sampleCount & 1){
                        median_val = i * 1.0;
                    }
                    else{
                        if(remain < 1){
                            median_val = (last + i) / 2.0;
                        }
                        else{
                            median_val = i * 1.0;
                        }
                    }
                    break;
                }
                to_limit += count[i];
                last = i;
            }
        }
        return {min_val*1.0, max_val*1.0, mean_val, median_val, mode_val*1.0};
    }
};
```