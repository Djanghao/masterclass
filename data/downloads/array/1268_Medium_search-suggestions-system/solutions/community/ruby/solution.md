# Ruby Brute force

**Author:** jleigh91
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/509127/](https://leetcode.com/problems/search-suggestions-system/solutions/509127/)

---

Time: O (N\xB2  K log NK) where N is the number of products and K is the length of the longest product name
Space: O(N * (suggestions)) letters in the search word * the number of suggestions it returns.

```
def suggested_products(products, search_word)
    products.sort!
    res, i = [], 0
    
    while i < search_word.length
        suggestions = []
        str = search_word[0..i]
		
        products.each do |p|
            break if suggestions.length == 3
            next if !p.start_with?(str)
            suggestions << p 
        end

        res << suggestions
        i += 1
    end
    
    res
end
```