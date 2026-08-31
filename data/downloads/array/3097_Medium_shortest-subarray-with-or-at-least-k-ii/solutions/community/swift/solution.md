# Swift + Objective-C | Sliding Window

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6031871/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6031871/)

---

# Code
```swift []
class Solution {
    struct BitCounts {
        var counts = Array(repeating: 0, count: 32)

        init(_ num: Int) {
            add(num)
        }

        var intValue: Int {
            var res = 0
            for i in 0..<counts.count {
                if counts[i] > 0 { res += 1 << i } 
            }
            return res
        }

        mutating func add(_ num: Int) {
            for i in 0..<counts.count {
                counts[i] += (num >> i) & 1
            }
        }

        mutating func remove(_ num: Int) {
            for i in 0..<counts.count {
                counts[i] -= (num >> i) & 1
            }
        }
    }

    func minimumSubarrayLength(_ nums: [Int], _ k: Int) -> Int {
        let n = nums.count
        guard n > 0 else { return -1 }

        var (lo, hi) = (0, 0)
        var xor = BitCounts(nums[0])
        var res = Int.max

        while lo < n && hi < n {
            if xor.intValue < k {
                hi += 1
                if hi == n { break }
                xor.add(nums[hi])
            } else {
                res = min(res, hi - lo + 1)
                xor.remove(nums[lo])
                lo += 1
                if hi < lo { hi = lo }
            }
        }

        return res == Int.max ? -1 : res
    }
}
```

```ObjC []
@interface BitCounts : NSObject
@property(readonly) NSInteger intValue;

- (void)add:(NSInteger)num;
- (void)remove:(NSInteger)num;
@end

@interface BitCounts() {
int counts[32];
}
@end

@implementation BitCounts
- (instancetype)init:(NSInteger)num {
    self = [super init];
    if (self) {
        [self add:num];
    }
    return self;
}

- (NSInteger)intValue {
    NSInteger res = 0;
    for (int i = 0; i < sizeof(counts) / sizeof(int); i++) {
        if (counts[i] > 0) { res += 1 << i; }
    }
    return res;
}

- (void)add:(NSInteger)num {
    for (int i = 0; i < sizeof(counts) / sizeof(int); i++) {
        counts[i] += (num >> i) & 1;
    }
}

- (void)remove:(NSInteger)num {
    for (int i = 0; i < sizeof(counts) / sizeof(int); i++) {
        counts[i] -= (num >> i) & 1;
    }
}
@end

@interface Solution : NSObject
+ (NSInteger)minimumSubarrayLength:(NSArray<NSNumber *> *)nums k:(NSInteger)k;
@end

@implementation Solution
+ (NSInteger)minimumSubarrayLength:(NSArray<NSNumber *> *)nums k:(NSInteger)k {
    NSUInteger n = nums.count;
    if (n <= 0) { return -1; }

    int lo = 0;
    int hi = 0;
    BitCounts *xor = [[BitCounts alloc] init:nums[0].integerValue];
    NSInteger res = NSIntegerMax;

    while (lo < n && hi < n) {
        if (xor.intValue < k) {
            hi += 1;
            if (hi == n) { break; }
            [xor add:nums[hi].integerValue];
        } else {
            res = MIN(res, hi - lo + 1);
            [xor remove:nums[lo].integerValue];
            lo += 1;
            if (hi < lo) { hi = lo; }
        }
    }

    return res == NSIntegerMax ? -1 : res;
}
@end
```