# Ruby Solution

**Author:** Purandhar999
**Votes:** 3
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4323598/](https://leetcode.com/problems/bag-of-tokens/solutions/4323598/)

---


# Code
```
def bag_of_tokens_score(tokens, power)
    max = score = 0
    tokens.sort!.size.times do
        if power >= tokens.first
            power -= tokens.shift
            max = [max, score += 1].max
        else 
			return max if score.zero?   # We aren't allowed to have negative score.
            power += tokens.pop
            score -= 1
        end
    end
    max
end
```