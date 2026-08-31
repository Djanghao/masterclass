# Accepted C++ solution using heap and a small trick

**Author:** leetNinjaX
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/113640/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/113640/)

---

```
class CustomClass{
public:
    CustomClass(int x) : numerator(x), denominator(1), val(x) {}
    bool operator<(const CustomClass &o) const {
        return val < o.val;
    }
    double numerator;
    double denominator;
    double val;
};


class Solution {
public:
    double minmaxGasDist(vector<int>& stations, int K) {
        double res = 0;
        double threshold = 0;
        priority_queue<CustomClass> gap;
        for(int i = 1; i < stations.size(); i++) {
            int diff = stations[i] - stations[i - 1];
            threshold += diff/(double(K + 1));
            gap.push(CustomClass(diff));
        }
        for(int i = 0; i < K;) {
            auto top = gap.top();
            gap.pop();
            while(i < K && (top.val >= gap.top().val || top.val > threshold)) {
                i++;
                top.denominator++;
                top.val = top.numerator / top.denominator;
            }
            gap.push(top);
        }
        return gap.top().val;
    }
};
```