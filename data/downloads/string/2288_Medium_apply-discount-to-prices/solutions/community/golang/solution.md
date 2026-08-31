# go simple solution

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2085748/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2085748/)

---

```
func discountPrices(sentence string, discount int) string {
    words := strings.Split(sentence, " ")
    for index, word := range words {
        if word[0] != 36 {
            continue
        }
        num, err := strconv.Atoi(word[1:len(word)])
        if err != nil {
            continue
        }
        discountPrice := fmt.Sprintf("%.2f", float64(num) * (100 - float64(discount)) / 100)
        words[index] = "$" + string(discountPrice)
    }
    return strings.Join(words, " ")
}