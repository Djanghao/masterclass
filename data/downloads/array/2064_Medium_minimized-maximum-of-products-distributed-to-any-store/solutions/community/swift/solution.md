# ✅Beats 90-100% | Video | Clean | List Most Common Array Interview Problems✅

**Author:** Piotr_Maminski
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043943/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043943/)

---

https://youtu.be/GKSSr2xkR8A?si=APvB__WolBuN5ukY

# #1 Simple Binary Search from Video (changes in other languages)



```python3 []
class Solution:
    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:
        def can_distribute(x):
            stores = 0
            for q in quantities:
                stores += math.ceil(q / x)
            return stores <= n

        l, r = 1, max(quantities)
        res = 0
        while l <= r:
            x = (l + r) // 2
            if can_distribute(x):
                res = x
                r = x - 1
            else:
                l = x + 1

        return res
```
```cpp []
class Solution {
private:
    bool canDistribute(vector<int>& quantities, int n, int x) {
        int stores = 0;
        for (int q : quantities) {
            stores += (q + x - 1) / x;
        }
        return stores <= n;
    }
    
public:
    int minimizedMaximum(int n, vector<int>& quantities) {
        int left = 1;
        int right = *max_element(quantities.begin(), quantities.end());
        int result = 0;
        
        while (left <= right) {
            int x = left + (right - left) / 2;
            
            if (canDistribute(quantities, n, x)) {
                result = x;
                right = x - 1;
            } else {
                left = x + 1;
            }
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public int minimizedMaximum(int n, int[] quantities) {
        int res = 0;
        int left = 1;
        int right = getMax(quantities);
        
        while (left <= right) {
            int x = (left + right) / 2;
            if (canDistribute(x, n, quantities)) {
                res = x;
                right = x - 1;
            } else {
                left = x + 1;
            }
        }
        
        return res;
    }
    
    private boolean canDistribute(int x, int n, int[] quantities) {
        int stores = 0;
        for (int q : quantities) {
            stores += (q + x - 1) / x; 
        }
        return stores <= n;
    }
    
    private int getMax(int[] quantities) {
        int max = quantities[0];
        for (int q : quantities) {
            max = Math.max(max, q);
        }
        return max;
    }
}
```
```csharp []
public class Solution {
    private bool CanDistribute(int x, int[] quantities, int n) {
        int stores = 0;
        foreach (int q in quantities) {
            stores += (int)Math.Ceiling((double)q / x);
        }
        return stores <= n;
    }
    
    public int MinimizedMaximum(int n, int[] quantities) {
        int left = 1;
        int right = quantities.Max();
        int result = 0;
        
        while (left <= right) {
            int x = (left + right) / 2;
            if (CanDistribute(x, quantities, n)) {
                result = x;
                right = x - 1;
            } else {
                left = x + 1;
            }
        }
        
        return result;
    }
}
```
```golang []
func minimizedMaximum(n int, quantities []int) int {
    canDistribute := func(x int) bool {
        stores := 0
        for _, q := range quantities {
            stores += (q + x - 1) / x
        }
        return stores <= n
    }
    
    left, right := 1, 0
    for _, q := range quantities {
        if q > right {
            right = q
        }
    }
    
    result := 0
    for left <= right {
        x := (left + right) / 2
        if canDistribute(x) {
            result = x
            right = x - 1
        } else {
            left = x + 1
        }
    }
    
    return result
}
```
```swift []
class Solution {
    func minimizedMaximum(_ n: Int, _ quantities: [Int]) -> Int {
        func canDistribute(_ x: Int) -> Bool {
            var stores = 0
            for q in quantities {
                stores += (q + x - 1) / x
            }
            return stores <= n
        }
        
        var left = 1
        var right = quantities.max()!
        var result = 0
        
        while left <= right {
            let x = (left + right) / 2
            if canDistribute(x) {
                result = x
                right = x - 1
            } else {
                left = x + 1
            }
        }
        
        return result
    }
}
```
```javascript [JS]
// JavaScript

var minimizedMaximum = function(n, quantities) {
    const canDistribute = (x) => {
        let stores = 0;
        for (const q of quantities) {
            stores += Math.ceil(q / x);
        }
        return stores <= n;
    };
    
    let left = 1;
    let right = Math.max(...quantities);
    let result = 0;
    
    while (left <= right) {
        const x = Math.floor((left + right) / 2);
        if (canDistribute(x)) {
            result = x;
            right = x - 1;
        } else {
            left = x + 1;
        }
    }
    
    return result;
};
```
```typescript [TS]
// TypeScript

function minimizedMaximum(n: number, quantities: number[]): number {
    const canDistribute = (x: number): boolean => {
        let stores = 0;
        for (const q of quantities) {
            stores += Math.ceil(q / x);
        }
        return stores <= n;
    };
    
    let left = 1;
    let right = Math.max(...quantities);
    let result = 0;
    
    while (left <= right) {
        const x = Math.floor((left + right) / 2);
        if (canDistribute(x)) {
            result = x;
            right = x - 1;
        } else {
            left = x + 1;
        }
    }
    
    return result;
}
```
```rust []
impl Solution {
    pub fn minimized_maximum(n: i32, quantities: Vec<i32>) -> i32 {
        fn can_distribute(x: i32, quantities: &Vec<i32>, n: i32) -> bool {
            let mut stores = 0;
            for &q in quantities {
                stores += (q + x - 1) / x;
            }
            stores <= n
        }
        
        let mut left = 1;
        let mut right = *quantities.iter().max().unwrap();
        let mut result = 0;
        
        while left <= right {
            let x = (left + right) / 2;
            if can_distribute(x, &quantities, n) {
                result = x;
                right = x - 1;
            } else {
                left = x + 1;
            }
        }
        
        result
    }
}
```
```ruby []
def minimized_maximum(n, quantities)
    def can_distribute(x, quantities, n)
        stores = 0
        quantities.each do |q|
            stores += (q.to_f / x).ceil
        end
        stores <= n
    end
    
    left = 1
    right = quantities.max
    result = 0
    
    while left <= right
        x = (left + right) / 2
        if can_distribute(x, quantities, n)
            result = x
            right = x - 1
        else
            left = x + 1
        end
    end
    
    result
end
```
- Complexy: Time O(m * log k) & Space O(1)


# #2 Greedy Binary Search on Answer (Clean, Beats 90-100%)

```python3 []
class Solution:
    def minimizedMaximum(self, storeCount: int, productQuantities: List[int]) -> int:
        maxQuantity = max(productQuantities)
        left = 1
        right = maxQuantity
        result = 0
        
        while left <= right:
            mid = left + (right - left) // 2
            if self.canDistributeProducts(mid, storeCount, productQuantities):
                result = mid
                right = mid - 1
            else:
                left = mid + 1
        
        return result
    
    def canDistributeProducts(self, maxProductsPerStore: int, storeCount: int, quantities: List[int]) -> bool:
        requiredStores = 0
        
        for quantity in quantities:
            # Calculate stores needed for current product type
            requiredStores += (quantity + maxProductsPerStore - 1) // maxProductsPerStore
        
        return requiredStores <= storeCount
```
```cpp []
class Solution {
public:
    int minimizedMaximum(int storeCount, vector<int>& productQuantities) {
        int maxQuantity = *max_element(productQuantities.begin(), productQuantities.end());
        int left = 1;
        int right = maxQuantity;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canDistributeProducts(mid, storeCount, productQuantities)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }

private:
    bool canDistributeProducts(int maxProductsPerStore, int storeCount, const vector<int>& quantities) {
        int requiredStores = 0;
        
        for (int quantity : quantities) {
            // Calculate stores needed for current product type
            requiredStores += (quantity + maxProductsPerStore - 1) / maxProductsPerStore;
        }
        
        return requiredStores <= storeCount;
    }
};
```
```java []
class Solution {
    public int minimizedMaximum(int storeCount, int[] productQuantities) {
        int maxQuantity = 0;
        for (int quantity : productQuantities) {
            maxQuantity = Math.max(maxQuantity, quantity);
        }
        
        int left = 1;
        int right = maxQuantity;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canDistributeProducts(mid, storeCount, productQuantities)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private boolean canDistributeProducts(int maxProductsPerStore, int storeCount, int[] quantities) {
        int requiredStores = 0;
        
        for (int quantity : quantities) {
            // Calculate stores needed for current product type
            requiredStores += (quantity + maxProductsPerStore - 1) / maxProductsPerStore;
        }
        
        return requiredStores <= storeCount;
    }
}
```
```csharp []
public class Solution {
    public int MinimizedMaximum(int storeCount, int[] productQuantities) {
        int maxQuantity = productQuantities.Max();
        int left = 1;
        int right = maxQuantity;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (CanDistributeProducts(mid, storeCount, productQuantities)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private bool CanDistributeProducts(int maxProductsPerStore, int storeCount, int[] quantities) {
        int requiredStores = 0;
        
        foreach (int quantity in quantities) {
            requiredStores += (quantity + maxProductsPerStore - 1) / maxProductsPerStore;
        }
        
        return requiredStores <= storeCount;
    }
}

```
```golang []
func minimizedMaximum(storeCount int, productQuantities []int) int {
    maxQuantity := 0
    for _, q := range productQuantities {
        if q > maxQuantity {
            maxQuantity = q
        }
    }
    
    left := 1
    right := maxQuantity
    result := 0
    
    for left <= right {
        mid := left + (right-left)/2
        if canDistributeProducts(mid, storeCount, productQuantities) {
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return result
}

func canDistributeProducts(maxProductsPerStore int, storeCount int, quantities []int) bool {
    requiredStores := 0
    
    for _, quantity := range quantities {
        requiredStores += (quantity + maxProductsPerStore - 1) / maxProductsPerStore
    }
    
    return requiredStores <= storeCount
}

```
```swift []
class Solution {
    func minimizedMaximum(_ storeCount: Int, _ productQuantities: [Int]) -> Int {
        let maxQuantity = productQuantities.max()!
        var left = 1
        var right = maxQuantity
        var result = 0
        
        while left <= right {
            let mid = left + (right - left) / 2
            if canDistributeProducts(mid, storeCount, productQuantities) {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        
        return result
    }
    
    private func canDistributeProducts(_ maxProductsPerStore: Int, _ storeCount: Int, _ quantities: [Int]) -> Bool {
        var requiredStores = 0
        
        for quantity in quantities {
            requiredStores += (quantity + maxProductsPerStore - 1) / maxProductsPerStore
        }
        
        return requiredStores <= storeCount
    }
}

```
```javascript [JS]
// JavaScript

var minimizedMaximum = function(storeCount, productQuantities) {
    const maxQuantity = Math.max(...productQuantities);
    let left = 1;
    let right = maxQuantity;
    let result = 0;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canDistributeProducts(mid, storeCount, productQuantities)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
};

function canDistributeProducts(maxProductsPerStore, storeCount, quantities) {
    let requiredStores = 0;
    
    for (const quantity of quantities) {
        requiredStores += Math.ceil(quantity / maxProductsPerStore);
    }
    
    return requiredStores <= storeCount;
}
```
```typescript [TS]
// TypeScript
function minimizedMaximum(storeCount: number, productQuantities: number[]): number {
    const maxQuantity = Math.max(...productQuantities);
    let left = 1;
    let right = maxQuantity;
    let result = 0;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canDistributeProducts(mid, storeCount, productQuantities)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}

function canDistributeProducts(maxProductsPerStore: number, storeCount: number, quantities: number[]): boolean {
    let requiredStores = 0;
    
    for (const quantity of quantities) {
        requiredStores += Math.ceil(quantity / maxProductsPerStore);
    }
    
    return requiredStores <= storeCount;
}

```
```rust []
impl Solution {
    pub fn minimized_maximum(store_count: i32, product_quantities: Vec<i32>) -> i32 {
        let max_quantity = *product_quantities.iter().max().unwrap();
        let mut left = 1;
        let mut right = max_quantity;
        let mut result = 0;
        
        while left <= right {
            let mid = left + (right - left) / 2;
            if Self::can_distribute_products(mid, store_count, &product_quantities) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        result
    }
    
    fn can_distribute_products(max_products_per_store: i32, store_count: i32, quantities: &Vec<i32>) -> bool {
        let mut required_stores = 0;
        
        for &quantity in quantities {
            required_stores += (quantity + max_products_per_store - 1) / max_products_per_store;
        }
        
        required_stores <= store_count
    }
}
```
```ruby []
def minimized_maximum(store_count, product_quantities)
    max_quantity = product_quantities.max
    left = 1
    right = max_quantity
    result = 0
    
    while left <= right
        mid = left + (right - left) / 2
        if can_distribute_products(mid, store_count, product_quantities)
            result = mid
            right = mid - 1
        else
            left = mid + 1
        end
    end
    
    result
end

def can_distribute_products(max_products_per_store, store_count, quantities)
    required_stores = 0
    
    quantities.each do |quantity|
        required_stores += (quantity + max_products_per_store - 1) / max_products_per_store
    end
    
    required_stores <= store_count
end
```


- Complexy: Time O(n * log m) & Space O(1)

# #2 Greedy BSoA Aproach

---

1. Main Function `minimizedMaximum`:
```
def minimizedMaximum(self, storeCount: int, productQuantities: List[int]) -> int:
    maxQuantity = max(productQuantities)
    left = 1
    right = maxQuantity
    result = 0
```

- Takes number of stores and list of product quantities as input
- Sets up binary search boundaries:
    - `left = 1` (minimum possible products per store)
    - `right = maxQuantity` (maximum quantity among all products)
2. Binary Search:
```
    while left <= right:
        mid = left + (right - left) // 2
        if self.canDistributeProducts(mid, storeCount, productQuantities):
            result = mid
            right = mid - 1
        else:
            left = mid + 1
```

- Uses biary search to find optimal maximum products per store
- For each mid point:
    - Checks if distribution is possible with `mid` as max products per store
    - **If possible**, stores result and tries to find smaller value
    - **If not possible**, tries larger value
3. Helper Function `canDistributeProducts`:
```
def canDistributeProducts(self, maxProductsPerStore: int, storeCount: int, quantities: List[int]) -> bool:
    requiredStores = 0
    
    for quantity in quantities:
        requiredStores += (quantity + maxProductsPerStore - 1) // maxProductsPerStore
    
    return requiredStores <= storeCount
```

- Checks if distribution is possible with given maximum products per store
- For each product quantity:
    - Calculates minimum stores needed using ceiling division
    - Formula: `(quantity + maxProductsPerStore - 1) // maxProductsPerStore`
- Returns true if total required stores \u2264 available stores

**walkthrough:**

1. If storeCount = 6 and productQuantities = [11, 6]
2. Binary search starts with left=1, right=11
3. For mid=6:
    - Product 1 (11): needs \u230811/6\u2309 = 2 stores
    - Product 2 (6): needs \u23086/6\u2309 = 1 store
    - Total: 3 stores (\u2264 6, possible)
4. and continues until finding minimum possible value

Done.

Upvote is just one click for U >__<

---
Similar problem, better to start: [[875. Koko Eating Bananas]](https://leetcode.com/problems/koko-eating-bananas/solutions/6044132/solution)

![array2.png](./images/0.png)

# Most common Array Interview Problems
List based on my research (interviews, reddit, github) Probably not 100% accurate but very close to my recruitments. Leetcode Premium is probably more accurate [I don't have]


**Easy:** [[1. Two Sum]](https://leetcode.com/problems/two-sum/solutions/5999466/beats-100-explained-step-by-step-list-most-common-array-inverview) **(common warm-up)** [[121. Best Time to Buy and Sell Stock]](https://leetcode.com/discuss/topic/6027720/solution/) [[88. Merge Sorted Array]](https://leetcode.com/problems/merge-sorted-array/solutions/6031394/beats-100-explained-step-by-step-list-most-common-string-interview-problems) [[27. Remove Element]](https://leetcode.com/problems/remove-element/solutions/6031528/beats-100-explained-step-by-step-list-most-common-array-interview-problems) [[929. Unique Email Addresses]](https://leetcode.com/problems/unique-email-addresses/solutions/6031687/explained-step-by-step-video-list-most-common-array-interview-problems) 


**Medium/Hard:** [[15. 3Sum]](https://leetcode.com/problems/3sum?envType=problem-list-v2&envId=atbyk0mj) [[42. Trapping Rain Water]](https://leetcode.com/problems/trapping-rain-water?envType=problem-list-v2&envId=atbyk0mj) [[56. Merge Intervals]](https://leetcode.com/problems/merge-intervals?envType=problem-list-v2&envId=atbyk0mj) [[57. Insert Interval]](https://leetcode.com/problems/insert-interval?envType=problem-list-v2&envId=atbyk0mj) [[46. Permutations]](https://leetcode.com/problems/permutations?envType=problem-list-v2&envId=atbyk0mj) [[53. Maximum Subarray]](https://leetcode.com/problems/maximum-subarray?envType=problem-list-v2&envId=atbyk0mj) [[73. Set Matrix Zeroes]](https://leetcode.com/problems/set-matrix-zeroes?envType=problem-list-v2&envId=atbyk0mj) [[284. Peeking Iterator]](https://leetcode.com/problems/peeking-iterator?envType=problem-list-v2&envId=atbyk0mj)


####  [Interview Questions and Answers Repository](https://github.com/RooTinfinite/Interview-questions-and-answers)




![image.png](./images/1.png)

