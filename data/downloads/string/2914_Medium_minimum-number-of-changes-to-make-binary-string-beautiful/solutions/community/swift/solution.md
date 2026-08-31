# Swift + Objective-C

**Author:** pagafan7as
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008505/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008505/)

---

# Straightforward
```
class Solution {
    func minChanges(_ s: String) -> Int {
        let s = Array(s)
        let n = s.count
        guard n.isMultiple(of: 2) else { return -1 }

        var res = 0
        for i in 0..<n / 2 {
            if s[2 * i] != s[2 * i + 1] { res += 1 }
        }
        return res
    }
}
```

# Using the Algorithms module
```
import Algorithms

class Solution {
    func minChanges(_ s: String) -> Int {
        let n = s.count
        guard n.isMultiple(of: 2) else { return -1 }

        var res = 0
        for pair in s.chunks(ofCount: 2) {
            if pair.first != pair.last { res += 1 }
        }
        return res
    }
}
```

# Objective-C
```
@implementation Solution
+ (NSInteger)minChanges:(NSString *)s {
    NSUInteger n = s.length;
    if (n % 2 != 0) { return -1; }
    NSInteger res = 0;
    for (int i = 0; i < n / 2; i++) {
        if ([s characterAtIndex:2 * i] != [s characterAtIndex:2 * i + 1]) {
            res += 1;
        }
    }
    return res;
}
@end
```
