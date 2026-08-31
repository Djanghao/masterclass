# ✅ Video Solution

**Author:** Piotr_Maminski
**Votes:** 4
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/6044132/](https://leetcode.com/problems/koko-eating-bananas/solutions/6044132/)

---

https://youtu.be/U2SozAs9RzA?si=251ixQGuMs_SROBT

# Binary Search on Answer (Clean)

```python3 []
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)
        
        while left < right:
            mid = left + (right - left) // 2
            
            if self.canEatAll(piles, h, mid):
                right = mid
            else:
                left = mid + 1
                
        return left
    
    def canEatAll(self, piles: List[int], h: int, k: int) -> bool:
        hours = 0
        for pile in piles:
            hours += (pile + k - 1) // k
            if hours > h:
                return False
        return True
```
```cpp []
class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        long long left = 1;
        long long right = 0;
        
        // Find maximum pile as upper bound
        for (int pile : piles) {
            right = max(right, (long long)pile);
        }
        
        while (left < right) {
            long long mid = left + (right - left) / 2;
            
            if (canEatAll(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return (int)left;
    }
    
private:
    bool canEatAll(vector<int>& piles, int h, long long k) {
        long long hours = 0;
        for (int pile : piles) {
            hours += (pile + k - 1) / k;
            if (hours > h) return false;
        }
        return true;
    }
};
```
```java []
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        long left = 1;
        long right = 0;
        
        // Find maximum pile as upper bound
        for (int pile : piles) {
            right = Math.max(right, pile);
        }
        
        while (left < right) {
            long mid = left + (right - left) / 2;
            
            if (canEatAll(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return (int) left;
    }
    
    private boolean canEatAll(int[] piles, int h, long k) {
        long hours = 0;
        for (int pile : piles) {
            hours += (pile + k - 1) / k;
            if (hours > h) return false;
        }
        return true;
    }
}
```
```csharp []
public class Solution {
    public int MinEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = piles.Max();
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (CanEatAll(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    private bool CanEatAll(int[] piles, int h, int k) {
        long hours = 0;
        foreach (int pile in piles) {
            hours += (pile + k - 1) / k;
            if (hours > h) {
                return false;
            }
        }
        return true;
    }
}
```
```golang []
func minEatingSpeed(piles []int, h int) int {
    left := 1
    right := 0
    
    for _, pile := range piles {
        if pile > right {
            right = pile
        }
    }
    
    for left < right {
        mid := left + (right - left) / 2
        
        if canEatAll(piles, h, mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return left
}

func canEatAll(piles []int, h int, k int) bool {
    hours := 0
    for _, pile := range piles {
        hours += (pile + k - 1) / k
        if hours > h {
            return false
        }
    }
    return true
}
```
```swift []
class Solution {
    func minEatingSpeed(_ piles: [Int], _ h: Int) -> Int {
        var left: Int = 1
        var right: Int = piles.max() ?? 0
        
        while left < right {
            let mid = left + (right - left) / 2
            
            if canEatAll(piles, h, mid) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        
        return left
    }
    
    private func canEatAll(_ piles: [Int], _ h: Int, _ k: Int) -> Bool {
        var hours = 0
        for pile in piles {
            hours += (pile + k - 1) / k
            if hours > h { return false }
        }
        return true
    }
}
```
```javascript [JS]
// JavaScript

var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (canEatAll(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

function canEatAll(piles, h, k) {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / k);
        if (hours > h) return false;
    }
    return true;
}
```
```typescript [TS]
// TypeScript

function minEatingSpeed(piles: number[], h: number): number {
    let left: number = 1;
    let right: number = Math.max(...piles);
    
    while (left < right) {
        const mid: number = left + Math.floor((right - left) / 2);
        
        if (canEatAll(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

function canEatAll(piles: number[], h: number, k: number): boolean {
    let hours: number = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / k);
        if (hours > h) return false;
    }
    return true;
}
```
```rust []
impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let mut left: i64 = 1;
        let mut right: i64 = *piles.iter().max().unwrap() as i64;
        
        while left < right {
            let mid = left + (right - left) / 2;
            
            if Self::can_eat_all(&piles, h, mid) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        left as i32
    }
    
    fn can_eat_all(piles: &Vec<i32>, h: i32, k: i64) -> bool {
        let mut hours: i64 = 0;
        for &pile in piles {
            hours += (pile as i64 + k - 1) / k;
            if hours > h as i64 { return false; }
        }
        true
    }
}
```
```ruby []
def min_eating_speed(piles, h)
    left = 1
    right = piles.max
    
    while left < right
        mid = left + (right - left) / 2
        
        if can_eat_all(piles, h, mid)
            right = mid
        else
            left = mid + 1
        end
    end
    
    left
end

def can_eat_all(piles, h, k)
    hours = 0
    piles.each do |pile|
        hours += (pile + k - 1) / k
        return false if hours > h
    end
    true
end
```



















### Complexity
- Time complexity: O(N * log M)




- Space complexity: O(1)


