# Ruby, No Regex

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/5455604/](https://leetcode.com/problems/apply-discount-to-prices/solutions/5455604/)

---

# Code
```
def discount_prices(sentence, discount)
  result = []

  sentence.split(' ').each do |part|
    numeric_part = part.gsub('$', '')

    if part.start_with?('$') && part.count('$') == 1 && numeric_part.to_i.to_s == numeric_part
      price = numeric_part.to_i
      price_discount = (price - (discount.to_f / 100 * price))

      result << ('$%0.2f' % price_discount)
    else
      result << part
    end
  end

  result.join(' ')
end
```