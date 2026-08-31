# JS, Python, Java, C++ | Simple Bucket Sort Solution w/ Explanation

**Author:** sgallivan
**Votes:** 86
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/1240838/](https://leetcode.com/problems/maximum-gap/solutions/1240838/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

For this problem, we don't need to actually sort every element, which would take longer than **O(N) time**. What we need to do is to find a way to group together numbers in such a way as to allow us to check the larger gaps between consecutive numbers. For this, we can turn to a **bucket sort**.

A bucket sort involves creating an array (**buckets**) in which the elements represent buckets that cover the spread of the numbers to be sorted. Imagine trying to sort a deck of cards; it would only take once through the deck to sort it entirely into **13** "buckets", one for each value. Then we could go through the individual buckets and perform another, smaller sort before joining the entire deck together.

In this situation, however, we only need to perform the first part of the bucket sort. The idea is to define the size of our buckets such that the maximum gap will necessarily be larger than a single bucket. That would mean that our answer could then be found by comparing the highest value in each bucket with the lowest value in the next occupied bucket.

To achieve the right bucket size (**bsize**) for this to work, we'll need to iterate through **nums** once to find the total range (**hi - lo**), then use that to figure out the absolute smallest possible maximum gap value (**(hi - lo) / (nums.length - 1)**). If we make sure to define the bucket size _smaller_ than this value, then as stated earlier, the two numbers that form the maximum gap will have to be found in separate buckets.

Since there are exactly **N** numbers spread throughout the buckets, and since it only requires a single iteration of each number in a bucket to observe the local high and lo values (**currhi, currlo**), then it will take a total of **O(N) time** to perform this process for the entire **buckets** array. And since we only need to make one comparison per pair of buckets with consecutive numbers, and as there are only a maximum of **2 * N** buckets, the comparisons will only take **O(N) time**, as well.

We'll just need to make sure that we remember the previous occupied bucket's high value (**prevhi**) for the next comparison, as well as keeping track of the best result found so far (**ans**). Then, once we reach the end of our **buckets** array, we can simply **return ans**.

 - _**Time Complexity: O(N)** where **N** is the length of **nums**_
    - _finding **hi** and **lo** in **nums**: **O(N)**_
    - _fill **buckets**: **O(N)**_
    - _finding all bucket **hi**'s and **lo**'s: **O(N)**_
    - _comparing all bucket gaps: **O(N)** for up to **2 * N** buckets_
 - _**Space Complexity: O(N)** for **N** numbers spread among at most **2 * N** buckets_

---

#### ***Javascript Code:***
```javascript
var maximumGap = function(nums) {
    if (nums.length < 2) return 0
    let hi = 0, lo = 2e9, ans = 0
    for (let n of nums)
        hi = Math.max(hi, n), lo = Math.min(lo, n)
    let bsize = ~~((hi - lo) / (nums.length - 1)) || 1,
        buckets = Array.from({length: ~~((hi - lo) / bsize) + 1}, () => [])
    for (let n of nums)
        buckets[~~((n - lo) / bsize)].push(n)
    let currhi = 0
    for (let b of buckets) {
        if (!b.length) continue
        let prevhi = currhi || b[0], currlo = b[0]
        for (let n of b) 
            currhi = Math.max(currhi, n), currlo = Math.min(currlo, n)
        ans = Math.max(ans, currlo - prevhi)
    }
    return ans
};
```

---

#### ***Python Code:***
```python
class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2: return 0
        hi, lo, ans = max(nums), min(nums), 0
        bsize = (hi - lo) // (len(nums) - 1) or 1
        buckets = [[] for _ in range(((hi - lo) // bsize) + 1)]
        for n in nums:
            buckets[(n - lo) // bsize].append(n)
        currhi = 0
        for b in buckets:
            if not len(b): continue
            prevhi, currlo = currhi or b[0], b[0]
            for n in b: 
                currhi, currlo = max(currhi, n), min(currlo, n)
            ans = max(ans, currlo - prevhi)
        return ans
```

---

#### ***Java Code:***
```java
class Solution {
    public int maximumGap(int[] nums) {
        if (nums.length < 2) return 0;
        int hi = 0, lo = Integer.MAX_VALUE, ans = 0;
        for (int n : nums) {
            hi = Math.max(hi, n);
            lo = Math.min(lo, n);
        }
        int bsize = Math.max((hi - lo) / (nums.length - 1), 1);
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = (hi - lo) / bsize; i >= 0; i--)
            buckets.add(new ArrayList<>());
        for (int n : nums)
            buckets.get((n - lo) / bsize).add(n);
        int currhi = 0;
        for (List<Integer> b : buckets) {
            if (b.isEmpty()) continue;
            int prevhi = currhi > 0 ? currhi : b.get(0), currlo = b.get(0);
            for (int n : b) {
                currhi = Math.max(currhi, n);
                currlo = Math.min(currlo, n);
            }
            ans = Math.max(ans, currlo - prevhi);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***
```c++
class Solution {
public:
    int maximumGap(vector<int>& nums) {
        if (nums.size() < 2) return 0;
        int hi = 0, lo = INT_MAX, ans = 0;
        for (auto& n : nums)
            hi = max(hi, n), lo = min(lo, n);
        int bsize = max(int((hi - lo) / (nums.size() - 1)), 1);
        vector<vector<int>> buckets((hi - lo) / bsize + 1, vector<int>());
        for (auto& n : nums)
            buckets[(n - lo) / bsize].push_back(n);
        int currhi = 0;
        for (auto& b : buckets) {
            if (b.empty()) continue;
            int prevhi = currhi ? currhi : b[0], currlo = b[0];
            for (auto& n : b)
                currhi = max(currhi, n), currlo = min(currlo, n);
            ans = max(ans, currlo - prevhi);
        }
        return ans;
    }
};
```