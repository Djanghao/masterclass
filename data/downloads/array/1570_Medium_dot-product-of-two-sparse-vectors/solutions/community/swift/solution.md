# 100% faster solution. Doesn't store the whole nums

**Author:** bsube
**Votes:** 1
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4677625/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4677625/)

---



# Code
```

class SparseVector {
    
    struct IndexValue: Hashable {
        let i: Int
        let value: Int

        static func ==(lhs: IndexValue, rhs: IndexValue) -> Bool {
            return lhs.i == rhs.i
        }
    }

    private(set) var non0Is = [Int: Int]()

    // Time complexity O(n) where n is the number of items in nums
    init(_ nums: [Int]) {
        for i in 0..<nums.count {
            if nums[i] != 0 {
                 non0Is[i, default: 0] = nums[i]
            }
        }
    }

    // Return the dotProduct of two sparse vectors
    func dotProduct(_ vec: SparseVector) -> Int {
        var sum = 0
        for (key, value) in vec.non0Is {
            if let selfValue = non0Is[key] {
                sum += value * selfValue
            }
        }
        return sum
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * let v1 = SparseVector(nums1)
 * let v2 = SparseVector(nums2)
 * let ans = v1.dotProduct(v2)
*/
```