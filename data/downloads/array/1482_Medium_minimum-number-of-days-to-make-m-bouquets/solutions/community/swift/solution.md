# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/1986979/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/1986979/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
public int minDays(int[] A, int m, int k) {
        int n = A.length, left = 1, right = (int)1e9;
        if (m * k > n) return -1;
        while (left < right) {
            int mid = (left + right) / 2, flow = 0, bouq = 0;
            for (int j = 0; j < n; ++j) {
                if (A[j] > mid) {
                    flow = 0;
                } else if (++flow >= k) {
                    bouq++;
                    flow = 0;
                }
            }
            if (bouq < m) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
```

***JavaScript***
```
var minDays = function (bloomDay, m, k) {
  let n = bloomDay.length;
  let left = 1;
  let right = Number.MAX_SAFE_INTEGER;
  if (m * k > n) {
    return -1;
  }
  while (left < right) {
    let mid = Math.floor(left / 2 + right / 2);
    let flowers = 0;
    let bouque = 0;
    for (let j = 0; j < n; j++) {
      if (bloomDay[j] > mid) {
        flowers = 0;
      } else {
        flowers++;
        if (flowers >= k) {
          bouque++;
          flowers = 0;
        }
      }
    }
    if (bouque < m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
```

***C++***
```
int minDays(vector<int>& A, int m, int k) {
        int n = A.size(), left = 1, right = 1e9;
        if (m * k > n) return -1;
        while (left < right) {
            int mid = (left + right) / 2, flow = 0, bouq = 0;
            for (int j = 0; j < n; ++j) {
                if (A[j] > mid) {
                    flow = 0;
                } else if (++flow >= k) {
                    bouq++;
                    flow = 0;
                }
            }
            if (bouq < m) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
```

***Python***
```
def minDays(self, A, m, k):
        if m * k > len(A): return -1
        left, right = 1, max(A)
        while left < right:
            mid = (left + right) / 2
            flow = bouq = 0
            for a in A:
                flow = 0 if a > mid else flow + 1
                if flow >= k:
                    flow = 0
                    bouq += 1
                    if bouq == m: break
            if bouq == m:
                right = mid
            else:
                left = mid + 1
        return left
```

***Kotlin***
```
fun minDays(A: IntArray, m: Int, k: Int): Int {
        val len = A.size
        val max = 1000000001 // max value of A is 10^9
        
        fun isPossible(day: Int): Boolean {
            val garden = BooleanArray(len) { i -> if (A[i] <= day) true else false }
            var bouquet = 0
            var countAdj = 0
            for (isBloomed in garden) {
                if (isBloomed) { 
                    countAdj++
                    if (countAdj == k) {
                        bouquet++
                        countAdj = 0
                    }
                } else {
                    countAdj = 0
                }
            }
            return bouquet >= m
        }
        
        var low = 1
        var high = max
        while (low < high) {
            val mid = (high + low) / 2
            if (isPossible(mid).not()) 
                low = mid + 1
            else
                high = mid
        }
        return if (low == max) -1 else low
    }
```

***Swift***
```
class Solution {
    func minDays(_ bd: [Int], _ m: Int, _ k: Int) -> Int {
        guard bd.count >= m * k else { return -1 }
        var lhs = 0, rhs = 0, valid = Set<Int>(), res = Int.max

        for d in bd {
            if d > rhs { rhs = d }
            if d <= lhs { lhs = d }
        }
        
        func match(_ t: Int) -> Bool {
            var cnt = 0, sum = 0
            for d in bd {
                if d <= t { sum += 1 } else { cnt += sum / k; sum = 0 }
            }
            return cnt + sum / k >= m
        }

        while lhs < rhs {
            let mid = lhs + (rhs - lhs) >> 1
            valid.insert(mid)
            if match(mid) {
                res = min(res, mid)
                rhs = mid - 1
            } else {
                lhs = mid + 1
            }
        }
        return valid.contains(lhs) ? res : min(res, match(lhs) ? lhs : .max)
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***