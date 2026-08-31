# DP + Binary Search. First!

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/4739330/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/4739330/)

---

Will optimize further tomorrow.


# Code
```
# @param {Integer} n
# @param {Integer[][]} offers
# @return {Integer}
def maximize_the_profit(n, offers)
    max = 0
    @n = n
    # Sort offers in starting ascending order by first house index.
    @offers = offers.sort!{|a, b| a[0] <=> b[0]}
    @dp = Array.new(n) 

    # Traverse offers backways to fill our dp array with values to avoid duplicate calculations.
    index = offers.size - 1
    while index > -1
        offer = offers[index]
        max = [max, recurse(offer[1], offer[2])].max
        @dp[index] = max
        index -= 1
    end    

    max
end

def recurse house_index, gold = 0
    next_houses_index = @offers.bsearch_index{|o| o[0] > house_index}
    if next_houses_index != nil
        # If data is available in dp array, skip calculations.
        best_offer = @dp[next_houses_index]
        if !best_offer
            offers = [0]
            # Go through each offers available after house index
            # recursively and select the maximum offer and set it in dp array.
            @offers[next_houses_index..-1].each do |offer|
                offers << recurse(offer[1], offer[2])
            end
            best_offer = offers.max
            @dp[next_houses_index] = best_offer
        end
        gold += best_offer
    end
    gold
end 
```