# PrefixSum with binarySearch

**Author:** gnayoaix
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/3393042/](https://leetcode.com/problems/random-pick-with-weight/solutions/3393042/)

---

# Intuition
\u6700\u597D\u7684\u8868\u793A\u6743\u91CD\u7684\u65B9\u6CD5\u5C31\u662F\u628A\u6BCF\u4E2A\u6570\u91CD\u590Dw\u6B21\uFF0C\u8FD9\u6837\u751F\u6210\u4E00\u4E2A\u8D85\u957Farray\uFF0Crandom select\u7684\u7ED3\u679C\u4E00\u5B9A\u662F\u6309\u7167weight\u6765\u4F53\u73B0\u7684\u3002\u8FD9\u91CC\u53EF\u4EE5\u7528PrefixSum\u4F18\u5316\uFF0C\u53EF\u4EE5virtually\u8868\u793A\u90A3\u4E2A\u8D85\u957F\u6570\u7EC4\uFF0C\u7136\u540E\u5728\u30101\uFF0Csum\u3011\u9009\u62E9\u4E00\u4E2Arandom number\uFF0C\u53EA\u9700\u8981binarySearch\u4E00\u4E0B\u627E\u5230\u8FD9\u4E2A\u503C\u6216\u8005\u5BF9\u5E94\u7684\u63D2\u5165\u7684\u4F4D\u7F6E\u5373\u53EF\u3002

# Code
```
class Solution(w: IntArray) {
    val prefixSum: IntArray

    init {
        prefixSum = w.copyOf()
        for (i in 1 until prefixSum.size) {
            prefixSum[i] += prefixSum[i - 1]
        }
    }

    fun pickIndex(): Int {
        val n = prefixSum[prefixSum.lastIndex]
        val randNum = (1..n).random()
        val ans = prefixSum.binarySearch(randNum)
        return if(ans >= 0) ans else -ans-1
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Solution(w)
 * var param_1 = obj.pickIndex()
 */
```