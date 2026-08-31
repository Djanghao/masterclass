# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/4164141/](https://leetcode.com/problems/apply-discount-to-prices/solutions/4164141/)

---

```
private extension String {
    
    private var price: Int? {
        guard first == "$" else { return nil }
        return Int(String(dropFirst()))
    }

    func discounted(_ d: Int) -> String {
        guard let price = price else { return self }
        let total = Double(price) / 100 * (100 - Double(d))
        return String(format: "$%.2f", total)
    }
}

class Solution {
    func discountPrices(_ sentence: String, _ discount: Int) -> String {
        sentence
            .components(separatedBy: " ")
            .map { $0.discounted(discount) }
            .joined(separator: " ")
    }
}
```