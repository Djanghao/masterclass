# 因为 dp 和 maxChoosableInteger 是外部变量，在 lambda 表达式的捕获列表中使用 & 符号自动捕获外部所有变量，因此无需显式传入。 递归函数 can_win

**Author:** SuguruOsako
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/5408637/](https://leetcode.com/problems/can-i-win/solutions/5408637/)

---

\u5177\u4F53\u9898\u76EE\u53EF\u4EE5\u6982\u8FF0\u4E3A\uFF1A\u4E24\u4E2A\u73A9\u5BB6\u4EA4\u66FF\u9009\u62E9\u4ECE1\u5230maxChoosableInteger\u4E2D\u7684\u4E00\u4E2A\u6574\u6570\uFF0C\u5DF2\u7ECF\u9009\u62E9\u8FC7\u7684\u6570\u4E0D\u80FD\u518D\u9009\u62E9\uFF0C\u76EE\u6807\u662F\u7B2C\u4E00\u4E2A\u8FBE\u5230\u6216\u8D85\u8FC7desiredTotal\u7684\u73A9\u5BB6\u83B7\u80DC\u3002\u6211\u4EEC\u9700\u8981\u5224\u65AD\u5148\u624B\u73A9\u5BB6\u80FD\u5426\u4FDD\u8BC1\u80DC\u5229\u3002



\u68C0\u67E5\u521D\u59CB\u60C5\u51B5\uFF1A

\u5982\u679C desiredTotal \u5C0F\u4E8E\u6216\u7B49\u4E8E0\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u73A9\u5BB6\u603B\u662F\u80FD\u8D62\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u9009\u62E9\u3002
\u5982\u679C maxChoosableInteger \u7684\u6240\u6709\u6570\u4E4B\u548C\u90FD\u5C0F\u4E8E desiredTotal\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u73A9\u5BB6\u6C38\u8FDC\u4E0D\u53EF\u80FD\u8D62\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u65E0\u6CD5\u8FBE\u5230\u76EE\u6807\u548C\u3002
\u52A8\u6001\u89C4\u5212\u5B58\u50A8\u72B6\u6001\uFF1A

\u4F7F\u7528\u4E00\u4E2A unordered_map \u6765\u5B58\u50A8\u6BCF\u4E2A\u72B6\u6001\u7684\u7ED3\u679C\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u548C\u6570\u7EC4\u8D8A\u754C\u95EE\u9898\u3002
\u9012\u5F52\u5224\u65AD\u80DC\u8D1F\uFF1A

\u4F7F\u7528 lambda \u8868\u8FBE\u5F0F\u5B9A\u4E49\u4E00\u4E2A\u9012\u5F52\u51FD\u6570 can_win\uFF0C\u6765\u5224\u65AD\u5F53\u524D\u72B6\u6001\u4E0B\u5148\u624B\u73A9\u5BB6\u662F\u5426\u80FD\u8D62\u3002
\u9012\u5F52\u51FD\u6570\u7684\u53C2\u6570\u5305\u62EC\u5F53\u524D\u9009\u62E9\u72B6\u6001 status \u548C\u5269\u4F59\u9700\u8981\u8FBE\u5230\u7684\u548C rest\u3002
\u5728\u9012\u5F52\u51FD\u6570\u4E2D\uFF1A
\u5982\u679C rest \u5C0F\u4E8E\u6216\u7B49\u4E8E0\uFF0C\u5F53\u524D\u73A9\u5BB6\u65E0\u6CD5\u83B7\u80DC\u3002
\u5982\u679C\u5F53\u524D\u72B6\u6001\u5DF2\u7ECF\u8BA1\u7B97\u8FC7\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\u3002
\u904D\u5386\u6240\u6709\u53EF\u80FD\u7684\u9009\u62E9\uFF0C\u5982\u679C\u67D0\u4E2A\u6570\u5B57\u672A\u88AB\u4F7F\u7528\u4E14\u9009\u62E9\u8BE5\u6570\u5B57\u540E\u5BF9\u624B\u4E0D\u80FD\u83B7\u80DC\uFF0C\u5219\u5F53\u524D\u73A9\u5BB6\u83B7\u80DC\u3002
\u5982\u679C\u904D\u5386\u5B8C\u6240\u6709\u9009\u62E9\u90FD\u4E0D\u80FD\u8BA9\u5F53\u524D\u73A9\u5BB6\u83B7\u80DC\uFF0C\u5219\u8BB0\u4E3A\u5F53\u524D\u73A9\u5BB6\u65E0\u6CD5\u83B7\u80DC\u3002
\u521D\u59CB\u8C03\u7528\u9012\u5F52\u51FD\u6570\uFF1A

\u521D\u59CB\u72B6\u6001\u662F\u6240\u6709\u6570\u5B57\u90FD\u672A\u88AB\u9009\u62E9\uFF08status \u4E3A0\uFF09\u548C\u76EE\u6807\u548C desiredTotal\u3002




# Code
```cpp []
using namespace std;

class Solution {
public:
    bool canIWin(int maxChoosableInteger, int desiredTotal) {
        // \u5982\u679C\u76EE\u6807\u548C\u5C0F\u4E8E\u6216\u7B49\u4E8E0\uFF0C\u7B2C\u4E00\u4E2A\u73A9\u5BB6\u603B\u662F\u80FD\u8D62
        if (desiredTotal <= 0) {
            return true;
        }
        // \u5982\u679C1\u5230maxChoosableInteger\u7684\u548C\u5C0F\u4E8EdesiredTotal\uFF0C\u65E0\u6CD5\u8FBE\u5230\u76EE\u6807\u548C\uFF0C\u7B2C\u4E00\u4E2A\u73A9\u5BB6\u65E0\u6CD5\u83B7\u80DC
        if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) {
            return false;
        }
        
        // \u4F7F\u7528unordered_map\u6765\u5B58\u50A8\u6E38\u620F\u72B6\u6001\uFF0C\u907F\u514D\u6570\u7EC4\u8D8A\u754C\u95EE\u9898
        unordered_map<int, int> dp;

        // \u4F7F\u7528lambda\u8868\u8FBE\u5F0F\u5B9A\u4E49\u9012\u5F52\u51FD\u6570
        function<bool(int, int)> can_win = [&](int status, int rest) {
            // \u5982\u679C\u5269\u4F59\u548C\u5C0F\u4E8E\u7B49\u4E8E0\uFF0C\u5F53\u524D\u73A9\u5BB6\u65E0\u6CD5\u83B7\u80DC
            if (rest <= 0) {
                return false;
            }
            // \u5982\u679C\u5F53\u524D\u72B6\u6001\u5DF2\u7ECF\u8BA1\u7B97\u8FC7\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C
            if (dp.count(status)) {
                return dp[status] == 1;
            }
            // \u904D\u5386\u6240\u6709\u53EF\u80FD\u7684\u9009\u62E9
            for (int i = 1; i <= maxChoosableInteger; i++) {
                // \u68C0\u67E5\u5F53\u524D\u6570\u5B57\u662F\u5426\u672A\u88AB\u4F7F\u7528\u4E14\u5BF9\u624B\u4E0D\u80FD\u83B7\u80DC
                if ((status & (1 << i)) == 0 && !can_win(status | (1 << i), rest - i)) {
                    dp[status] = 1;  // \u5F53\u524D\u73A9\u5BB6\u53EF\u4EE5\u83B7\u80DC
                    return true;
                }
            }
            dp[status] = -1;  // \u5F53\u524D\u73A9\u5BB6\u65E0\u6CD5\u83B7\u80DC
            return false;
        };

        // \u521D\u59CB\u72B6\u6001\u4E3A\u6240\u6709\u6570\u90FD\u672A\u88AB\u4F7F\u7528\u7684\u72B6\u6001\u548C\u76EE\u6807\u548C
        return can_win(0, desiredTotal);
    }
};
```
```rust [can_win\u5C45\u7136\u6709\u56DB\u4E2A\u53D8\u91CF\u6211\u90FD\u670D\u4E86]
use std::collections::HashMap;
impl Solution {
    pub fn can_i_win(max_choosable_integer: i32, desired_total: i32) -> bool {
        if desired_total <= 0 {
            return true;
        }
        if max_choosable_integer * (max_choosable_integer + 1) / 2 < desired_total {
            return false;
        }

        let mut dp: HashMap<i32, bool> = HashMap::new();

        fn can_win(status: i32, rest: i32, dp: &mut HashMap<i32, bool>, max_choosable_integer: i32) -> bool {
            if rest <= 0 {
                return false;
            }
            if let Some(&result) = dp.get(&status) {
                return result;
            }
            for i in 1..=max_choosable_integer {
                if (status & (1 << i)) == 0 && !can_win(status | (1 << i), rest - i, dp, max_choosable_integer) {
                    dp.insert(status, true);
                    return true;
                }
            }
            dp.insert(status, false);
            return false;
        }

        can_win(0, desired_total, &mut dp, max_choosable_integer)
    }
}
```