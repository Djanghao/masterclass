# 100% Scala Solution

**Author:** ambar_cat2014
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/5260480/](https://leetcode.com/problems/most-frequent-even-element/solutions/5260480/)

---

# Intuition
Build a Frequency Map for Even Elements

# Approach
Build a Frequency Map for Even Elements and then iterate through it to get max frequency with lowest key

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
object Solution {
    def mostFrequentEven(nums: Array[Int]): Int = {

        var frequencyOfEvenDigits : scala.collection.mutable.Map[Int,Int] = scala.collection.mutable.Map()
        var mostFrequentElement = -1
        var maxFrequency        = -1

        for(currDigit <- nums.filter(_%2 == 0)) {
            if(frequencyOfEvenDigits.contains(currDigit)) {
               frequencyOfEvenDigits(currDigit) = frequencyOfEvenDigits(currDigit) + 1
            } else {
               frequencyOfEvenDigits += (currDigit -> 1)
            }
        }

        for((evenElement,frequency) <- frequencyOfEvenDigits) {
             if(frequencyOfEvenDigits(evenElement) > maxFrequency) {
                mostFrequentElement = evenElement
                maxFrequency        = frequencyOfEvenDigits(evenElement)
             } else if (frequencyOfEvenDigits(evenElement) == maxFrequency && evenElement < mostFrequentElement) {
                mostFrequentElement = evenElement
             }
        }

        mostFrequentElement
    }
}
```