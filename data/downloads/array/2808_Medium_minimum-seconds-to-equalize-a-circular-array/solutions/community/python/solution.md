# ✅C++\Java/Python ✅Explained all the lines- using unordered_map || time & space -O(n)

**Author:** piyushkr6161
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3870723/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3870723/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$ 
```C++ []
class Solution
{
public:
    int minimumSeconds(vector<int> &nums)
    {
        // we replace the number at i with i-1 or i+1
        int n = nums.size();
        int ans = n - 1; // assuming all numbers are different

        // store all indexs of same number
        unordered_map<int, vector<int>> m;

        for (int i = 0; i < n; i++)
            m[nums[i]].push_back(i);

        for (auto i : m) // traverse all the different number
        {
            vector<int> v = i.second; // all the indexs of same number
            int len = v.size();       // size of vector
            //  now we change all remaining number= total size of array - size of same number
            int maxi = (n - 1) - (v[len - 1] - v[0]);
            for (int j = 1; j < len; j++)
            {
                // maximum difference btw adjacent index
                maxi = max(maxi, v[j] - v[j - 1] - 1);
            }
            // minimise the maximum distance btw any number
            ans = min(ans, maxi);
        }
        // we traverse in both direction at same time so we give half of the answer
        return (ans + 1) / 2;
    }
};
```
```python []
class Solution(object):
    def minimumSeconds(self, nums):
        # we replace the number at i with i-1 or i+1
        n = len(nums)
        ans = n - 1  # assuming all numbers are different

        # store all indexes of the same number
        m = {}

        for i, num in enumerate(nums):
            if num not in m:
                m[num] = []
            m[num].append(i)

        for v in m.values():  # traverse all the different numbers
            v.sort()  # Sort the indexes in ascending order
            len_v = len(v)  # size of vector
            # now we change all remaining number = total size of the array - size of the same number
            maxi = (n - 1) - (v[len_v - 1] - v[0])
            for j in range(1, len_v):
                # maximum difference between adjacent indexes
                maxi = max(maxi, v[j] - v[j - 1] - 1)
            # minimize the maximum distance between any numbers
            ans = min(ans, maxi)

        # we traverse in both directions at the same time, so we give half of the answer
        return (ans + 1) // 2
```
```Java []
class Solution {
   public int minimumSeconds(List<Integer> nums) {
        // we replace the number at i with i-1 or i+1
        int n = nums.size();
        int ans = n - 1; // assuming all numbers are different

        // store all indexes of the same number
        Map<Integer, List<Integer>> m = new HashMap<>();

        for (int i = 0; i < n; i++) {
            if (!m.containsKey(nums.get(i))) {
                m.put(nums.get(i), new ArrayList<>());
            }
            m.get(nums.get(i)).add(i);
        }

        for (Map.Entry<Integer, List<Integer>> entry : m.entrySet()) { // traverse all the different numbers
            List<Integer> v = entry.getValue(); // all the indexes of the same number
            int len = v.size(); // size of list
            // now we change all remaining numbers = total size of the array - size of the same number
            int maxi = (n - 1) - (v.get(len - 1) - v.get(0));
            for (int j = 1; j < len; j++) {
                // maximum difference between adjacent indexes
                maxi = Math.max(maxi, v.get(j) - v.get(j - 1) - 1);
            }
            // minimize the maximum distance between any numbers
            ans = Math.min(ans, maxi);
        }

        // we traverse in both directions at the same time, so we give half of the answer
        return (ans + 1) / 2;
    }
}    
```
![LEETCODE.png](./images/0.png)
