# ✅ 2 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 28
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3437348/](https://leetcode.com/problems/valid-palindrome/solutions/3437348/)

---

# First solution using Two Pointers

## Approach
Firstly, the function converts the string to lowercase and filters out all non-alphanumeric characters using the `filter` method. 

Then, it initializes two pointer variables `left` and `right` at the two ends of the filtered array. The `left` pointer starts from the first index, and the `right` pointer starts from the last index. 

In the while loop, it checks if the value at the `left` pointer is equal to the value at the `right` pointer. If they are not equal, the function immediately returns `false` since the string is *not a palindrome*. If they are equal, the `left` pointer increments by 1 and the `right` pointer decrements by 1. The loop continues until the `left` pointer is greater than or equal to the `right` pointer.

If the loop completes without finding any non-matching characters, the function returns `true`, indicating that the given string *is a palindrome*. 

## Complexity
The *time complexity* of the provided solution is $$O(n)$$, where $$n$$ is the length of the input string.

The *space complexity* of the solution is also $$O(n)$$. This is because the function creates a new array by filtering out non-alphanumeric characters from the input string.

## Code
```swift
class Solution {
    func isPalindrome(_ s: String) -> Bool {
        let s = Array(s.lowercased().filter { $0.isLetter || $0.isNumber })
        var left = 0
        var right = s.count - 1

        while left <= right {
            if s[left] != s[right] { return false }
            left += 1
            right -= 1
        }
        
        return true
    }
}
```


---


# Second solution using Reversed()

## Approach
Firstly, the function converts the input string to lowercase and filters out all non-alphanumeric characters using the `filter` method of a string in Swift.

Then, it creates a new string by reversing the filtered string using the `reversed()` method and passing the result to the `String()` initializer. The `reversed()` method returns a reversed collection of the elements in the original string, and the `String()` initializer creates a new string from the reversed collection.

Finally, the function compares the reversed string with the original filtered string using the `==` operator. If they are equal, the function returns `true` indicating that the given string is a palindrome. If they are not equal, the function returns `false`.

## Complexity
This solution has a time complexity of $$O(n)$$ and a space complexity of $$O(n)$$, where $$n$$ is the length of the input string.

## Code
```swift
class Solution {
    func isPalindrome(_ s: String) -> Bool {
        let s = s.lowercased().filter { $0.isLetter || $0.isNumber }
        return s == String(s.reversed())
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)
