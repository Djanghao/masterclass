# Ruby solution using Combinatorics

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/4162461/](https://leetcode.com/problems/count-the-number-of-good-subsequences/solutions/4162461/)

---

# Code
TLE Code
```
# @param {String} s
# @return {Integer}
MOD = 10**9 + 7
def count_good_subsequences(s)
    n = s.length
    char_str = s.chars
    combos = []
    (1..n).each do |i|
        combos << char_str.combination(i).to_a.map(&:join)
    end
    combos.flatten!

    good_count = 0
    combos.each do |str|
        hash = str.chars.inject(Hash.new(0)) { |h,k| h[k] += 1; h }
        good_count += 1 if hash.values.uniq.count == 1
    end
    good_count % MOD
end
```

Combinatrics solution
```
# @param {String} s
# @return {Integer}
def count_good_subsequences(s)
    mod = 10**9 + 7
    n = s.length
    size = n + 1
    fact = []
    inverse = []
    inv_fact = []
    fact[0] = fact[1] = inverse[0] = inverse[1] = inv_fact[0] = inv_fact[1] = 1

    (2...size).each do |i|
        fact[i] = (fact[i - 1] * i) % mod
        inverse[i] = (mod - mod / i) * inverse[mod % i] % mod
        inv_fact[i] = (inv_fact[i - 1] * inverse[i]) % mod
    end

    count = Array.new(26, 0)
    (0...n).each do |i|
        count[s[i].ord - 'a'.ord] += 1
    end

    result = 0
    (1..n).each do |j|
        x = 1
        (0...26).each do |i|
            if count[i] >= j
                comb = (fact[count[i]] * inv_fact[j]) % mod
                comb = (comb * inv_fact[count[i] - j]) % mod
                x = (x * (comb + 1)) % mod
            end
        end
        result = (result + x - 1) % mod
    end
    result.to_i
end
```