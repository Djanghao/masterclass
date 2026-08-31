# 🟢🔴🟢 Beats 100.00% 👏 Most Easiest Way 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/5801409/](https://leetcode.com/problems/apply-discount-to-prices/solutions/5801409/)

---

```dart []
class Solution {
  String discountPrices(String sentence, int discount) {
    List<String> words = sentence.split(" ");
    List<String> ans = [];
    words.forEach((word){
        if(word.startsWith("\\$") && !word.endsWith("\\$")){
            try{
                int price = int.parse(word.substring(1),radix:10);
                ans.add("\\$${(price - price / 100 * discount).toStringAsFixed(2)}");
            }catch(e){
                ans.add(word);
            }
        }else{
            ans.add(word);
        }
     
    });
    return ans.join(" ");
  }
}
```