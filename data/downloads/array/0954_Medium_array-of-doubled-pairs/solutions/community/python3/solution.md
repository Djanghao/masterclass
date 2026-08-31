# From O(n*log n) to O(n) - 3 approaches summarized (updated)

**Author:** 495
**Votes:** 11
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397916/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/1397916/)

---

### Approach # 1 - Match using a hashmap
Process numbers in sorted order of the absolute value. Use a hashmap to remember what numbers (`2*x`) you expect to see. If you see an expected number, decrement its count, otherwise increment the count of the expected number (`2*x`). At the end all values in the expected hashmap should be zero.

* Optimization: Since we expect to have 2*x for every x in the input, the sum of all the values should be a multiple of 3.
    
* Time: `O(n * log n)`
* Space: `O(n)`

### Python 

```    
    def canReorderDoubled(self, arr: List[int]) -> bool:
        if sum(arr)%3 != 0: return False
        
        expected = defaultdict(int)
        for a in sorted(arr, key = abs):
            if expected[a] > 0:
                expected[a] -= 1
            else:
                expected[2*a] += 1
        
        return all(x == 0 for x in expected.values())
```

### Approach # 2 - Match using a frequency counter

Basically the same underlying logic. Start with a frequency of all values in a hashmap. Match all duplicate values at once i.e. reduce frequency of `2*key` by frequency of `key`. If, at any point, we don't have enough `2*key` to match with `key`, we return `False`. At the end we can just return `True`, however the hashmap would still contain redundant values. Same running time as the first approach, except that this approach will run faster if there are many duplicates.

* Time: `O(n * log n)`
* Space: `O(n)`

### Python
```
    def canReorderDoubled(self, arr: List[int]) -> bool:
        if sum(arr)%3 != 0: return False
        counter = Counter(arr)
        for key in sorted(counter, key = abs):
            if counter[key] > counter[2*key]: return False
            counter[2*key] -= counter[key]
        return True
```

### Approach # 3 - Match all in groups, without sorting
Credits to @g27as
Approach is explained here: https://leetcode.com/problems/array-of-doubled-pairs/discuss/205960/JAVA-O(N)-time-O(N)-space-Solution

### Summary:
We use sort in the first two approaches to deal with the confusion of matching even values, say `2*x` with `x` or `4*x`. E.g. if we encounter `2`, we don't know whether to match it with `1` or with `4`. Processing them in sorted order, we ensure that we always deal with smaller values first. So if we ever encounter `2`, we know `1` is already dealt with, so we always match with `4`.

However, we can deal with this without having to sort the input or the keys of the hashmap, if we process such numbers in groups. If we have `1`, `2`, `4` and `8` in our hashmap and we encounter `4`, we reduce it to `1` and then start matching `1` to `2`, then `2` to `4` and then `4` to `8`. We do need to deal with `0` separately though, which is trivial.

*  `n = len(arr)` and `N = max(arr)`
* Time: `O(n * log N)` in theory but practically runs as fast as `O(n)`
* Space: `O(n)`

```
    def canReorderDoubled(self, arr: List[int]) -> bool:
        if sum(arr)%3 != 0: return False
        counter = Counter(arr)
        
        if 0 in counter:
            if counter[0]%2: return False
            counter.pop(0)
            
        for num in list(counter.keys()):
            if num not in counter: 
                continue
            while num % 2 == 0 and num//2 in counter: 
                num = num // 2
            while counter[num] > 0 and 2*num in counter:
                counter[2*num] -= counter[num]
                counter.pop(num)
                num = 2*num
            if counter[num] != 0: return False

        return True
```

### Update
Here is a slightly different implementation of the Approach#3. It is easy to argue that every entry in `counter` is popped exactly once and every iteration of the loop will pop at least one entry from `counter`. Hence this approach is `O(n)`.

```
    def canReorderDoubled(self, arr: List[int]) -> bool:
        if sum(arr)%3 != 0: return False
        counter = Counter(arr)
        
        if 0 in counter:
            if counter[0]%2: return False
            counter.pop(0)
            
        while counter:
            num = next(iter(counter))
            while num % 2 == 0 and num//2 in counter: 
                num = num // 2
            while counter[num] > 0 and 2*num in counter:
                counter[2*num] -= counter[num]
                counter.pop(num)
                num = 2*num
            if counter[num] != 0: return False
            counter.pop(num)

        return True
```

*The above indeed consistently runs faster than 100% all python3 submissions at the time of writing this.*
