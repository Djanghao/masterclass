# Swift Explanation Detailed step by step

**Author:** sp71
**Votes:** 28
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/562036/](https://leetcode.com/problems/multiply-strings/solutions/562036/)

---

Walking through an example is the best way to understand the methodology and showcases to an interviewer how you came to your solution. Lets take an example such as 12 X 91. Any example is fine as long as it involves using carry. Lets just multiple these two numbers.

**Example**
```
            12 
         x  91
        -------
           182
        +  910
        -------
          1092
```
What observations can we see from the above example? 
* We padded a 0 after 91 before we added 182
* The result has a length of 4 - inputs both had a length of 2 so 2 + 2 = 4 for maximum result length
* We can store all of our calculations in a single array since we add the current result with the previous carry
* The final result can be stored in a simple array

 
Keeping this in mind, lets do a deeper walkthrough of the above example where we consider the indices we use, result, carry, and how it can play into a single array

**Walkthrough**

```
operation | mult | carry |  i  |  j |  sum      
2 x 1         2      0      1     1   [0,0,0,2]
2 x 9        18      0      1     0   [0,1,8,2]
1 x 1         1      8      0     1   [0,1,9,2]  added result to existing 8 carry
1 x 9         9      1      0     0   [0,10,9,2] added result to existing 1 carry
remove leading 0s in the sum array
```
* We store our carry in i+j
* We store the result + previousCarry into i+j+1

**Pseudocode**
```
sum = [0,0,0,0] where size of sum is num1.count + num2.count
loop backwards nums1 (i)
    loop backwards nums2 (j)
        let p1 = i + j
        let p2 = i + j + 1
        let val = n1 * n2 + sum[p2]
        sum[p2] = val % 10
        sum[p1] += val / 10
remove leading 0s
convert sum array to int
```

**Code**
```
func multiply(_ num1: String, _ num2: String) -> String {
	var sum = [Int](repeating: 0, count: num1.count + num2.count)
	for (i, n1) in num1.enumerated().reversed() {
		for (j, n2) in num2.enumerated().reversed() {
			guard let digit1 = Int(String(n2)), let digit2 = Int(String(n1)) else { return "" }
			let p1 = i + j
			let p2 = i + j + 1
			let mult = digit1 * digit2 + sum[p2] // add in carry from before
			sum[p2] = mult % 10
			sum[p1] += mult / 10
		}
	}
	while let firstSum = sum.first, firstSum == 0 { sum.removeFirst() }
	let res = sum.map ({ String($0) }).joined()
	return res.count > 0 ? res : "0"
}
```
