# Solution

**Author:** deleted_user
**Votes:** 220
**Link:** [https://leetcode.com/problems/gas-station/solutions/3012336/](https://leetcode.com/problems/gas-station/solutions/3012336/)

---

```C++ []
class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);
        int n = cost.size(), bal = 0, start = 0, deficit = 0;

        for(int i = 0; i< n; i++){
            bal += gas[i] - cost[i];

            if(bal < 0){

                deficit += bal;
                start = i+1;
                bal = 0;
            }
        }
        return bal + deficit >= 0 ? start : -1;
    }
};
```

```Python3 []
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost): return -1
        tank = idx = 0
        for i in range(len(gas)):
            tank+= gas[i]-cost[i] 
            if tank < 0: tank, idx = 0, i+1
        return idx 

        print(f"cost: {cost}")
        print(f"gas: {gas}")
        tank = 0
        for i in range(len(cost)):
            # find where we can start
            if cost[i] > gas[i]+tank:
                continue
            start = i    
            tank += gas[i]
            print("tank", tank)
            for j in range(start+1, len(cost)):
                if cost[i] > gas[i]:
                    print("inside", j)
        return -1
```

```Java []
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int sGas = 0, sCost = 0, res = 0, total = 0;
        for (int i = 0; i < gas.length; i++) {
            sGas += gas[i];
            sCost += cost[i];
        }
        if (sGas < sCost) return -1;
        for (int i = 0; i < gas.length; i++) {
            total += gas[i] - cost[i];
            if (total < 0) {
                total = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
```
