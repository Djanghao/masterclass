# Python 3: FT 90%, No Modular Factorials. Count Permutations Position-by-Position

**Author:** BiggestChungus
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/5425458/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/5425458/)

---

# Intuition

The intuition for this problem IMO is extremely hard to get. I certainly didn't get it at first; I had to look at the first LC hint to figure it out.

Even then it didn't connect that we're counting permutations so I wrote a solution that's 10x slower and asymptotically worse (see extensive comments below for my thought process!).

## Why Count Permutations?

The problem has a specific rule for finding `i` and `j` and swapping `i-1` with `j`:
1. find the last `i` that is smaller than the prior value
2. find the last `j` where `i..j` are all less than `i-1`
3. swap `i-1` and `j`
4. then reverse `i..N-1`

This is really obtuse to me... although tbh I'm weak at permutation problems so ymmv.

Anyway, here's what that looks like:
```a
prefix i-1 i ... j-1  j  suffix   # current string
prefix  j  i ... j-1 i-1 suffix   # after step 3: swap i-1, j
prefix  j  rev(suffix) i-1 j-1 ... i # after reversing i:
```

The last part looks nasty. Turns out it isn't if we get the galaxy brain insight!

**`i` is the last decrease, so we know that `i..N-1` are sorted.**

Then we find the last index `j` that is less than `i-1`, and swap. **The swap moves the largest character less than `i-1` into the `i-1` slot, and keeps `i..N-1` sorted.**

Therefore **after reversing `i..N-1`, we have `prefix j descendingSubarray`.

The galaxy brain insight is to recognize that **each operation produces the next lower permutation of the elements.**

It's the opposite of the more common "find the next higher permutation."

The next lower permutation involves
* the smallest change to the prefix possible, so we start with the longest possible prefix
* we need to decrease the prefix so we need to find an index `i` that is larger than a prior index. This is step 1 in the given rules
* then we want to replace `i-1` with the largest character in the rest of the sequence that's larger. That's step 2 and three in the rules
* after swapping we have a descending array. But the next lower permutation has this new lower prefix, and the *maximum* suffix. So we want the suffix to be ordered descending. It's current ascending, so we reverse.

**Therefore we see that the given rules are exactly the same as finding the next lowest permutation.**

I have no idea how you would ever get this insight in the middle of an interview. Or a timed exam. Or a LC contest... or ever, really. Oh well.

## How to Count Lower Permutations

From the logic above we have something like
```a
prefix c sortedSuffix
```
at all stages of the algorithm.

**To find lower permutations we need to reduce `prefix c` to `prefix c'` where `c' < c`. That's because all permutations with `prefix c'` < `prefix c`.** Then we count permutations of the characters after the current position, because all of those permutations are lower.

Suppose the current character is `f`. Then we can swap with `e, d, c, b, a`. The order we choose doesn't matter; all of those are lower.

The number of permutations can be computed with combinatorics: the way to arrange `n` elements with `m1` copies of the first unique, `m2` copies of the second unique, ... `mk` copies of the last is `n! / m1! / m2! / m3! / m4!`

So we can do this brute force if needed; that creates an `O(n**2)` algorithm to do a counting sort of characters after each position `i`. See the Approach section for a speedup.

**We count the permutations after swapping `c` with all lower characters `c'`** So we need a fast(ish) way of doing this. We use a "quick update trick," see Approach section.

# Approach

Per the insight section an algorithm takes shape.
1. record counts of all characters after the current char `c`
2. for each lower character we swap `c` with `c' < c`
3. then we count permutations

The effect of the swap does this:
* reduces the count of `c'` by 1, because we swapped it out of the remaining characters
* increases the count of `c` by 1, because we swap it in

**Since we swap `c` into the rest of the characters for all lesser characters `c' < c`, I just incremenent the count of `c` at the top of the loop.** It's faster this way, albeit more confusing.

Then for each lower character `c'`, we recompute the number of permutations of later characters given the changes to the counts (we lose a copy of `c'` from the swap) and add to the number of operations.

**NB: `perms` in the code is the number of permutations of the last `l` characters, not the answer.** The answer is in `ops`. Apologies for confusion.

## Optimization: Quick Update Trick

The brute force approach to finding the permutations of the remaining `l` characters is to just do it:
* compute `l! / counts[0]! / ... / counts[ord(c)-1]!` directly

But we'll reiterate through all the counts and recompute a lot of factorials. Not the worst, but we can do a bit better:
* swapping in `c`: we increase the count of `c` by one in those `l` chars
  * before we divided by `(counts[c]-1)!`
  * now we divide by `counts[c]!`
  * the difference is a factor of `counts[c]`, **so we just divide by `counts[c]` to update the number of permutations**
* similarly we decrement `counts[c']` for each lower character
  * previously we divided by `counts[c']!`
  * but now we should divide by `(counts[c']-1)!`
  * the difference is a factor fo `counts[c]`; **thus we multiply by `counts[c']` to update the number of permutations**

In this way we avoid computing O(26) factorials.

Bonus optimization: it means we don't have to cache factorials mod M because we update `perms` with single integer factors. Neat.

## Implementation Node: Modular Multiplicative Inverse

This problem is partly nasty beyond the sophisticated insight above because **we can't directly take something mod `M` and divide by another quantity mod `M` and get an integer result.**

The problem is illustrated with e.g. `8 / 2`. Clearly that's 4.

But `(8 % 7) / (2 % 7) == 1/2`. Yikes. What went wrong?

The problem is that the modulus isn't invertible and division doesn't commute with modulus. **We need an "inverse multiplication" operation that commutes with taking a modulus.**

Fortunately number theory nerds have an answer for this: **modular multiplicative inverse.**

The modular multiplicative inverse of `a` mod `M`, let's call it `x`, has the property that `a*x == 1 mod M`.

### Does the Modular Multiplicative Inverse Always Exist?

In practice, with LC's standard `M = 10**9 + 7` which is prime, yes.

Bezout's identity tells us that for values `m` and `M` that are coprime (gcd == 1), that there exists `a`, `b` such that `m*a + b*M == 1`. (note: Bezout's doesn't involve taking a modulus! It's straight up `1` as the answer!)

**The gcd of any prime M and any lower number a < M is 1.** Fairly straightforward: `a`'s prime factors are all `<= a`, and `M` is prime and larger. So no factors in common.

So Bezout's identity confirms that such a `a` and `b` exist for `m`.

If we take the modulus of both sides with respect to `M`, we see that `m*a == 1 mod M`. So from Bezout's identity we know that there exists some `a` that is the modular multiplicative inverse of `m`. Neat.

### The Modular Multiplicative Inverse of `m` is `pow(m, M-2, M)`

Proving this involves proving Euler's theorem: `m**(M-1) == 1 mod M`.

### Proof of Euler's Theorem

When working on this problem I found a nice proof for this that's simpler than anything I've seen before. I'm not a mathematician so "big boy proofs" were too hard for me to understand :(

First let's look at all of the numbers coprime to `M` that are less than `M`: that's the set `{1, 2, 3, ..., M-1}`.

**This is what math nerds call a reduced residue system for `M`** It's a collection numbers where
* all of the numbers are coprime to `M`
* every possible nonzero value of `x % M` is present (i.e. none are congruent, and there are `phi(M)` of them where `phi` is Euler's totient function)

Let's call that set `S1`.

We can make a new set `S2` by
* multiplying by some positive `m < M`
* and then taking the residues mod `M`
* so we get `S2 = {m % M, 2m % M, 3m % M, ..., (M-1)m % M}`

How many elements does `S2` have? From Bezout's identity above, we know for each positive `m < M` (i.e. coprime to `M`) there's an `a` such that `a*m == 1 mod M`. Therefore we can multiply by `a` to get `a*S2 = {a*m % M, 2*a*m % M, ..., (B-1)*a*m % M}`. `a*m % M == 1`. So we get `a*S2 == {1, 2, 3, ...} == S1` again.

**Therefore there is a bijection between S1 and S2, and thus the cardinality of S1 and S2 are the same!**

Moreover, by the pigeonhole principle, since there are `M-1` integers less than `M` that are all coprime to `M`, that means **`S2` is a permuation of `S1`.**

Finally we can do the following, which proves what we want:
```a
m**(M-1) * prod({1, 2, 3, ..., M-1})      # strange quantity that's cool
  == prod({m, 2m, 3m, ..., (M-1)M}) mod M # disttribute m factors inside
  == prod({1, 2, .., (M-1)}) mod M        # S2 is a permutation of S1

thus

  m**(M-1) == 1 mod M
```

The last part basically shows we can multiply `M-1` things by `m`, and get the same answer back mod `M`. So we prove that `m**(M-1) == 1 mod M`.

### Proving the Modular Exponentiation Formula

We just proved `m**(M-1) mod M == 1`

So `m * m**(M-2) mod M == 1`.

**Therefore `m**(M-2) mod M` is the modular multiplicative inverse of `m` mod `M`.**

### Using Modular Multiplicative Inverses

Now we can finally return to the problem at hand. We have some quantity `perms` that is a residue mod `M`, and we need to "divide" by some integer `m`, a count of some lesser character.

We want the answer mod `M`. In other words, we basically want the answer `ans` such that `ans * m == perm mod M`. Multiplying both sides by the modular multiplicative inverse of `m`, `mminv(m)`, gives us `ans * m * mminv(m) == perm*mminv(m) mod M`, or `ans == perm*mminv(m) mod M`.

**This is the weird thing about modular multiplicative inverses: we're finding a special number where multiplying by it is equivalent to dividing by another number mod `M`.**

### Computing Modular Multiplicative Inverses

One obvious way to do it is to use Euler's theorem directly: compute `m ** (M-2) mod M`. That's what I do here. Scaling-and-squaring runs in `O(log(M))` time because we iterate over the `log(M)` bits of `M`.

A potentially faster way in a compiled language is to the the **Extended Euclidean Algorithm (EEA)**. EEA exploits the very close relationship between gcd and Bezout's identity; it returns the multiples `a, b` such that `a*m + b*M == 1`; `a` is the modular multiplicative inverse mod `M`. This algorithm runs in `log(min(m, M)) == log(m)` time, potentially much faster. The speedup is because the first step of Euclid's algorithm is to take the larger number, `M` here, mod the smaller number, `m`, to get a number `< m`. Therefore in `O(1)` operations we reduce the problem to `O(m)` size.

Why does Euclid work in `log(m)` time? Fibonacci numbers!

The worst case for Euclid's Algorithm is where we subtract a single multiple of the smaller number from the larger one every single time.

So we might subtract `b` from `a` to get `c`. Then subtract `c` from `b` to get `d`, and subtract `d` from `c` to get `e`, and so on.

That means that `e+d==c` and `d+c==b` and `c+b==a`. This is the Fibonacci recurrence relation. Running Euclid's algorithm on `F_m` and `F_{m-1}` takes about `m` operations. Eventually we end up a `gcd(1)` every time from Fibonacci numbers. **So fun fact: all adjacent numbers in the Fibonacci sequence are coprime.**

# Complexity
- Time complexity: `O(N*A)`
  - `N` characters in `s`
  - `A` characters in the alphabet
  - for each position in `s`, we iterate over all `O(A)` lower characters and their counts
  - thus total complexity is the product of `N*A`
  - to pedantically include the cost of caching the modular multiplicative inverses, add `O(N*log(M))` where `M` is the big prime. With the Extended Euclidean Algorithm we could reduce that to `O(N*log(N))`... but nobody afaik has EEA memorized, while typing `pow(m, M-2, M)` is pretty ez
 
- Space complexity: `O(N)` for caching modular multiplicative inverses. We could do better than done here by only caching the inverses we need... but I was lazy and spent hours on this problem already.

## Further Complexity Improvement: O(A) to O(log(A))

In the inner loop over lexically smaller characters, we add up  `counts[0]*perms + counts[1]*perms + .. + counts[o-1]*perms`.

This is a sum of `0..o-1` of course. Doing this brute force costs `O(A),` hence the overall `O(N*A)` complexity.

**But we can do this faster with a range tree, or it's special case, the Fenwick tree.**

Using a Fenwick tree or range tree (Fenwick is specifically for 0..k sums and thus has a lower prefactor) we can accelerate computing this partial sum to `O(log(A))`. Updating the counts also costs `O(log(A))` too now, but that just means we have two `O(log(A))` operations instead of one `O(A)` operation and one `O(1)` operation. The range/Fenwick trees win handily in asymptotic complexity.

As usual for `A ~ 26` this probably doesn't make sense to do.

For `A ~ 256` for 8-bit ASCII it's probably a wash; the trees will probably win, but your coworkers probably don't want to code review tree stuff instead of "I sum a bunch of numbers at indices 0..o-1."

For all UTF code points, millions, you'd REALLY want the trees.

**Final insight: even if you don't code the tree stuff, you should know of it.** An easy followup to "lower-case ASCII" is "what if we internationalized and had millions of possible characters?"

# Code
```
M = 10**9+7
mminv = [1]*3001
for m in range(2, 3001): mminv[m] = pow(m, M-2, M)

class Solution:
    def makeStringSorted(self, s: str) -> int:
        # # 1. find largest i where s[i] < s[i-1]: first decrease
        # # 2. find largest j such that all indices in i..j are less than s[i-1] as well
        # # 3. swap i-1 and j
        # #       moves smaller char before a bigger one
        # # 4. reverse the suffix starting at i


        # # cba  => cab => cab
        # #   i
        # #   j
        # #
        # # cab  => bac => bca
        # #  i
        # #   j
        # #
        # # bca  => bac => bac
        # #   i
        # #   j
        # #
        # # bac => abc => acb
        # #  i
        # #  j
        # #
        # # acb => abc => abc
        # #   i
        # #   j
        # #
        # # abc: now sorted :)

        # # no obvious pattern
        # # maybe find one symbolically?
        # # key locations are i-1, i, j, prefix, suffix
        # #
        # #  prefix h l1 L l2 suff
        # #           i    j         # suff is end of string, or starts with >= h
        # #
        # #  3. swap: prefix l2 l1 L h suff
        # #                  i       j
        # #  4. reverse i: to get prefix rev(suff) h rev(L) l1 l2
        # #
        # #  For next op where are i and j?
        # #
        # #
        # # in original string prefix h l1 L l2 suffix: l1..suffix are all sorted, otherwise i..j would be in there
        # # so rev(L) l1 is descending
        # #
        # #       l1 <= l2 we know
        # #       l1 <= all of L we know
        # #
        # #               prefix rev(suff) h rev(L) l1 l2
        # # so l1 <= L <= l2 <= suff
        # #
        # #            if L == l1 for all elements: first decrease is h to first of rev(L)
        # #              else last decrease is somewhere in rev(L)
        # #
        # # after this we get l1 l2 at the end in the suffix
        # #
        # #
        # # still hard. Simplify the pattern?
        # #   i is the last decrease: rest is sorted
        # #   j is the index before the insert index of h (elt i-1)
        # #   swapping i-1 and j therefore puts j early and h in sorted order: therefore i: is sorted!
        # # so we have prefix elt_j i..j-1 h suff    which is sorted
        # # but then we reverse i: to get prefix elt_j rev(i..j-1 h suff)
        # #
        # # Then we will proceed to resort rev(i..j-1 h suff)
        # #     how many operations does that take?
        # #
        # # write a brute force algo to get insight

        # # the number of ops rises FAST
        # # and repeats vs uniques changes the answer
        # #

        # # so if we have .... i-1    i ... j    j+1:
        # #               .... j      i ... i-1  j+1:
        # #                           --------------  sorted
        # #               .... j      rev(j+1:) i-1 j-1...i
        # #                           ---------------------
        # #                                   reversed
        # #
        # # HARD HARD HARD
        # #
        # # ...... h  i ....  j higher
        # # ...... j  i ....  h >=h
        # # ...... j  rev(>=h) h rev(i..j-1)
        # #
        # # now cost to sort is
        # #     sort rev(i..j-1) to get ... j rev(>=h) h i..j-1
        # #     merge in h: i is the same, new j is at the end of the array because i..j-1 all < h
        # #           swap: j-1 i ... j-2 h
        # #           reverse: j-1 h rev(j-2..i)
        # #
        # # top-down DFS with caching? if we know how many ops it takes to sort a specific string, then we can reuse that calculation
        # #
        # # the cost is based on the pattern of increases, decreases, dups
        # # for prefix h i ... j-1 j suffix
        # #   swap: prefix j i ... j-1 h suffix
        # #    rev: prefix j rev(suff) h j-1..i
        # #
        # # okay I give up, need some hints, it's been like 2 hours
        # #   > HUGE HINT: I had an inlinking of this, but didn't really connect the dots
        # #    > each operation gets the prior permutation of s
        # #       which kind of makes sense because we're reversing a range

        # # god I hate permutation questions, I'm so bad at them
        # #
        # # for the prior permutation: we want to decrease the lex. ordering of the string
        # #  > but reduce it as little as possible
        # #  > so we want to keep the prefix as long as possible: find the *latest* change we can accomplish
        # #  > to reduce the lex. ordering we need to move a low character up
        # #  > so we need a pattern like ... h l ... where l < h
        # #  > and the smallest change we can make is the largest value in l... < h
        # #     since h l is the last decrease, that means l... is sorted
        # #     so we can use binary search to find that index j
        # #     so move j into position i-1
        # #     then we want the lex. maximum of the rest to maximize the number of further reductions we can get
        # #     which corresponds to sorting descending
        # #     l.. after the swap is sorted asc, so this is the same thing as reversing (so the specific swap is a shortcut to sorting via reversing)
        # #
        # #     then we have
        # #         prefix j <<lex maximized with i:, except h instead of j>>
        # #
        # #       further ops with prefix j ... are the number of distinct permutations of the elements i...

        # # to save a bit of time we can
        # #    1. do the h -- j swap
        # #    2. we know conceptually we reverse i to end, but we don't really need to do it
        # #       because we "just" need to know the number of distinct permutations of the elements i: after the swap
        # #       that's because each op finds a prior permutation, and we know reversing gives the maximum permutation
        # #       so the number of further ops is numPermutations-1
        # #          b/c if there's only one perm, we're already minimized
        # #              if there's two perms, then we're at the max and need to go to the min permutation
        # #              and so on

        # chars = list(s)
        # N = len(chars)

        # BIG = 10**9 + 7

        # @cache
        # def mmInv(m: int) -> int:
        #     """Returns inv(m) | m * inv(m) == 1  mod BIG"""
        #     return pow(m, BIG-2, BIG) # Python has modular exponentiation built in!!

        # # cache to make sure we don't compute O(n)! many times for O(n**2) TC
        # @cache
        # def factmod(m: int) -> int:
        #     if m <= 1: return 1
        #     return m*factmod(m-1) % BIG
            
        # # ops = 0
        # # lasti = N-1
        # # while True:
        # #     # print(f"{chars=}")

        # #     # step 1: find last i
        # #     for i in range(lasti, 0, -1):
        # #         if chars[i] < chars[i-1]:
        # #             lasti = i # after each cycle i: is sorted, so first unsorted index is i or earlier
        # #             break
        # #     else:
        # #         return ops # fully sorted now

        # #     # step 2: find j: last char < h, aka the char just before the left insert index
        # #     #     insIdx-1 because chars[i-1] by def is higher than at least i, so it gets inserted after i, so idx-1 is valid
        # #     j = bisect_left(chars, chars[i-1], lo=i, hi=N) - 1

        # #     # step 3
        # #     chars[i-1], chars[j] = chars[j], chars[i-1]

        # #     ops += 1

        # #     # step 4, and later sorting ops with new chars[:i]: accelerate
        # #     #    0 ... i-2 i-1 i ... j-1 j   suffix
        # #     #    0 ... i-1 j   i ... j-1 i-1 suffix
        # #     #                  -------------------- << sorted
        # #     #       after reversing: we get the remaining numbers in descending order
        # #     #       as discussed above thats numPermutations-1 operations since each subsequent op with the same :i unwinds one
        # #     #       of those permutations. So instead of reversing + counting permutations + reversing back, we just count permutations

        # #     # print(f"  {i=}, {j=}")
        # #     # print(f"  {chars=}")
        # #     perms = 1

        # #     # numerator: number of elements in i:, i-1, factorial
        # #     for k in range(2, N-i+1):
        # #         perms *= k
        # #         perms %= BIG
        # #     # print(f"  {N-i}! == {perms}")

        # #     # denominator
        # #     # chars is sorted from i: so the count of each unique is the number of consecutive values 
        # #     count = 1
        # #     for k in range(i+1, N):
        # #         if chars[k] == chars[k-1]:
        # #             count += 1
        # #         else:
        # #             # print(f"    found {count=} copies of {chars[k-1]}")
        # #             # divide by mmInv of count! mod B, not count! to avoid giant number issues
        # #             # mminv of x mod BIG is x**(BIG-2) mod BIG
        # #             # if x is of the form (x%BIG) + m*BIG then (x%BIG + m*BIG)**(BIG-2) per the binomial theorem has
        # #             #    > a leading (x%BIG)**(BIG-2) term
        # #             #    > and a bunch of other terms with at least one factor of BIG, hence zero mod BIG
        # #             # thus the modular multiplicative inverse of x is the same as that of x%BIG !!
        # #             #     (in case you're worried that x can be huge (which it is) and thus x > BIG: don't!
        # #             #      x is of the form 2*3*...*m for m copies of a character. All of those factors are coprime to BIG
        # #             #      and thus x and BIG remain coprime such that Euler's Theorem holds)
        # #             perms *= mmInv(factmod(count))
        # #             perms %= BIG
        # #             # print(f"      {perms=}")
        # #             count = 1
        # #     # print(f"    found {count=} copies of {chars[N-1]}")
        # #     perms *= mmInv(factmod(count))
        # #     perms %= BIG
        # #     # print(f"  permutations of {i}: is {perms=}")

        # #     ops += perms - 1
        # #     ops %= BIG
        # #     # print(f"  {ops=}")

        # # return ops

        # # the above algorithm works, but it's inefficient
        # # we swap i-1 and j to go from
        # #    prefix i-1  i  ...  j-1   j  rest
        # #    prefix  j   i  ...  j-1  i-1 rest
        
        # # if j > i then i remains the same in the next cycle
        # # so we wind up doing a lot of O(N) scans to compute i: permutations
        # # The permutations only depend on the frequencies of the elements in i:
        # # so whenever we decrement i, or swap, we can update the permutations mod BIG

        # ops = 0
        # lasti = N-1
        # counts = {chars[N-1]: 1}
        # perms = 1 # permutations of i:
        # while True:
        #     # step 1: find i
        #     for i in range(lasti, 0, -1):
        #         # we go from prior count to new count
        #         # so permutations, (i: length)! / counts1! / counts1! changes by
        #         #   > new i: length
        #         #   > and mmInv(newCount)
        #         if i < lasti:
        #             perms *= N-i
        #             newfreq = counts.get(chars[i], 0) + 1
        #             counts[chars[i]] = newfreq
        #             perms *= mmInv(newfreq)
        #             perms %= BIG
        #             lasti = i

        #         if chars[i] < chars[i-1]: break
        #     else:
        #         return ops

        #     # else: found inversion
        #     ops += 1

        #     # step 2: find j
        #     j = bisect_left(chars, chars[i-1], lo=i, hi=N) - 1 # largest j | char[j] < chars[i-1] in [i, N-1]

        #     # when we swap chars[i-1] and j we change the counts and thus permutations
        #     # first remove contributions of old factors, then add the new ones
        #     counts[chars[i-1]] = counts.get(chars[i-1], 0) + 1
        #     counts[chars[j]] -= 1
        #     # we need to remove the new factor of counts[chars[i-1]], and add back the factor of chars[j] we lost in the / mult! terms
        #     perms *= mmInv(counts[chars[i-1]])
        #     perms %= BIG
        #     perms *= counts[chars[j]] + 1
        #     perms %= BIG

        #     # step 3: swap
        #     chars[i-1], chars[j] = chars[j], chars[i-1]

        #     # step 4, and later operations with the new chars[:i]:
        #     #   in principle we reverse i:N, then we re-sort i:N in later ops
        #     #   we know the number of ops is the number of permutations-1 because 
        #     #     i:N is descending, so it takes numPermutations(i:N)-1 to get it ascending
        #     #   this re-sort returns us to the sorted ascending i:N
        #     #       we already have i:N ascending, so we just leave it
        #     ops += perms - 1
        #     ops %= BIG
        
        # #     # permutations of k elements: we need modular choose math, ugh
        # #     #  we need to compute k! / m1! / m2! / m3! ... where we have m1 of the first unique, m2 of the second unique, etc.
        # #     # so we need the modular multiplicative inverses of m1, m2, ... mod BIG
        # #     # maybe there's an easier way: num perms of i is 1
        # #     # for each next element: mult by k += 1 for increased numerator
        # #     #  but also divide by the duplication count thus far
        # #     #  this is faster, but the numerator grows fast and we need to watch out for that, if we take the mod and it's not
        # #     #  a mult of e.g. 2 and we try dividing by 2 then we're doomed

        # #     # you basically therefore just need to memorize that the modular multiplicative inverse of m1! is m1! ** BIG-2 mod BIG,
        # #     # Euler's theorem (well one of the many at least)

        # #     # short proof: there are B-1 numbers coprime to B: S1 = {1 .. B-1}
        # #     # suppose you multiply all of them by a < B: S2 = {a, 2a, ... (B-1)*a} all mod B
        # #     # a, B are coprime: B is prime and larger than a so B can't divide a and a by def doesn't divide B
        # #     # Bezout's identity: we know there's a m1, m2 | m1*a + m2*B == 1, so that m1*a === 1 mod B
        # #     # so let's multiply all elements by m1: m1*S2 = {a*m1, 2*a*m1, ...} all mod B = {1, 2, ... B-1}
        # #     #
        # #     #   therefore there exists a bijection between S1 and S2 ==> S2 has the same cardinality, B-1 elements
        # #     #
        # #     # By the pigeonhole principle, there are only B-1 coprime numbers, and S2 has B-1 distinct values
        # #     # therefore S2 has 1...B-1 in some (possibly very complicated) order
        # #     #
        # #     # and thus prod(S1) == prod(S2)
        # #     #
        # #     # therefore a**(B-1) * prod(S1) mod B == prod({1*a, 2*a, 3*a, ..., (B-1)*a}) mod B == prod(S2) mod B == prod(S1) mod B
        # #     #
        # #     #      so finally we find that a**(B-1)*prod(S1) == prod(S1) mod B, aka a**(B-1) == 1 mod B
        # #     #
        # #     # that means a * a**(B-2) == 1 mod B
        # #     # therefore a**(B-1) is the modular multiplicative inverse of B
        # #     #
        # #     # This proof works even if B isn't prime, but we need
        # #     #    > S1 to have just the phi(B) coprime values
        # #     #    > and we can only multiply by some a comprime to B
        # #     #    > and we'd have a**phi(B) == 1 mod B
        # #     #    > hence the general case is a's modular multiplicative inverse is a**(phi(B)-1)
        # #     # Primes are a special case where phi(B) == B-1: 1..B-1. Hence a**(phi(B)-1) == a**(B-2)
        # #     #
        # #     # ANYWAY
        # #     #
        # #     # now we can do the work: n!/m1!/m2!/...
        # #     #   > n is number of elements in i:
        # #     #   > m1, m2, .. are the number of multiples of each number

        # # fun fact with ... i-1 i ... j-1 j   rest
        # #                   j   i ... j-1 i-1 rest // swap
        # #                                          // reverse then re-sort i..rest
        # # we notice two things:
        # #   the last unsorted index either remains i, or moves back one. that's because the rest is sorted after each cycle
        # #   the permutations only depend on the counts of each element: we don't need chars, we just need a counts dictionary



        ###### Improved answer, even better: we need to compute the lexicographic rank of the string
        # that's something I haven't done before
        # but it makes sense, we don't even need to track the characters as we swap

        # for a given prefix: number of suffixes is the number of permutations
        # for each new character we add, the number of permutations goes up because total number of characters goes up
        #
        # if we have prefix i suffix
        # then for the given prefix i we count permutations of suffix down to prefix i sorted(suffix)
        #
        # then for each lesser character we we
        #     swap i with that least character
        #     then descend all the permutations until we have prefix lesserChar (i+suffix-lesserChar sorted)

        # retry a few hours later:
        # we have 
        #    prefix i-1 i ... j-1  j  rest where i..rest are sorted
        #    swap j with i-1, then reverse the rest: this is the minimum possible lex. change to the string that reduces it
        # so we can count the number of permutations of s less than s to answer the question

        # single character: trivial, no permutations
        # one char: if later char is less: one permutation less. otherwise zero
        # two chars left:
        #    first count the number of lower perms such that we have prefix curr remTwo


        # general case: prefix c rest; suppose we've counted permutations down to prefix c sorted(rest) i.e. let rest be sorted
        # can reduce the permutation by picking a lower char from c, if any from rest


        # wlog we have prefix c sortedSuffix
        # all permutations where we replace c with a lower char are lower
        #    so for each lower char c':
        #       swap c and c': count of c' decreases by one, count of c increases by one
        #       can count permutations quickly: if we have permutations including c
        #       then `perm` has ... / count[c'] / ... in it
        #       so we can effectively decrement count[c'] in perm by multiplying perm by c'

        # at the end we are left with the characters ordered
        # we don't literally sort them because we don't need to: we just need their counts

        M = 10**9 + 7
        perms = 1 # permutations including index i
        counts = [0]*26
        oa = ord('a')
        ops = 0
        suffixLength = 0 # no later characters (yet)
        for l, c in enumerate(reversed(s)):
            # curr character c from the end, with l later characters
            o = ord(c) - oa
            counts[o] += 1

            # suffix length hasn't increased yet
            # perms currently has the permutations of all later elements
            
            # for each lesser character c' we modify perms to reflect swapping with c:
            #     count of c increases (already handled)
            #     count of c' decreases
            #        the formula for perms is l! / counts[0]! / .. / counts[25]!
            #        so decreasing the count is equivalent to multiplying by counts[c']

            perms *= mminv[counts[o]]
            perms %= M

            for o2 in range(o):
                # find permutations when we swap c with all possible lower chars c'
                # already handled increasing counts of c (ordinal o) so we handle
                # the counts[o2] remaining adjustment here
                ops += perms * counts[o2]
                ops %= M

            # TODO: the above loop is an O(A) approach to sum(counts[:o2]) * perms
            #       but we could use a Fenwick tree to accelerate this.
            #       Not worth it for A=26, but much larger alphabet sizes would
            #       benefit from log(A) versus A

            # at the end: we now have (l+1)! chars in the suffix, so numerator increases
            # the counts don't increase b/c we already handled counts[c]
            perms *= l+1
            perms %= M

        return ops
```