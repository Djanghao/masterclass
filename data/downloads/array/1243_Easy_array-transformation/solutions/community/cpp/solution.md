# C++ || Sliding snapshot

**Author:** chrihop
**Votes:** 1
**Link:** [https://leetcode.com/problems/array-transformation/solutions/2860955/](https://leetcode.com/problems/array-transformation/solutions/2860955/)

---

# Intuition

Noted: the question says the increment / decrement condition is based on the previous day's value. So, we need to take a snapshot of the last day.

In my solution, I use three temporary variables to implement a sliding snapshot.

# Code
```
class Solution {
public:
    vector<int> transformArray(vector<int>& arr) {
        bool change;
        int n = arr.size(), left, middle, right;
        do
        {
            change = false;
            middle = arr[0];
            right = arr[1];
            for (int i = 2; i < n; i++)
            {
                left = middle;
                middle = right;
                right = arr[i];

                if (left < middle && middle > right)
                {
                    arr[i - 1] --;
                    change = true;
                }
                else if (left > middle && middle < right)
                {
                    arr[i - 1] ++;
                    change = true;
                }
            }
        } while (change);
        return arr;
    }
};
```