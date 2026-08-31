# Ruby solution using DFS and Memoization

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/4307942/](https://leetcode.com/problems/stickers-to-spell-word/solutions/4307942/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * 2 ^ n) -> 2 ^ n because at each point of time we will 2^n substrings of target string where n = size of target string. At each level, we still will be traversing through the target string hence extra n.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {String[]} stickers
# @param {String} target
# @return {Integer}
def min_stickers(stickers, target)
    sticker_count = []
    stickers.each_with_index do |sticker, i|
        sticker_count << Hash.new(0)
        sticker.each_char do |ch|
            sticker_count[i][ch] = 1 + sticker_count[i][ch]
        end
    end

    @sticker_count = sticker_count
    @dp = {} # key: subseq of target, value: min numbers of stickers
    result = dfs(target, {}) # we start off with no stickers
    result == Float::INFINITY ? -1 : result
end

def dfs(target, sticker)
    return @dp[target] if @dp.key?(target)

    # if we are not using any sticker, then use 0 else 1
    if sticker.empty?
        result = 0
    else
        result = 1
    end

    remaining_target = ''
    target.each_char do |ch|
        # if the character is present in the sticker
        if sticker.key?(ch) && sticker[ch] > 0
            sticker[ch] -= 1
        else
            remaining_target += ch
        end
    end

    # directly return result if there is no remaining target
    if !remaining_target.empty?
        used = Float::INFINITY # indicating how many stickers we have used for the remaining target

        @sticker_count.each do |st|
            # go to next sticker if the first char is not same between sticker and remain target
            next if !st.key?(remaining_target[0])

            used = [used, dfs(remaining_target, st.dup)].min # dup because we don't want to update the original sticker
        end
        @dp[remaining_target] = used
        result += used
    end

    result
end
```