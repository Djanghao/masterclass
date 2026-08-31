# Simple C++ solution

**Author:** mkotov
**Votes:** 2
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/1589518/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/1589518/)

---

I think that it is better to use different functions to compute different statistics because this approach is more reusable and easier to understand. It's a little bit slower for this problem, but I'm okay with that.
```
class Solution {
public:
    double get_minimum(const vector<int>& cs) {
        return find_if(cs.begin(), cs.end(), [](int c) { return c > 0; }) - cs.begin();
    }
    
    double get_maximum(const vector<int>& cs) {
        return cs.rend() - 1 - find_if(cs.rbegin(), cs.rend(), [](int c) { return c > 0; });
    }
    
    double get_mean(const vector<int>& cs) {
        double s = 0;
        double m = 0;
        for (int i = 0; i < cs.size(); ++i) {
            s += cs[i];
            m += 1.0 * i * cs[i];
        }
        return m / s;
    }
        
    double get_mode(const vector<int>& cs) {
        return max_element(cs.begin(), cs.end()) - cs.begin();
    }
    
    double get_median(const vector<int>& cs) {
        int s = accumulate(cs.begin(), cs.end(), 0);
        
        int t = 0;
        for (auto i = cs.begin(); i != cs.end(); ++i) {
            t += *i;
            if (2 * t > s) {
                return i - cs.begin();
            }
            if (2 * t == s) {
                if (s % 2 == 1) { 
                    return i - cs.begin();
                }
                auto j = find_if(i + 1, cs.end(), [](int c) { return c > 0; });
                return (i - cs.begin() + j - cs.begin()) / 2.0;
            }     
        }
        throw invalid_argument("At least one element should be positive.");        
    }
    
    vector<double> sampleStats(vector<int>& count) {
        return {
            get_minimum(count), 
            get_maximum(count), 
            get_mean(count), 
            get_median(count), 
            get_mode(count)};
    }
};
```