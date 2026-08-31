# ✅ 4 Best Swift Solutions | Easy To Understand

**Author:** smthinthewayy
**Votes:** 60
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/3423036/](https://leetcode.com/problems/group-anagrams/solutions/3423036/)

---

# First solution using Dictionary

## Approach

Firstly, the functions creates an empty dictionary with the key as a `String` and the value as an array of `String`. Then, it iterates over each string in the given array of strings `strs`. 

For each string in `strs`, the function sorts the characters of the string using the `sorted()` method and creates a new string with the sorted characters. This sorted string is then used as the key to the dictionary. 

If the dictionary already has the sorted string as the key, the given string is appended to the array of strings that correspond to the given key. Otherwise, a new key-value pair is added to the dictionary with the sorted string as the key and the given string as the value of a new array.

Finally, the function returns an array of arrays of strings. Each array of strings represents a group of anagrams. It is done by using the `values` property of the dictionary to get an array of arrays.

## Complexity

This approach has a *time complexity* of $$O(n \\cdot m \\cdot \\log m)$$, where $$n$$ is the number of strings in `strs` and $$m$$ is the maximum length of a string in `strs`.

The *space complexity* of the given solution is $$O(n \\cdot m)$$, where $$n$$ is the number of strings in the input array `strs` and $$m$$ is the maximum length of a string in `strs`. 

## Code
```swift
class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var dict = [String: [String]]()

        for str in strs {
            let sortedStr = String(str.sorted())
            dict[sortedStr, default: []].append(str)
        }

        return Array(dict.values)
    }
}
```


---

# Second solution using Dictionary

## Approach

First, a dictionary is created with keys as arrays of integers (count of characters in the string) and values as arrays of strings (the anagrams). 

Then, for each string in the input array, an array of `counts` of the characters in the string is created. The counts array is initialized with zeros for each of the `26` alphabets. 

Next, each character in the string is iterated over, and the corresponding `index` in the counts array is incremented. 

After counting the characters in the string, the `counts` array is used as a key in the dictionary. The string is then appended to the corresponding value array for that key. 

Finally, the values of the dictionary are returned as an array of grouped anagrams.

## Complexity

This approach is efficient, as it only requires iterating over each string in the input array once, and the *time complexity* is $$O(n \\cdot k)$$, where $$n$$ is the number of strings in the input array and $$k$$ is the length of the longest string.

The *space complexity* of this approach is $$O(n \\cdot k)$$, where $$n$$ is the number of strings in the input array and $$k$$ is the length of the longest string.

## Code

```swift
class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var dict = [[Int]: [String]]()

        for str in strs {
            var counts = Array(repeating: 0, count: 26)
            for char in str {
                let index = Int(char.asciiValue! - 97)
                counts[index] += 1
            }
            dict[counts, default: []].append(str)
        }

        return Array(dict.values)
    }
}
```

---

# Third solution using Dictionary(grouping:)

## Approach

The approach to solving the problem involves using the built-in `Dictionary` function `grouping(_:by:)` and the `sorted()` method of strings to group the anagrams together.

The `grouping(_:by:)` function takes an array and a closure that returns a key for each element in the array. It groups the elements of the array by the returned key, and returns a dictionary with keys as the returned key and values as arrays of elements that have the same key.

In this case, the `strs` array is passed to the `grouping(_:by:)` function, and a closure is provided that sorts each string and converts it to a new string. The sorted string is used as the key for the dictionary.

The `sorted()` method on a string returns an array of characters sorted in ascending order. By converting the sorted array of characters back to a string, we obtain a canonical form of the input string, which is the same for all anagrams of that string.

Finally, the `values` property of the dictionary is accessed, which returns an array of arrays of anagrams. The `map` function is used to extract the arrays of anagrams and return them as a 2D array.

## Complexity

This approach has a *time complexity* of $$O(n \\cdot k \\cdot \\log k)$$, where $$n$$ is the number of strings in the input array and $$k$$ is the length of the longest string

The *space complexity* of the given solution is $$O(n \\cdot k)$$, as a dictionary is used to store the grouped anagrams.

## Code
```swift
class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        Dictionary(grouping: strs, by: { String($0.sorted()) }).values.map { $0 }
    }
}
```


---

# Fourth solution using \xABProduct of Primes\xBB

## Approach

To solve this problem, the approach used in the given Swift function is based on the idea of hashing. In this approach, each string is assigned a unique hash key based on the product of the prime numbers assigned to each character in the string. The prime numbers assigned to each character are chosen in such a way that the hash keys of two strings will be equal only if they are anagrams of each other. 

In the code, a dictionary is used to store the hash keys as keys and the corresponding anagrams as values. For each string in the input array, the hash key is calculated by multiplying the prime numbers assigned to each character in the string. If the hash key is already present in the dictionary, the current string is appended to the list of anagrams for that key. Otherwise, a new key-value pair is added to the dictionary with the hash key and the current string.

Finally, the function returns an array containing the values of the dictionary, which are the lists of anagrams grouped together. The order of the anagram groups in the output array can be arbitrary.

## Complexity

The *time complexity* of this solution is $$O(n \\cdot k)$$, where $$n$$ is the number of strings in the input array and $$k$$ is the maximum length of a string in the input array.

The space complexity of this solution is $$O(n \\cdot k)$$, where $$n$$ is the number of strings in the input array and $$k$$ is the maximum length of a string in the input array.

## Code
```swift
class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        let mod = 1_000_000_007
        var dict = [Int: [String]]()
        let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

        for s in strs {
            var key = 1
            for ch in s {
                key = key * primes[Int(ch.asciiValue! - Character("a").asciiValue!)] % mod
            }
            dict[key, default: []].append(s)
        }

        return Array(dict.values)
    }
}
```

# Upvote ^^

![upvote.png](./images/0.png)
