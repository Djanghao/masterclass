# Python 3: TC O(sum(lengths) * log(min(lengths)), SC O(max(lengths)): Rabin-Karp, Binary Search

**Author:** BiggestChungus
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-common-subpath/solutions/5541035/](https://leetcode.com/problems/longest-common-subpath/solutions/5541035/)

---

# Intuition

This is a tough problem to get the intuition for.

## Guessing Complexity

Based on the problem sizes we can guess at what kind of algorithm we need:
* to just look at each city number already takes 1e5 operations
* the limit for TLE in LC is usually at most 1e7 ops
* and therefore whenever you see `1e5` you can guess that the algorithm needs to be `O(N)` or maybe `O(N log(N))` at worst

## Reverse Engineering

### `O(N)` with Ukkonen / Farach / etc.: Generalized Suffix Tries

For `O(N)` we'd need to find the longest common substring between ALL of the strings in just linear time.

This is actually possible, with Ukkonen's algorithm or Farach's algorithm. Both create tries of all suffixes of string in linear time, which I think is amazing.

What you do is
* make a generalized suffix tree
  * for each string, add its suffixes to the tree, and mark each node according to which strings share this prefix-of-a-suffix (each node in a suffix tree is a prefix of that suffix: i.e. a substring)
* record the depth of the deepest node shared by both strings
* return that max depth at the end

Just one problem: building a suffix trie, let alone a generalized one (generalized suffix tree == suffix tree for several strings) is very complicated. Ukkonen's algorithm, the simplest one I know of, is *still* quite complicated. There's a lot of back-pointer manipulation, tree traversal tricks, clever amortization tricks, and so on.

Therefore you're probably not expected to *write* a linear time solution.

But depending on the level you might expected to *know of* this linear time solution. Especially if you do bioinformatics or a lot of NLP.

I think the solution for this problem would be to do this:
* start the generalized suffix tree with the shortest path, all common subpaths must be shared by all strings of course, so start with the shortest one to limit further work
* since we only care about *common* subpaths, simplify building the generalized subtree by just marking nodes as being common or not common
  * for the second-shortest path: iterate over the string *as if* you were going to augment the tree, but don't add any new nodes to the tree. Mark each shared node between the first and second paths as being in common
  * mark any non-common nodes at the end accordingly
  * for the third shortest path: repeat this process, marking nodes as being common to all three or not
* at the end you have nodes that are marked common to *all* paths, and those that are not

Then a final `O(N)` traversal can be used to find the deepest node marked common.

This runs in `O(sum(lengths))` time.

### `O(N log(N))`

`log(N)` usually indicates one or more of
* binary search
* divide and conquer
* sorting

Sorting: not relevant here, the input order of paths is important. Nope

Divide and conquer: we could find the longest common path in the left and right half of some starting path... but we want the longest overall. Not what we're looking for.

Binary search: we want the longest common subpath length `L`. Can we check if there exists any common path of length `L` in `O(N)`?

It turns out we can, at least approximately: with Rabin-Karp. In the shortest path we can make a set of all RK hashes for substrings of length L. Then we can iterate over all other strings in `O(sum(lengths)`) time to find their hashes and intersect them with the RK hashes. If we reach the end of all strings with some RK hashes in common to all of them then we probably have a common substring.

**This is the algorithm I chose.**

If you need to verify the match:
* for each RK hash in the shortest path, also record the first or last index of the corresponding substring. So have `hash1 -> [idxs1..], hash2 -> [idxs2..], etc.`
* then find the RK hashes in common as explained above
* then for each substring of the shortest path with one of the common RK hashes, look for a match in the other paths in linear time (per candidate) using KMP

Why is RK and binary search so much faster than using KMP on all possible strings?
* KMP: you have to build the KMP table and iterate for every starting position separately. This increases the complexity a lot
* RK: by using hashes that don't depend on index, and using a hashmap or hashset, we can look up if a hash occurrs *anywhere* in the string in `O(1)`. This is the key: you can check (approximate) substring existence in just `O(1)` instead of `O(N)` via hashing

# Approach

RK is kind of a pain to get right, because you need to compute and update hashes.

Common pitfalls:
* Python: if you don't take the mod repeatedly then you can end up wrangling with arbitrary-precision ints. Not the worst tbh, but can be slow
* other languages: you can actually use integer/long overflow to your advantage; you naturally get values mod max_int or max_long which is great
* make sure the hashes you put in the set/dict are all positive. When subtracting the contribution for L characters ago you can easily get negative values. So be sure to canonicalize the sign of your residues
* choosing an appropriate constant: to update the hash we multiply by some `M` and add the new value. The value of `M` is important. You want to avoid the situation where `M*oldChar + newChar` can easily be the same for two different `oldChar, newChar` combinations.
  * example: suppose the cities are 0..9 and you chose `M=2`. Then `oldChar=1, newChar=2` gives an RK hash of 4. So too would `oldChar=2` and `newChar=0`. That will give you lots of duplicate hashes.
  * to avoid this nasty edge case you want to pick a value `M` that doesn't let this happen. The easiest is to pick a number that is 1 higher than your max value. That way your hash is the "value" of the subpath in base `M`, where we know that every distinct sequence of digits will give a different value... before taking a mod at least. After taking a mod is a different ballgame, but usually it isn't a problem.

To use a prime modulus or not: don't bother.

If the low-order bits of your RK hashes are mostly the same, then picking a power of two as the mod will tend to produce collisions.

But unlike a hashtable, in this case we're making a set, not a table of that size. We can keep all the bits. And since we're keeping all the bits we want, it's best to keep ALL the bits we can. So just take the largest int we can get away with without spending a ton of time on arbitrary-length integers.

# Complexity
- Time complexity: `O(sum(lengths) * log(min(lengths)))`
  - we do binary search on the length of the longest common subpath `L`. The longest possible common subpath is the length of the shortest path. Hence the `log(...)` part
  - for each `L` guess we need to iterate over all of the strings to get RK hashes and intersect them. Iteration and intersection are linear time operations
  - and thus we do linear time work for `log(..)` iterations

- Space complexity: `O(max(lengths))`: I make a set of all the RK hashes for each path, then intersect them.
  - this could be optimized by taking the intersection as we go, reduce space usage ot `O(min(lengths))`. But I was feeling lazy so I didn't do it

# Code
```
class Solution:
    def longestCommonSubpath(self, n: int, paths: List[List[int]]) -> int:
        # there's a road among every pair of cities 0..n-1

        # m friends 0..m-1

        # each takes a path of 1+ cities, in order paths[i]

        # paths may have duplicates, but not adjacent duplicates

        # given n (num cities) and the paths, return the length of the longest common subpath shared by every friend's path

        # n is 1e5
        # m is 1e5
        # total length of paths is 1e5

        # tough problem, not obvious

        # although... since the longest common subpath must obviously be a subpath of at least one of the friends (duh)
        # we can start with the shortest path in paths as the longest possible subpath
        # the longest actual will be the longest subpath of that shortest path that is also a subpath of all other friends (ugh)

        # let that shortest path be P
        #    maybe the longest common starts at P[0]: find longest match P[0:l] in other paths P': KMP, costs O(sum(P' length))
        #                                       P[1]: find longest match P[1:1+l] in other paths P', KMP again, ...
        #
        # total cost is O((min path length)*(sum of path lengths))

        # longest common substring: O(M*N) as far as I know, from KMP + scanning on the other string

        # worst case is to giant paths of size 5e4 such that O(M*N) is 2.5e9, ouch

        # P[0..]: 1. build KMP table on P[0..]
        # then find matches to P[0..] in the other paths, record the max index we got to across all other strings. total O(sum(lengths)) work

        # suppose we ask if there exists a common subpath of length L
        #
        # we could form all L RK hashes on the shortest path
        #    then do set intersection on the size L RK hashes we find among the rest
        #
        # then we can narrow down the largest value of L in log(min path length) operations, each costing O(total path length) time

        # this is feasible.. and also heinous, but whatever. SKIP for now, yikes

        #### new day, new ideas:

        # longest common substring between two:
        #         RK style: get hashes for all L-length strings in shorter one, then scan the longer one and record matches
        #
        #         that takes O(totalSize) time
        #
        #         and then you need to do binary search on L, log(len(shortestPath)) steps
        
        # is there a deterministic one? maybe, but unclear

        # let's try the RK one

        M = max(max(path) for path in paths) + 1
        BIG = (0x7FFFFFFFFFFFFFFF - M*(M-1)) // M # so BIG-1 * M + M*(M-1) doesn't exceed a long

        N = len(paths)
        i = min(range(N), key=lambda i: len(paths[i]))
        if i: paths[i], paths[0] = paths[0], paths[i]

        p = paths[0]
        P = len(p)

        def iter_rk_hashes(path: list[int], L: int) -> Iterator[int]:
            M_pow_BIG = pow(M, L, BIG)
            h = 0
            # Rabin-Karp rolling hash: for ENDING at i the hash is path[i] + M*path[i-1] + ... + M**k * path[i-k] + ...
            for i in range(L):
                h = h*M + path[i]
                h %= BIG

            yield h

            for i in range(L, len(path)):
                h = h*M + path[i]
                h -= M_pow_BIG*path[i-L]
                h = ((h % BIG) + BIG) % BIG # keep mod positive
                yield h

        def check(L: int) -> bool:
            rk_hashes = set(iter_rk_hashes(p, L))
            
            for i in range(1, N):
                rk_hashes &= set(iter_rk_hashes(paths[i], L))
            
            return bool(rk_hashes) # True if 1+ hashes exist, otherwise no

        lo = 0
        hi = P
        while lo < hi:
            L = (lo+hi+1)//2
            if check(L):
                lo = L
            else:
                hi = L-1

        # to verify: we'd need to record canonical indices (first or last) for each hash in p
        #            then when we find a tentative match in a target string we should
        #            iterate over the original chars in p and see if they match the chars in the current path

        return hi
```