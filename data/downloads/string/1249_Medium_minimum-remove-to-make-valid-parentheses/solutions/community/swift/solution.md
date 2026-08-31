# Swift Stack

**Author:** duyetnt
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/1852685/](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/solutions/1852685/)

---

From what I can see, most of the parenthesis problems can be solved using Stack.

****1. Maintain invalid indices that shouldn't be included in the final result****
The idea is to maintain a `stack` consisting of indices of `(` and `invalidIndices` set donating the indices we shouldn't include in the final result. 
* Iterate over every index `i` of the input string, we have to handle **3 cases**:
	* If `arr[i] == "("`, append `i` to `stack`
	* If `arr[i] == ")"`, there are **2 sub-cases**:
		* If `stack is empty` --> `i` is an invalid index --> insert into `invalidIndices`
		* If `stack is not empty` --> `i` can make a balanced pair with any index inside `stack` --> remove the last element from `stack`
	* If `arr[i] is other character`, `i` is indeed a valid index --> don't need to do anything.
* Every remaining index inside `stack` is invalid -->  insert all into `invalidIndices`
* Finally, iterate over every index `i` again, if `i` doesn't exist in the `invalidIndices`, append `arr[i]` to the final result.
```swift
class Solution {
  func minRemoveToMakeValid(_ s: String) -> String {
    let arr = Array(s)
    let n = arr.count
    
    var invalidIndices = Set<Int>()
    var stack = [Int]()
    for i in 0..<n {
      let c = arr[i]
      switch c {
        case "(": stack.append(i)
        case ")":
          if stack.isEmpty {
            invalidIndices.insert(i)
          } else {
            stack.popLast()
          }
        default: break
      }
    }
    
    invalidIndices.formUnion(stack)
    
    var res = ""
    for i in 0..<n where !invalidIndices.contains(i) {
      res.append(arr[i])
    }
    
    return res
  }
}
// Time complexity: O(n) where n is length of s
// Space complexity: O(n)
```

****2. Maintain valid indices that need to be included in the final result****
Another way is to maintain `validIndices` set donating the indices we must include in the final result. It requires some small tweaks from the approach #1 above.
* Iterate over every index `i` of the input string, we have to handle **3 cases**:
	* If `arr[i] == "("`, append `i` to `stack`
	* If `arr[i] == ")"`, there are **2 sub-cases**:
		* If `stack is empty` --> `i` is an invalid index --> do nothing
		* If `stack is not empty` --> `i` can make a balanced pair with any index inside `stack` --> remove the last element from `stack` and insert it as well as `i` into `validIndices`
	* If `arr[i] is other character`, `i` is indeed a valid index --> insert into `validIndices`
* Finally, iterate over every index `i` again, if `i` exists in the `validIndices`, append `arr[i]` to the final result.

I find this approach is slightly better than approach #1, especially when `s` only contains `(`.
```swift
class Solution {
  func minRemoveToMakeValid(_ s: String) -> String {
    let arr = Array(s)
    let n = arr.count 
    
    var validIndices = Set<Int>()
    var stack = [Int]()
    for i in 0..<n {
      switch arr[i] {
      case "(": stack.append(i)
      case ")": 
        if let last = stack.popLast() {
          validIndices.formUnion([last, i])
        }
      default: validIndices.insert(i)
      }
    }
    
    var res = ""
    for i in 0..<n where validIndices.contains(i) {
      res.append(arr[i])
    }
    
    return res
  }
}
// Time complexity: O(n) where n is length of s
// Space complexity: O(n)
```