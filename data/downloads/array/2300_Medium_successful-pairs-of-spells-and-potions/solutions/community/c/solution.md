# [JavaC++/Python] Straignt Forward with Explantion

**Author:** lee215
**Votes:** 105
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2138875/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/2138875/)

---

# **Explanation**
For each `spell`,
it needs ceil integer of `need = success * 1.0 / spell`.

Binary search the `index` of first `potion >= need` in the sorted `potions`.
The number of potions that are successful are `potions.length - index`

Accumulate the result `res` and finally return it.
<br>

# **Complexity**
Time `O(mlogm + nlogm)`
Space `O(n)`
<br>

**Java**
```java
	public int[] successfulPairs(int[] spells, int[] potions, long success) {
		Arrays.sort(potions);
		TreeMap<Long, Integer> map = new TreeMap<>();
        map.put(Long.MAX_VALUE, potions.length);
		for (int i = potions.length - 1; i >= 0; i--) {
			map.put((long) potions[i], i);
		}
		for (int i = 0; i < spells.length; i++) {
            long need = (success + spells[i] - 1) / spells[i];
			spells[i] = potions.length - map.ceilingEntry(need).getValue();
		}
		return spells;
	}
```
**C++**
```cpp
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
        sort(potions.begin(), potions.end());
        vector<int> res;
        for (int a: spells) {
            long need = (success + a - 1) / a;
            auto it = lower_bound(potions.begin(), potions.end(), need);
            res.push_back(potions.end() - it);
        }
        return res;
    }
```

**Python**
```py
    def successfulPairs(self, spells, potions, success):
        potions.sort()
        return [len(potions) - bisect_left(potions, (success + a - 1) // a) for a in spells]
```
<br>

# Solution II: Two Sum
Sort `spells`
Sort `potions`
Now it's basic two sum question, though it's two mulplication.

Time `O(nlogn + mlogm)`
Space `O(n)`

**Java**
```java
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int[] spells0 = spells.clone();
        Arrays.sort(potions);
        Arrays.sort(spells);
        HashMap<Integer, Integer> count = new HashMap<>();
        int n = spells.length, m = potions.length, j = m - 1, res[] = new int[n];
        for (int i = 0; i < n; ++i) {
            while (j >= 0 && 1L * spells[i] * potions[j] >= success)
                j--;
            count.put(spells[i], m - j - 1);
        }
        for (int i = 0; i < n; ++i) {
            res[i] = count.get(spells0[i]);
        }
        return res;
    }
```