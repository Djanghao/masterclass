# C# O(n) | Non-Linq or Linq one-line

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5457927/](https://leetcode.com/problems/count-triplets-with-even-xor-set-bits-ii/solutions/5457927/)

---

# Intuition
## Key insight:
For 3 binary strings `sa`, `sb` and `sc`, the number of `1`s of the `xor` result of the 3 strings is even **if and only if the total count of `'1'`s of the 3 strings is even**. 
## Reason:
Truth table of the `xor` operation for 3 1-bit numbers:
| a | b | c | total count of '1' | `xor` result (also the total count of `1`s of the `xor` result) |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 (**even**) | 0 (**even**) |
| 0 | 0 | 1 | 1 (**odd**) | 1 (**odd**) |
| 0 | 1 | 0 | 1 (**odd**) | 1 (**odd**) |
| 0 | 1 | 1 | 2 (**even**) | 0 (**even**) |
| 1 | 0 | 0 | 1 (**odd**) | 1 (**odd**) |
| 1 | 0 | 1 | 2 (**even**) | 0 (**even**) |
| 1 | 1 | 0 | 2 (**even**) | 0 (**even**) |
| 1 | 1 | 1 | 3 (**odd**) | 1 (**odd**) |

From the truth table, we can see that the result of the `xor` operation among 3 bits keeps the **same** parity as the parity of the total amount of `1`s of these 3 bits. 

Since the `xor` operation among 3 `int` numbers is 32 `xor` operations among the (`0`th - `31`th) bits of the 3 numbers, we get the conclusion that the `xor` operation among 3 numbers keeps the **same** parity as the parity of the total amount of `1`s of these 3 numbers. 

# Approach
1. For each array `a`, `b`, `c`, create a array `map` with length `2`.
2. For each number `n` in the array, calculate the parity of the number of `1`s in `n`'s binary string. If it's 0, increase `map[0]` by `1`; Else increase `map[1]` by `1`; 
3. Consider the permutation of the keys (`key1`, `key2`, `key3`) for the 3 maps (`map1`, `map2`, `map3`). First we know that there are only `8` permutations since the length of each map is `2`. Then we know that the total number of `1`s is `even` when `key1 + key2 + key3` is `even`.
4. So, for each permutation `key1`, `key2`, `key3`, if the sum of them is `even`, we add the value `map1[key1] + map2[key2] + map3[key3]` to the result.

# Complexity
- Time complexity:
$$O(n)$$, where n = `a.Length + b.Length + c.Length`

- Space complexity:
$$O(1)$$ if we want to optimize :)

# Code

## Non-Linq version:
```
public class Solution {
    public long TripletCount(int[] a, int[] b, int[] c)
    {
        var mapA = Count(a);
        var mapB = Count(b);
        var mapC = Count(c);

        var res = 0L;
        for (var i = 0; i < 2; ++i)
        {
            for (var j = 0; j < 2; ++j)
            {
                for (var k = 0; k < 2; ++k)
                {
                    if ((i + j + k) % 2 == 0) res += mapA[i] * mapB[j] * mapC[k];
                }
            }
        }

        return res;
    }

    private long[] Count(int[] nums)
    {
        var res = new long[2];
        foreach (var num in nums) res[Convert.ToString(num, 2).Count(ch => ch == '1') % 2]++;
        return res;
    }
}
```

## Linq Version

```
public class Solution {
    public long TripletCount(int[] a, int[] b, int[] c) => a.Select(aa => (long)Convert.ToString(aa, 2).Count(ch => ch == '1') % 2).GroupBy(r => r).ToDictionary(g => g.Key, g => (long)g.Count())
        .SelectMany(aa => b.Select(bb => (long)Convert.ToString(bb, 2).Count(ch => ch == '1') % 2).GroupBy(r => r).ToDictionary(g => g.Key, g => (long)g.Count())
            .SelectMany(bb => c.Select(cc => (long)Convert.ToString(cc, 2).Count(ch => ch == '1') % 2).GroupBy(r => r).ToDictionary(g => g.Key, g => (long)g.Count()).Select(cc => (aa, bb, cc))))
                .Where(tri => (tri.Item1.Key + tri.Item2.Key + tri.Item3.Key) % 2 == 0).Sum(tri => tri.Item1.Value * tri.Item2.Value * tri.Item3.Value);
}
```
