# Ruby: recursive with caching

**Author:** giner
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524358/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524358/)

---

```ruby
def max_score(nums, op = 1, used = 0, cache = {}, gcd_cache = {})
    return cache[used] if cache.key?(used)
    max = 0

    nums.each_index do |i1|
        next if used[i1] == 1

        (i1 + 1...nums.size).each do |i2|
            next if used[i2] == 1

            gcd = gcd_cache[i1 + nums.size * i2] ||= nums[i1].gcd(nums[i2])
            score = op * gcd + max_score(nums, op + 1, used | 2 ** i1 | 2 ** i2, cache, gcd_cache)
            max = score if score > max
        end
    end

    cache[used] = max
end
```