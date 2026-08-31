# Greedy C++ & Java

**Author:** cpcs
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3869850/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3869850/)

---

Btw, the question is excatly the same as the one I published before.


[https://leetcode.com/discuss/interview-question/3624545/GPL-Challenge-Q1](https://leetcode.com/discuss/interview-question/3624545/GPL-Challenge-Q1)


# Intuition
Greedy algorithm


(1) sort the items by the profit (items[.][0]) in non increasing order.
(2) select the first k items according non-increasing sorted profit (items[.][0]).
(3) For remaining unselected items, try using them one by one (in the non increasing of profit order) to replace the selected ones.

Conditions for replacing:
(a) The items to be replaced's category must not be unique in selected items. Namely, removing it doesn't reduce the number of categories.
(b) The items to be replaced must have the minimum profit (items[.][0] value) in the selected items when condition (a) is satisified.
(c) The new item to replace the original selected one must have a new category. Namely we use an item with lower profit (or equal) to increase the number of categories. 

We can maintain the selected items's categories using a hash map.

# Approach
Use priority queue & hashmap to maintain the profits and categories.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
C++
```
class Solution {
    long long sqr(long long x) {
        return x * x;
    }

public:
    long long findMaximumElegance(vector<vector<int>>& items, int k) {
        const int n = items.size();
        vector<int> ind(n);
        for (int i = 0; i < n; ++i) {
            ind[i] = i;
        }
        sort(ind.begin(), ind.end(), [&](const int x, const int y) {
            return items[x][0] > items[y][0];
        });
        unordered_map<int, int> num;
        priority_queue<pair<int, int>> q;
        long long v = 0;
        for (int i = 0; i < k; ++i) {
            v += items[ind[i]][0];
            ++num[items[ind[i]][1]];
            q.push({-items[ind[i]][0], ind[i]});
        }
        long long r = v + sqr(num.size());
        for (int i = k; i < n && !q.empty(); ++i) {
            if (num.count(items[ind[i]][1])) {
                continue;
            }
            const int x = q.top().second;
            q.pop();
            if (num[items[x][1]] == 1) {
                --i;
                continue;
            }
            v += items[ind[i]][0] - items[x][0];
            --num[items[x][1]];
            ++num[items[ind[i]][1]];
            r = max(r, v + sqr(num.size()));
        }
        return r;
    }
};
```
Java:
```
class Solution {
    long sqr(long x) {
        return x * x;
    }

    public long findMaximumElegance(int[][] items, int k) {
        final int n = items.length;
        Integer[] ind = new Integer[n];
        for (int i = 0; i < n; ++i) {
            ind[i] = i;
        }
        Arrays.sort(ind, new Comparator<Integer>() {
            @Override
            public int compare(Integer x, Integer y) {
                return Integer.compare(items[y][0], items[x][0]);
            }
        });
        Map<Integer, Integer> num = new HashMap<>();
        PriorityQueue<Pair<Integer, Integer>> q = new PriorityQueue<>(new Comparator<Pair<Integer, Integer>>() {
            @Override
            public int compare(Pair<Integer, Integer> p1, Pair<Integer, Integer> p2) {
                return Integer.compare(p2.getKey(), p1.getKey());
            }
        });
        long v = 0;
        for (int i = 0; i < k; ++i) {
            v += items[ind[i]][0];
            num.put(items[ind[i]][1], num.getOrDefault(items[ind[i]][1], 0) + 1);
            q.add(new Pair<>(-items[ind[i]][0], ind[i]));
        }
        long r = v + sqr(num.size());
        for (int i = k; i < n && !q.isEmpty(); ++i) {
            if (num.containsKey(items[ind[i]][1])) {
                continue;
            }
            int x = q.peek().getValue();
            q.poll();
            if (num.get(items[x][1]) == 1) {
                --i;
                continue;
            }
            v += items[ind[i]][0] - items[x][0];
            num.put(items[x][1], num.get(items[x][1]) - 1);
            num.put(items[ind[i]][1], num.getOrDefault(items[ind[i]][1], 0) + 1);
            r = Math.max(r, v + sqr(num.size()));
        }
        return r;
    }
}
```