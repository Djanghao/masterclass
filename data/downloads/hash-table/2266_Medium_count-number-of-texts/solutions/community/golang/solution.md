# go dp

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2037028/](https://leetcode.com/problems/count-number-of-texts/solutions/2037028/)

---

```
func countTexts(pressedKeys string) int {
    pressedKeysLen := len(pressedKeys)
    dp := make([]int, pressedKeysLen + 1)
    dp[0] = 1
    dp[1] = 1
    modulo := int(1e9+7)
    for i := 1; i < pressedKeysLen; i++ {
        dp[i + 1] = dp[i]
        if i >= 1 && pressedKeys[i] == pressedKeys[i - 1] {
            dp[i + 1] = dp[i] + dp[i - 1]
            if i >= 2 && pressedKeys[i] == pressedKeys[i - 2] {
                dp[i + 1] = dp[i] + dp[i - 1] + dp[i - 2]
                if i >= 3 && (string(pressedKeys[i]) == "7" || string(pressedKeys[i]) == "9") {
                    if pressedKeys[i] == pressedKeys[i - 3] {
                        dp[i + 1] = dp[i] + dp[i - 1] + dp[i - 2] + dp[i - 3]
                    }
                }
            }
        }
        dp[i + 1] %= modulo
    }
    return dp[pressedKeysLen] 
}