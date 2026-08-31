# C++ Two Simple and Short Cool Explained Solutions, 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 38
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/1419685/](https://leetcode.com/problems/find-unique-binary-string/solutions/1419685/)

---

**Solution I - Brute force**
Keep in a map all the int values, then just go from zero until finding a number that we didn't have in the array.
```
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        unordered_set<int> s;
        for (auto num : nums) s.insert(stoi(num, 0, 2));
        int res = 0;
        while (++res) {
            if (!s.count(res)) return bitset<16>(res).to_string().substr(16-nums.size());
        }
        return "";
    }
};
```
**Solution II - Super smart and cool**
We loop through the numbers and set the ith digit as the opposite of the ith digit in the ith number.
```
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        string res = nums[0];
        int n = min(res.size(), nums.size());
        for (int i = 0; i < n; i++)
            res[i] = nums[i][i] == '0' ? '1' : '0';
        return res;
    }
};
```
**Like it? please upvote!**