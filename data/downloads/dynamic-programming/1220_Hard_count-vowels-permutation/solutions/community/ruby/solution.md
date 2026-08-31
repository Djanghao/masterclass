# Ruby || DP

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-vowels-permutation/solutions/4217317/](https://leetcode.com/problems/count-vowels-permutation/solutions/4217317/)

---

# Code
```ruby

# AEIOU
# 01234

FOLLOWED_BY = [
    [1],          # A => E
    [0, 2],       # E => A,I
    [0, 1, 3, 4], # I => A, E, O, U
    [2, 4],       # O => I, U
    [0]           # U => A
]

FOLLOWS = FOLLOWED_BY.each_with_index.inject([]) {|r, (aj, idx)|
    aj.each_with_object(r) {|i, rr| (rr[i] ||= []) << idx}
}

MODULO = 1000000007

def count_vowel_permutation(n)
    (n-1).times.inject(Array.new(FOLLOWED_BY.size, 1)) {|r, i|
        FOLLOWS.collect {|aj|
            aj.collect {|j| r[j] }.sum % MODULO
        }
    }.sum % MODULO
end
```