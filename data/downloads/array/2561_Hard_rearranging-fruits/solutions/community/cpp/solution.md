# 【C++||Java||Python3】Count and match pairs, O(n) time complexity with quickselect

**Author:** RealFan
**Votes:** 75
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3143766/](https://leetcode.com/problems/rearranging-fruits/solutions/3143766/)

---

> **I know almost nothing about English, pointing out the mistakes in my article would be much appreciated.**

> **In addition, I'm too weak, please be critical of my ideas.**
---

# Intuition
1. If the frequency of each number in the two input arrays is even, then you can always find a way to swap the two arrays to become the same. On the contrary, it must be impossible.
2. Find a way to find out the numbers in each array that need to be given to the other, so you get two lists. The exchanged pair must form a one-to-one correspondence between the two lists.
3. **Within each pair, there are two exchange methods**:
    - Direct exchange, the cost is the smaller number.
    - Indirect exchange, choose another small number $x$ as the "intermediate", swap "$a_{i}$ with $x$" and "$x$ with $b_{j}$", the cost is $2x$.
4. **In order to minimize the result, be sure to make full use of "small numbers"**. 
5. So put all the elements of the two arrays that need to be exchanged together and sort them. **Choose the first half as the "costs"**.
6. Choose to use "direct exchange" or "indirect exchange" each time according to the situation. Because the choice of which number is free, **the smallest number in the two arrays can be greedily selected as the intermediate**. (If $x$ is one of $a[i]$ or $b[j]$, the indirect way $2x$ will always greater than direct way $x$, so no need to think of this condition).
7. Find the first half can easily use sort with $O(n\\log{n})$ time complexity, or use [quickselect](https://en.wikipedia.org/wiki/Quickselect) with $O(n)$ time complexity.

# Complexity
- Time complexity: $O(n\\log{n})$ or $O(n)$
- Space complexity: $O(n)$

# Code
Thanks for [Gang-Li's JavaScript solution](https://leetcode.com/problems/rearranging-fruits/solutions/3144240/based-on-realfan-s-solution-improve-the-space-usage-by-not-using-array-in-the-last-step/?orderBy=most_votes)!
``` C++ []
class Solution {
public:
    long long minCost(vector<int>& basket1, vector<int>& basket2) {
        unordered_map<int, int> cnt;
        for (auto c: basket1) cnt[c]++;
        for (auto c: basket2) cnt[c]--;
        vector<int> last;
        for (auto &[k, v]: cnt) {
            // if v is odd, an even distribution is never possible
            if (v % 2) return -1;
            // the count of transferred k is |v|/2
            for (int i = 0; i < abs(v) / 2; ++i)
                last.push_back(k);
        }
        // find the min of two input arrays as the intermediate
        int minx = min(*min_element(basket1.begin(), basket1.end()),
                       *min_element(basket2.begin(), basket2.end()));
        // sort(last.begin(), last.end()) can be used as well
        nth_element(last.begin(), last.begin() + last.size() / 2, last.end());
        return accumulate(last.begin(), last.begin() + last.size() / 2, 0ll, 
            [&](long long s, int x) -> long long { return s + min(2*minx, x); }
        );
    }
};
```
``` Java []
class Solution {
    public long minCost(int[] basket1, int[] basket2) {
        Map<Integer, Integer> cnt = new HashMap<>();
        for (int c: basket1) 
            cnt.put(c, cnt.getOrDefault(c, 0) + 1);
        for (int c: basket2) 
            cnt.put(c, cnt.getOrDefault(c, 0) - 1);
        List<Integer> last = new ArrayList<>();
        for (Map.Entry<Integer, Integer> e: cnt.entrySet()) {
            int v = e.getValue();
            // if v is odd, an even distribution is never possible
            if (v % 2 != 0) return -1;
            // the count of transferred k is |v|/2
            for (int i = 0; i < Math.abs(v) / 2; ++i)
                last.add(e.getKey());
        }
        // find the min of two input arrays as the intermediate
        int minx = Math.min(Arrays.stream(basket1).min().getAsInt(),
                            Arrays.stream(basket2).min().getAsInt());
        // Use quickselect instead of sort can get a better complexity
        Collections.sort(last);
        long res = 0;
        // The first half may be the cost
        for (int i = 0; i < last.size() / 2; ++i) 
            res += Math.min(last.get(i), minx * 2);
        return res;
    }
}
```
``` Python3 []
class Solution:
    def minCost(self, basket1: List[int], basket2: List[int]) -> int:
        cnt = Counter(basket1)
        for x in basket2: cnt[x] -= 1
        last = []
        for k, v in cnt.items():
            # if v is odd, an even distribution is never possible
            if v % 2 != 0:
                return -1
            # the count of transferred k is |v|/2
            last += [k] * abs(v // 2)
        # find the min of two input arrays as the intermediate
        minx = min(basket1 + basket2)
        # Use quickselect instead of sort can get a better complexity
        last.sort()
        # The first half may be the cost
        return sum(min(2*minx, x) for x in last[0:len(last)//2])
```