# [Java/Python 3] 2 liners O(n).

**Author:** rock
**Votes:** 157
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/608614/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/608614/)

---

Find the `max` of `candies`, then traverse to check if each `candy[i]` + `extraCandies` >= `max`.
```java
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<>(candies.length);
        int max = 0;
        for (int candy : candies) {
            max = Math.max(candy, max);
        }
        for (int candy : candies) {
            ans.add(candy + extraCandies >= max);
        }
        return ans;
    }
```
Java 8 stream version:
```java
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = Arrays.stream(candies).max().getAsInt();
        return Arrays.stream(candies).mapToObj(candy -> candy + extraCandies >= max).collect(Collectors.toList());
    }
```
```python
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        M = max(candies)
        return [candy + extraCandies >= M for candy in candies]
```

----

**Minor Optimization - credit to @user6499vk and @dtokarev**

Deduct `extraCandies` from `max` to avoid plus `n` times.

```java
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> ans = new ArrayList<>(candies.length);
        int gauge = 0;
        for (int candy : candies) {
            gauge = Math.max(candy, gauge);
        }
		gauge -= extraCandies;
        for (int candy : candies) {
            ans.add(candy >= gauge);
        }
        return ans;
    }
```
```python
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        gauge = max(candies) - extraCandies 
        return [candy >= gauge for candy in candies]
```