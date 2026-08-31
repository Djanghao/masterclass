# Python3 || 6 lines, sort and check  || T/S: 1350 ms / 30 MB

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098939/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6098939/)

---

Here's the intuition:
- The problem is equivalent to removing each distinct integer in `nums`, and then determining whether there still exists an integer in that revised array that is exactly half the sum  of that array.

Here's the plan:
1. We determine the sum of `nums`, construct a *Counter* for `nums`, and sort `the keys of the counter`in non-increasing order.

2. We iterate through the sorted keys with respect to the intuition above.
3. When we encounter an integer that meets the criteria above, we return it as the solution.

```python3 []
class Solution:
    def getLargestOutlier(self, nums: List[int]) -> int:

        ctr, sm = Counter(nums), sum(nums)
        cands = sorted(ctr, reverse = True)

        for n in cands:
            d, m = divmod(sm - n, 2)
            if m: continue
                
            if d in cands and (d != n or ctr[d] > 1): return n
```
```cpp []
class Solution {
public:
    int getLargestOutlier(vector<int>& nums) {
        unordered_map<int, int> ctr;
        int sm = 0;

        for (int num : nums) {
            ctr[num]++;
            sm += num;}

        vector<int> cands;
        for (const auto& [num, count] : ctr) {
            cands.push_back(num);}

        sort(cands.rbegin(), cands.rend());

        for (int n : cands) {
            int d = (sm - n) / 2;
            int m = (sm - n) % 2;
            if (m == 0 && ctr.count(d) && (d != n || ctr[d] > 1)) {
                return n;}
        }
        return -1;}
};
```
```java []
class Solution {
    public int getLargestOutlier(int[] nums) {
        Map<Integer, Integer> ctr = new HashMap<>();
        int sm = 0;

        for (int num : nums) {
            ctr.put(num, ctr.getOrDefault(num, 0) + 1);
            sm += num;
        }

        List<Integer> cands = new ArrayList<>(ctr.keySet());
        cands.sort(Collections.reverseOrder());

        for (int n : cands) {
            int d = (sm - n) / 2;
            int m = (sm - n) % 2;
            if (m == 0 && ctr.containsKey(d) && (d != n || ctr.get(d) > 1)) {
                return n;
            }
        }

        return -1; 
    }
}

```

[https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/submissions/1467064288/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/submissions/1467064288/)

I could be wrong, but I think that time complexity is *O*(*N* + *M* log *M*) and space complexity is *O*(*M*), in which *N* ~ `len(nums)` and *M* ~ distinct integers in `nums`.