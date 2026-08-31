# Antarnab solution || sorting

**Author:** Arnab-Chatterjee
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/3371442/](https://leetcode.com/problems/mice-and-cheese/solutions/3371442/)

---


```
class Solution
{
public:
    static bool comp(vector<int> &a, vector<int> &b)
    {
        return a[0] > b[0];//antarnab solution
    }
    int miceAndCheese(vector<int> &reward1, vector<int> &reward2, int k)
    {
        vector<vector<int>> arr;//antarnab solution
        for (int i = 0; i < reward1.size(); i++)
        {
            arr.push_back({reward1[i] - reward2[i], reward1[i], reward2[i]});
        }
        sort(arr.begin(), arr.end(), comp);
        int ans = 0;
        int i = 0;
        while (k > 0)//antarnab solution
        {
            ans += arr[i][1];
            i++;
            k--;
        }
        for (; i < arr.size(); i++)
            ans += arr[i][2];

        return ans;
    }
};
```