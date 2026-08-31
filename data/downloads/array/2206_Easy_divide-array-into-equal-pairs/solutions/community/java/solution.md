# [Java/Python 3]  4/1 liner O(n) code.

**Author:** rock
**Votes:** 43
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1863995/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1863995/)

---

**Method 1: Count and check parity**

```java
    public boolean divideArray(int[] nums) {
        int[] cnt = new int[501];
        for (int n : nums)
            ++cnt[n];
        return IntStream.of(cnt).allMatch(n -> n % 2 == 0);
    }
```

```python
    def divideArray(self, nums: List[int]) -> bool:
        return all(v % 2 == 0 for v in Counter(nums).values())
```

---

**Method 2: check parity by boolean array**

```java
    public boolean divideArray(int[] nums) {
        boolean[] odd = new boolean[501];
        for (int n : nums)
            odd[n] = !odd[n];
        return Arrays.equals(odd, new boolean[501]);
    }
```
```python
    def divideArray(self, nums: List[int]) -> bool:
        odd = [False] * 501
        for n in nums:
            odd[n] = not odd[n]
        return not any(odd)
```

---

**Method 3: HashSet** - credit to **@SunnyvaleCA**.

```java
    public boolean divideArray(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num)) {
                seen.remove(num);
            }
        }
        return seen.isEmpty();
    }
```
```python
    def divideArray(self, nums: List[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                seen.discard(num)
            else:
                seen.add(num)
        return not seen
```
or simplify it to follows: - credit to **@stefan4trivia**

```python
class stefan4trivia:
    def divideArray(self, nums: List[int], test_case_number = [0]) -> bool:
        seen = set()
        for n in nums:
            seen ^= {n}
        return not seen
```

**Analysis:**

Time & space: `O(n)`.