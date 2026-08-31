# Solution

**Author:** deleted_user
**Votes:** 211
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/2997000/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/2997000/)

---

```C++ []
#include <stack>
#include <vector>
#include <utility>
#include <algorithm>
#include <numeric>
using std::stack;
using std::pair;
using std::vector;
using std::nth_element;
using std::accumulate;

class Solution {

public:
    int maxProfit(int k, const vector<int>& prices) {
        vector<int> profits;
        stack<pair<int, int>> vps;
        int v = 0;
        int p = -1;
        
        const int n = prices.size();
        for (;;) {
            for (v = p + 1; (v + 1) < n && prices[v] >= prices[v + 1]; ++v);
            for (p = v; (p + 1) < n && prices[p] <= prices[p + 1]; ++p);
            if (p == v) break;
            
            while (!vps.empty() && prices[vps.top().first] >= prices[v]) {
                auto vp = vps.top();
                profits.push_back(prices[vp.second] - prices[vp.first]);
                vps.pop();
            }
            while (!vps.empty() && prices[vps.top().second] <= prices[p]) {
                profits.push_back(prices[vps.top().second] - prices[v]);
                v = vps.top().first; //  (v1, p2)
                vps.pop();
            }
            vps.emplace(v, p);
        }
        while (!vps.empty()) {
            auto vp = vps.top(); vps.pop();
            profits.push_back(prices[vp.second] - prices[vp.first]);
        }
        if (k >= profits.size()) {
            return accumulate(profits.begin(), profits.end(), 0);
        } else {
            nth_element(profits.begin(), profits.end() - k, profits.end());
            return accumulate(profits.end() - k, profits.end(), 0);
        }
    }
};
```

```Python3 []
class DoubleLinkListNode:
    def __init__(self, ind, pre = None, next = None):
        self.ind = ind
        self.pre = pre if pre else self
        self.next = next if next else self

class Solution:
    def MinMaxList(self, arr: List[int]) -> List[int]:
        n = len(arr)
        if n == 0:
            return []
        sign = -1
        res = [9999]
        for num in arr:
            if num * sign > res[-1] * sign:
                res[-1] = num
            else:
                res.append(num)
                sign *= -1
        if len(res) & 1:
            res.pop()
        return res
    def maxProfit(self, k: int, prices: List[int]) -> int:
        newP = self.MinMaxList(prices)
        n = len(newP)
        m = n // 2
        res = 0
        for i in range(m):
            res += newP[i*2+1] - newP[i*2]
        if m <= k:
            return res
        head, tail = DoubleLinkListNode(-1), DoubleLinkListNode(-1)
        NodeList = [DoubleLinkListNode(0, head)]
        for i in range(1, n):
            NodeList.append(DoubleLinkListNode(i, NodeList[-1]))
            NodeList[i-1].next = NodeList[i]
        NodeList[n-1].next = tail
        head.next, tail.pre = NodeList[0], NodeList[n-1]
        heap = []
        for i in range(n-1):
            if i&1:
                heappush(heap, [newP[i] - newP[i+1], i, i+1, 0])
            else:
                heappush(heap, [newP[i+1] - newP[i], i, i+1, 1])
        while m > k:
            loss, i, j, t = heappop(heap)
            if NodeList[i] == None or NodeList[j] == None: continue
            m -= 1
            res -= loss
            nodei, nodej = NodeList[i], NodeList[j]
            nodel, noder = nodei.pre, nodej.next
            l, r = nodel.ind, noder.ind
            valL, valR = newP[l], newP[r]
            noder.pre, nodel.next = nodel, noder
            NodeList[i], NodeList[j] = None, None
            if t == 0:
                heappush(heap, [valR - valL, l, r, 1])
            elif l != -1 and r != -1:
                heappush(heap, [valL - valR, l, r, 0])
        return res
```

```Java []
class Solution {
    static int solveTab(int[] prices,int k){
        int n=prices.length;

        int [][] curr = new int[2][k+2];
        int [][] next = new int[2][k+2];

        for(int index=n-1;index>=0;index--){
            for(int buy=1;buy>=0;buy--){
                for(int limit=1;limit<=k;limit++){
                    int profit=0;
                    if(buy==1){
                        int salekaro=prices[index]+next[0][limit-1];
                        int skipkaro=0+next[1][limit];
                        profit+=Math.max(salekaro,skipkaro);
                    }
                    else{
                        int buykaro=-prices[index]+next[1][limit];
                        int skipkaro=0+next[0][limit];
                        profit+=Math.max(buykaro,skipkaro);
                    }
                    curr[buy][limit]=profit;
                }
            }
            next=curr;
        }
        return next[0][k];
    }
    public int maxProfit(int k, int[] prices) {
        return solveTab(prices,k);
    }
}
```
