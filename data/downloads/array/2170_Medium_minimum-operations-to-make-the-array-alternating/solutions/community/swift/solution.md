# Swift | Find first and second max

**Author:** traktorbless
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1775802/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1775802/)

---



    func minimumOperations(_ nums: [Int]) -> Int {
        var countOperations = 0
		
        if nums.count == 1 {
            return countOperations
        }
        
        var evenIndex = [Int: Int]()
        var oddIndex = [Int: Int]()
        
        for index in nums.indices {
            if index % 2 == 0 {
                if evenIndex[nums[index]] != nil {
                    evenIndex[nums[index]]! += 1
                } else {
                    evenIndex[nums[index]] = 1
                }
            } else {
                if oddIndex[nums[index]] != nil {
                    oddIndex[nums[index]]! += 1
                } else {
                    oddIndex[nums[index]] = 1
                }
            }
        }
        
        var twoMaxForEvenCount: (first: Int,second:Int) = (0,0)
        var twoMaxForEven: (first: Int,second: Int) = (0,0)
        
        for (number,count) in evenIndex {
            if count > twoMaxForEvenCount.first {
                twoMaxForEven.second = twoMaxForEven.first
                twoMaxForEven.first = number
                twoMaxForEvenCount.second = twoMaxForEvenCount.first
                twoMaxForEvenCount.first = count
            } else if count > twoMaxForEvenCount.second {
                twoMaxForEven.second = number
                twoMaxForEvenCount.second = count
            }
        }
        
        var twoMaxForOddCount: (first: Int,second:Int) = (0,0)
        var twoMaxForOdd: (first: Int,second: Int) = (0,0)
        
        for (number,count) in oddIndex {
            if count > twoMaxForOddCount.first {
                twoMaxForOdd.second = twoMaxForOdd.first
                twoMaxForOdd.first = number
                twoMaxForOddCount.second = twoMaxForOddCount.first
                twoMaxForOddCount.first = count
            } else if count > twoMaxForOddCount.second {
                twoMaxForOdd.second = number
                twoMaxForOddCount.second = count
            }
        }
        
        var evenNumber = twoMaxForEven.first
        var oddNumber = twoMaxForOdd.first
        
        if evenNumber == oddNumber {
                if (twoMaxForOddCount.first + twoMaxForEvenCount.second) >= (twoMaxForOddCount.second + twoMaxForEvenCount.first) {
                    evenNumber = twoMaxForEven.second
                    oddNumber = twoMaxForOdd.first
                } else {
                    evenNumber = twoMaxForEven.first
                    oddNumber = twoMaxForOdd.second
                }
        }
        
        for index in 0..<nums.count
        {
            if (index % 2 == 0) && (nums[index] != evenNumber) {
                countOperations += 1
            }
            else if (index % 2 == 1) && (nums[index] != oddNumber) {
                countOperations += 1
            }
        }
        return countOperations
    }