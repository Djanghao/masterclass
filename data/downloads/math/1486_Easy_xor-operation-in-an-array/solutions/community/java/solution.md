# [Java/C++/Python] Array, Time O(N) Space O(1)

**Author:** it_bilim
**Votes:** 50
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/697698/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/697698/)

---

**Explanation**
Loop once, we start from the initial value (start + 2 * 0 = start) and calculate XOR Operations step by step until we reach n-1.

**Complexity**

Time ```O(N)```
Space ```O(1)```

**Java:**
```
public int xorOperation(int n, int start) {
        int res = start;
        for (int i=1; i<n; i++){
            res = res ^ (start + 2 * i);
            }
        return res;
    }
```
**C++**
```
	int xorOperation(int n, int start) {   
		int res = start;
		for (int i=1; i<n; i++){
			res = res ^ (start + 2 * i);
			}
		return res;
	}
```
**Python**
```
    def xorOperation(self, n, start):
        res = start
        for i in range(1, n):
            res = res ^ (start + 2 * i)
        return res
```
