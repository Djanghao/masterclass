# 🔥Beats 100% || Intution || Memoization -> Tabulation -> Space Opti || CPP || JAVA || PYTHON || TS

**Author:** IchigoGoes
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5322681/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5322681/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is similar to the "House Robber" problem with additional constraints on which spells can be cast. If we cast a spell with damage power[i], we can't cast spells with adjacent damages in the range of power[i] - 2 to power[i] + 2.
# Approach
<!-- Describe your approach to solving the problem. -->
1. **Frequency Count**: First, count the frequency of each spell damage using a hash map. Why ? If you wanna use a spell you might as well just use all occurences of it. That's one thing you should really observe.

2. **Unique and Sorted Damages**: Store the unique spell damages in a sorted list.
3. **Dynamic Programming**: Use dynamic programming to keep track of the maximum possible damage up to each point, considering the constraints of not casting spells with adjacent damages.
4. **BONUS:** : Do not use AI tools for such questions. Chatgpt might give you a concise and space optimised solution, but you'll never learn anything from that code if you couldn't write the recursive relations on your own. Write Recursion and practice. Here's a similar problem for your practice :
``` https://leetcode.com/problems/delete-and-earn/```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N) For tab 
    O(1) for Space optimisation
# Code : 
## C++

```cpp [Memoization]
#define ll long long

class Solution {
public:
    unordered_map<int,int> m ;
    ll dp[100001];
    
    ll f(int ind,vector<int>&power){
        int n = power.size();
        if (ind>=power.size())return 0 ;

        if (dp[ind]!=-1)return dp[ind];

        ll np = f(ind+1,power);
        ll p = 1LL*power[ind]*m[power[ind]];

        if (ind+1 < n and power[ind+1] != power[ind]+1 and power[ind+1]!=power[ind]+2){
            p +=f(ind+1,power);
        }  
        else if (ind+2 < n and  power[ind+2] != power[ind]+2){
            p+=f(ind+2,power);
        }
        else if (ind+3<n){
            p+=f(ind+3,power);
        }
        return dp[ind] = max(p,np);
    }

    long long maximumTotalDamage(vector<int>& power) {
        memset(dp,-1,sizeof(dp));
        for(int &i : power)m[i]++;
        //1 6 7 
        power.clear();
        for(auto &i : m)power.push_back(i.first);
        sort(power.begin(),power.end());
        return f(0,power);
    }
};
```
```cpp [Tabulation]
#define ll long long

class Solution {
public:
    long long maximumTotalDamage(vector<int>& power) {
        unordered_map<int, int> freq;
        for (int dmg : power) {
            freq[dmg]++;
        }

        vector<int> uniquePower;
        for (auto& entry : freq) {
            uniquePower.push_back(entry.first);
        }
        sort(uniquePower.begin(), uniquePower.end());

        int n = uniquePower.size();
        vector<ll> dp(n + 1, 0);

        for (int i = n - 1; i >= 0; --i) {
            ll pick = uniquePower[i] * freq[uniquePower[i]];
            int j = i + 1;
            while (j < n && (uniquePower[j] == uniquePower[i] + 1 || uniquePower[j] == uniquePower[i] + 2)) {
                ++j;
            }
            if (j < n) {
                pick += dp[j];
            }

            ll notPick = dp[i + 1];

            dp[i] = max(pick, notPick);
        }

        return dp[0];
    }
};
```
```cpp [Space Optimisation]
#define ll long long

class Solution {
public:
    long long maximumTotalDamage(vector<int>& power) {
        unordered_map<int, int> freq;
        for (int dmg : power) {
            freq[dmg]++;
        }

        vector<int> uniquePower;
        for (auto& entry : freq) {
            uniquePower.push_back(entry.first);
        }
        sort(uniquePower.begin(), uniquePower.end());
        ll prev2 = 0; // dp[i-2]
        ll prev1 = 0; // dp[i-1]
        for (int i = 0; i < uniquePower.size(); ++i) {
            ll current = (ll)uniquePower[i] * freq[uniquePower[i]];

            if (i > 0 && uniquePower[i] == uniquePower[i - 1] + 1) {
                current += prev2;
            } else {
                current += prev1;
            }

            // Update prev2 and prev1 for next iteration
            prev2 = prev1;
            prev1 = current;
        }
        return max(prev2, prev1);
    }
};
```

## Java: 
```java [Memo]
import java.util.*;

class Solution {
    Map<Integer, Integer> freq;
    long[] dp;

    public long maximumTotalDamage(int[] power) {
        freq = new HashMap<>();
        for (int dmg : power) {
            freq.put(dmg, freq.getOrDefault(dmg, 0) + 1);
        }

        List<Integer> uniquePower = new ArrayList<>(freq.keySet());
        Collections.sort(uniquePower);

        dp = new long[uniquePower.size()];
        Arrays.fill(dp, -1);

        return f(0, uniquePower);
    }

    private long f(int ind, List<Integer> power) {
        int n = power.size();
        if (ind >= n) return 0;

        if (dp[ind] != -1) return dp[ind];

        long np = f(ind + 1, power);
        long p = 1L * power.get(ind) * freq.get(power.get(ind));

        if (ind + 1 < n && power.get(ind + 1) != power.get(ind) + 1 && power.get(ind + 1) != power.get(ind) + 2) {
            p += f(ind + 1, power);
        } else if (ind + 2 < n && power.get(ind + 2) != power.get(ind) + 2) {
            p += f(ind + 2, power);
        } else if (ind + 3 < n) {
            p += f(ind + 3, power);
        }
        
        return dp[ind] = Math.max(p, np);
    }
}

```
```java [Tabulation]
import java.util.*;

class Solution {
    public long maximumTotalDamage(int[] power) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int dmg : power) {
            freq.put(dmg, freq.getOrDefault(dmg, 0) + 1);
        }

        List<Integer> uniquePower = new ArrayList<>(freq.keySet());
        Collections.sort(uniquePower);

        int n = uniquePower.size();
        long[] dp = new long[n + 1];

        for (int i = n - 1; i >= 0; --i) {
            long pick = (long) uniquePower.get(i) * freq.get(uniquePower.get(i));
            int j = i + 1;
            while (j < n && (uniquePower.get(j) == uniquePower.get(i) + 1 || uniquePower.get(j) == uniquePower.get(i) + 2)) {
                ++j;
            }
            if (j < n) {
                pick += dp[j];
            }

            long notPick = dp[i + 1];

            dp[i] = Math.max(pick, notPick);
        }

        return dp[0];
    }
}

```
```java [Space Opti]
import java.util.*;

class Solution {
    public long maximumTotalDamage(int[] power) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int dmg : power) {
            freq.put(dmg, freq.getOrDefault(dmg, 0) + 1);
        }

        List<Integer> uniquePower = new ArrayList<>(freq.keySet());
        Collections.sort(uniquePower);

        long prev2 = 0; // dp[i-2]
        long prev1 = 0; // dp[i-1]
        for (int i = 0; i < uniquePower.size(); ++i) {
            long current = (long) uniquePower.get(i) * freq.get(uniquePower.get(i));

            if (i > 0 && uniquePower.get(i) == uniquePower.get(i - 1) + 1) {
                current += prev2;
            } else {
                current += prev1;
            }

            // Update prev2 and prev1 for next iteration
            prev2 = prev1;
            prev1 = current;
        }

        return Math.max(prev2, prev1);
    }
}
```

## Python: 

```python [Memo]
class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        freq = {}
        for dmg in power:
            if dmg in freq:
                freq[dmg] += 1
            else:
                freq[dmg] = 1
        
        unique_power = sorted(freq.keys())
        
        @cache
        def f(ind):
            if ind >= len(unique_power):
                return 0
            
            np = f(ind + 1)
            p = unique_power[ind] * freq[unique_power[ind]]
            
            if ind + 1 < len(unique_power) and unique_power[ind + 1] != unique_power[ind] + 1 and unique_power[ind + 1] != unique_power[ind] + 2:
                p += f(ind + 1)
            elif ind + 2 < len(unique_power) and unique_power[ind + 2] != unique_power[ind] + 2:
                p += f(ind + 2)
            elif ind + 3 < len(unique_power):
                p += f(ind + 3)
            
            return max(p, np)
        
        return f(0)

```
```python [Tab]
class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        freq = defaultdict(int)
        for dmg in power:
            freq[dmg] += 1
        
        unique_power = sorted(freq.keys())
        
        n = len(unique_power)
        dp = [0] * (n + 1)
        
        for i in range(n - 1, -1, -1):
            pick = unique_power[i] * freq[unique_power[i]]
            j = i + 1
            while j < n and (unique_power[j] == unique_power[i] + 1 or unique_power[j] == unique_power[i] + 2):
                j += 1
            if j < n:
                pick += dp[j]
            
            not_pick = dp[i + 1]
            
            dp[i] = max(pick, not_pick)
        
        return dp[0]

```
```python [Space Opti]
class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        freq = defaultdict(int)
        for dmg in power:
            freq[dmg] += 1
        
        unique_power = sorted(freq.keys())
        
        prev2 = prev1 = 0
        
        for dmg in unique_power:
            current = dmg * freq[dmg]
            
            if dmg == unique_power[1] + 1:
                current += prev2
            else:
                current += prev1
            
            prev2 = prev1
            prev1 = current
        
        return max(prev2, prev1)

```
## TYPESCRIPT / JS:
```typescript [Memo]
class Solution {
    private freq: Map<number, number>;
    private memo: Map<number, number>;

    constructor() {
        this.freq = new Map();
        this.memo = new Map();
    }

    public maximumTotalDamage(power: number[]): number {
        for (const dmg of power) {
            this.freq.set(dmg, (this.freq.get(dmg) || 0) + 1);
        }

        const uniquePower = Array.from(this.freq.keys()).sort((a, b) => a - b);

        const f = (ind: number): number => {
            if (ind >= uniquePower.length) return 0;
            if (this.memo.has(ind)) return this.memo.get(ind)!;

            let np = f(ind + 1);
            let p = uniquePower[ind] * this.freq.get(uniquePower[ind])!;

            if (ind + 1 < uniquePower.length && uniquePower[ind + 1] !== uniquePower[ind] + 1 && uniquePower[ind + 1] !== uniquePower[ind] + 2) {
                p += f(ind + 1);
            } else if (ind + 2 < uniquePower.length && uniquePower[ind + 2] !== uniquePower[ind] + 2) {
                p += f(ind + 2);
            } else if (ind + 3 < uniquePower.length) {
                p += f(ind + 3);
            }

            this.memo.set(ind, Math.max(p, np));
            return this.memo.get(ind)!;
        };

        return f(0);
    }
}

```
```typescript [Tab]
class Solution {
    public maximumTotalDamage(power: number[]): number {
        const freq = new Map<number, number>();
        for (const dmg of power) {
            freq.set(dmg, (freq.get(dmg) || 0) + 1);
        }

        const uniquePower = Array.from(freq.keys()).sort((a, b) => a - b);
        const n = uniquePower.length;
        const dp: number[] = new Array(n + 1).fill(0);

        for (let i = n - 1; i >= 0; --i) {
            let pick = uniquePower[i] * freq.get(uniquePower[i])!;
            let j = i + 1;
            while (j < n && (uniquePower[j] === uniquePower[i] + 1 || uniquePower[j] === uniquePower[i] + 2)) {
                ++j;
            }
            if (j < n) {
                pick += dp[j];
            }

            let notPick = dp[i + 1];

            dp[i] = Math.max(pick, notPick);
        }

        return dp[0];
    }
}
```
```typescript [space opti]
class Solution {
    public maximumTotalDamage(power: number[]): number {
        const freq = new Map<number, number>();
        for (const dmg of power) {
            freq.set(dmg, (freq.get(dmg) || 0) + 1);
        }

        const uniquePower = Array.from(freq.keys()).sort((a, b) => a - b);
        let prev2 = 0; // dp[i-2]
        let prev1 = 0; // dp[i-1]

        for (const dmg of uniquePower) {
            let current = dmg * freq.get(dmg)!;

            if (dmg === uniquePower[1] + 1) {
                current += prev2;
            } else {
                current += prev1;
            }

            prev2 = prev1;
            prev1 = current;
        }

        return Math.max(prev2, prev1);
    }
}

```

