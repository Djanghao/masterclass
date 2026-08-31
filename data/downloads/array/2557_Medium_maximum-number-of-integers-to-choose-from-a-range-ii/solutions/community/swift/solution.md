# Swift - Binary search - Easy to understand + My try (which fails for case 4)

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/5984199/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/5984199/)

---



# Code
```swift []
class Solution {
    func maxCount(_ banned: [Int], _ n: Int, _ maxSum: Int) -> Int {
        //we need to look for a mid between 1 ... n whose sum - (numbers in banned list < mid) <= maxSum
        var banned = Set<Int>(banned) //remove duplicates
        var left = 0
        var right = n
        while left < right {
            let numberOfElementsBetweenLeftRight = (right - left + 1)
            let mid = left + (numberOfElementsBetweenLeftRight) / 2
            //Sum of numbers between two int S = n(a + l)/2 where a is the first number, l is last number, n is number of integers
            let n = mid
            let a = 1
            let l = mid
            var sum = mid * (1 + mid) / 2

            for num in banned where num <= mid {
                sum -= num
            }

            if sum <= maxSum {
                left = mid 
            } else {
                right = mid - 1
            }
        }

        //now left will point the the right mid
        var count = left
        for num in banned where num <= left {
            count -= 1
        }

        return count
    }


    /**
    My Try - close answer but fails case 4 
     func maxCount(_ banned: [Int], _ n: Int, _ maxSum: Int) -> Int {
        //since banned integer array is sorted, we can do a binary search between adjacent numbers
        var maxSum = maxSum
        var count = 0
        var banned = [0] + banned.sorted(by: <) + [n + 1]

        for i in stride(from: 0, through: banned.count - 2, by: 1) {
            var left = banned[i] + 1 //we cannot choose values in banned array
            var right = banned[i + 1] - 1 //we need to choose values between

            //Sum of numbers between two int S = n(a + l)/2 where a is the first number, l is last number, n is number of integers
            //We need to choose a mid whose sum from left...mid <= maxSum
            while left <= right {
                let mid = left + (right - left) / 2
                let n = (mid - left + 1)
                let sum = n * ((left + mid) / 2)

                if sum <= maxSum {
                    count += n
                    maxSum -= sum

                    //choose a larger mid, so that we can include more numbers
                    left = mid + 1
                } else {
                    right = mid - 1
                }

                if maxSum <= 0 { return count }
            }
        }

        return count
    }
    **/
}
```