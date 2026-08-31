# Bottom Up / Top Down - Linear space - Java/Python

**Author:** 1days
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/976136/](https://leetcode.com/problems/count-ways-to-distribute-candies/solutions/976136/)

---

1. Current state of `n`th candy and `k`th bag relies on the state of previous candy(`n-1`) as per `k-1`th bag and `k`th bag.
	1.1. `k-1`th bag state will help to determine the condition of adding a new bag(`k`)
	1.2. `k`th bag state will help to determine the possible ways of adding to any of the `k` bags
2. Use the above property to solve for each combination of candy and bag
```
     Bags ->      0        1        2
	   
Candies
   |     0        1        0        0
   V
         1        0        1        0

         2        0        1        1

         3        0        1        3 (bag * same_bag_previous_candy_state + previous_bag_previous_candy_state)

         4        0        1        7 (same as above for every cell)
```

**Python**
```
    threshold = 10 ** 9 + 7
```
1. Brute Force Approach - Top Down - `TLE`
```
    def top_down(candies: int, bags: int) -> int:
        if candies == 0:
            return 0
        if bags == 1:
            return 1
        return ((top_down(candies - 1, bags) * bags) % threshold + top_down(candies - 1, bags - 1)) % threshold
```


2. Memoize - Top Down - `TLE`
```
    def top_down_memoize(candies: int, bags: int, cache: dict) -> int:
        if candies == 0:
            return 0
        if bags == 1:
            return 1
        key = str(candies) + "." + str(bags)
        if key in cache:
            return cache[key]
        cache[key] = ((top_down_memoize(candies - 1, bags, cache) * bags) % threshold
                      + top_down_memoize(candies - 1, bags - 1, cache)) % threshold
        return cache[key]
```

3. Bottom Up - `candies * bags` space
```
    def bottom_up_bags_candies_space(candies: int, bags: int) -> int:
        cache = [[0 for _ in range(bags + 1)] for _ in range(candies + 1)]
        cache[0][0] = 1
        for candy in range(1, candies + 1):
            for bag in range(1, bags + 1):
                cache[candy][bag] = ((bag * cache[candy - 1][bag]) % threshold + cache[candy - 1][bag - 1]) % threshold
        return cache[candies][bags]
```

4. Bottom Up - `bags` linear space
```
    def bottom_up_bags_space(candies: int, bags: int) -> int:
        cache = [0 for _ in range(bags + 1)]
        cache[0] = 1  # 0 bag 0 candy
        for candy in range(1, candies + 1):
            diagonal = cache[0]  # previous bag previous candy
            for bag in range(1, bags + 1):
                diagonal, cache[bag] = cache[bag], ((bag * cache[bag]) % threshold + diagonal) % threshold
            cache[0] = 0  # 0 bag (with non zero candies)
        return cache[bags]
```


**Java**
```
    private static final long THRESHOLD = (long) Math.pow(10, 9) + 7;
```
1. Brute Force Approach - Top Down - `TLE`
```
    protected static long topDown(final long candies, final long bags) {
        if (candies == 0) {
            return 0;
        }
        if (bags == 1) {
            return 1;
        }
        return ((topDown(candies - 1, bags) * bags) % THRESHOLD
            + topDown(candies - 1, bags - 1)) % THRESHOLD;
    }
```

2. Memoize - Top Down - `TLE`
```
    protected static long topDownMemoize(final int candies, final int bags, final long[][] cache) {
        if (candies == 0) {
            return 0;
        }
        if (bags == 1) {
            return 1;
        }
        if (cache[candies][bags] > 0) {
            return cache[candies][bags];
        }
        cache[candies][bags] = (topDownMemoize(candies - 1, bags, cache) * bags) % THRESHOLD
            + (topDownMemoize(candies - 1, bags - 1, cache)) % THRESHOLD;
        return cache[candies][bags] %= THRESHOLD;
    }
```

3. Bottom Up - `candies * bags` space
```
    protected static long bottomUpBagsCandiesSpace(final int candies, final int bags) {
        final long[][] cache = new long[candies + 1][bags + 1];
        cache[0][0] = 1;
        IntStream.rangeClosed(1, candies).forEach(candy ->
            IntStream.rangeClosed(1, bags).forEach(bag ->
                cache[candy][bag] = ((cache[candy - 1][bag] * bag) % THRESHOLD + cache[candy - 1][bag - 1]) % THRESHOLD
            )
        );
        return cache[candies][bags];
    }
```

4. Bottom Up - `bags` linear space
```
    protected static long bottomUpBagsSpace(final int candies, final int bags) {
        final long[] cache = new long[bags + 1];
        cache[0] = 1;
        final long[] diagonal = {1}; // java hack for modification in scope
        IntStream.rangeClosed(1, candies).forEach(candy -> {
            diagonal[0] = cache[0];
            IntStream.rangeClosed(1, bags).forEach(bag -> {
                final long previousCandy = cache[bag];
                cache[bag] = ((cache[bag] * bag) % THRESHOLD + diagonal[0]) % THRESHOLD;
                diagonal[0] = previousCandy;
            });
            cache[0] = 0;
        });
        return cache[bags];
    }
```

Note: Thanks to @modusV and @liao119
