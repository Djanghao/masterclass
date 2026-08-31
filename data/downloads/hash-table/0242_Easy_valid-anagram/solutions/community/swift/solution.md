# ✅ 2 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 63
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/3418801/](https://leetcode.com/problems/valid-anagram/solutions/3418801/)

---

# The first solution using a Dictionary

## Approach
First, the function checks if the lengths of the two strings `s` and `t` are equal. If not, the function returns false as the two strings cannot be anagrams if they have different lengths.

Then, the function creates an empty dictionary to store the frequency of each character in `s`. It loops through every character in `s` and increments the frequency of the character in the dictionary by `1`.

Next, the function loops through every character in `t`. For each character, it checks if the character exists in the dictionary and has a frequency greater than `0`. If so, it decrements the frequency of the character in the dictionary. If not, the function returns `false` as the two strings cannot be anagrams.

If the function reaches the end of the `t` loop without returning `false`, it means that all characters in `t` are found in `s` and have the same frequency. Therefore, the function returns `true` as the two strings are anagrams.


## Complexity
This approach has a time complexity of $$O(n)$$, where $$n$$ is the length of the input strings.

The space complexity of the function is $$O(k)$$, where $$k$$ is the number of unique characters in the input strings.

It is an efficient way to solve the anagram problem as it only requires one pass through each string and uses a dictionary to keep track of character frequencies.

## Code
```
class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        guard s.count == t.count else { return false }

        var dict = [Character: Int]()

        for char in s {
            dict[char, default: 0] += 1
        }

        for char in t {
            if let count = dict[char], count > 0 {
                dict[char] = count - 1
            } else {
                return false
            }
        }

        return true
    }
}
```


---



# The second solution using String sorting

## Approach
The idea behind this approach is to sort both strings and compare them. If both sorted strings are equal, then the original strings are anagrams of each other. 

In the implementation, `s.sorted()` and `t.sorted()` returns an *array of characters* that are sorted. Then, we use `==` operator to compare the two sorted arrays of characters. 

If `s` and `t` are anagrams of each other, then `s.sorted()` and `t.sorted()` should have the same characters in the same order, which means the result of `s.sorted() == t.sorted()` should be `true`. 

If they are not anagrams, the result will be `false`.

## Complexity
This approach has a time complexity of $$O(n \\cdot \\log n)$$ due to the sorting of the strings, where $$n$$ is the length of the input strings. The space complexity is $$O(n)$$ because we need to create arrays of characters to store the sorted strings.

## Code
```
class Solution {
    func isAnagram(_ s: String, _ t: String) -> Bool {
        s.sorted() == t.sorted()
    }
}
```

# Upvote ^_^

![upvote.png](./images/0.png)

