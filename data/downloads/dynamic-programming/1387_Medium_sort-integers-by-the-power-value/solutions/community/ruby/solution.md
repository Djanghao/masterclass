# memo

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/5908567/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/5908567/)

---


# Code
```ruby []
# @param {Integer} lo
# @param {Integer} hi
# @param {Integer} k
# @return {Integer}
def get_kth(low, high, k)
    # We need to transform x to 1.
    # if x is even then x = x / 2
    # if x is odd then x = 3 * x + 1
    answer = []
    @cache = {}
    while low <= high
        val = low
        power = 0
        while val != 1
            if @cache[val]
                power += @cache[val]
                break
            end

            if val.even?
                val /= 2
            else
                val = 3*val+1
            end
            power += 1
        end
        @cache[low] = power
        answer << [low, power]
        low += 1
    end
    answer.sort_by{|a| [a[1], a[0]]}[k-1][0]
end
```