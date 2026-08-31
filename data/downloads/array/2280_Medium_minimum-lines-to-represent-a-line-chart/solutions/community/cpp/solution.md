# C++ solution

**Author:** rs2570089
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2915313/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2915313/)

---

# Intuition
First thought was of finding the slope.

# Approach
Sorted the array in the terms of x axis value so that we can get the lines in the increasing order then one by one checked the slope if i get the new value of slope that means new line has been found and increment the counter.

# Complexity
- Time complexity:
    O(n*log(n)) where n = total number of points

- Space complexity:
    O(1)

# Code
```
class Solution {
public:

    int minimumLines(vector<vector<int>>& stockPrices) {
        sort(stockPrices.begin(), stockPrices.end());




        int dx,dy, ans=1;
        long double slope;

        if(stockPrices.size() < 2) {
            return 0;
        }

        dx = stockPrices[1][0] - stockPrices[0][0];
        dy = stockPrices[1][1] - stockPrices[0][1];
        slope = (long double)dy/dx;

        for(int i=1;i<stockPrices.size()-1;i++) {
            dx = stockPrices[i+1][0] - stockPrices[i][0];
            dy = stockPrices[i+1][1] - stockPrices[i][1];
            cout << dx << " " << dy << endl;
            if((long double)dy/dx != slope) {
                cout << (long double)slope << endl;
                ans++;
                slope = (long double)dy/dx;
            }
        }
        return ans;
    }
};
```