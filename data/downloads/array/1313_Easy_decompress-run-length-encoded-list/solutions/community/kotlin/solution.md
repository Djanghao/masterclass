# Kotlin Solution

**Author:** captano
**Votes:** 1
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2579809/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2579809/)

---

```
fun decompressRLElistAttemptTwo(nums: IntArray): IntArray {
    var outputSize = 0

    for (i in nums.indices step 2)
        outputSize += nums[i]

    println(outputSize)

    val output = IntArray(outputSize)

    var counter = 0 // 1, 2, 3, 4
    var outputIndex = 0

    while (counter < nums.size) {
        val freq = nums[counter]
        val value = nums[counter + 1]

        for (k in 0 until freq) {
            output[outputIndex] = value
            outputIndex++
        }

        counter += 2
    }

    return output
}
```