# [Java/C++/Python] Solution

**Author:** lokeshsk1
**Votes:** 31
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/1210088/](https://leetcode.com/problems/incremental-memory-leak/solutions/1210088/)

---

**Java**

```
class Solution {
    public int[] memLeak(int memory1, int memory2) {
        int i = 1;
        while(Math.max(memory1, memory2) >= i){
            if(memory1 >= memory2)
                memory1 -= i;
            else
                memory2 -= i;
            i++;
        }
        return new int[]{i, memory1, memory2};
    }
}
```

**C++**
```
class Solution {
public:
    vector<int> memLeak(int memory1, int memory2) {
        int i = 1;
        while(max(memory1, memory2) >= i){
            if(memory1 >= memory2)
                memory1 -= i;
            else
                memory2 -= i;
            i++;
        }
        return {i, memory1, memory2};
    }
};
```

**Python**
```
class Solution:
    def memLeak(self, memory1: int, memory2: int) -> List[int]:
        i = 1
        while max(memory1, memory2) >= i:
            if memory1 >= memory2:
                memory1 -= i
            else:
                memory2 -= i
            i += 1
        return [i, memory1, memory2]
```

```
class Solution:
    def memLeak(self, m1: int, m2: int) -> List[int]:
        res = [1,m1,m2]
        while 1:
            if res[2] > res[1]:
                mx = 2
            else:
                mx = 1
            if res[0] > res[mx]:
                return res
            else:
                res[mx] -= res[0]
            res[0]+=1
```