# Swift Iterative Solution

**Author:** Hassan-aftab
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1673728/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1673728/)

---

```

class Solution {
    func addNegabinary(_ arr1: [Int], _ arr2: [Int]) -> [Int] {

        var i = arr1.count-1, j = arr2.count-1
        var carry = 0
        var res = [Int]()

        let lookup = [
                    -1: (1, 1),  // this case only arrives when arrays have ended and there is a carry -1, in this case we transpose it to 11 because with base -2 we have -1 = (1 * -2)^1 + (1 * -2)^0
                    0: (0, 0), // Self explanatory
                    1: (1, 0), // Self explanatory
                    2: (0, -1), // bit in array will be zero because binary for 2 is 1 0, carry is -1 because base is -2
                    3: (1, -1), // bit in array will be zero because binary for 3 is 1 1, carry is -1 because base is -2
                ]

        while ( i >= 0 || j >= 0 || carry != 0) {
            let num = (i >= 0 ? arr1[i] : 0)
                        + (j >= 0 ? arr2[j] : 0)
                        + carry
            let (bit, car) = lookup[num]!
            carry = car

            res.insert(bit, at: 0)
            i -= 1
            j -= 1
        }

        while res.count > 1 && res[0] == 0 {
            res.remove(at: 0)
        }
        return res
    }
}
