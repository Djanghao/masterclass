# Simplified code - JS, C++ and Python

**Author:** Nabeel7801
**Votes:** 1
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5980280/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5980280/)

---

# Approach
Ahh this question got me. Here is the simplified code for this question. I used the approach used in this solution: [Solution Link](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5687003/min-heap-greedy/)

View this solution for a better understanding of the code I used.


# Complexity
- Time complexity:
O(logt)

- Space complexity:
O(n)


# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const MOD = BigInt(1e9 + 7);
function powerMod(base, exp) {
    let result = BigInt(1);
    base = BigInt(base);
    exp = BigInt(exp);
    
    while (exp > 0) {
        if (exp % BigInt(2) === BigInt(1)) {
            result = (result * base) % MOD;
        }
        base = (base * base) % MOD;
        exp = exp / BigInt(2);
    }
    
    return result;
}

var getFinalState = function(nums, k, multiplier) {
    if (multiplier === 1) return nums;
    let n = nums.length;
    
    const heap = new MinPriorityQueue({ compare: (a, b) => 
        a[0] - b[0] || a[1] - b[1]
    })
    
    for (let i = 0; i < n; i++) {
        heap.enqueue([BigInt(nums[i]), i])
    }
    
    let counts = new Map();
    
    while (counts.size < n && k > 0) {
        let [x, y] = heap.dequeue();
        x *= BigInt(multiplier);
        
        heap.enqueue([x, y])
        counts.set(y, (counts.get(y) || 0) + 1);
        k--;
    }

    let exp = Math.floor(k / n);
    let rem = k % n;

    const res = new Array(n).fill(0);
    while (!heap.isEmpty()) {
        const [num, pos] = heap.dequeue();
        const mul = powerMod(multiplier, exp + (rem > 0 ? 1 : 0));
        res[pos] = Number(((num % MOD) * (mul % MOD)) % MOD);
        rem--;
    }

    return res;

};
```

```C++ []
#include <vector>
#include <queue>
#include <unordered_map>
#include <cmath>

const long long MOD = 1e9 + 7;

long long powerMod(long long base, long long exp) {
    long long result = 1;
    base = base % MOD;
    
    while (exp > 0) {
        if (exp % 2 == 1) {
            result = (result * base) % MOD;
        }
        base = (base * base) % MOD;
        exp /= 2;
    }
    
    return result;
}

std::vector<int> getFinalState(std::vector<int>& nums, int k, int multiplier) {
    if (multiplier == 1) return nums;
    int n = nums.size();
    
    // Min heap to store pairs of (value, index)
    auto cmp = [](const std::pair<long long, int>& a, const std::pair<long long, int>& b) {
        return a.first > b.first || (a.first == b.first && a.second > b.second);
    };
    std::priority_queue<std::pair<long long, int>, std::vector<std::pair<long long, int>>, decltype(cmp)> heap(cmp);
    
    for (int i = 0; i < n; i++) {
        heap.push({static_cast<long long>(nums[i]), i});
    }
    
    std::unordered_map<int, int> counts;
    
    while (counts.size() < n && k > 0) {
        auto [x, y] = heap.top();
        heap.pop();
        x *= multiplier;
        
        heap.push({x, y});
        counts[y]++;
        k--;
    }

    long long exp = k / n;
    int rem = k % n;

    std::vector<int> res(n, 0);
    while (!heap.empty()) {
        auto [num, pos] = heap.top();
        heap.pop();
        
        long long mul = powerMod(multiplier, exp + (rem > 0 ? 1 : 0));
        res[pos] = static_cast<int>((num % MOD * mul % MOD) % MOD);
        rem--;
    }

    return res;
}
```

```Python []
import heapq

MOD = 10**9 + 7

def powerMod(base, exp):
    result = 1
    base = base % MOD
    
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % MOD
        base = (base * base) % MOD
        exp //= 2
    
    return result

def getFinalState(nums, k, multiplier):
    if multiplier == 1:
        return nums
    n = len(nums)
    
    heap = [(nums[i], i) for i in range(n)]
    heapq.heapify(heap)
    
    counts = {}
    
    while len(counts) < n and k > 0:
        x, y = heapq.heappop(heap)
        x *= multiplier
        
        heapq.heappush(heap, (x, y))
        counts[y] = counts.get(y, 0) + 1
        k -= 1

    exp = k // n
    rem = k % n

    res = [0] * n
    while heap:
        num, pos = heapq.heappop(heap)
        mul = powerMod(multiplier, exp + (1 if rem > 0 else 0))
        res[pos] = (num % MOD * mul % MOD) % MOD
        rem -= 1

    return res
```