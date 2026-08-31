# Ruby DFS

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5899447/](https://leetcode.com/problems/shopping-offers/solutions/5899447/)

---

# Code
```ruby []
# @param {Integer[]} price
# @param {Integer[][]} special
# @param {Integer[]} needs
# @return {Integer}
def shopping_offers(price, special, needs)
    @cache = {}
    # state is an array of current bought products + total price as its tail
    dfs([0] * (needs.length + 1), needs, special ,price)
end

def dfs(state, needs, special, price, cache = {})
    # states will likely be visited more than once, so we cache their result
    return @cache[state] if @cache[state]

    # the starting minimum price for a given state is the price of the remaining
    # items if we bought them individually
    min = buy_remaining(needs, state, price)

    special.each do |offer|
        res = state.zip(offer).map(&:sum)
        # if buying the current offer makes us have more items than we need,
        # then this state isn't valid and we don't need to dfs from it
        if needs.zip(res).all? { |needs, curr| curr <= needs }
            min = [dfs(res, needs, special, price), min].min
        end
    end
    @cache[state] ||= min
end

# calculate the value required to buy the items, given the needs
# and the curr items we have
def buy_remaining(needs, curr, price)
    curr[-1] + needs.zip(curr, price).reduce(0) do |res, (needs, curr, val)| 
        res + (needs - curr) * val
    end
end

```