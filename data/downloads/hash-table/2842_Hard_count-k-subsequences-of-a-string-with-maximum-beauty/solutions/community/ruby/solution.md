# Ruby Combinatorics - Simple and Readable

**Author:** asylam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993667/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/3993667/)

---

# Intuition
Based on math help from @twitch_tv_qiqi_impact's comment in Biweekly 112 Contest discussion. Using Ruby's built in combination method causes Time Limit Exceeded, so combinatorics are needed.

# Approach
First, build a hash of each character's frequency. If k (the length of the subsequence) is greater than the number of unique characters available (aka the number of keys in our hash), then return 0 because a single subsequence cannot be formed.

Next, build a hash of each frequency's frequency- AKA the frequency of each character's beauty value. Since we are only returning the number of sequences that can be formed, the individual characters can be simplified by their worth.

Lastly, we are going to calculate the number of combinations that can be made if we greedily take the k most valuable unique characters. To achieve this, first we must sort our value-frequency keys from most valuable to least. Then we iterate through these keys until we have taken k values.

For each (value (x), frequency (y)) until k elements have been taken:
- If k >= y, we take all of the characters of value x. The number of ways we can do this is calculated by $$x^y$$.
- Else, we calculate the combinations we can make given y characters and choosing the remaining k (AKA y choose k) times $$x^k$$. The formula for this is:
$$\\frac{y!}{k!(y-k)!}\	imes{x^k}$$
- Then subtract y from k to indicate that many characters were taken.

Don't forget to modulo the result by $$10^9+7$$ !

# Complexity
- Time complexity: $$O(n)$$
We iterate through once to collect the frequencies. We then iterate through the unique characters and their frequencies which will be <= n times each.

- Space complexity: $$O(n)$$
We create two hashes, one the size of unique characters which will be <= n. The other is the size of unique frequencies.

# Code
```
# @param {String} s
# @param {Integer} k
# @return {Integer}
def count_k_subsequences_with_max_beauty(s, k)
    f = Hash.new(0)
    s.each_char { |c| f[c] += 1 }
    return 0 if f.keys.count < k

    freq = Hash.new(0)
    f.values.each{ |v| freq[v] += 1 }

    output = 1
    freq.keys.sort_by{|x|-x}.each do |x|
        break if k <= 0
        y = freq[x]
        if k >= y
            output *= x**y
        else
            output *= (fact(y)/(fact(k)*fact(y-k))) * x**k
        end
        k -= y
    end
    output % (10**9+7)
end

def fact(n)
    (1..n).inject(:*) || 1
end
```