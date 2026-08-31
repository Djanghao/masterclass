# Ruby solution inspired by owen1605

**Author:** algoturtle
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/4067382/](https://leetcode.com/problems/count-number-of-texts/solutions/4067382/)

---

# Intuition
All credits to https://leetcode.com/problems/count-number-of-texts/solutions/2018336/python-dp-with-diagrams-for-beginners/
Rewrite in Ruby to help ruby devs read the code easier


# Code
```
# @param {String} pressed_keys
# @return {Integer}
def count_texts(pressed_keys) # "22233"
    dp = [1] + Array.new(pressed_keys.size, 0) # [1, 0, 0, 0, 0, 0]

    pressed_keys.chars.each_with_index do |key, i|
        dp[i + 1] = dp[i]

        # index 0 [1, 1, 0, 0, 0, 0]
        # index 1 [1, 1, 1, 0, 0, 0]
        # index 2 [1, 1, 2, 2, 0, 0]
        # 3   [1, 1, 2, 4, 4, 0]
        # 4   [1, 1, 2, 4, 4, 4]

        # check if the current number is the same as previous one, eg: 22 
        if i >= 1 && pressed_keys[i - 1] == key
            dp[i + 1] += dp[i -1]

            if i >= 2 && pressed_keys[i - 2] == key
                dp[i + 1] += dp[i - 2]

                # 7 and 9 can have 4 possible letters
                if i >= 3 && pressed_keys[i-3] == key && ["9", "7"].include?(key)
                    dp[i+1] += dp[i-3]
                end
            end    
        end

        dp[i+1] %= 10**9 + 7    
    end

    dp[-1]
end
```